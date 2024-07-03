# Task Manager Application

## Project Purpose
This project is a sophisticated task management application built with Node.js, Express.js, and MongoDB. It aims to help manage and keep track of the tasks effectively, 

## Features
- Create, Read, Update, Delete (CRUD) operations for tasks.
- Task fields: title, description, dueDate, priority, status, createdAt.
- Pagination and sorting for retrieving all the tasks.
- Error handling and winston logging.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- body-parser
- cors
- winston

## Setup and Run Locally1. Initialize a new Node.js project:
1. Initialize a new Node.js project:
    ```sh
    npm init -y
    ```
2. Install dependencies:
    ```sh
    npm install express mongoose body-parser cors winston nodemon
    ```
3. Connect the MongoDB URL and PORT directly in the code:
   ```sh
    MongoDB URL="mongodb://127.0.0.1:27017/TaskManager";
    PORT=4000;
   ```

4. Run the server:
    ```sh
    npm start
    ```

## API Endpoints
- `GET /api/tasks`: Retrieve all tasks with pagination and sorting options.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update a task by ID.
- `DELETE /api/tasks/:id`: Delete a task by ID.

## Examples
### Using Postman
1. **Create a new task (POST `/api/tasks`)**

   - Method: `POST`
   - URL: `http://localhost:4000/api/tasks`
   - Headers: 
     ```
     Content-Type: application/json
     ```
   
  - Body (raw JSON):
     ```json
     {
       "title": "new task1",
       "description": "Complete the the new task1",
       "dueDate": "2024-07-10T00:00:00.000Z",
       "priority": "high",
       "status": "todo"
     }
     ```
   
   - Expected Response:
     ```json
     {
       "_id": "60f8c2b53b1e3b1a349eeed8",
       "title": "new task1",
       "description": "Complete the the new task1",
       "dueDate": "2024-07-10T00:00:00.000Z",
       "priority": "high",
       "status": "todo",
       "createdAt": "2024-07-03T12:34:45.678Z",
       "__v": 0
     }
     ```

3. **Retrieve all tasks (GET `/api/tasks`)**

   - Method: `GET`
   - URL: `http://localhost:4000/api/tasks`
   - Query Parameters:
     - `limit`: Number of tasks to return (e.g., `10`).
     - `skip`: Number of tasks to skip (e.g., `5`).
     - `sort`: Field to sort by (e.g., `createdAt`), with optional `asc` or `desc` suffix for ascending or descending order (e.g., `createdAt:desc`).

   - Example:
     ```http
     GET http://localhost:4000/api/tasks?limit=10&skip=5&sort=createdAt:desc
     ```
   - Expected Response (example):
     ```json
     [
       {
         "_id": "60f8c2b53b1e3b1a349eeed8",
         "title": "new task1",
         "description": "Complete the the new task1 ",
         "dueDate": "2024-07-10T00:00:00.000Z",
         "priority": "high",
         "status": "todo",
         "createdAt": "2024-07-03T12:34:45.678Z",
         "__v": 0
       },
       {
         "_id": "60f8c2e63b1e3b1a349eeed9",
         "title": "new task2",
         "priority": "medium",
         "status": "in_progress",
         "createdAt": "2024-07-03T12:36:06.789Z",
         "__v": 0
       }
     ]
     ```

## Additional Features
- Error logging with Winston for better debugging and tracking.


