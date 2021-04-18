import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout';
import {
    Maybe,
    TextUrlPairDataFragment,
    TwoBlocksDataFragment
} from '../src/generated/queries';
import CtaButton from './CtaButton';

function Block(props: {
    title: string;
    url: Maybe<string> | undefined;
    ctaButton: TextUrlPairDataFragment;
    brand: boolean;
}) {
    return (
        <Stack
            maxW="500px"
            spacing={4}
            shadow="xl"
            p={4}
            rounded="1rem"
            {...(props.brand ? { bg: 'brand.500' } : undefined)}
        >
            <Heading
                as="h2"
                size="xl"
                {...(props.brand ? { color: 'white' } : undefined)}
            >
                {props.title}
            </Heading>
            <Box flex={1}>
                <Image
                    src={props.url ?? ''}
                    shadow="xl"
                    rounded="0.5rem"
                    objectFit="cover"
                    h="100%"
                />
            </Box>
            <CtaButton
                {...(props.brand
                    ? {
                          bg: 'white',
                          textColor: 'gray.800',
                          colorScheme: 'gray'
                      }
                    : undefined)}
                {...props.ctaButton}
            />
        </Stack>
    );
}

export default function TwoBlocks(props: TwoBlocksDataFragment) {
    return (
        <Stack direction="row" spacing={8} px="50px" maxW="1300px" w="100%">
            <Block
                title={props.leftTitle}
                url={props.leftImage.url}
                ctaButton={props.leftButton}
                brand={false}
            />
            <Block
                title={props.rightTitle}
                url={props.rightImage.url}
                ctaButton={props.rightButton}
                brand
            />
        </Stack>
    );
}
