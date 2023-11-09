import { catchAsyncHandler } from "../middleware/catchAsyncHandler.js";
import ErrorHandler from "../utils/apiError.js";
import Book from "../models/book.model.js";

// 1. create a new Book - POST /books

const createBook = catchAsyncHandler(async (req, res, next) => {
  const { title, author, summary } = req.body;
  if (!title || !author || !summary)
    return next(new ErrorHandler(401, "Fields missing ! "));
  const bookInstance = new Book({ title, author, summary });
  const book = await bookInstance.save();
  res.status(201).json({
    success: true,
    message: "Book created successfully..",
    book,
  });
});

// 2. get a specified book by userId - GET /:book/:bookId

const getBook = catchAsyncHandler(async (req, res, next) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);
  if (!book) return next(new ErrorHandler(404, "Book not found"));
  res.status(200).json({
    success: true,
    message: "fetch a book successfully..",
    book,
  });
});

// 3. getAll books - GET /books

const getAllBooks = catchAsyncHandler(async (req, res, next) => {
  const books = await Book.find();
  if (!books.length) return next(new ErrorHandler(404, "No books found."));
  res.status(200).json({
    success: true,
    message: "fetch all books successfully..",
    books,
  });
});

// 4. Update a book - PUT /:book/:bookId

const updateBook = catchAsyncHandler(async (req, res, next) => {
  const { bookId } = req.params;
  const book = await Book.findByIdAndUpdate(bookId, req.body, {
    new: true,
  });
  if (!book) return next(new ErrorHandler(404, "Book not found"));
  res.status(200).json({
    success: true,
    message: "Book updated successfully..",
    book,
  });
});

// 5. Delete a book - DELETE /:book/:bookId

const deleteBook = catchAsyncHandler(async (req, res, next) => {
  const { bookId } = req.params;
  const book = await Book.findByIdAndDelete(bookId);
  if (!book) return next(new ErrorHandler(404, "Book not found"));
  res.status(200).json({
    success: true,
    message: "Book deleted successfully..",
    book,
  });
});

export { createBook, getAllBooks, getBook, deleteBook, updateBook };
