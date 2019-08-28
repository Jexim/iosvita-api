import express from "express";
import bodyParser from "body-parser";
import database from "./models";
import usersRoutes from "./routes/users.routes";
import productsRoutes from "./routes/products.routes";
import categoriesRoutes from "./routes/categories.routes";
import parsersRoutes from "./routes/parsers.routes";
import dksRoutes from "./routes/dks.routes";
import purchasesRoutes from "./routes/purchases.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/dks", dksRoutes);
app.use("/parsers", parsersRoutes);
app.use("/purchases", purchasesRoutes);

app.get("*", (req, res) => res.status(200).send({ message: "Welcome to this API." }));

console.log(database.sequelize.config)
database.sequelize
  .sync()
  .then(() => app.listen(port, () => console.log(`Server is running on PORT ${port}`)))
  .catch(error => {
    throw error;
  });

export default app;
