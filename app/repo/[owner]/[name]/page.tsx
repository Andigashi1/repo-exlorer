import { notFound } from "next/navigation";
import RepoInfo from "../../../components/RepoInfo";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    owner: string;
    name: string;
  }>;
};

type RepoParams = {
  owner: string;
  name: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { owner, name } = await params;

  return {
    title: `${name} | GitHub Repository Explorer`,
    description: `Explore the ${owner}/${name} repository.`,
  };
}

const RepoDetails = async ({ params }: PageProps) => {
  const { owner, name } = await params;

  const getRepository = async ({ owner, name }: RepoParams) => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${name}`,
      {
        next: {
          revalidate: 300,
        },
      },
    );

    if (response.status === 404) {
      notFound();
    }

    if (!response.ok) {
      throw new Error(
        `GitHub API request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  };

  const getReadme = async ({ owner, name }: RepoParams) => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${name}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.html+json",
        },
        next: {
          revalidate: 300,
        },
      },
    );

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(
        `README request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.text();
  };

  const getContributors = async ({ owner, name }: RepoParams) => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${name}/contributors?per_page=5`,
      {
        next: {
          revalidate: 300,
        },
      },
    );

    if (response.status === 404) {
      notFound();
    }

    if (!response.ok) {
      throw new Error(
        `Contributors request failed: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  };

  const [repository, readme, contributors] = await Promise.all([
    getRepository({ owner, name }),
    getReadme({ owner, name }),
    getContributors({ owner, name }),
  ]);

  return (
    <RepoInfo
      repository={repository}
      readme={readme}
      contributors={contributors}
    />
  );
};

export default RepoDetails;
