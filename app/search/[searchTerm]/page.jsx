import Card from "@/app/components/Card";
import getSearchResult from "@/lib/getSearchResult";

export default async function SearchTerm({ params }) {
  const searchTerm = params.searchTerm;
  const searchResults = getSearchResult(searchTerm);
  const searchData = await searchResults;

  return (
    <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 flex flex-col space-y-3">
      <h2 className="font-medium">
        Results:{" "}
        <span className="font-bold text-xl sm:text-2xl text-amber-400">
          {searchTerm.replaceAll("%20", " ")}
        </span>
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
                overflow-x-auto gap-2 pb-4"
      >
        {searchData.results.map((movie) => (
          <>
            {movie?.media_type && movie.media_type === "tv" ? (
              <Card key={movie.id} series={movie} />
            ) : (
              <Card key={movie.id} movie={movie} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
