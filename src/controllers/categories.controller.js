import * as CategoriesService from "../services/categories.service";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function categoriesList(req, res) {
  try {
    return responseUtils.setSuccess(200, await CategoriesService.list()).send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}