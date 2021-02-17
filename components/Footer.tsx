import { Box, Flex, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import FontAwesomeIcon, { FACollection } from "./FontAwesomeIcon";

const YEAR = new Date().getFullYear();

interface FooterProps {
    organizationName: string,
    iconUrl: string,
    icons: {
        faCollection?: FACollection,
        faName: string,
        url: string
    }[],
    links: {
        text: string,
        url: string
    }[]
}

export default function Footer(props: FooterProps) {
    return (
        <SimpleGrid w="100%" maxW="700px" minChildWidth="250px" spacing={16} px="50px" pb={16}>
            <Stack spacing={4}>
                <Flex align="center">
                    <Image src={props.iconUrl} maxW="2em" mr={4}/>
                    <Text fontSize="md" color="gray.500">&copy; {YEAR} {props.organizationName}.</Text>
                </Flex>
                <Stack direction="row" spacing={2}>
                    {props.icons.map(icon => (
                        <Link key={icon.url + icon.faName} as={NextLink} href={icon.url}>
                            <FontAwesomeIcon cursor="pointer" filter="invert(0.5)" w="2em" h="2em" collection={icon.faCollection} name={icon.faName}/>
                        </Link>
                    ))}
                </Stack>
            </Stack>
            <Box>
                {props.links.map(link => (
                    <Link key={link.text + link.url} as={NextLink} href={link.url}>{link.text}</Link>
                ))}
            </Box>
        </SimpleGrid>
    )
}