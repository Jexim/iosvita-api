import * as ProductsService from "../services/products.service";
import * as DksService from "../services/dks.service";
import * as CategoriesService from "../services/categories.service";
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
