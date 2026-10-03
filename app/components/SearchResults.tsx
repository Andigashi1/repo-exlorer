import { notFound } from "next/navigation";
import Pagination from "../ui/Pagination";
import Rep from "../ui/Rep";
import { Repository } from "@/lib/data";

type SearchResultsProps = {
  query: string;
  page: string;
};

type SearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
};

const SearchResults = async ({ query, page }: SearchResultsProps) => {
  const encodedQuery = encodeURIComponent(query);
  const parsedPage = Number(page);
  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const PER_PAGE = 10;

  const response = await fetch(
    `https://api.github.com/search/repositories?q=${encodedQuery}&page=${currentPage}&per_page=${PER_PAGE}`,
  );

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`,
    );
  }

  const data: SearchResponse = await response.json();
  const totalPages = Math.ceil(data.total_count / PER_PAGE);

  if(data.total_count > 0 && currentPage > totalPages) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-5xl m-auto">
      <h2 className="text-2xl font-semibold text-left">
        Search results for: &quot;{query}&quot;
      </h2>

      <div className="flex gap-4 flex-col">
        {data.items.map((rep) => (
          <Rep key={rep.id} data={rep} variant="search" />
        ))}
      </div>

      <Pagination
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default SearchResults;
