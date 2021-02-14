import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link';

interface MastheadProps {
    heading: string,
    subheading: string,
    imageSrc: string,
    ctaLink: string,
    ctaText: string,
    subtext: string
}

export default function Masthead(props: MastheadProps) {
    return (
        <Flex
            align="center"
            justify={{ base: "center" }}
            direction={{ base: "column", lg: "row"}}
            minH="70vh"
            px="50px"
            mb={16}
        >
            <Box w={{ base: "50%" }} mb={{ base: 8, lg: 0}}>
                <Image src={props.imageSrc} size="100%" rounded="1rem" shadow="2xl"/>
            </Box>
            <Box w={{base: "50%" }} rounded="1rem" ml={{ base: 0, lg: 8}} bg="brand.500" p={8}>
                <Stack spacing={4} align={["center", "center", "flex-start", "flex-start"]}>
                    <Heading as="h1" size="3xl" fontWeight="bold" color="gray.50">{props.heading}</Heading>
                    <Heading as="h2" size="xl" color="brand.100">{props.subheading}</Heading>
                    <Link href={props.ctaLink}>
                        <Button color="gray.800" bg="white" size="lg">
                            {props.ctaText}
                        </Button>
                    </Link>
                    <Text fontSize="sm" color="gray.800">
                        {props.subtext}
                    </Text>
                </Stack>
            </Box>
            
        </Flex>
    )
}