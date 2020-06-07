import Head from "next/head";
import { Gql } from "../../graphql-zeus";
import { Lang, Layout } from "../../components";
import Link from "next/link";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await Gql.query({
    featureRequest: [
      { featureRequest: "" },
      {
        content: true,
        comments: {
          content: true,
          index: true,
          replyTo: {
            index: true,
          },
          createdAt: true,
        },
        issueURL: true,
        repositoryURL: true,
        offeredWorms: true,
        languages: {
          name: true,
        },
        title: true,
      },
    ],
  });

  // Pass data to the page via props
  return {
    props: {
      data: res.featureRequest,
    },
  };
}
export default function Create(
  props: ReturnType<typeof getServerSideProps> extends Promise<infer R>
    ? R
    : never
) {
  return (
    <div>
      <Head>
        <title>FeatureMole.com - Resolve your github issues</title>
      </Head>
      <Layout
        header={{
          cta: "Sign up",
          title: "FeatureMole.com",
          motto: "",
        }}
      >
        {}
      </Layout>
    </div>
  );
}
