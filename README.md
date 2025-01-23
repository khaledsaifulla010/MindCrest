# MindCrest - A Simple Blog Viewer Application

MindCrest is a blog viewer application built using **Next.js**. This project demonstrates the implementation of routing, server and client components, dynamic routes, authentication using Kinde Auth, and data fetching. The application allows users to view blog posts and navigate through the site seamlessly.

## Features

### Home Page
- Displays a list of blog post titles fetched from a mock API.
- Each title links to a detailed page for that specific blog post.

### Blog Details Page
- Utilizes a dynamic route (`/blog/[id]`) to display details of a specific blog post.
- Fetches blog details based on the `id` parameter from the URL.

### Profile Page (Protected Route)
- Displays a static message: **"Welcome to your profile!"**.
- Protected with Kinde Auth. Users are redirected to the login page if they are not authenticated.

### Navigation
- A header with links to **Home** and **Profile** pages.
- Shows a **Login** button when the user is not authenticated.
- Displays a **Logout** button when the user is authenticated.

### Styling
- Designed with **Tailwind CSS** to ensure a clean, responsive, and visually appealing interface.

## Live Demo
- [MindCrest Live Application](https://mind-crest.vercel.app)

## GitHub Repository
- [MindCrest GitHub Repo](https://github.com/khaledsaifulla010/MindCrest)

## Technologies Used
- **Next.js**: Framework for building the application.
- **Kinde Auth**: For authentication and protecting routes.
- **Tailwind CSS**: For styling and responsiveness.
