import { Contributor } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ContributorsProps = {
  contributors: Contributor[];
};

const Contributors = ({ contributors }: ContributorsProps) => {
  return (
    <aside>
      <h2 className="mb-4 text-xl font-semibold">Contributors</h2>

      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        {contributors.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {contributors.map((contributor) => (
              <Link
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <Image
                  src={contributor.avatar_url}
                  alt={`${contributor.login} avatar`}
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <p className="truncate text-sm font-semibold transition-colors group-hover:text-accent">
                      {contributor.login}
                    </p>

                    <ExternalLink
                      size={12}
                      className="shrink-0 text-secondary opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>

                  <p className="text-xs text-secondary">
                    {contributor.contributions.toLocaleString()} contributions
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-4 text-center text-sm text-secondary">
            No contributors available.
          </p>
        )}
      </div>
    </aside>
  );
};

export default Contributors;