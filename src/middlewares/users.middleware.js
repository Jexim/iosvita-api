import jwt from "jsonwebtoken";
import ResponseUtils from "../utils/response.utils";
import appConfig from "../../config/app";

const responseUtils = new ResponseUtils();

export async function validateUser(req, res, next) {
  const seecret = appConfig[process.env.NODE_ENV || "development"].seecret;

  jwt.verify(req.headers["x-access-token"], seecret, function(err, decoded) {
    if (err) {
      return responseUtils.setError(400, err.message).send(res);
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
}
