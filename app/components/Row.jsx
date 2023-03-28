import getTrendingMovie from "@/lib/getTrendingMovie";
import RowItem from "./RowItem";
import getTopRatedMovie from "@/lib/getTopRatedMovie";

export default async function Row() {
  const trendingMovies = getTrendingMovie();
  const trend = await trendingMovies;
  const topRatedMovies = getTopRatedMovie();
  const topRated = await topRatedMovies;

  return (
    <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 space-y-3">
      <RowItem movies={trend.results} title="Trending" />
      <RowItem movies={topRated.results} title="Top Rated" />
    </div>
  );
}
