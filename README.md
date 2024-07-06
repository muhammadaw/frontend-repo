# Frontend-Repo App

This project is a Next.js application with Firebase authentication, Redux state management, and Material-UI components.

## Features

- User authentication (login/logout) using Firebase
- Redux for state management
- Material-UI for styled components
- Responsive design
- Server-side rendering with Next.js 13+ App Router

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- A Firebase project set up

## Installation

1. Clone the repository:
--
2. Navigate to the project directory:
--
3. Install the dependencies:
```bash
npm install
```
or if you're using yarn:

```bash
yarn install
```

4. Set up your Firebase configuration:
- Create a `.env.local` file in the root directory
- Add your Firebase configuration variables:
  ```
  NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
  ```

## Usage

To run the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

