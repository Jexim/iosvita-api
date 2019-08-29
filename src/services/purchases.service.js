import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function list({ limit, offset }) {
  try {
    return await database.Purchase.findAndCountAll({ limit, offset, include: [{ model: database.Product }] });
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

    // addPurchaseToTable(purchaseData);

    return readyPurchase;
  } catch (error) {
    throw error;
  }
}

// export function addPurchaseToTable(purchaseData) {
//   return new Promise( (resolve, reject) => {
//     doc.getInfo(async (error, info) => {
//       if (error) return reject(error);
//       const sheet = info.worksheets.find(item => item.title === "Purchases");
//       const user = await database.User.findByPk(purchaseData.UserId);

//       console.log(user);
//       doc.addWorksheet({title: "Ssss"},(error) => console.log(error))

//       for (const productRow of purchaseData.products) {
//         const product = await database.Product.findByPk(productRow.id);

//         sheet.addRow({
//           email: user.email,
//           products: product.title,
//           count: productRow.count
//         }, error => {
//           console.log(error);
//         });
//       }

//     });
//   });
// }
