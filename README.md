# Joke Generator

Welcome to the Joke Generator! This project is designed to provide you with a random joke on demand. Below is comprehensive documentation about the features, technologies used, how to use the application, API information, and browser support.

## Features
- **Random Joke Generation**: Get a different joke each time you press the button.
- **Categories**: Select jokes from different categories to suit your taste.
- **User-Friendly Interface**: Simple and easy-to-use graphical interface.

## Technologies
- **JavaScript**: The primary programming language used for the application logic.
- **HTML/CSS**: For structuring and styling the user interface.
- **RESTful API**: Utilizes a joke API to fetch random jokes.

## How to Use
1. Clone the repository: `git clone https://github.com/olgathomas235-netizen/joke-generator.git`
2. Navigate to the project directory: `cd joke-generator`
3. Open `index.html` in your browser to start generating jokes!

## API Information
The Joke Generator uses the Joke API. You can access the API for different types of jokes. Here’s a sample fetch request:
```javascript
fetch('https://api.jokeapi.dev/joke/Any')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Browser Support
The Joke Generator is supported in modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

### Note
Ensure your browser is updated to the latest version for the best experience.