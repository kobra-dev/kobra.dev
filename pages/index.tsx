import Head from "next/head";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import Reviews from "../components/Reviews";
import Masthead from "../components/Masthead";
import { GetStaticProps } from "next";
import { initializeApollo } from "../src/apolloClient";
import { IndexDataDocument, IndexDataQuery, KeyValuePairDataFragment, IndexAssetDataFragment, Maybe } from "../src/generated/queries";
import Features from "../components/Features";
import { Divider, Stack } from "@chakra-ui/react";
import Content from "../components/Content";

// TODO: Fix favicon

export default function Home(props: IndexProps) {
  return (
    <div>
      <Head>
        <title>
          {props.productName} | {props.tagline}
        </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar logoUrl={props.logoUrl} />
        <Stack spacing={8} align="center">
          <Masthead
            heading={props.productName}
            subheading={props.tagline}
            imageSrc={props.mastheadDemoUrl}
            ctaLink={props.studioUrl}
            ctaText="Try now"
            subtext="No signup required"
          />
          <Content
            heading="Unleash your inner data scientist."
            description="Kobra is a visual programming language for machine learning, built by data scientists and engineers to make ML easy to learn and experiment with."
          />
          <Divider/>
          <Features
            heading="Design ML projects with a few clicks."
            description="Rapidly prototype machine learning models and share them with the community."
            features={[
              {
                heading: "Explore ML.",
                description: "Kobra gives you all the tools to explore different types of machine learning models, like decision trees or regression algorithms."
              },
              {
                heading: "No coding required.",
                description: "Use the intuitive visual interface to drag-and-drop blocks together, and Kobra does all of the work for you behind the scenes."
              },
              {
                heading: "Experiment faster, learn more easily.",
                description: "Build projects in minutes without having to write code or deal with programming concepts like classes, functions, or the command line."
              }
            ]}
          />
          <Divider/>
          <Reviews />
          <Demo />
        </Stack>
      </main>
    </div>
  );
}

interface IndexProps {
  productName: string,
  tagline: string,
  logoUrl: string,
  mastheadDemoUrl: string,
  studioUrl: string
}

const findValueForKey = (kvps: KeyValuePairDataFragment[], key: string) =>
  kvps.filter(kvp => kvp.key === key)[0].value;

const findUrlForAssetTitle = (assets: Maybe<IndexAssetDataFragment>[], title: string) =>
  assets.filter(asset => asset?.title === title)[0]?.url;

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<IndexDataQuery>({
    query: IndexDataDocument
  });

  const kvps = data.keyValuePairCollection?.items;

  if(!kvps) {
    throw new Error("KeyValuePairCollection is undefined");
  }

  const assets = data.assetCollection?.items;

  if(!assets) {
    throw new Error("AssetCollection is undefined");
  }

  return {
    props: {
      productName: findValueForKey(kvps, "Product name"),
      tagline: findValueForKey(kvps, "Tagline"),
      logoUrl: findUrlForAssetTitle(assets, "Product logo") ?? "",
      mastheadDemoUrl: findUrlForAssetTitle(assets, "Masthead demo image") ?? "",
      studioUrl: findValueForKey(kvps, "Studio URL")
    },
    revalidate: 10
  };
}