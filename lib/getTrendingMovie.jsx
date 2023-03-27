const API_KEY = process.env.API_KEY;

export default async function getTrendingMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}
