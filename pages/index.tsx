import Head from "next/head";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import Reviews from "../components/Reviews";
import Masthead from "../components/Masthead";
import { GetStaticProps } from "next";
import { initializeApollo } from "../src/apolloClient";
import { IndexDataDocument, IndexDataQuery, KeyValuePairDataFragment, IndexAssetDataFragment, Maybe } from "../src/generated/queries";

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
        <Masthead
          heading={props.productName}
          subheading={props.tagline}
          imageSrc={props.mastheadDemoUrl}
          ctaLink={props.studioUrl}
          ctaText="Try now"
          subtext="No signup required"
        />
        <Reviews />
        <Demo />
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