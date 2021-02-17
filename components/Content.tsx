import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TextUrlPairDataFragment } from "../src/generated/queries";
import CtaButton from "./CtaButton";

interface ContentProps {
    heading: string,
    description: string,
    image?: React.ReactNode,
    imageOnLeft?: boolean,
    callToActionButton?: TextUrlPairDataFragment
}

// Content block
// --------------------------------
// | Header text  Longer text     |
// --------------------------------

export default function Content(props: ContentProps) {
    const content = <>
        <Heading as="h2" size="xl">{props.heading}</Heading>
        <Text fontSize="lg">{props.description}</Text>
        {props.callToActionButton && (
            <CtaButton {...props.callToActionButton} mt={4}/>
        )}
    </>;
    return (
        <Box px="50px" maxW="1300px">
            <Flex align="center" justify="center" direction={{base: "column", lg: (props.imageOnLeft ?? true ? "row" : "row-reverse")}}>
                {props.image ? (
                    <>
                        <Box flex={1} mb={{base: 8, lg: 0}} maxW={{base: "600px", lg: "initial"}}>
                            {props.image}
                        </Box>
                        {/* Easiest way to add margin in between the elements regardless of direction */}
                        <Box w={8}/>
                        <Box flex={1}>
                            {content}
                        </Box>
                    </>
                ) : content}
            </Flex>
        </Box>
        
    )
}