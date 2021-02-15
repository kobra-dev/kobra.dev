import { Box, Divider, Flex, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface Feature {
    icon?: React.ReactNode | string,
    heading: string,
    description?: string
}

interface FeaturesProps {
    heading?: string,
    description?: string,
    features?: Feature[]
}

// A block showing different features:
// -----------------------------------
// |              Header             |
// | Description goes here. Content  |
// | Icon     | Icon     | Icon      |
// | Header   | Header   | Header    |
// | Text     | Text     | Text      |
// -----------------------------------

export default function Features(props: FeaturesProps) {
    return (
        <Stack spacing={4} px="50px" align="center">
            {props.heading && (
                <Heading as="h2" size="xl">{props.heading}</Heading>
            )}
            {props.description && (
                <Text fontSize="md">{props.description}</Text>
            )}
            {props.features && (
                <>
                    <Wrap spacing={4} justify="center">
                        {props.features.map(feature => (
                            <WrapItem key={feature.heading + feature.description} borderWidth="1px" p={4} w="400px">
                                <Flex justify="center" direction="column" textAlign="center">
                                    {feature.icon}
                                    <Heading as="h3" size="lg">{feature.heading}</Heading>
                                    {feature.description && (
                                        <Text fontSize="md">{feature.description}</Text>
                                    )}
                                </Flex>
                            </WrapItem>
                        ))}
                    </Wrap>
                </>
            )}
        </Stack>
    )
}