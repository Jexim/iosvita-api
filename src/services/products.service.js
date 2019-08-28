import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function create(newProduct) {
  try {
    return await database.Product.create(newProduct);
  } catch (error) {
    throw error;
  }
}

export async function list({ limit, offset, filters }) {
  try {
    return await database.Product.findAndCountAll({ offset, limit, where: filters });
  } catch (error) {
    throw error;
  }
}

export async function parseFromDocs() {
  return new Promise((resolve, reject) => {
    doc.getInfo(function(error, info) {
      if (error) return reject(error);
      const sheet = info.worksheets.find(item => item.title === "Products");

      sheet.getRows({}, async (error, rows) => {
        if (error) reject(error);

        await database.Product.destroy({ where: {} });
        const createdProducts = [];
        try {
          for (const productRow of rows) {
            const category = await database.Category.findOne({
              where: { title: productRow["category"] }
            });

            const newProduct = {
              title: productRow.title,
              price: +productRow.price,
              description: productRow.description,
              image: productRow.image,
              CategoryId: category ? category.id : undefined,
              DkId: productRow.dk
            };

            createdProducts.push(await database.Product.create(newProduct));
          }
          resolve(createdProducts);
        } catch (error) {
          reject(error);
        }
      });
    });
  });
}
