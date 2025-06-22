import React from "react";
import { useState } from "react";

const movies = [
  {
    title: "The Prince of Egypt",
    releaseDate: "02 Jun 2025",
    quality: "720p - 480p - 1080p",
    language: "Hindi Dual Audio",
    poster: "https://image.tmdb.org/t/p/w500/5VKbCxkz4vJFrGjfZ1vWgYVK5h7.jpg",
  },
  {
    title: "The Diplomat 2025",
    releaseDate: "09 May 2025",
    quality: "720p - 1080p",
    language: "Hindi Audio WEB-DL",
    poster: "https://image.tmdb.org/t/p/w500/qnNxSCFXt5rhb3s2Rwq10Jmo6My.jpg",
  },
  {
    title: "Bullet Train Explosion",
    releaseDate: "23 Apr 2025",
    quality: "720p - 480p - 1080p",
    language: "Hindi Dual Audio",
    poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
  },
];

export default function MoviesWala() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">🎞️ MoviesWala</h1>
        <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">Bollywood</span>
          <span className="hover:text-yellow-400 cursor-pointer">Hollywood</span>
          <span className="hover:text-yellow-400 cursor-pointer">Dual Audio</span>
          <span className="hover:text-yellow-400 cursor-pointer">Telugu</span>
          <span className="hover:text-yellow-400 cursor-pointer">Tamil</span>
          <span className="hover:text-yellow-400 cursor-pointer">TV Shows</span>
          <span className="hover:text-yellow-400 cursor-pointer">Genre</span>
          <span className="hover:text-yellow-400 cursor-pointer">By Year</span>
        </nav>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white rounded p-2 mt-4 md:mt-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {[
          "Action",
          "Adventure",
          "Comedy",
          "Crime",
          "Drama",
          "Fantasy",
          "History",
          "Horror",
          "Mystery",
          "Romance",
          "Thriller",
          "War",
          "Web Series",
        ].map((tag, i) => (
          <span
            key={i}
            className="bg-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-yellow-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Found {filteredMovies.length} results:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMovies.map((movie, idx) => (
            <div key={idx} className="bg-gray-800 rounded overflow-hidden shadow-md">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.releaseDate}</p>
                <p className="text-yellow-300 text-sm">{movie.language}</p>
                <p className="text-sm text-white">Quality: {movie.quality}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
