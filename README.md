# TrendingMovie

TrendingMovie is a React-based application that allows users to view and explore trending movies. The app fetches data from an API and displays information about trending movies, including movie titles, descriptions, posters, and more.

🚀 **Live Demo**  
[Click here to visit TrendingMovie](https://rowanhamdy.github.io/TrendingMovie/)

📂 **Repositories**  
- [GitHub Repository (Frontend)](https://github.com/Rowanhamdy/TrendingMovies)

## 📑 Features

- **Trending movies:** View a list of currently trending movies
- **Responsive design:** Enjoy a seamless experience on both mobile and desktop devices
- **Movie poster images:** Display high-quality images of movie posters

## 🛠️ Technologies Used

- **Frontend:** React.js, React Hooks, Axios, CSS
- **API Integration:** Fetches movie data from [The Movie Database API](https://www.themoviedb.org/documentation/api)
- **State Management:** React Context API
- **Styling:** Custom CSS for a clean and responsive design

## 📌 API Endpoints

This project uses the following API endpoints from The Movie Database API (TMDb):

- **Trending Movies**  
  `GET /3/trending/movie/day?api_key=YOUR_API_KEY`  
  Fetches a list of trending movies for the current day.

- **Movie Details**  
  `GET /3/movie/{movie_id}?api_key=YOUR_API_KEY`  
  Fetches detailed information about a single movie, including its title, overview, release date, etc.

### Replace `YOUR_API_KEY` with your actual API key from [The Movie Database](https://www.themoviedb.org/).



### Clone the repository:
```bash
git clone https://github.com/Rowanhamdy/TrendingMovies.git
