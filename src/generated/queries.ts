import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  iconOrImage?: Maybe<IconOrImage>;
  iconOrImageCollection?: Maybe<IconOrImageCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  features?: Maybe<Features>;
  featuresCollection?: Maybe<FeaturesCollection>;
  demo?: Maybe<Demo>;
  demoCollection?: Maybe<DemoCollection>;
  content?: Maybe<Content>;
  contentCollection?: Maybe<ContentCollection>;
  feature?: Maybe<Feature>;
  featureCollection?: Maybe<FeatureCollection>;
  masthead?: Maybe<Masthead>;
  mastheadCollection?: Maybe<MastheadCollection>;
  keyValuePair?: Maybe<KeyValuePair>;
  keyValuePairCollection?: Maybe<KeyValuePairCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryIconOrImageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryIconOrImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<IconOrImageFilter>;
  order?: Maybe<Array<Maybe<IconOrImageOrder>>>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageFilter>;
  order?: Maybe<Array<Maybe<PageOrder>>>;
};


export type QueryFeaturesArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeaturesFilter>;
  order?: Maybe<Array<Maybe<FeaturesOrder>>>;
};


export type QueryDemoArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryDemoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<DemoFilter>;
  order?: Maybe<Array<Maybe<DemoOrder>>>;
};


export type QueryContentArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryContentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ContentFilter>;
  order?: Maybe<Array<Maybe<ContentOrder>>>;
};


export type QueryFeatureArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeatureCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeatureFilter>;
  order?: Maybe<Array<Maybe<FeatureOrder>>>;
};


export type QueryMastheadArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMastheadCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MastheadFilter>;
  order?: Maybe<Array<Maybe<MastheadOrder>>>;
};


export type QueryKeyValuePairArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryKeyValuePairCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<KeyValuePairFilter>;
  order?: Maybe<Array<Maybe<KeyValuePairOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  iconOrImageCollection?: Maybe<IconOrImageCollection>;
  mastheadCollection?: Maybe<MastheadCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsIconOrImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsMastheadCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type IconOrImageCollection = {
  __typename?: 'IconOrImageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<IconOrImage>;
};

/** Either a Font Awesome icon or an image [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/iconOrImage) */
export type IconOrImage = Entry & {
  __typename?: 'IconOrImage';
  sys: Sys;
  linkedFrom?: Maybe<IconOrImageLinkingCollections>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  faIconName?: Maybe<Scalars['String']>;
};


/** Either a Font Awesome icon or an image [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/iconOrImage) */
export type IconOrImageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Either a Font Awesome icon or an image [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/iconOrImage) */
export type IconOrImageIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Either a Font Awesome icon or an image [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/iconOrImage) */
export type IconOrImageImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Either a Font Awesome icon or an image [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/iconOrImage) */
export type IconOrImageFaIconNameArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type IconOrImageLinkingCollections = {
  __typename?: 'IconOrImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  contentCollection?: Maybe<ContentCollection>;
  featureCollection?: Maybe<FeatureCollection>;
};


export type IconOrImageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type IconOrImageLinkingCollectionsContentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type IconOrImageLinkingCollectionsFeatureCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentCollection = {
  __typename?: 'ContentCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Content>;
};

/** A content section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/content) */
export type Content = Entry & {
  __typename?: 'Content';
  sys: Sys;
  linkedFrom?: Maybe<ContentLinkingCollections>;
  heading: Scalars['String'];
  description: Scalars['String'];
  media?: Maybe<IconOrImage>;
};


/** A content section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/content) */
export type ContentLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A content section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/content) */
export type ContentHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A content section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/content) */
export type ContentDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A content section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/content) */
export type ContentMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentLinkingCollections = {
  __typename?: 'ContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Page>;
};

/** Content to show in a landing page [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  sys: Sys;
  linkedFrom?: Maybe<PageLinkingCollections>;
  id: Scalars['String'];
  contentsCollection: PageContentsCollection;
};


/** Content to show in a landing page [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Content to show in a landing page [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/page) */
export type PageIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Content to show in a landing page [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/page) */
export type PageContentsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageContentsCollection = {
  __typename?: 'PageContentsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<PageContentsItem>;
};

export type PageContentsItem = Content | Demo | Features | Masthead;

/** A demo section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/demo) */
export type Demo = Entry & {
  __typename?: 'Demo';
  sys: Sys;
  linkedFrom?: Maybe<DemoLinkingCollections>;
  heading: Scalars['String'];
  url: KeyValuePair;
};


