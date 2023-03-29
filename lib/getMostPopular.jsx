const API_KEY = process.env.API_KEY;

export default async function getMostPopular() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed To Fetch Movies");
  }

  return res.json();
}
