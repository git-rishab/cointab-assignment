# Project README

## Table of Contents
- [Introduction](#introduction)
- [Deployed](#deployed-app)
- [Video Walkthrough](#video-walkthrough-of-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Schema Design](#schema-design)
- [Tech Stack](#tech-stack)

## Introduction
This project is a company assignment given by the company called Cointab. The objective of the project is to create a web application that manages user data. It is built using a tech stack that includes React with Mantine UI for the frontend and Express, MySQL, and Node.js for the backend.

## Deployed App
- Visit: https://cointab-userdetails.netlify.app

## Video Walkthrough of the project
- Video: https://drive.google.com/file/d/1b1ptA11m3LZpv_9_WS7oI26PxI3Ns9as/view?usp=sharing
  
## Features
The project includes the following features:
- Debouncing: For handling user input with reduced API calls.
- Pagination: To navigate through the user data in a paginated manner.
- Multiple Filters: To filter user data based on various criteria.

## Getting Started
To run the project on your local machine, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/git-rishab/cointab-assignment.git
  
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
3. POST `/add`: To add random user data to the table.
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

## Tech Stack
- Frontend: React with Mantine UI
- Backend: Express, MySQL, Node.js

---

![Table](https://github.com/git-rishab/cointab-assignment/assets/114337213/f7ec5009-46ac-4a65-a582-e9e34e3b0726)
![Landing page](https://github.com/git-rishab/cointab-assignment/assets/114337213/3f147734-3dd3-4c63-a315-f9d22e276c15)
