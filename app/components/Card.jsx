import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ movie }) {
  return (
    <Link
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
      <p className="line-clamp-3 font-light text-sm pt-2">{movie.overview}</p>
      <p className="truncate font-bold pt-2">{movie.title}</p>
    </Link>
  );
}
