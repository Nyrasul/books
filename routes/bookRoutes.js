const express = require("express");
const bookController = require("../conrollers/bookConroller");

const router = express.Router();

// Book routes
router.get("/books", bookController.getAllBooks);
router.post("/books", bookController.addBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;