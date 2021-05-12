import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import MemoImageBrowserHttpsIcon from './image-browser-https-icon';

interface FakeBrowserProps {
    [otherProp: string]: any;
    url: string;
    children: React.ReactNode;
}

const MenuButton = (props: { color: string }) => (
    <Box w="0.75rem" h="0.75rem" borderRadius="50%" bgColor={props.color} />
);

export default function FakeBrowser(props: FakeBrowserProps) {
    const { url, children, ...otherProps } = props;
    return (
        <Box
            shadow="2xl"
            w="max-content"
            maxW="100%"
            m="0 auto"
            borderRadius={4}
            overflow="hidden"
            {...otherProps}
        >
            <Box
                h="2.5rem"
                w="100%"
                d="flex"
                pos="relative"
                bgColor="white"
                fontSize="smaller"
                alignItems="center"
                justifyContent="center"
            >
                <Stack
                    direction="row"
                    spacing="0.5rem"
                    pos="absolute"
                    w="auto"
                    left="8pt"
                    top={0}
                    bottom={0}
                    d="flex"
                    alignItems="center"
                >
                    <MenuButton color="#ff5f56" />
                    <MenuButton color="#ffbd2e" />
                    <MenuButton color="#27c93f" />
                </Stack>
                <Link href={url}>
                    <Flex
                        bg="gray.200"
                        minW="300px"
                        px={8}
                        py={1}
                        rounded="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <MemoImageBrowserHttpsIcon />
                        <Text as="span" ml="5px" fontSize="0.75rem">
                            {url.split('/')[2]}
                        </Text>
                    </Flex>
                </Link>
            </Box>
            {children}
        </Box>
    );
}
