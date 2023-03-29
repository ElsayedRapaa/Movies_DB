const API_KEY = process.env.API_KEY;

export default async function getSimilar(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed To Fetching Movies");
  }

  return res.json();
}
