import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const routerProductsList = Router();

const productsListTablePath = join(
  process.cwd(),
  "database",
  "productsData.json",
);

routerProductsList.get("/", (req, res) => {
  const products = JSON.parse(
    readFileSync(productsListTablePath, {
      encoding: "utf-8",
    }),
  );

  return res.json(products);
});

routerProductsList.patch("/:id", (req, res) => {
  const products = JSON.parse(
    readFileSync(productsListTablePath, {
      encoding: "utf-8",
    }),
  );

  const productID = parseInt(req.params.id);
  const updates = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productID,
  );

  const updatedProduct = { ...products[productIndex], ...updates };
  products[productIndex] = updatedProduct;

  writeFileSync(productsListTablePath, JSON.stringify(products, null, 2), {
    encoding: "utf-8",
  });

  res.json(updatedProduct);
});

export { routerProductsList };
