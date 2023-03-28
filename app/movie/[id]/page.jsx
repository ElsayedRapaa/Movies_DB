import getMovie from "@/lib/getMovie";
import Image from "next/image";

export default async function MovieId({ params }) {
  const movieId = params.id;
  const movieData = getMovie(movieId);

  const movie = await movieData;

  return (
    <div className="movieID max-w-6xl mx-auto sm:px-12 px-4 py-3">
      <div
        className="flex sm:flex-row flex-col items-center sm:space-y-0 space-y-4 content-center sm:space-x-4
          border-b-4 dark:border-slate-700 pb-4"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Poster Movie"
          width={200}
          height={300}
          placeholder="blur"
          blurDataURL="/rolling.svg"
          style={{ width: "200px", heihgt: "100%" }}
          className="rounded-lg"
        />
        <div className="space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl">{movie.title}</h2>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Description: </span>
            {movie.overview}
          </p>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Date Release: </span>
            {movie.release_date}
          </p>
          <p className="sm:text-lg text-md">
            <span className="font-bold">Vote: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
