// Function to fetch a random cat fact from the Cat Fact API
function fetchCatFact() {
    const factElement = document.getElementById('fact');

    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            factElement.textContent = data.fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
            factElement.textContent = 'Error fetching cat fact. Please check the console for details.';
        });
}

// Attach a click event listener to the fetch button
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchCatFact);
