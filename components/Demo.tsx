import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import FakeBrowser from './FakeBrowser';
import FontAwesomeIcon from './FontAwesomeIcon';

interface DemoProps {
    heading: string;
    url: string;
}

export default function Demo(props: DemoProps) {
    const [active, setActive] = useState(true);

    return (
        <Box pt={16} bg="brand.500" w="100%">
            <Heading color="white" textAlign="center">
                {props.heading}
            </Heading>
            <br />
            <Box pb={16}>
                <FakeBrowser url={props.url} w="1280px" maxW="90%">
                    {active ? (
                        <iframe
                            src={props.url}
                            style={{ width: '100%', height: '75vh', backgroundColor: "white" }}
                            loading="eager"
                        />
                    ) : (
                        <Flex
                            w="100%"
                            h="75vh"
                            bgColor="blackAlpha.700"
                            justifyContent="center"
                            alignItems="center"
                            cursor="pointer"
                            onClick={() => setActive(true)}
                        >
                            <FontAwesomeIcon
                                collection="regular"
                                name="play-circle"
                                maxW="25rem"
                                boxSize="calc(100% - 5rem)"
                                opacity={0.8}
                                filter="invert(1)"
                            />
                        </Flex>
                    )}
                </FakeBrowser>
            </Box>
        </Box>
    );
}
