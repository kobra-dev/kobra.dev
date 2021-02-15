import { Box, Heading } from "@chakra-ui/react";
import { Image } from "@geist-ui/react";

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
        <Image.Browser
          url={props.url}
          style={{ width: 1280, maxWidth: "90%" }}
        >
          <iframe
            src={props.url}
            style={{ width: "100%", height: "75vh" }}
            loading="eager"
          />
        </Image.Browser>
      </Box>
    </Box>
  );
}
