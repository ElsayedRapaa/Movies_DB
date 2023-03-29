import getMostPopular from "@/lib/getMostPopular";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MoviesDB | Most Pupolar",
};

export default async function MostPupolar() {
  const mostPupolar = getMostPopular();
  const movies = await mostPupolar;

  return (
    <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 flex flex-col space-y-3">
      <h2 className="font-bold text-xl sm:text-2xl">Most Pupolar Movies</h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
        overflow-x-auto gap-2 pb-4"
      >
        {movies.results.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="p-2 border dark:border-slate-700 rounded-lg hover:shadow-md drop-shadow-md dark:hover:shadow-slate-800"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movie Poster"
              width={200}
              height={300}
              quality={100}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              placeholder="blur"
              blurDataURL="/rolling.svg"
              className="rounded-t-md"
            />
            <p className="line-clamp-3 font-light text-sm pt-2">
              {movie.overview}
            </p>
            <p className="truncate font-bold pt-2">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
