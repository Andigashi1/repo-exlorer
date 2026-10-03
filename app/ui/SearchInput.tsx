import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form method="GET" className="relative w-96 mx-auto">
      <input
        name="q"
        type="text"
        placeholder="Search repositories..."
        className="border-2 border-accent py-2 px-6 w-96 rounded-full  placeholder:font-semibold placeholder:text-secondary"
      />
      <button
        type="submit"
        className="absolute -translate-y-1/2 top-1/2 right-1 bg-accent rounded-full p-1.5"
      >
        <Search color="white" />
      </button>
    </form>
  );
};

export default SearchInput;
