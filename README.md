# API Documentation

This project is a simple API built with Express.js and SQLite. The API provides basic functionalities of a CRUD.

### Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/MateusFar1as/Express-CRUD-SQLite
cd Express-CRUD-SQLite
```

Install the dependencies and run the server:
```bash
npm install
node app.js
```

### Usage

Run the server with:
```bash
node app.js
```
The server will be running on http://localhost:5000.

### API Endpoints

##### Create student 
- URL: /students
- METHOD: POST
- Responses:
-- 200 OK: { message: "Sucess on creating student" }
-- 400 Bad Request: { error: "Error message" }

##### Get all students
- URL: /students
- METHOD: GET
- Responses:
-- 200 OK: { data }
-- 400 Bad Request: { error: "Error message" }

##### Get student by id
- URL: /students/id
- METHOD: GET
- Responses:
-- 200 OK: { data }
-- 400 Bad Request: { error: "Error message" }
-- 404 Not Found: { message: "id not found" }

##### Update student
- URL: /students/id
- METHOD: PUT
- Responses:
-- 200 OK: { message: "Success updating student" }
-- 400 Bad Request: { error: "Error message" }
-- 404 Not Found: { message: "id not found" }

##### Delete student
- URL: /students/id
- METHOD: DELETE
- Responses:
-- 200 OK: { message: "Success in deleting student" }
-- 400 Bad Request: { error: "Error message" }
-- 404 Not Found: { message: "id not found" }
