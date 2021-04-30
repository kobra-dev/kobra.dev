
## Kobra.dev

The code that powers [kobra's website](http://kobra.dev/)

## Getting Started

Create the following env files:

- `.env.local`:
  ```
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID=[Insert space ID (not the name) here]
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=[Insert access token here]
  ```
- `.env.contentful-codegen`:
  ```
  CONTENTFUL_CONTENT_TOKEN=[Insert previous access token here]
  CONTENTFUL_MANAGEMENT_TOKEN=[Insert management token (not the same as the access token) here]
  CONTENTFUL_SPACE_ID=[Insert space ID from previous file here]
  ```

Next, install all of the packages in the main package:

```bash
yarn
```

Next, update the generated types by running:
```bash
yarn gql-codegen
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Contributing

We appriciate your help!,
Before Contributing read [guidelines](https://github.com/kobra-dev/Kobra/blob/dev/CONTRIBUTING.md) first
