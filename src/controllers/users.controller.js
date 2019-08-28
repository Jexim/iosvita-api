import validator from "validator";
import * as UsersService from "../services/users.service";
import ResponseUtils from "../utils/response.utils";

const responseUtils = new ResponseUtils();

export async function signUp(req, res) {
  const newUser = req.body;

  if (!newUser.email || !newUser.password) {
    return responseUtils.setError(400, "Email or password can not be empty").send(res);
  }

  if (!validator.isEmail(newUser.email)) {
    return responseUtils.setError(400, "Email is not valid").send(res);
  }

  try {
    const createdUser = await UsersService.create(newUser);

    delete createdUser.dataValues.password;

    return responseUtils.setSuccess(201, createdUser, "User created").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}

export async function signIn(req, res) {
  if (!req.body.email || !req.body.password) {
    return responseUtils.setError(400, "Email or password can not be empty").send(res);
  }

  try {
    const token = await UsersService.authentication({
      email: req.body.email,
      password: req.body.password
    });

    return responseUtils.setSuccess(200, { token }, "User auth success").send(res);
  } catch (error) {
    return responseUtils.setError(400, error.message).send(res);
  }
}
