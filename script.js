// script.js

document.getElementById('rental-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting and page reloading

    // Get the selected values from the form
    const landType = document.getElementById('land-type').value;
    const rentDuration = document.getElementById('rent-duration').value;
    
    // Validate the rent duration
    if (rentDuration <= 0 || isNaN(rentDuration)) {
        displayResult("Please enter a valid duration!", true);
        return;
    }

    // Define pricing per month for different land types
    const prices = {
        'agricultural': 50,   // $50 per month
        'commercial': 150,    // $150 per month
        'residential': 100    // $100 per month
    };

    // Calculate the total cost
    const pricePerMonth = prices[landType];
    const totalCost = pricePerMonth * rentDuration;

    // Display the result
    const landTypeName = landType.charAt(0).toUpperCase() + landType.slice(1);  // Capitalize the first letter
    displayResult(`You have rented a ${landTypeName} land for ${rentDuration} month(s). Total Cost: $${totalCost}`, false);
});

function displayResult(message, isError) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.classList.toggle('error', isError);  // Add error styling if there's an error
}
