import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function list() {
  try {
    return await database.Purchase.findAndCountAll({ limit, offset });
  } catch (error) {
    throw error;
  }
}

export async function create(newPurchase) {
  try {
    return await database.Purchase.create(newPurchase);
  } catch (error) {
    throw error;
  }
}
