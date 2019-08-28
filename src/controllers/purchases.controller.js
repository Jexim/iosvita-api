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

export async function createPurchase(req, res) {
  let newPurchase = req.body;

  console.log(!newPurchase.products || !newPurchase.products.length);

  if (!newPurchase.products || !newPurchase.products.length) {
    return responseUtils.setError(400, "Purchase can not have products").send(res);
  }

  try {
    const createdPurchase = await PurchasesService.create(newPurchase);

    return responseUtils.setSuccess(201, createdPurchase, "Purchase created").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}
