import { Repository, Contributor } from "@/lib/data";
import { ArrowLeft, ExternalLink, GitFork, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Readme from "../ui/Readme";
import Contributors from "../ui/Contributors";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

type RepoInfoProps = {
  repository: Repository;
  readme: string | null;
  contributors: Contributor[];
};

const RepoInfo = ({ repository, readme, contributors }: RepoInfoProps) => {
  return (
    <section className="mx-auto px-6 py-10">
      {/* Back */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
      >
        <ArrowLeft size={16} />
        Back to repositories
      </Link>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        {/* Repository header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="flex items-start gap-4">
            <Image
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login} avatar`}
              width={56}
              height={56}
              className="rounded-full"
            />

            <div>
              <p className="text-sm text-gray-500">{repository.owner.login}</p>

              <h1 className="text-2xl font-bold md:text-3xl">
                {repository.name}
              </h1>
            </div>
          </div>

          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View on GitHub
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl leading-7 text-gray-600">
          {repository.description ?? "No description available."}
        </p>

        {/* Repository metadata */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-blue-500" />
            {repository.language ?? "Unknown"}
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={16} />
            {formatNumber(repository.stargazers_count)}
            <span className="text-gray-400">stars</span>
          </span>

          <span className="flex items-center gap-1.5">
            <GitFork size={16} />
            {formatNumber(repository.forks_count)}
            <span className="text-gray-400">forks</span>
          </span>

          <span className="md:ml-auto">
            Updated{" "}
            {new Date(repository.updated_at).toLocaleDateString("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Future API sections */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_260px]">
        <section>
          <h2 className="mb-4 text-xl font-semibold">README</h2>
          <Readme content={readme} />
        </section>

        <aside>
          <Contributors contributors={contributors} />
        </aside>
      </div>
    </section>
  );
};

export default RepoInfo;
