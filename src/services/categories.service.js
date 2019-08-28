import GoogleSpreadsheet from "google-spreadsheet";
import database from "../models";
import appConfig from "../config/app";

const doc = new GoogleSpreadsheet(appConfig[process.env.NODE_ENV || "development"].googleSheetId);

export async function list() {
  try {
    return await database.Category.findAll();
  } catch (error) {
    throw error;
  }
}

export async function parseFromDocs() {
  return new Promise((resolve, reject) => {
    doc.getInfo(function(error, info) {
      if (error) return reject(error);
      const sheet = info.worksheets.find(item => item.title === "Categories");

      sheet.getRows({}, async (error, rows) => {
        if (error) reject(error);

        const categoriesTree = unflatten(
          rows.map(item => ({
            title: item["title"],
            parent: item["parent"],
          }))
        );
        
        try {
          await database.Category.destroy({ where: {} });

          for (const topCategory of categoriesTree) {
            await createCategory(topCategory);
          }
          resolve(categoriesTree);
        } catch (error) {
          reject(error);
        }
      });
    });
  });
}

export async function createCategory(categoryParseObject, parentCategory) {
  try {
    const newCategory = await database.Category.create({ title: categoryParseObject.title, ParentId: parentCategory ? parentCategory.id : undefined });

    if (categoryParseObject.children.length) {
      for (let childCategory of categoryParseObject.children) {
        await createCategory(childCategory, newCategory);
      }
    }
  } catch (error) {
    throw error;
  }
}

function unflatten(arr) {
  let tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  for (let i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.title] = arrElem;
    mappedArr[arrElem.title]["children"] = [];
  }

  for (let title in mappedArr) {
    if (mappedArr.hasOwnProperty(title)) {
      mappedElem = mappedArr[title];
      if (mappedElem.parent) {
        mappedArr[mappedElem["parent"]]["children"].push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}