/** A demo section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/demo) */
export type DemoLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A demo section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/demo) */
export type DemoHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A demo section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/demo) */
export type DemoUrlArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DemoLinkingCollections = {
  __typename?: 'DemoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type DemoLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DemoLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** Type for storing miscellaneous information [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/keyValuePair) */
export type KeyValuePair = Entry & {
  __typename?: 'KeyValuePair';
  sys: Sys;
  linkedFrom?: Maybe<KeyValuePairLinkingCollections>;
  key: Scalars['String'];
  value: Scalars['String'];
};


/** Type for storing miscellaneous information [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/keyValuePair) */
export type KeyValuePairLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Type for storing miscellaneous information [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/keyValuePair) */
export type KeyValuePairKeyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Type for storing miscellaneous information [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/keyValuePair) */
export type KeyValuePairValueArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type KeyValuePairLinkingCollections = {
  __typename?: 'KeyValuePairLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  demoCollection?: Maybe<DemoCollection>;
  mastheadCollection?: Maybe<MastheadCollection>;
};


export type KeyValuePairLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type KeyValuePairLinkingCollectionsDemoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type KeyValuePairLinkingCollectionsMastheadCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DemoCollection = {
  __typename?: 'DemoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Demo>;
};

export type MastheadCollection = {
  __typename?: 'MastheadCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Masthead>;
};

/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type Masthead = Entry & {
  __typename?: 'Masthead';
  sys: Sys;
  linkedFrom?: Maybe<MastheadLinkingCollections>;
  heading: Scalars['String'];
  subheading: KeyValuePair;
  image: Asset;
  ctaText: KeyValuePair;
  ctaLink: KeyValuePair;
  subtext: Scalars['String'];
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadSubheadingArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadCtaTextArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadCtaLinkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A masthead section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/masthead) */
export type MastheadSubtextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MastheadLinkingCollections = {
  __typename?: 'MastheadLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type MastheadLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type MastheadLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** Features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/features) */
export type Features = Entry & {
  __typename?: 'Features';
  sys: Sys;
  linkedFrom?: Maybe<FeaturesLinkingCollections>;
  heading: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  featuresCollection?: Maybe<FeaturesFeaturesCollection>;
};


/** Features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/features) */
export type FeaturesLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/features) */
export type FeaturesHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/features) */
export type FeaturesDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/features) */
export type FeaturesFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturesLinkingCollections = {
  __typename?: 'FeaturesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FeaturesLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FeaturesLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturesFeaturesCollection = {
  __typename?: 'FeaturesFeaturesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Feature>;
};

/** A feature to display in a features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/feature) */
export type Feature = Entry & {
  __typename?: 'Feature';
  sys: Sys;
  linkedFrom?: Maybe<FeatureLinkingCollections>;
  heading: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  media?: Maybe<IconOrImage>;
};


