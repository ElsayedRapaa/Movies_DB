const API_KEY = process.env.API_KEY;

export default async function getTopRatedSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed To Fetching Error");
  }

  return res.json();
}
