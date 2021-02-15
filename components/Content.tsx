import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ContentProps {
    heading: string,
    description: string,
    image?: React.ReactNode
}

// Content block
// --------------------------------
// | Header text  Longer text     |
// --------------------------------

export default function Content(props: ContentProps) {
    const content = <>
        <Heading as="h2" size="xl">{props.heading}</Heading>
        <Text fontSize="lg">{props.description}</Text>
    </>;
    return (
        <Box px="50px" maxW="1300px">
            <Flex align="center" justify="center">
                {props.image ? (
                    <>
                        <Box>
                            {content}
                        </Box>
                        {props.image}
                    </>
                ) : content}
            </Flex>
        </Box>
        
    )
}