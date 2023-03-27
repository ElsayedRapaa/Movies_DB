const API_KEY = process.env.API_KEY;

export default async function getTopRatedMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
}
