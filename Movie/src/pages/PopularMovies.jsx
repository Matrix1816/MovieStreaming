import React from "react";
const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
    },
    {
      id: 2,
      title: "The Dark Knight",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
      id: 4,
      title: "Fight Club",
      image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
      id: 5,
      title: "The Matrix",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEaU11E-HzihVGRiDoU3E-o3fDnZc2GdJdw&s",
    },
    {
      id: 6,
      title: "Pulp Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQancsvSnQ7yveGKwa--NH7mNYovif4bF-qYQ&s",
    },
    {
      id: 7,
      title: "The Shawshank Redemption",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: 8,
      title: "Forrest Gump",
      image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      id: 9,
      title: "Gladiator",
      image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      id: 10,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      id: 11,
      title: "Avengers: Endgame",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      id: 12,
      title: "The Lion King",
      image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    },
    {
      id: 13,
      title: "Jurassic Park",
      image: "https://m.media-amazon.com/images/I/A1nnSXofNaL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 14,
      title: "Titanic",
      image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    },
    {
      id: 15,
      title: "The Godfather",
      image: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    },
    {
      id: 16,
      title: "The Silence of the Lambs",
      image: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    },
    {
      id: 17,
      title: "Saving Private Ryan",
      image: "https://i0.wp.com/bob-the-movie-man.com/wp-content/uploads/2024/01/Saving-Private-Ryan-poster.jpg?resize=640%2C430&ssl=1",
    },
    {
      id: 18,
      title: "Spider-Man: No Way Home",
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    {
      id: 19,
      title: "Doctor Strange",
      image: "https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 20,
      title: "Black Panther",
      image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    },
    {
      id: 21,
      title: "Avatar",
      image: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 22,
      title: "Dune: Part One",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    },
    {
      id: 23,
      title: "Oppenheimer",
      image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },
    {
      id: 24,
      title: "John Wick: Chapter 4",
      image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },
  ]; 

export default function PopularMovies() {
  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent p-2">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
