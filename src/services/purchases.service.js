import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function list({ limit, offset }) {
  try {
    return await database.Purchase.findAndCountAll({ limit, offset });
  } catch (error) {
    throw error;
  }
}

export async function create(purchaseData) {
  try {
    const readyPurchase = await database.Purchase.create(purchaseData);

    for (const productRow of purchaseData.products) {
      readyPurchase.addProduct(productRow.id, { through: { count: productRow.count } });
    }

    return readyPurchase;
  } catch (error) {
    throw error;
  }
}
