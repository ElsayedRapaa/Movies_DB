const API_KEY = process.env.API_KEY;

export default async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed To Fetch Movie");
  }

  return res.json();
}