/** A feature to display in a features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/feature) */
export type FeatureLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A feature to display in a features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/feature) */
export type FeatureHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A feature to display in a features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/feature) */
export type FeatureDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A feature to display in a features section [See type definition](https://app.contentful.com/spaces/toxox86i0ilk/content_types/feature) */
export type FeatureMediaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeatureLinkingCollections = {
  __typename?: 'FeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuresCollection?: Maybe<FeaturesCollection>;
};


export type FeatureLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FeatureLinkingCollectionsFeaturesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturesCollection = {
  __typename?: 'FeaturesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Features>;
};

export type FeatureCollection = {
  __typename?: 'FeatureCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Feature>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['String']>;
  publishedAt_not?: Maybe<Scalars['String']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_contains?: Maybe<Scalars['String']>;
  publishedAt_not_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  firstPublishedAt_not?: Maybe<Scalars['String']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['String']>;
  publishedVersion_not?: Maybe<Scalars['String']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_contains?: Maybe<Scalars['String']>;
  publishedVersion_not_contains?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type IconOrImageFilter = {
  sys?: Maybe<SysFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  faIconName_exists?: Maybe<Scalars['Boolean']>;
  faIconName?: Maybe<Scalars['String']>;
  faIconName_not?: Maybe<Scalars['String']>;
  faIconName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  faIconName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  faIconName_contains?: Maybe<Scalars['String']>;
  faIconName_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<IconOrImageFilter>>>;
  AND?: Maybe<Array<Maybe<IconOrImageFilter>>>;
};

export enum IconOrImageOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FaIconNameAsc = 'faIconName_ASC',
  FaIconNameDesc = 'faIconName_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageFilter = {
  sys?: Maybe<SysFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  contentsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageFilter>>>;
  AND?: Maybe<Array<Maybe<PageFilter>>>;
};

export enum PageOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FeaturesFilter = {
  sys?: Maybe<SysFilter>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  featuresCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FeaturesFilter>>>;
  AND?: Maybe<Array<Maybe<FeaturesFilter>>>;
};

export enum FeaturesOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type DemoFilter = {
  url?: Maybe<CfKeyValuePairNestedFilter>;
  sys?: Maybe<SysFilter>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<DemoFilter>>>;
  AND?: Maybe<Array<Maybe<DemoFilter>>>;
};

export type CfKeyValuePairNestedFilter = {
  sys?: Maybe<SysFilter>;
  key_exists?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  key_not?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_contains?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  value_exists?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfKeyValuePairNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfKeyValuePairNestedFilter>>>;
};

export enum DemoOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentFilter = {
  media?: Maybe<CfIconOrImageNestedFilter>;
  sys?: Maybe<SysFilter>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  media_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ContentFilter>>>;
  AND?: Maybe<Array<Maybe<ContentFilter>>>;
};

export type CfIconOrImageNestedFilter = {
  sys?: Maybe<SysFilter>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  faIconName_exists?: Maybe<Scalars['Boolean']>;
  faIconName?: Maybe<Scalars['String']>;
  faIconName_not?: Maybe<Scalars['String']>;
  faIconName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  faIconName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  faIconName_contains?: Maybe<Scalars['String']>;
  faIconName_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfIconOrImageNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfIconOrImageNestedFilter>>>;
};

export enum ContentOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FeatureFilter = {
  media?: Maybe<CfIconOrImageNestedFilter>;
  sys?: Maybe<SysFilter>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  media_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FeatureFilter>>>;
  AND?: Maybe<Array<Maybe<FeatureFilter>>>;
};

export enum FeatureOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type MastheadFilter = {
  subheading?: Maybe<CfKeyValuePairNestedFilter>;
  ctaText?: Maybe<CfKeyValuePairNestedFilter>;
  ctaLink?: Maybe<CfKeyValuePairNestedFilter>;
  sys?: Maybe<SysFilter>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  subheading_exists?: Maybe<Scalars['Boolean']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  ctaText_exists?: Maybe<Scalars['Boolean']>;
  ctaLink_exists?: Maybe<Scalars['Boolean']>;
  subtext_exists?: Maybe<Scalars['Boolean']>;
  subtext?: Maybe<Scalars['String']>;
  subtext_not?: Maybe<Scalars['String']>;
  subtext_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtext_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtext_contains?: Maybe<Scalars['String']>;
  subtext_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<MastheadFilter>>>;
  AND?: Maybe<Array<Maybe<MastheadFilter>>>;
};

export enum MastheadOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SubtextAsc = 'subtext_ASC',
  SubtextDesc = 'subtext_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type KeyValuePairFilter = {
  sys?: Maybe<SysFilter>;
  key_exists?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  key_not?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  key_contains?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  value_exists?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
  value_not?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value_contains?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<KeyValuePairFilter>>>;
  AND?: Maybe<Array<Maybe<KeyValuePairFilter>>>;
};

export enum KeyValuePairOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type KeyValuePairCollection = {
  __typename?: 'KeyValuePairCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<KeyValuePair>;
};

export type IndexDataQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexDataQuery = (
  { __typename?: 'Query' }
  & { keyValuePairCollection?: Maybe<(
    { __typename?: 'KeyValuePairCollection' }
    & { items: Array<(
      { __typename?: 'KeyValuePair' }
      & KeyValuePairDataFragment
    )> }
  )>, assetCollection?: Maybe<(
    { __typename?: 'AssetCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Asset' }
      & IndexAssetDataFragment
    )>> }
  )>, pageCollection?: Maybe<(
    { __typename?: 'PageCollection' }
    & { items: Array<(
      { __typename?: 'Page' }
      & { contentsCollection: (
        { __typename?: 'PageContentsCollection' }
        & { items: Array<(
          { __typename?: 'Content' }
          & ContentDataFragment
        ) | (
          { __typename?: 'Demo' }
          & DemoDataFragment
        ) | (
          { __typename?: 'Features' }
          & FeaturesDataFragment
        ) | (
          { __typename?: 'Masthead' }
          & MastheadDataFragment
        )> }
      ) }
    )> }
  )> }
);

export type IndexAssetDataFragment = (
  { __typename?: 'Asset' }
  & Pick<Asset, 'title' | 'url'>
);

export type KeyValuePairDataFragment = (
  { __typename?: 'KeyValuePair' }
  & Pick<KeyValuePair, 'key' | 'value'>
);

export type IconOrImageDataFragment = (
  { __typename?: 'IconOrImage' }
  & Pick<IconOrImage, 'faIconName'>
  & { image?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  )> }
);

export type ContentDataFragment = (
  { __typename?: 'Content' }
  & Pick<Content, 'heading'>
  & { contentDescription: Content['description'] }
  & { media?: Maybe<(
    { __typename?: 'IconOrImage' }
    & IconOrImageDataFragment
  )> }
);

