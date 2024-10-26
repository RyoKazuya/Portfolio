function loadContent(page) {
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            contentDiv.innerHTML = '<p>Error loading content. Please try again.</p>';
            console.error('Error loading the HTML:', error);
        });
}
window.onload = function() {
    loadContent('Profile.html');
};