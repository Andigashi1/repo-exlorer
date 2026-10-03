import Link from "next/link";

type PageProps = {
  query: string;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ query, currentPage, totalPages }: PageProps) => {
  const buttonStyle =
    "rounded-lg border border-gray-200 bg-surface px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent hover:shadow-sm";

  const disabledStyle =
    "cursor-not-allowed rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-300";

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {currentPage > 1 ? (
        <Link
          className={buttonStyle}
          href={{
            pathname: "/",
            query: {
              q: query,
              page: currentPage - 1,
            },
          }}
        >
          ← Previous
        </Link>
      ) : (
        <span className={disabledStyle}>← Previous</span>
      )}

      <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm">
        <span className="font-semibold text-primary">{currentPage}</span>
        <span className="mx-1.5 text-secondary">of</span>
        <span className="text-secondary">{totalPages}</span>
      </div>

      {currentPage < totalPages ? (
        <Link
          className={buttonStyle}
          href={{
            pathname: "/",
            query: {
              q: query,
              page: currentPage + 1,
            },
          }}
        >
          Next →
        </Link>
      ) : (
        <span className={disabledStyle}>Next →</span>
      )}
    </div>
  );
};

export default Pagination;