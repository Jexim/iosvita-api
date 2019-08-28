import * as ProductsService from "../services/products.service";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function productsList(req, res) {
  try {
    
    const { limit, offset } = req.query;
    const filters = JSON.parse(req.query.filters);
    
    return responseUtils.setSuccess(200, await ProductsService.list({ limit, offset, filters })).send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}

export async function createProduct(req, res) {
  const newProduct = req.body;

  if (!newProduct.title) {
    return responseUtils.setError(400, "Title can not be empty").send(res);
  }

  if (!newProduct.price) {
    return responseUtils.setError(400, "Price can not be empty").send(res);
  }

  try {
    const createdProduct = await ProductsService.create(newProduct);

    return responseUtils.setSuccess(201, createdProduct, "Product created").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}
