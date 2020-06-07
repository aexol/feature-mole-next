import Head from "next/head";
import { Chain, SearchType } from "../github/graphql-zeus";
import { Layout } from "../components";
import { useSession, signin, signout } from "next-auth/client";
import { useEffect, useState } from "react";

const chain = Chain("https://api.github.com/graphql", {
  headers: {
    Authorisation: `bearer ${process.env.MOLE_TOKEN}`,
  },
});

export default function Create() {
  const [session, loading] = useSession();
  const [repos, setRepos] = useState<string[]>([]);
  const [issues, setIssues] = useState<string[]>([]);
  const [searchRepos, setSearchRepos] = useState("");
  const [searchIssues, setSearchIssues] = useState("");
  const [selectedRepo, setSelectedRepo] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");

  useEffect(() => {
    if (searchRepos.length > 0) {
      chain
        .query({
          search: [
            {
              query: searchRepos,
              type: SearchType.REPOSITORY,
            },
            {
              nodes: {
                "...on User": {},
                "...on Repository": {
                  url: true,
                },
                "...on Issue": {},
                "...on MarketplaceListing": {},
                "...on Organization": {},
                "...on PullRequest": {},
              },
            },
          ],
        })
        .then((response) => {
          const urls = response.search.nodes
            .filter((n) => "url" in n && n.url)
            .map((n) => ("url" in n ? (n.url as string) : ""));
          setRepos(urls);
        });
    }
  }, [searchRepos]);
  useEffect(() => {
    if (searchIssues.length > 0) {
      chain
        .query({
          search: [
            {
              query: searchRepos,
              type: SearchType.ISSUE,
            },
            {
              nodes: {
                "...on User": {},
                "...on Issue": {
                  url: true,
                },
                "...on Repository": {},
                "...on MarketplaceListing": {},
                "...on Organization": {},
                "...on PullRequest": {},
              },
            },
          ],
        })
        .then((response) => {
          const urls = response.search.nodes
            .filter((n) => "url" in n && n.url)
            .map((n) => ("url" in n ? (n.url as string) : ""));
          setIssues(urls);
        });
    }
  }, [searchIssues]);
  return (
    <div>
      <Head>
        <title>FeatureMole.com - Resolve your github issues</title>
      </Head>
      <Layout
        header={{
          title: "FeatureMole.com",
          motto: "",
          ctaClick: session ? signout : signin,
          cta: session ? "Sign out" : "Sign in",
        }}
      >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="Message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Message"
              placeholder="Message"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Worms"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Worms 🐛
            </label>
            <input
              type="number"
              step="1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Worms"
              placeholder="Worms"
            />
          </div>
          <label
            htmlFor="Repos"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Repository
          </label>
          <input
            id="Repos"
            type="text"
            placeholder="search..."
            onChange={(e) => {
              setSearchRepos(e.target.value);
            }}
          />
          <div>
            {repos.map((r) => (
              <div
                onClick={() => {
                  setSelectedRepo(r);
                  setSearchRepos("");
                  setRepos([]);
                }}
              >
                {r}
              </div>
            ))}
          </div>
          <label
            htmlFor="Issues"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Issue
          </label>
          <input
            id="Issues"
            type="text"
            placeholder="search..."
            onChange={(e) => {
              setSearchIssues(e.target.value);
            }}
          />
          <div>
            {issues.map((r) => (
              <div
                onClick={() => {
                  setSelectedIssue(r);
                  setSearchIssues("");
                  setIssues([]);
                }}
              >
                {r}
              </div>
            ))}
          </div>
        </form>
      </Layout>
    </div>
  );
}
