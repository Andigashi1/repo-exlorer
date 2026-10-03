import { sanitizeReadme } from "@/lib/sanitize";

type ReadmeProps = {
  content: string | null;
};

const Readme = ({ content }: ReadmeProps) => {
  if (!content) {
    return (
      <div className="min-h-64 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-400">
        No README available for this repository.
      </div>
    );
  }

  const sanitizedContent = sanitizeReadme(content);

  return (
    <div
      className="prose max-w-none min-h-64 rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-400"
      dangerouslySetInnerHTML={{
        __html: sanitizedContent,
      }}
    />
  );
};

export default Readme;
