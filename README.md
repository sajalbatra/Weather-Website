
# Weather Search App

A simple React application that allows users to search for a location and retrieve weather information for that location.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Description

The Weather Search App is a React application that utilizes the OpenWeatherMap API to fetch weather data for a specified location. Users can enter the name of a city or place in the search bar, and the app will display the current weather temperature in both Fahrenheit and Celsius, along with the weather condition.

## Features

- Search for a location by name.
- Display current temperature in Fahrenheit and Celsius.
- Display the current weather condition.
- Responsive design for various screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-search-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-search-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).
2. Rename the `.env.example` file to `.env` and replace `YOUR_API_KEY` with your actual API key.

   ```
   REACT_APP_API_KEY=YOUR_API_KEY
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and visit `http://localhost:3000` to use the app.

## Technologies Used

- React
- Axios
- FontAwesome
- SCSS

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the features, feel free to open an issue or submit a pull request.

