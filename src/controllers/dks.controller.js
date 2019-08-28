import * as DksService from "../services/dks.service";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function dksList(req, res) {
  try {
    return responseUtils.setSuccess(200, await DksService.list()).send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}