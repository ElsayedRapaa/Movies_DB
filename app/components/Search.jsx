"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRef?.current.blur();

    if (!search) return;

    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form
      className="dark:bg-slate-500 bg-amber-200 py-2"
      onSubmit={handleSubmit}
    >
      <div className="max-w-6xl mx-auto sm:px-12 px-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search Keyword..."
          className="flex-1 bg-transparent border-none outline-none dark:text-white dark:placeholder:text-white text-slate-500 placeholder:text-slate-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchRef}
        />
        <button
          className="outline-none border-none bg-transparent dark:hover:text-amber-400 hover:text-amber-600 disabled:hover:text-slate-200"
          disabled={!search}
        >
          Search
        </button>
      </div>
    </form>
  );
}
