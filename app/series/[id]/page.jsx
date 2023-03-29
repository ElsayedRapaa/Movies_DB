import Card from "@/app/components/Card";
import getSeries from "@/lib/getSeries";
import getSimilarSeries from "@/lib/getSimilarSeries";
import Image from "next/image";

export default async function SeriesId({ params }) {
  const seriesId = params.id;
  const seriesData = getSeries(seriesId);
  const seriesSimilar = getSimilarSeries(seriesId);

  const series = await seriesData;
  const similar = await seriesSimilar;

  return (
    <div className="movieID max-w-6xl mx-auto sm:px-12 px-4 py-3">
      <div
        className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-4 content-center sm:space-x-4
          border-b-4 dark:border-slate-700 pb-4"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
          alt="Poster series"
          width={200}
          height={300}
          placeholder="blur"
          blurDataURL="/rolling.svg"
          style={{ width: "200px", heihgt: "100%" }}
          className="rounded-lg"
        />
        <div className="space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl">{series.name}</h2>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Description: </span>
            {series.overview}
          </p>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Date Release: </span>
            {series.first_air_date}
          </p>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Vote: </span>
            {series.vote_count}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 flex flex-col space-y-3">
        <h2 className="font-bold text-xl sm:text-2xl">Similar Series</h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
        overflow-x-auto gap-2 pb-4"
        >
          {similar.results.map((series) => (
            <Card key={series.id} series={series} />
          ))}
        </div>
      </div>
    </div>
  );
}
