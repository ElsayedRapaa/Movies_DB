const API_KEY = process.env.API_KEY;

export default async function getTrendingSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed To Fetching Error");
  }

  return res.json();
}
