import getMostPupolarSeries from "@/lib/getMostPupolarSeries";
import Card from "../components/Card";

export default async function page() {
  const mostPupolarSeries = getMostPupolarSeries();
  const series = await mostPupolarSeries;

  return (
    <div className="max-w-6xl mx-auto sm:px-12 px-4 py-3 flex flex-col space-y-3">
      <h2 className="font-bold text-xl sm:text-2xl">Most Pupolar Series</h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8
            overflow-x-auto gap-2 pb-4"
      >
        {series.results.map((movie) => (
          <Card key={movie.id} series={movie} />
        ))}
      </div>
    </div>
  );
}
