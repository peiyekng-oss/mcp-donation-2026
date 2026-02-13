# WeGive Donation Platform Blueprint

## Overview

This document outlines the current state of the WeGive donation platform and the plan for its future development.

## Current State

The application is a React-based donation platform called 'WeGive'. It is currently in a prototype stage with several architectural flaws that need to be addressed.

### Key Issues

*   **No Real Backend:** The application uses a 'simulated' backend inside the `src/server` directory. This is a major architectural flaw that tightly couples the frontend to a fake implementation.
*   **Hardcoded Mock Data:** The pages in `src/pages` use hardcoded mock data, which is inconsistent and makes the UI difficult to test and maintain.
*   **No Central State Management:** There is no central state management, leading to inconsistent state handling across the application.
*   **No Route-Based Code Splitting:** The main application component (`App.tsx`) statically imports all pages, which negatively impacts performance.
*   **No Tests:** The project has no automated tests, which makes it difficult to ensure code quality and prevent regressions.

## Development Plan

The following steps will be taken to address the issues identified above and build a robust and scalable application.

### 1. Build a Separate Backend

A separate backend application will be built to replace the simulated backend. This will provide a proper API for the frontend to interact with, enabling real data persistence, user authentication, and other essential features.

### 2. Refactor Frontend Services

The frontend services in `src/services` will be refactored to make API calls to the new backend instead of directly calling the simulated backend functions.

### 3. Implement State Management

A state management library (e.g., React Query, Redux) will be introduced to handle data fetching, caching, and synchronization between the frontend and the backend. This will provide a consistent and efficient way to manage application state.

### 4. Remove Mock Data

All hardcoded mock data will be removed from the page components and replaced with data fetched from the backend via the state management layer.

### 5. Implement Route-Based Code Splitting

The application's routing in `App.tsx` will be updated to use `React.lazy` to lazy-load pages. This will improve the application's initial load time by only loading the code that is needed for the current view.

### 6. Add Tests

A testing framework (e.g., Jest, React Testing Library) will be set up, and tests will be written for the application's components and services to ensure code quality and prevent regressions.
