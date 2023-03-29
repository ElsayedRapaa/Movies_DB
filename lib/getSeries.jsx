const API_KEY = process.env.API_KEY;

export default async function getSeries(seriesId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed To Fetch Movie");
  }

  return res.json();
}
