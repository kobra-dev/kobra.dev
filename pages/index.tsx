import { Divider, Stack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Content from '../components/Content'
import Demo from '../components/Demo'
import Features from '../components/Features'
import { FACollection } from '../components/FontAwesomeIcon'
import Footer from '../components/Footer'
import IconOrImage from '../components/IconOrImage'
import Masthead from '../components/Masthead'
import NavBar from '../components/NavBar'
import Reviews from '../components/Reviews'
import TwoBlocks from '../components/TwoBlocks'
import { initializeApollo } from '../src/apolloClient'
import {
    ContentDataFragment,
    DemoDataFragment,
    FeaturesDataFragment,
    FooterDataFragment,
    IndexAssetDataFragment,
    IndexDataDocument,
    IndexDataQuery,
    KeyValuePairDataFragment,
    MastheadDataFragment,
    Maybe,
    NavbarDataFragment,
    ReviewsDataFragment,
    TwoBlocksDataFragment
} from '../src/generated/queries'

const SECTION_BACKGROUNDS = {
    white: ['Content', 'Features', 'Footer', 'Reviews', 'TwoBlocks'],
    brand: ['Masthead', 'Demo']
};

export default function Home(props: IndexProps) {
    return (
        <Fragment>
            <Head>
                <title>
                    {props.productName} | {props.tagline}
                </title>

                <link rel="icon" href={props.faviconUrl} />
            </Head>

            <main>
                <NavBar {...props.navbar} />
                <Stack spacing={8} align="center">
                    {props.contents.map((section, index, array) => (
                        // I know it is a bad idea to use an index as the key but this list won't ever change so it should still work
                        <Fragment key={section.__typename ?? '' + index}>
                            {index !== 0 &&
                                Object.values(SECTION_BACKGROUNDS)
                                    .filter((arr) =>
                                        arr.includes(section.__typename ?? '')
                                    )[0]
                                    .includes(
                                        array[index - 1].__typename ?? ''
                                    ) && <Divider />}
                            {section.__typename === 'Content' ? (
                                <Content
                                    heading={section.heading}
                                    description={section.contentDescription}
                                    image={
                                        section.media && (
                                            <IconOrImage
                                                imageUrl={
                                                    section.media.image?.url
                                                }
                                                faIconName={
                                                    section.media.faIconName
                                                }
                                            />
                                        )
                                    }
                                    imageOnLeft={
                                        section.imageOnLeft ?? undefined
                                    }
                                    callToActionButton={
                                        section.callToActionButton ?? undefined
                                    }
                                />
                            ) : section.__typename === 'Demo' ? (
                                <Demo
                                    heading={section.heading}
                                    url={section.url.value}
                                />
                            ) : section.__typename === 'Features' ? (
                                <Features
                                    heading={section.heading}
                                    description={
                                        section.featuresDescription ?? undefined
                                    }
                                    features={section.featuresCollection?.items.map(
                                        (feature) => ({
                                            heading: feature.heading,
                                            description:
                                                feature.description ??
                                                undefined,
                                            icon: feature.media && (
                                                <IconOrImage
                                                    imageUrl={
                                                        feature.media.image?.url
                                                    }
                                                    faIconName={
                                                        feature.media.faIconName
                                                    }
                                                />
                                            )
                                        })
                                    )}
                                />
                            ) : section.__typename === 'Masthead' ? (
                                <>
                                    <Head>
                                        <link rel="preload" href={section.image.url ?? ''} as="image" type="image/webp"/>
                                    </Head>
                                    <Masthead
                                        heading={section.heading}
                                        subheading={section.subheading.value}
                                        imageSrc={section.image.url ?? ''}
                                        callToActionButton={
                                            section.mastheadCtaButton
                                        }
                                        subtext={section.subtext}
                                    />
                                </>
                            ) : section.__typename === 'Footer' ? (
                                <Footer
                                    organizationName={
                                        section.organizationName.value
                                    }
                                    iconUrl={section.organizationIcon.url ?? ''}
                                    icons={section.iconsCollection.items.map(
                                        (icon) => ({
                                            faCollection:
                                                (icon.icon
                                                    .collection as FACollection) ??
                                                undefined,
                                            faName: icon.icon.name,
                                            url: icon.url.value
                                        })
                                    )}
                                    links={section.linksCollection.items.map(
                                        (link) => ({
                                            text: link.text,
                                            url: link.url.value
                                        })
                                    )}
                                    badgeUrl={section.badge?.url ?? undefined}
                                    badgeLink={section.badgeUrl?.value ?? undefined}
                                    />

                            ) : section.__typename === 'Reviews' ? (
                                <Reviews {...section} />
                            ) : section.__typename === 'TwoBlocks' ? (
                                <TwoBlocks {...section} />
                            ) : undefined}
                        </Fragment>
                    ))}
                </Stack>
            </main>
        </Fragment>
    );
}

interface IndexProps {
    productName: string;
    tagline: string;
    faviconUrl: string;
    navbar: NavbarDataFragment;
    // Can't make it a fragment so I had to copy and paste it from queries.ts
    contents: Array<
        | ({ __typename?: 'Content' } & ContentDataFragment)
        | ({ __typename?: 'Demo' } & DemoDataFragment)
        | ({ __typename?: 'Features' } & FeaturesDataFragment)
        | ({ __typename?: 'Masthead' } & MastheadDataFragment)
        | ({ __typename?: 'Footer' } & FooterDataFragment)
        | ({ __typename?: 'Reviews' } & ReviewsDataFragment)
        | ({ __typename?: 'TwoBlocks' } & TwoBlocksDataFragment)
    >;
}

export const findValueForKey = (kvps: KeyValuePairDataFragment[], key: string) =>
    kvps.filter((kvp) => kvp.key === key)[0].value;

export const findUrlForAssetTitle = (
    assets: Maybe<IndexAssetDataFragment>[],
    title: string
) => assets.filter((asset) => asset?.title === title)[0]?.url;

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<IndexDataQuery>({
        query: IndexDataDocument
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
            tagline: findValueForKey(kvps, 'Tagline'),
            faviconUrl: findUrlForAssetTitle(assets, 'Favicon') ?? '',
            navbar: page.navbar,
            contents: page.contentsCollection.items
        },
        revalidate: 10
    };
};
