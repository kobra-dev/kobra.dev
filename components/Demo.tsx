import { Box, Heading } from "@chakra-ui/react";
import { Image } from "@geist-ui/react";

export default function Demo() {
  return (
    <Box pt={16} bg="brand.500">
      <Heading color="white" textAlign="center">
        Try it out!
      </Heading>
      <br />
      <Box pb={16}>
        <Image.Browser
          url="https://studio.kobra.dev"
          style={{ width: 1280, maxWidth: "90%" }}
        >
          <iframe
            src="https://studio.kobra.dev"
            style={{ width: "100%", height: "75vh" }}
            loading="eager"
          />
        </Image.Browser>
      </Box>
      
    </Box>
  );
}
