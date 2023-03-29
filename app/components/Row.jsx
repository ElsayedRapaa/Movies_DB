import getTrendingMovie from "@/lib/getTrendingMovie";
import RowItem from "./RowItem";
import getTopRatedMovie from "@/lib/getTopRatedMovie";
import getMostPopular from "@/lib/getMostPopular";
import getTopRatedSeries from "@/lib/getTopRatedSeries";
import getTrendingSeries from "@/lib/getTrendingSeries";
import getMostPupolarSeries from "@/lib/getMostPupolarSeries";

export default async function Row() {
  const trendingMovies = getTrendingMovie();
  const trend = await trendingMovies;
  const topRatedMovies = getTopRatedMovie();
  const topRated = await topRatedMovies;
  const mostPupolar = getMostPopular();
  const pupolar = await mostPupolar;
  const seriesTrending = getTrendingSeries();
  const seriesTrend = await seriesTrending;
  const seriesTopRated = getTopRatedSeries();
  const seriesRated = await seriesTopRated;
  const seriesMostPupolar = getMostPupolarSeries();
  const seriesPupolar = await seriesMostPupolar;

  return (
    <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 space-y-3">
      <RowItem movies={trend.results} title="Movies Trending" genres="movie" />
      <RowItem
        movies={topRated.results}
        title="Movies Top Rated"
        genres="movie"
      />
      <RowItem
        movies={pupolar.results}
        title="Movies Most Pupolar"
        genres="movie"
      />
      <RowItem
        series={seriesTrend.results}
        title="Series Trending"
        genres="series"
      />
      <RowItem
        series={seriesRated.results}
        title="Series Top Rated"
        genres="series"
      />
      <RowItem
        series={seriesPupolar.results}
        title="Series Most Pupolar"
        genres="series"
      />
    </div>
  );
}
