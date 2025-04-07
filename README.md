# USDC Near Me 🌍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Find businesses that accept USDC payments near you. Built with Next.js, Node.js, and Prisma.

## Features

- Interactive map of USDC-accepting locations
- Crowdsourced business submissions
- Filter by category/region
- TypeScript-first architecture

## Quick Start

```bash
# Clone repo
git clone https://github.com/your-username/usdc-near-me.git

# Setup backend
cd server && npm install
cp .env.example .env # Update with your DB credentials
npx prisma migrate dev
npm run dev

# Setup frontend
npm install
npm run dev

# Tech Stack
Frontend: Next.js + Tailwind CSS
Backend: Node.js/Express + PostgreSQL
Maps: MapBox API
Circle UDSC and Coinbase API
```
