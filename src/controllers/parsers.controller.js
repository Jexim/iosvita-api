import * as ProductsService from "../services/products.service";
import * as DksService from "../services/dks.service";
import * as CategoriesService from "../services/categories.service";
import database from "../models";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function parseProductsFromDocs(req, res) {
  try {
    const parsedProducts = await ProductsService.parseFromDocs();

    return responseUtils.setSuccess(200, parsedProducts, "Product parsed").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}

export async function parseDksFromDocs(req, res) {
  try {
    const parsedDks = await DksService.parseFromDocs();

    return responseUtils.setSuccess(200, parsedDks, "DK's parsed").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}

export async function parseCategoriesFromDocs(req, res) {
  try {
    const parsedCategories = await CategoriesService.parseFromDocs();

    return responseUtils.setSuccess(200, parsedCategories, "Categories parsed").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}

export async function parseAllFromDocs(req, res) {
  try {
    await database.Product.destroy({ where: {} });

    // const products = database.Product.findAll();
    
    // console.log(products);
    // for(const product of products) {
    //   const purchases = product.getPurchases();
    //   console.log(purchases);
    // }

    await database.Category.destroy({ where: {} });
    await database.Dk.destroy({ where: {} });

    await CategoriesService.parseFromDocs();
    await DksService.parseFromDocs();

    const parsedProducts = await ProductsService.parseFromDocs();

    return responseUtils.setSuccess(200, parsedProducts, "All data parsed").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}
