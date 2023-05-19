const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories.controller");
const productController = require("../controllers/products.controller");

router.post("/category", categoryController.create);
router.get("/categories", categoryController.findAll);
router.get("/category/:id", categoryController.findOne);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

router.post("/product", productController.create);
router.get("/products", productController.findAll);
router.get("/product/:id", productController.findOne);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);

module.exports = router;