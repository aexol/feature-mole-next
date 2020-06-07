import Head from "next/head";
import { Gql } from "../graphql-zeus";
import { Lang, Layout } from "../components";
import { useSession, signin, signout } from "next-auth/client";
import Link from "next/link";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await Gql.query({
    home: {
      title: true,
      content: true,
      createdAt: true,
      offeredWorms: true,
      issueURL: true,
      repositoryURL: true,
      languages: {
        name: true,
      },
      createdBy: {
        firstName: true,
        lastName: true,
        company: true,
        avatar: true,
      },
    },
  });

  // Pass data to the page via props
  return {
    props: {
      data: {
        query: res.home,
      },
    },
  };
}

type Q = (ReturnType<typeof getServerSideProps> extends Promise<infer R>
  ? R
  : never)["props"];

export default function Home({ data }: Q) {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <div>
      <Head>
        <title>FeatureMole.com - Resolve your github issues</title>
      </Head>
      <Layout
        header={{
          ctaClick: session ? signout : signin,
          cta: session ? "Sign out" : "Sign in",
          title: "FeatureMole.com",
          motto: "Resolve your issues immediately",
        }}
      >
        {session && (
          <Link href="/create">
            <div
              className={`
            bg-white
            p-5
            h-20
            rounded
            cursor-pointer
            transition
            duration-500 
            ease-in-out 
            transform 
            hover:scale-105
            hover:text-green-600
            items-center
            justify-center
            flex
        `}
            >
              Add your Issue
            </div>
          </Link>
        )}
        {data.query.map((f) => (
          <div
            className={`
            bg-white
            p-5
            rounded
            cursor-pointer
            hover:bg-gray-100
            transition
            duration-500 
            ease-in-out 
            hover:bg-blue-200 
            transform 
            hover:-translate-y-1 
            hover:scale-105
        `}
          >
            <div
              className={`
                flex
                flex-row
                items-start
            `}
            >
              <div
                style={
                  f.createdBy.avatar
                    ? { backgroundImage: `url(${f.createdBy.avatar})` }
                    : {}
                }
                className={`
                        w-8
                        h-8
                        rounded
                        bg-contain
                        bg-gray-400
                        mr-4
                    `}
              ></div>
              <div className="flex-1">
                <div className="text-xs text-gray-600">
                  Created by {f.createdBy.firstName}
                </div>
                <div>{f.title}</div>
                <div className="mb-2">{f.repositoryURL}</div>
                <div className="flex flex-row flex-wrap space-x-1">
                  {f.languages.slice(0, 3).map((l) => (
                    <Lang>{l.name}</Lang>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Layout>
    </div>
  );
}
