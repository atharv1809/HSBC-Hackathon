# Financial Data Aggregator Dashboard

This project is a full-stack application that provides a real-time configurable dashboard for visualizing financial data through various charts. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed with React and Highcharts.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend](#backend)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Project Structure](#project-structure-1)
- [Usage](#usage)
- [License](#license)

## Features

- **Real-time Data Visualization:** Visualize various aspects of financial data such as transactions by category, fraud detection, and more.
- **API-driven Architecture:** Fetch data from a Node.js backend that connects to a MongoDB database.
- **Highcharts Integration:** Interactive and responsive charts using Highcharts in a React-based frontend.

## Prerequisites

- **Node.js**: >= 14.x
- **MongoDB**: >= 4.x (local or cloud instance)
- **NPM**: >= 6.x

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/financial-data-dashboard.git
cd financial-data-dashboard


backend/
│
├── src/
│   ├── controllers/           # API route handlers
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── services/              # Business logic and data aggregation
│   └── app.js                 # Express app setup
│
├── .env                       # Environment variables
├── package.json
└── server.js                  # Server entry point


frontend/
│
├── public/
│   └── index.html             # HTML entry point
│
├── src/
│   ├── components/            # React components
│   ├── App.jsx                # Main application component
│   └── index.jsx              # React DOM rendering
│
├── vite.config.js             # Vite configuration
├── package.json
└── README.md
```
