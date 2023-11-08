# Book Management RESTful API

This Node.js (Express) application provides a RESTful API for managing books. Users can perform CRUD operations to add, view,view all , update, and delete books.

## API Endpoints and Usage

### Create a New Book

- **Endpoint:** `POST /api/book`
- **Usage:** Add a new book to the database.
- **Request Body:** JSON object with `title`, `author`, and `summary` fields.
- **Example Request:**

  ```json
  {
    "title": "HTML",
    "author": "Mohammad Ejaz",
    "summary": "FrontEnd Developement Book."
  }
  ```

  ### Get all books

- **Endpoint:** `GET /api/book`
- **Usage:** Fetched all the books from database.

### get a specific book

- **Endpoint:** `GET /api/book/bookId`
- **Usage:** Fetched the specific book by the bookId.

### Delete a book

- **Endpoint:** `DELETE /api/book/bookId`
- **Usage:** Delete a specific book by the bookId.

### Update a Book

- **Endpoint:** `PUT /api/book/bookId`
- **Usage:** Update a specific book by bookId.
- **Request Body:** JSON object with `title`, `author`, and `summary` fields.
- **Example Request:**

  ```json
  {
    "title": "CSS",
    "author": "Mohammad Ejaz",
    "summary": "FrontEnd Developement Book."
  }
  ```

  ## Instruction to use

  ## Assumptions and Decisions for creating the API'S for book management.
