# E-commerce Product Catalog API

Backend API for product catalog management with authentication, built using Node.js, Express, MongoDB, and Mongoose.

## Features
- Register and login with JWT authentication
- Protected routes for product creation, update, and delete
- Full CRUD for products
- Validation with Mongoose and request middleware
- Logging and centralized error handling
- Filtering, sorting, and pagination for product listing

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and update values.
3. Start the server:
   ```bash
   npm run dev
   ```

## API Base
`/api`

## Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` protected

## Product Routes
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` protected
- `PATCH /api/products/:id` protected
- `DELETE /api/products/:id` protected

## Product Query Options
Use query params like:
- `?search=phone`
- `?category=electronics`
- `?minPrice=100&maxPrice=1000`
- `?sortBy=price&order=asc`
- `?page=1&limit=10`

## Postman Testing
Import requests into Postman and set an `Authorization` header as:
`Bearer <token>`
