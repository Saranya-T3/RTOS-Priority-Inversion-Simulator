# Priority Inversion & Priority Inheritance Simulator

A full-stack web application that simulates priority inversion in real-time operating systems and demonstrates how priority inheritance helps mitigate the problem through interactive scheduling visualizations.

## Live Demo

**Deployed Application:** [Click here to view the live project](https://prisync.dprs.workers.dev/)

## Overview

Priority inversion occurs when a high-priority process is blocked waiting for a shared resource held by a low-priority process, while medium-priority processes prevent the low-priority process from executing.

This simulator compares scheduling behavior in two scenarios:

- **Without Priority Inheritance:** Demonstrates priority inversion and increased blocking time.
- **With Priority Inheritance:** Shows how a low-priority process temporarily inherits the priority of a blocked high-priority process to release the shared resource sooner.

## Features

- Interactive real-time scheduling simulation
- Comparison of priority inversion with and without priority inheritance
- C++ simulation engine
- Full-stack web application
- Interactive scheduling dashboard
- Gantt chart visualization
- Process execution timeline
- Simulation results and analysis
- Automated project startup using a Windows batch file

## Technology Stack

| Component | Technologies |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Visualization | Recharts, Lucide React |
| Backend | Node.js, Express.js |
| Simulation Engine | C++ |
| Development Environment | Windows |

## Project Structure

```text
RTOS-Priority-Inversion-Simulator/
│
├── main.cpp
├── start_project.bat
├── README.md
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── package.json
│   └── package-lock.json
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    │
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── animations.css
        ├── components/
        └── pages/
```

## Prerequisites

- Windows operating system
- Node.js and npm
- MinGW / g++ C++ compiler

## Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/Saranya-T3/RTOS-Priority-Inversion-Simulator.git
   ```

2. Open the downloaded project folder.

3. Double-click:

   ```text
   start_project.bat
   ```

The batch file is designed to:

- Compile `main.cpp` into `priority_sim.exe` if required.
- Install backend dependencies if missing.
- Install frontend dependencies if missing.
- Start the backend server on port `3001`.
- Start the frontend development server on port `5173`.
- Open the application in your browser.

Access the application at:

**http://localhost:5173**

> Note: The C++ compiler path configured in `start_project.bat` may need to be updated to match your system's g++ installation.

## Manual Setup

### 1. Compile the C++ Simulator

```bash
g++ -o priority_sim.exe main.cpp -std=c++11 -static
```

If using Dev-C++ MinGW:

```bash
"C:\Program Files (x86)\Dev-Cpp\MinGW64\bin\g++.exe" -o priority_sim.exe main.cpp -std=c++11 -static
```

### 2. Start the Backend

Open a terminal:

```bash
cd backend
npm install
node server.js
```

The backend runs on:

```text
http://localhost:3001
```

### 3. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

### 4. Open the Application

Navigate to:

http://localhost:5173

## API

### Run Simulation

**Endpoint:**

```http
POST /api/simulation/run
```

**Example Request:**

```json
{
  "processes": [
    {
      "id": "L",
      "priority": 1,
      "arrivalTime": 0,
      "burstTime": 5,
      "criticalSection": 4
    },
    {
      "id": "M",
      "priority": 2,
      "arrivalTime": 1,
      "burstTime": 5,
      "criticalSection": 0
    },
    {
      "id": "H",
      "priority": 3,
      "arrivalTime": 2,
      "burstTime": 2,
      "criticalSection": 1
    }
  ]
}
```

## Project Purpose

This project demonstrates key Operating Systems concepts, including:

- Priority-based CPU scheduling
- Process synchronization
- Shared resources
- Mutex locks
- Priority inversion
- Priority inheritance
- Real-time scheduling
