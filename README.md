# Personal Finance Tracker – Angular Client

This is the front-end client for the Personal Finance Tracker application, built with Angular. It connects to the backend API (ASP.NET Core) and allows users to manage their personal finances through an intuitive interface.

## 🌟 Features

- 📄 **View & Manage Transactions**
- 🧾 **Account Overview & Balances**
- 🌐 **API Integration** with ASP.NET Core backend
- 🎨 **Responsive UI** using Angular components and SCSS
- 🧱 **Modular Design** with reusable components and services

## 🧰 Tech Stack

- **Framework:** Angular 15+
- **Styling:** SCSS
- **API Communication:** HttpClient
- **Project Structure:** Components for `accounts` and `transactions`

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SphiweNdou/finance-tracker-client.git
cd finance-tracker-client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
ng serve
```

Then navigate to `http://localhost:4200` in your browser.

## 🧩 Backend & Database Setup

This project requires the .NET Core API backend which you can find [here](https://github.com/SphiweNdou/personal-finance-tracker).  
Make sure to:

- Run the backend API
- Ensure the database (e.g., SQL Server or SQLite) is seeded and ready
- Update API base URLs in Angular services (`src/app/services/`) if needed

> Database is managed through Entity Framework Core in the backend. This frontend consumes data via REST endpoints.

## 🖼️ User Interface Overview

- `/accounts` – Page to view account balances and details
- `/transactions` – Page to record income and expense transactions

Each page uses Angular components that communicate with backend services to fetch and persist data.

## 👨‍💻 Author

**Sphiwe Ndou**  
Frontend Developer | Full-Stack .NET & Angular Enthusiast  
GitHub: [@SphiweNdou](https://github.com/SphiweNdou)  
LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/ndivhuho-ndou-39246515a)

---

This project is open for contributions, suggestions, and improvements!