export type DemoDataFragment = (
  { __typename?: 'Demo' }
  & Pick<Demo, 'heading'>
  & { url: (
    { __typename?: 'KeyValuePair' }
    & Pick<KeyValuePair, 'value'>
  ) }
);

export type FeaturesDataFragment = (
  { __typename?: 'Features' }
  & Pick<Features, 'heading'>
  & { featuresDescription: Features['description'] }
  & { featuresCollection?: Maybe<(
    { __typename?: 'FeaturesFeaturesCollection' }
    & { items: Array<(
      { __typename?: 'Feature' }
      & Pick<Feature, 'heading' | 'description'>
      & { media?: Maybe<(
        { __typename?: 'IconOrImage' }
        & IconOrImageDataFragment
      )> }
    )> }
  )> }
);

export type MastheadDataFragment = (
  { __typename?: 'Masthead' }
  & Pick<Masthead, 'heading' | 'subtext'>
  & { subheading: (
    { __typename?: 'KeyValuePair' }
    & Pick<KeyValuePair, 'value'>
  ), image: (
    { __typename?: 'Asset' }
    & Pick<Asset, 'url'>
  ), ctaText: (
    { __typename?: 'KeyValuePair' }
    & Pick<KeyValuePair, 'value'>
  ), ctaLink: (
    { __typename?: 'KeyValuePair' }
    & Pick<KeyValuePair, 'value'>
  ) }
);

export const IndexAssetDataFragmentDoc = gql`
    fragment IndexAssetData on Asset {
  title
  url
}
    `;
export const KeyValuePairDataFragmentDoc = gql`
    fragment KeyValuePairData on KeyValuePair {
  key
  value
}
    `;
export const IconOrImageDataFragmentDoc = gql`
    fragment IconOrImageData on IconOrImage {
  image {
    url
  }
  faIconName
}
    `;
export const ContentDataFragmentDoc = gql`
    fragment ContentData on Content {
  heading
  contentDescription: description
  media {
    ...IconOrImageData
  }
}
    ${IconOrImageDataFragmentDoc}`;
export const DemoDataFragmentDoc = gql`
    fragment DemoData on Demo {
  heading
  url {
    value
  }
}
    `;
export const FeaturesDataFragmentDoc = gql`
    fragment FeaturesData on Features {
  heading
  featuresDescription: description
  featuresCollection(limit: 10) {
    items {
      heading
      description
      media {
        ...IconOrImageData
      }
    }
  }
}
    ${IconOrImageDataFragmentDoc}`;
export const MastheadDataFragmentDoc = gql`
    fragment MastheadData on Masthead {
  heading
  subheading {
    value
  }
  image {
    url
  }
  ctaText {
    value
  }
  ctaLink {
    value
  }
  subtext
}
    `;
export const IndexDataDocument = gql`
    query IndexData {
  keyValuePairCollection(where: {key_in: ["Product name", "Tagline"]}) {
    items {
      ...KeyValuePairData
    }
  }
  assetCollection(where: {title_in: ["Product logo", "Favicon"]}) {
    items {
      ...IndexAssetData
    }
  }
  pageCollection(where: {id: "Index"}, limit: 1) {
    items {
      contentsCollection {
        items {
          ... on Content {
            ...ContentData
          }
          ... on Demo {
            ...DemoData
          }
          ... on Features {
            ...FeaturesData
          }
          ... on Masthead {
            ...MastheadData
          }
        }
      }
    }
  }
}
    ${KeyValuePairDataFragmentDoc}
${IndexAssetDataFragmentDoc}
${ContentDataFragmentDoc}
${DemoDataFragmentDoc}
${FeaturesDataFragmentDoc}
${MastheadDataFragmentDoc}`;

/**
 * __useIndexDataQuery__
 *
 * To run a query within a React component, call `useIndexDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexDataQuery(baseOptions?: Apollo.QueryHookOptions<IndexDataQuery, IndexDataQueryVariables>) {
        return Apollo.useQuery<IndexDataQuery, IndexDataQueryVariables>(IndexDataDocument, baseOptions);
      }
export function useIndexDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexDataQuery, IndexDataQueryVariables>) {
          return Apollo.useLazyQuery<IndexDataQuery, IndexDataQueryVariables>(IndexDataDocument, baseOptions);
        }
export type IndexDataQueryHookResult = ReturnType<typeof useIndexDataQuery>;
export type IndexDataLazyQueryHookResult = ReturnType<typeof useIndexDataLazyQuery>;
export type IndexDataQueryResult = Apollo.QueryResult<IndexDataQuery, IndexDataQueryVariables>;