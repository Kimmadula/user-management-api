# User Management API

This is a REST API for managing users, built with **Node.js**, **TypeScript**, **Express.js**, and **TypeORM** with **MySQL**. It supports **CRUD** operations:
- **Create** a new user  
- **Get** user data  
- **Delete** a user  

You can test the API using **Thunder Client** (VS Code extension).

## Installation & Setup

### 1. Clone the Repository
git clone https://github.com/Kimmadula/user-management-api.git

### 2. Install Dependencies
- **npm init -y**
- **npm install express typeorm reflect-metadata mysql2**
- **npm install -D typescript ts-node nodemon @types/node @types/express**

### 3. Configure the Database
    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "user_management_db",
      "synchronize": true,
      "logging": false,
      "entities": ["src/entities/**/*.ts"]
    }

### 4. Start the Server
npm run dev

## API Endpoints (Thunder Client)

1. **Open Thunder Client** (VS Code extension).
2. **Create a new request** and enter the API URL.
3. **Select the HTTP method** (GET, POST, DELETE).
4. **Add the request body (for POST requests).**
5. **Click Send** to test.

### **User Endpoints**

#### CREATE a User
- **Method:** `POST`
- **URL:** `http://localhost:3000/users`
- **Body (JSON):**
- **Example Request Body:**
  
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "1234",
    "age": "24"
  }
 
- **Example Response:**
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "1234",
    "age": "24"
  }
#### DELETE a User
**Method:** `DELETE`
- **URL:** `http://localhost:3000/users/:1`
- **Example Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
#### GET All Users
**Method:** `GET`
- **URL:** `http://localhost:3000/users`
- **Example Response for Getting All Users:**

  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "1234",
    "age": "24"
  },
  {
    "firstname": "Juan",
    "lastname": "Cruz",
    "email": "juancruz@example.com",
    "password": "4321",
    "age": "25",
    "id": 2
  }


#### GET Single User
**Method:** `GET`
- **URL:** `http://localhost:3000/users/:id`
- **Example Response:**

  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "1234",
    "age": "24"
    "id": 1
  }
