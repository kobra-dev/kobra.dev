import { Heading, Stack, Text } from '@chakra-ui/layout';
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

interface ReplitProps {
    productName: string;
    faviconUrl: string;
    demoUrl: string;
    navbar: NavbarDataFragment;
}

export default function Demo(props: ReplitProps) {
    return (
        <Fragment>
            <Head>
                <title>Kobra</title>
                <link rel="icon" href={props.faviconUrl} />
            </Head>
            <main>
                <NavBar {...props.navbar} />
                <Stack spacing={8} align="center">
                    <Heading>👋 Hello thanks for checking out Kobra!</Heading>
                    <Text>Here's a quick demo video of Kobra Studio:</Text>
                    <video
                        controls
                        style={{ maxHeight: '30rem' }}
                        src={props.demoUrl}
                    />
                </Stack>
            </main>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps<ReplitProps> = async (context) => {
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
