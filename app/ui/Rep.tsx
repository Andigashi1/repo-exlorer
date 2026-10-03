import { Repository } from "@/lib/data";
import { GitFork, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type RepProps = {
  data: Repository;
  variant?: "featured" | "search";
};

const Rep = ({ data, variant = "featured" }: RepProps) => {
  function getDaysAgo(dateString: string) {
    const updatedDate = new Date(dateString);
    const today = new Date();

    const differenceInMs = today.getTime() - updatedDate.getTime();
    const differenceInDays = Math.floor(
      differenceInMs / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) return "Updated today";
    if (differenceInDays === 1) return "Updated 1 day ago";

    return `Updated ${differenceInDays} days ago`;
  }

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);

  const isSearch = variant === "search";

  return (
    <Link
      href={`/repo/${data.owner.login}/${data.name}`}
      className={`
        group bg-surface w-full rounded-xl border border-gray-200
        transition-all duration-200
        hover:border-gray-300 hover:shadow-md
        ${
          isSearch
            ? "px-6 py-5"
            : "max-w-152 space-y-5 px-5 py-5 hover:-translate-y-0.5"
        }
      `}
    >
      {isSearch ? (
        /* Search result */
        <div className="flex items-start gap-4">
          <Image
            src={data.owner.avatar_url}
            alt={`${data.owner.login} avatar`}
            width={44}
            height={44}
            className="rounded-full"
          />

          <div className="min-w-0 flex-1 text-left">
            <h3 className="text-lg font-semibold">
              <span className="font-normal text-secondary">
                {data.owner.login} /
              </span>{" "}
              <span className="transition-colors group-hover:text-accent">
                {data.name}
              </span>
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-secondary line-clamp-2">
              {data.description ?? "No description available."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                {data.language ?? "Unknown"}
              </span>

              <span className="flex items-center gap-1">
                <Star size={14} />
                {formatNumber(data.stargazers_count)}
              </span>

              <span className="flex items-center gap-1">
                <GitFork size={14} />
                {formatNumber(data.forks_count)}
              </span>

              <span>{getDaysAgo(data.updated_at)}</span>
            </div>
          </div>
        </div>
      ) : (
        /* Featured card */
        <>
          <span className="flex items-center gap-2">
            <Image
              src={data.owner.avatar_url}
              alt={`${data.owner.login} avatar`}
              width={40}
              height={40}
              className="rounded-full"
            />

            <h3 className="text-lg font-semibold">
              <span className="font-normal text-secondary">
                {data.owner.login} /
              </span>{" "}
              <span className="transition-colors group-hover:text-accent">
                {data.name}
              </span>
            </h3>
          </span>

          <p className="min-h-12 text-sm leading-6 text-secondary line-clamp-2">
            {data.description ?? "No description available."}
          </p>

          <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-secondary">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                {data.language ?? "Unknown"}
              </span>

              <span className="flex items-center gap-1">
                <Star size={14} />
                {formatNumber(data.stargazers_count)}
              </span>

              <span className="flex items-center gap-1">
                <GitFork size={14} />
                {formatNumber(data.forks_count)}
              </span>
            </div>

            <span>{getDaysAgo(data.updated_at)}</span>
          </div>
        </>
      )}
    </Link>
  );
};

export default Rep;