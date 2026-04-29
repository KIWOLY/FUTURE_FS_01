# Innocent Kiwoly Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS. It highlights experience, projects, and a contact form that posts to a CRM API.

## Features

- Hero, About, Projects, Experience, and Contact sections
- SEO metadata and structured data for sharing
- Responsive layout and smooth animations

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Lucide icons
- React Helmet

## Getting Started

1. Install dependencies:
   
	```bash
	npm install
	```

2. Create a local environment file:

	```bash
	cp .env.example .env
	```

	If you do not have `.env.example`, create `.env` and set the variable below.

3. Start the dev server:

	```bash
	npm run dev
	```

## Environment Variables

The contact form posts to your CRM API. Set this variable before you build or run the app:

```dotenv
VITE_CRM_API_URL=http://localhost:8000
```

For production, use your live CRM URL. In Vite, `VITE_` variables are embedded at build time.

## Build and Preview

```bash
npm run build
npm run preview
```

## Docker

Build and run the image locally:

```bash
docker build -t kiwoly-portfolio .
docker run -p 8080:80 kiwoly-portfolio
```

If you want the contact form to point at a production CRM, build the image after setting `VITE_CRM_API_URL` in your environment or add a build arg in the Dockerfile.

## Lint

```bash
npm run lint
```
