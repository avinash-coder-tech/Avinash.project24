// Simulate the number of visitors by using localStorage
window.onload = function () {
    // Check if the visitor count exists in localStorage
    let visitorCount = localStorage.getItem('visitorCount');

    // If no count is found, initialize it
    if (!visitorCount) {
        visitorCount = 0;
    }

    // Increment the visitor count
    visitorCount++;

    // Store the new count in localStorage
    localStorage.setItem('visitorCount', visitorCount);

    // Display the visitor count on the page
    document.getElementById('visitor-count').textContent = visitorCount;
};
