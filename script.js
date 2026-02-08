// script.js

// Function to fetch a joke from the Official Joke API
async function fetchJoke() {
    const jokeContainer = document.getElementById('joke');
    const loader = document.getElementById('loader');

    // Show loading animation
    loader.style.display = 'block';
    jokeContainer.style.display = 'none';

    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const joke = await response.json();
        loader.style.display = 'none';
        jokeContainer.innerHTML = `<p>${joke.setup}</p><p>${joke.punchline}</p>`;
        jokeContainer.style.display = 'block';
    } catch (error) {
        loader.style.display = 'none';
        jokeContainer.innerHTML = `<p>Error fetching joke: ${error.message}</p>`;
        jokeContainer.style.display = 'block';
    }
}

// Trigger the joke fetch on page load or button click
window.onload = fetchJoke;