import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RowItem({ movies, title }) {
  return (
    <>
      <h2 className="font-bold text-lg sm:text-xl">{title}</h2>
      <div className="grid grid-flow-col overflow-x-auto space-x-4">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="border border-slate-600 cursor-pointer rounded-lg p-2 hover:shadow-md transition-shadow hover:shadow-slate-300 dark:hover:shadow-slate-700 w-64"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="Movie Poster"
              width={500}
              height={300}
              style={{ maxWidth: "100%", height: "auto" }}
              placeholder="blur"
              blurDataURL="/rolling.svg"
              className="rounded-t-lg"
            />
            <p className="truncate font-bold pt-2">{movie.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
