# Book Management API

A RESTful API for managing books and fetching weather data using OpenWeather API. Built with Node.js, Express, and MongoDB.

## Features
- CRUD operations for books (Create, Read, Update, Delete).
- Fetch weather data for a specific city.
- Swagger API documentation.

## Requirenments
- Node.js
- npm (Node Package Manager)
- MongoDB
- OpenWeather API key (sign up at [https://openweathermap.org/api](https://openweathermap.org/api))

## Test
Use Insomnia or Postman.
Example:
![image](https://github.com/user-attachments/assets/5058189c-25c3-4c58-858b-51dece766ab3)

## API Endpoints
GET     /api/books       Fetch all books
POST    /api/books       Add a new book
PUT     /api/books/:id   Update a book by ID
DELETE  /api/books/:id   Delete a book by ID
GET     /api/weather/{city}      Fetch weather for a city

## Installation
```bash git clone https://github.com/Nyrasul/books.git
npm install
Set up .env
node app.js
(server run on http://localhost:3000)
