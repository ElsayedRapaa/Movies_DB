import getTrendingMovie from "@/lib/getTrendingMovie";
import Image from "next/image";
import Link from "next/link";

export default async function Cover() {
  const trendingMovies = getTrendingMovie();
  const trend = await trendingMovies;

  const randomNum = Math.floor(Math.random() * trend.results.length);

  return (
    <div className="w-screen relative h-[500px]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${trend.results[randomNum].backdrop_path}`}
        alt="Cover Movie"
        width={768}
        height={100}
        style={{
          minWidth: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundPosition: "top",
        }}
        priority={true}
        placeholder="blur"
        blurDataURL="/rolling.svg"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.1))",
        }}
      ></div>
      <div className="absolute top-[100px] left-4 sm:left-16 max-w-6xl sm:px-12 mx-4">
        <h3 className="text-slate-300 font-bold text-lg sm:text-2xl">
          {trend.results[randomNum].title}
        </h3>
        <p className="text-sm mt-4 mb-6 text-slate-300/80 max-w-xl">
          {trend.results[randomNum].overview}
        </p>
        <Link
          href={`/movie/${trend.results[randomNum].id}`}
          className="bg-white text-slate-900 rounded-md px-4 py-1"
        >
          Go To Page
        </Link>
      </div>
    </div>
  );
}
