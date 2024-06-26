# Profiler App 2.5

## Overview

Profiler App 2.5 is a dynamic application that allows users to create, update, and manage their profile data through a REST API. The app generates a visually appealing portfolio-style profile using the provided data. The admin panel is accessible via Postman and features JWT authentication alongside Spring Boot Security authentication. The application utilizes React.js for the frontend, Spring Boot for the backend REST API, and MongoDB for the database.

**Live link**: https://www.profilerapp.in

## Features

- **User Profiles**: Create and update user profiles via REST API.
- **Portfolio Generation**: Generate a portfolio-style profile based on user data.
- **Admin Panel**: Accessible via Postman with JWT and Spring Boot Security authentication.
- **Technology Stack**:
  - Frontend: React.js
  - Backend: Spring Boot (REST API)
  - Database: MongoDB

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [User Endpoints](#user-endpoints)
  - [Admin Endpoints](#admin-endpoints)
- [Authentication](#authentication)
  - [JWT Authentication](#jwt-authentication)
  - [Spring Boot Security](#spring-boot-security)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/profiler-app2.5.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd profiler-app2.5
    ```

3. **Backend setup**:
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      mvn install
      ```
    - Run the backend server:
      ```bash
      mvn spring-boot:run
      ```

4. **Frontend setup**:
    - Navigate to the frontend directory:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Run the frontend server:
      ```bash
      npm start
      ```

5. **MongoDB setup**:
    - Ensure MongoDB is installed and running on your machine.
    - Configure the MongoDB connection in the backend application properties.

## Usage

### User Endpoints

- **Create Profile**
    ```http
    GET http://89.116.33.28:8181/user/api/v1/fetchUserInfo/<USERNAME>
    ```
- **Get Profiles**
    - Get user profiles through REST endpoints.

### Admin Endpoints

- **Access Admin Panel**
    ```http
    POST http://89.116.33.28:8181/admin/api/v1/saveUserInfo
    ```
    - Requires JWT token in the request header.

- **Update/save Profiles**
    - Update/save user profiles through REST endpoints.

## Authentication

### JWT Authentication

- **Generate Token**:
    - Endpoint:
      ```http
      POST http://89.116.33.28:8181/jwt/auth
      ```
    - Request Body:
      ```json
      {
        "username": "uname",
        "password": "pwd"
      }
      ```
    - Response:
      ```json
      {
        "token": "your.jwt.token.here"
      }
      ```

- **Use Token**:
    - Include the token in the Authorization header for authenticated requests:
      ```http
      Authorization: Bearer your.jwt.token.here
      ```

### Spring Boot Security

- Spring Boot Security is configured to secure the endpoints and manage user roles and permissions.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Spring Boot (REST API)
- **Database**: MongoDB

## Contributing

We welcome contributions to the Profiler App 2.5 project. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your branch.
5. Create a pull request.
