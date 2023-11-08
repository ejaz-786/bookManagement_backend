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

1. clone the repository

```bash
 git clone https://github.com/ejaz-786/bookManagement_backend.git
 cd bookManagement
```

2. Install the required dependencies:

```bash
  npm install
```

3. Configure the MongoDB

- Set up a MongoDB database either locally or use a cloud solution like MongoDB Atlas.copy the connection string and paste it to .env file.
- Update the mongoURI in .env file with your MongoDB connection URI.

4. Start the application

```bash
  npm run dev
```

## Assumptions and Decisions for creating the API'S for book management.

- while creating the API's for book mangement i took care of well folder structured.
- I handled all the possible edge case like error handling.
- Handled asyc await error and make a calss ErrorHandler for throwing errors.
- used middleware
- used cors so that i can use in frontend without having trouble.

## Deployment process - Render.com

- go to render.com => dashboard => if not logged in then logged in via github
- select your git repository => click on new button select web services and deploy
