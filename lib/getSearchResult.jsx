const API_KEY = process.env.API_KEY;

export default async function getSearchResult(searchTerm) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error(`This Keyword ${searchTerm} Not Found In Movies DB`);
  }

  return res.json();
}
