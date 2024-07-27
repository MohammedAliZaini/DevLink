# DevLink - Where Tinder Meets GitHub

**Overview**

DevLink is a web application that blends the swiping functionality of Tinder with the collaborative features of GitHub. This repository consists of two main components:

- **Frontend** - A React-based application
- **Backend** - An API server

These components communicate via HTTP requests and must be run separately.

## Project Structure

This repository contains:

1. **Frontend**: A React application that serves as the user interface.
2. **Backend**: An API server that handles data management and business logic.

## Quickstart Guide

### 1. Install Node.js

1. Install Node Version Manager (NVM):

    ```bash
    brew install nvm
    ```

    Follow the instructions to update your `~/.bash_profile`. Open a new terminal and install the latest version of Node.js:

    ```bash
    nvm install 20
    ```

### 2. Set Up the Project

1. Fork this repository and rename the fork to `Devlink-<team-name>`.

2. Clone the fork to your local machine.

3. Install dependencies for both the frontend and backend applications:

    ```bash
    cd frontend
    npm install
    cd ../api
    npm install
    ```

4. Install an ESLint plugin for your code editor, such as ESLint for VSCode.

### 3. Install MongoDB

1. Install MongoDB using Homebrew:

    ```bash
    brew tap mongodb/brew
    brew install mongodb-community@6.0
    ```

    If prompted to add MongoDB to your PATH, follow the instructions and restart your terminal.

2. Start MongoDB:

    ```bash
    brew services start mongodb-community@6.0
    ```

### 4. Configure Environment Variables

Create `.env` files in both the frontend and backend directories.

**Frontend:**

Create `frontend/.env` with the following content:

    ```env
    VITE_BACKEND_URL="http://localhost:3000"
    ```

**Backend:**

Create `api/.env` with the following content:

    ```env
    MONGODB_URL="mongodb://0.0.0.0/devlink"
    NODE_ENV="development"
    JWT_SECRET="secret"
    ```

Refer to the documentation for detailed explanations of these environment variables.

### 5. Run the Application

1. Start the backend server (in the `api` directory) in development mode:

    ```bash
    cd api
    npm run dev
    ```

2. Start the frontend application (in the `frontend` directory) in a new terminal session:

    ```bash
    cd frontend
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5174/signup` to create a new user.

4. After signing up, you can log in by visiting `http://localhost:5174/login`.

   Note: Post-login, you may not see much initially, but you can use Postman to create posts, which will then appear in the browser upon refreshing the page.

## Documentation

- **[Trello Board](https://trello.com/b/qqTJ03Fm/devlink)**: Project management and task tracking.
- **[Miro Board](https://miro.com/app/board/uXjVK9333mM=/)**: Project design and wireframes.

---

**Note:** DevLink is built using the same foundational skeleton as Acebook, leveraging similar technologies to deliver a distinctive blend of functionalities.
