import { Heading, Stack, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import NavBar from '../components/NavBar';
import { initializeApollo } from '../src/apolloClient';
import {
    NavbarDataFragment,
    ReplitDataDocument,
    ReplitDataQuery
} from '../src/generated/queries';
import { findUrlForAssetTitle, findValueForKey } from './index';

interface HnProps {
    productName: string;
    faviconUrl: string;
    demoUrl: string;
    navbar: NavbarDataFragment;
}

export default function Hn(props: HnProps) {
    return (
        <Fragment>
            <Head>
                <title>
                    Build a machine learning model to diagnose breast cancer in
                    under 5 minutes
                </title>
                <link rel="icon" href={props.faviconUrl} />
            </Head>
            <main>
                <NavBar {...props.navbar} />
                <Stack spacing={8} align="center">
                    <Heading>
                        :wave: Hey HN! Thanks for checking out Kobra :)
                    </Heading>
                    <Text>
                        Here's a quick demo video of Kobra Studio, where we
                        build an ML model to diagnose breast cancer in under 5
                        minutes!
                    </Text>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oP9jpc0W4SQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <Text>
                        You can build your own Kobra project in{' '}
                        <Link
                            color="green"
                            href="https://studio.kobra.dev/editor"
                        >
                            Kobra Studio
                        </Link>
                        , and you can find our documentation site{' '}
                        <Link color="green" href="https://docs.kobra.dev">
                            here
                        </Link>
                        ! Thanks so much!!
                    </Text>
                </Stack>
            </main>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps<HnProps> = async (context) => {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<ReplitDataQuery>({
        query: ReplitDataDocument
    });

    const kvps = data.keyValuePairCollection?.items;

    if (!kvps) {
        throw new Error('KeyValuePairCollection is undefined');
    }

    const assets = data.assetCollection?.items;

    if (!assets) {
        throw new Error('AssetCollection is undefined');
    }

    const page = data.pageCollection?.items[0];

    if (!page) {
        throw new Error('Page is undefined');
    }

    return {
        props: {
            productName: findValueForKey(kvps, 'Product name'),
            faviconUrl: findUrlForAssetTitle(assets, 'Favicon') ?? '',
            demoUrl: findUrlForAssetTitle(assets, 'Demo video') ?? '',
            navbar: page.navbar
        },
        revalidate: 10
    };
};
