# 🛒 E-Commerce Full-Stack Platform

> **Status:** Active Development 🚧
>
> A modern, scalable, and fully dockerized e-commerce application built with **Spring Boot** and **React**.

## 📖 Overview

This project is a Full-Stack E-Commerce solution designed to demonstrate a robust **RESTful architecture** and seamless **Frontend-Backend integration**. It features a decoupled architecture where the React frontend communicates with the Spring Boot backend via APIs, ensuring data persistence with a containerized MySQL database.

The goal of this project is to implement industry-standard practices such as **Layered Architecture**, **DTO Patterns**, and **Containerization**.

---

## 🚀 Tech Stack

### Backend
* **Framework:** Java 17, Spring Boot 3.x
* **Database:** MySQL 8.0 (Dockerized)
* **ORM:** Spring Data JPA / Hibernate
* **Build Tool:** Maven
* **Architecture:** Controller-Service-Repository Pattern

### Frontend
* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS & CSS Modules
* **State & Routing:** React Hooks, React Router DOM (SPA)
* **HTTP Client:** Axios (Custom Instance with Interceptors)

### DevOps & Tools
* **Containerization:** Docker & Docker Compose
* **Version Control:** Git & GitHub
* **API Testing:** Postman

---

## ✨ Key Features

* **📦 Dynamic Product Catalog:** Fetches product data dynamically from the MySQL database via REST API.
* **🔍 Smart Filtering & Sorting:** Real-time client-side search, category filtering, and price sorting logic.
* **📨 Contact Management:** Asynchronous contact form that persists user inquiries directly to the database.
* **🎨 Modern UI with Tailwind:** Clean and modern user interface built using **Tailwind CSS** and **CSS Modules**.
* **🐳 Docker Integration:** One-command database setup using **Docker Compose** (No local MySQL installation required).
* **🏗️ Layered Architecture:** Organized backend structure following the Controller-Service-Repository pattern for better maintainability.

---

## 🛠️ Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites
* **Node.js & npm** (v18+)
* **JDK 17+**
* **Docker Desktop** (for the database)

### 1. Clone the Repository
git clone https://github.com/YakupEmreCelebi/ecommerce-react-spring
cd ecommerce-react-spring

### 2. Start the Database (Docker) 🐳
You don't need to install MySQL manually. Just run:

docker-compose up -d

*This will spin up a MySQL container on port 3306 with the configuration defined in docker-compose.yml.*

### 3. Run the Backend
Navigate to the backend folder and run the Spring Boot application.

cd backend
./mvnw spring-boot:run

*The server will start at http://localhost:8080*

### 4. Run the Frontend
Open a new terminal and navigate to the frontend folder.

cd frontend
npm install
npm run dev

*The application will be accessible at http://localhost:5173 (or the port Vite assigns).*

---

## 🔮 Roadmap & Future Enhancements

While the core engine (MVP) is complete, I am actively working on the following modules to reach production readiness:

- [ ] **Mobile Responsiveness:** Adapting the user interface to work smoothly on mobile and tablet screens.
- [ ] **Centralized Error Handling:** Creating a unified system to manage and display clear error messages for all API requests.
- [ ] **User Authentication:** Implementing a secure login and registration system for users.
- [ ] **State Management:** Upgrading the shopping cart logic to a more scalable structure using Redux.
- [ ] **Cloud Deployment:** Deploying the application to a cloud provider like AWS to make it accessible online.
- [ ] **Payment Integration:** Adding a secure checkout process using the Stripe payment gateway.
