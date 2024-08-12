const apiKey = 'd41d1272'; 

document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('movieTitle').value;
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('poster').src = data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/300x450?text=No+Image';
                document.getElementById('title').textContent = data.Title;
                document.getElementById('year').textContent = data.Year;
                document.getElementById('genre').textContent = data.Genre;
                document.getElementById('director').textContent = data.Director;
                document.getElementById('plot').textContent = data.Plot;
                document.getElementById('rating').textContent = data.imdbRating;
                document.getElementById('movieDetails').style.display = 'block';
            } else {
                alert('Movie not found!');
                document.getElementById('movieDetails').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            alert('Failed to fetch movie data');
        });
});
