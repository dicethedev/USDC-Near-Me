# USDC Near Me - Server API 🌐

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../CONTRIBUTING.md)

Backend API powering the USDC Near Me platform. Built with Node.js, Express, and Prisma.

## Features

- RESTful API for business locations
- PostgreSQL database with Prisma ORM
- TypeScript-first architecture
- CORS-enabled endpoints

## API Documentation

### Base URL

`https://api.usdcnear.xyz` (or `http://localhost:3001` for development)

### Endpoints

| Method | Endpoint          | Description                          |
| ------ | ----------------- | ------------------------------------ |
| GET    | `/api/businesses` | Fetch all USDC-accepting businesses  |
| POST   | `/api/businesses` | Submit new business (admin-approved) |

**Example Request:**

```bash
curl -X GET http://localhost:3001/api/businesses
```
