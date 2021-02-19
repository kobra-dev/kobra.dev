import { Box, Heading } from "@chakra-ui/react";
import FakeBrowser from "./FakeBrowser";

interface DemoProps {
  heading: string,
  url: string
}

export default function Demo(props: DemoProps) {
  return (
    <Box pt={16} bg="brand.500" w="100%">
      <Heading color="white" textAlign="center">
        {props.heading}
      </Heading>
      <br />
      <Box pb={16}>
        <FakeBrowser url={props.url} w="1280px" maxW="90%">
          <iframe
            src={props.url}
            style={{ width: "100%", height: "75vh" }}
            loading="eager"
          />
        </FakeBrowser>
      </Box>
    </Box>
  );
}
