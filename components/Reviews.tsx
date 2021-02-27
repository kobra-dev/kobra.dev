import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Center,
    Wrap,
    WrapItem
} from '@chakra-ui/react';
import { ReviewsDataFragment } from '../src/generated/queries';

export default function Reviews(props: ReviewsDataFragment) {
    return (
        <Box px="50px" align="center">
            <Heading as="h2" size="xl" pb={10}>
                {props.heading}
            </Heading>
            <Wrap spacing={4} justify="center">
                {props.reviewsCollection.items.map((review, index) => (
                    <WrapItem key={index} borderWidth="1px" p={4} w="400px">
                        <Box>
                            <Text>{review.reviewText}</Text>
                            <Text as="b" fontSize="lg">
                                - {review.person}
                            </Text>
                        </Box>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
}
