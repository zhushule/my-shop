# My Shop - Full Stack Application

## Overview

**My Shop** is a full-stack e-commerce web application where users can browse products, view product details, and add products to the shopping cart. The frontend is built with React and Material-UI, and the backend is built with ASP.NET Core. The application is integrated with Azure SQL for database management and Azure Blob Storage for storing product images.

## Features

- Browse products on the homepage.
- View detailed information about each product.
- Add products to the shopping cart.
- View and manage items in the cart (adjust quantity, remove items).
- Persist product data using Azure SQL Database.
- Store and display product images using Azure Blob Storage.

## Tech Stack

### Frontend

- **React** (JavaScript framework for building user interfaces)
- **Material-UI** (Component library for responsive design)
- **Axios** (For API requests)

### Backend

- **ASP.NET Core (C#)** (Framework for building web APIs)
- **Entity Framework Core** (For database interactions with Azure SQL)

### Cloud Services

- **Azure SQL Database** (Cloud database for storing product data)
- **Azure Blob Storage** (For storing and serving product images)
- **Azure App Services** (For hosting the backend)
- **Azure Static Web Apps** (For hosting the frontend)

---

## Getting Started

### Prerequisites

- **Node.js** (v16.18.0)
- **.NET Core SDK** (v6.0)
- **Azure Subscription** (For cloud resources)
- **Azure Data Studio** (Optional, for managing your SQL database)

### Project Structure

```text
/my-shop
  /my-shop-frontend
    /src
      /components   # React components
      /pages        # Pages for routing
      /services     # API service logic
    /public         # Static files
    .env            # Environment variables (API URLs)
    package.json    # Frontend dependencies
  /MyShopApi
    /Controllers    # API controllers
    /Models         # Entity models (e.g., Product)
    /Data           # EF Core DB Context
    Program.cs      # Backend entry point
```
