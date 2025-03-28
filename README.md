# Weather App 🌦️

A weather forecast application that displays weather information for the user's current location and predefined cities.

## 🌐 Live Demo

Check out the live demo here: [Weather App Live Demo](https://weather-app-nine-mu-15.vercel.app/)


## Features 📋

- Displays weather information for the user's current location.
- Shows weather data for predefined cities like Joinville, San Francisco, and Urubici.
- Handles geolocation errors with notifications.
- Responsive and visually appealing interface.

---

## Technologies Used 🚀

- **React**: Library for building the user interface.
- **Vite**: Fast build tool for development.
- **TypeScript**: Superset of JavaScript for static typing.
- **React Query**: For asynchronous state management.
- **React Toastify**: For displaying notifications.
- **TailwindCSS**: For styling the interface.
- **Testing Library**: For testing React components.
- **Vitest**: Testing framework.

---

## Prerequisites 📦

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## How to Run the Project ⚙️

### 1. Clone the repository

```bash
git clone https://github.com/Obeavis/weather-app.git
```
### 2. Navigate to the project directory
```bash
cd weather-app
```
### 3. Install dependencies
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

### 4. Start the development server
Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

The project will be available at http://localhost:3000.

### 5. Running Tests 🧪

To run the tests, use the following command:

Using npm:
```bash
npm run test
```
Or using yarn:
```bash
yarn test
```

### 5. Folder Structure 📁 
```bash
src/
├── api/              # API configuration
├── components/       # Reusable components
├── hooks/            # Custom hooks
├── libs/             # Utility functions and static data
├── pages/            # Main application pages
├── services/         # The data services
```
### Environment Variables
Make sure to configure the environment variables in a .env file at the root of the project. Example:

```bash
VITE_OPEN_WEATHER_KEY=your_api_key_here
VITE_OPEN_WEATHER_GEOCODING_API_URL=https://api.openweathermap.org/geo/1.0
VITE_OPEN_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
VITE_OPEN_WEATHER_ICON_URL=https://openweathermap.org/img/wn/
```
