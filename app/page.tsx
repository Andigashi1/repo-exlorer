import FeaturedReps from "./components/FeaturedReps";
import SearchResults from "./components/SearchResults";
import SearchInput from "./ui/SearchInput";

type PageProps = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { q, page } = await searchParams;
  return (
    <div className="pt-12 text-center space-y-16">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-bold text-accent font-sans">
          Explore repositories
        </h2>
        <p className="text-3xl font-semibold text-secondary">
          Find your next open-source project
        </p>
      </div>

      <SearchInput />

      <div>{q ? <SearchResults query={q} page={page ?? "1"} /> : <FeaturedReps />}</div>
    </div>
  );
}
