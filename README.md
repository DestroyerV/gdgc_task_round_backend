# GDGC Task Round Backend 🛒

This is a simple shopping API built with Express.js. It allows you to create, read, update, and delete listings of items.

## Getting Started 🚀

### Prerequisites 📋

- Node.js
- npm (Node Package Manager)

### Installation 💻

1. Clone the repository:

  ```sh
  git clone https://github.com/DestroyerV/gdgc_task_round_backend.git
  ```

2. Navigate to the project directory:

  ```sh
  cd gdgc_task_round_backend
  ```

3. Install the dependencies:

  ```sh
  npm install
  ```

### Running the Server ▶️

To start the server, run:

```sh
npm run dev
```

The server will be running on `http://localhost:3000`.

## API Endpoints 📡

### Get All Listed Items 📋

- **URL:** `/listing`
- **Method:** `GET`
- **Response:**

  ```json
  {
    "data": [
    {
      "id": "1",
      "title": "Laptop",
      "description": "A high-performance laptop",
      "seller": "John",
      "rating": 4.5
    },
    ...
    ]
  }
  ```

### Get One Listed Item by ID 🔍

- **URL:** `/listing/:id`
- **Method:** `GET`
- **Response:**

  ```json
  {
    "data": {
    "id": "1",
    "title": "Laptop",
    "description": "A high-performance laptop",
    "seller": "John",
    "rating": 4.5
    }
  }
  ```

### Create a New Listing 🆕

- **URL:** `/listing`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "title": "Laptop",
    "description": "A high-performance laptop",
    "seller": "John",
    "rating": 4.5
  }
  ```

- **Response:**

  ```json
  {
    "data": {
    "id": "3",
    "title": "Laptop",
    "description": "A high-performance laptop",
    "seller": "John",
    "rating": 4.5
    }
  }
  ```

### Update a Listed Item ✏️

- **URL:** `/listing/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
  {
    "title": "Updated Laptop",
    "description": "An updated high-performance laptop",
    "seller": "John",
    "rating": 4.8
  }
  ```

- **Response:**

  ```json
  {
    "data": {
    "id": "1",
    "title": "Updated Laptop",
    "description": "An updated high-performance laptop",
    "seller": "John",
    "rating": 4.8
    }
  }
  ```

### Delete a Listed Item 🗑️

- **URL:** `/listing/:id`
- **Method:** `DELETE`
- **Response:**

  ```sh
  Item deleted successfully
  ```

## License 📄

This project is licensed under the [MIT](LICENSE) License.

## Author ✍️

Vaibhav
