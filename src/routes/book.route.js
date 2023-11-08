import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.route("/book").post(createBook);
router.route("/book/:bookId").get(getBook);
router.route("/book").get(getAllBooks);
router.route("/book/:bookId").put(updateBook);
router.route("/book/:bookId").delete(deleteBook);

export default router;
