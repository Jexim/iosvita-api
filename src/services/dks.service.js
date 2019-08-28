import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function list() {
  try {
    return await database.Dk.findAll();
  } catch (error) {
    throw error;
  }
}

export async function parseFromDocs() {
  return new Promise((resolve, reject) => {
    doc.getInfo(function(error, info) {
      if (error) return reject(error);
      const sheet = info.worksheets.find(item => item.title === "DK");

      sheet.getRows({}, async (error, rows) => {
        if (error) reject(error);

        const createdDks = [];
        
        try {
          await database.Dk.destroy({ where: {} });

          for (const dkRow of rows) {
            const newDk = {
              id: dkRow.number,
              title: dkRow.title
            };
            console.log(newDk);

            await database.Dk.create(newDk);
            createdDks.push(newDk);
          }
          resolve(createdDks);
        } catch (error) {
          reject(error);
        }
      });
    });
  });
}