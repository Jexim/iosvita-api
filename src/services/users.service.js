import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import database from "../models";
import appConfig from "../config/app";

const saltRounds = 10;
const seecret = appConfig[process.env.NODE_ENV || "development"].seecret;

export async function create(newUser) {
  try {
    newUser.password = bcrypt.hashSync(newUser.password, saltRounds);

    return await database.User.create(newUser);
  } catch (error) {
    throw error;
  }
}

export async function authentication({ email, password }) {
  try {
    const user = await database.User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.dataValues.password)) {
      const token = jwt.sign({ id: user.dataValues.id }, seecret, { expiresIn: "1d" });

      return token;
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    throw error;
  }
}
