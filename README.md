# Project README

## Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Schema Design](#schema-design)
- [Features](#Features)

## Introduction
This project is a company assignment given by the company called Cointab. The objective of the project is to create a web application that manages user data. It is built using a tech stack that includes React with Mantine UI for the frontend and Express, MySQL, and Node.js for the backend.
- Visit: https://cointab-userdetails.netlify.app

## Tech Stack
- Frontend: React with Mantine UI
- Backend: Express, MySQL, Node.js

## Getting Started
To run the project on your local machine, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/git-rishab/car-rental-application.git
  
2. Install Dependencies:

   ```bash
   npm i 
  
3. Run backend server:

   ```bash
   npm run server

4. Start frontend:

   ```bash
   npm run start

## API Endpoints
The project exposes the following API endpoints:

1. GET `/get`: To get user data based on the page number.
2. GET `/get/filter`: To get user data based on certain filters.
3. POST `/add`: To add random userdata to the table.
4. DELETE `/delete`: To delete all rows from the user table.

## Schema Design
The database schema design includes a table named "users" with the following columns:

- `name`: String
- `gender`: String
- `email`: String
- `age`: Integer
- `phone`: String
- `username`: String
- `address`: String

## Features
The project includes the following features:
- Debouncing: For handling user input with reduced API calls.
- Pagination: To navigate through the user data in a paginated manner.
- Multiple Filters: To filter user data based on various criteria.

For more details on using the application and its functionalities, refer to the code and comments within the project files.
