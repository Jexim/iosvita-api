import * as PurchasesService from "../services/purchases.service";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function purchasesList(req, res) {
  try {
    const { limit, offset } = req.body;
    return responseUtils.setSuccess(201, await PurchasesService.list({ limit, offset })).send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}