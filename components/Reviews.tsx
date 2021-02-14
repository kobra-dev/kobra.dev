import { Box, Heading, Text, SimpleGrid, Center } from "@chakra-ui/react";

export default function Reviews() {
  return (
    <div style={{ padding: "20px" }}>
      <Heading textAlign="center"> Reviews</Heading>
      <br />
      <Center>
        <SimpleGrid columns={3} spacing={10} width="100%" maxWidth="1000px">
          <Box borderWidth="1px" maxWidth="100%" style={{ padding: "10px" }}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sagittis sem erat, non sagittis orci tincidunt non. In tempor
              nulla at dui suscipit, eget fermentum metus vestibulum.
              Suspendisse dapix bus sodales
            </Text>
            <Text as="b">- A very cool person</Text>
          </Box>
          <Box borderWidth="1px" maxWidth="100%" style={{ padding: "10px" }}>
            <Text>
              Eu pharetra mi posuere quis. Cras arcu sapien, euismod sed ornare
              eget, sodales sed enim. Aliquam diam est, accumsan a consequat id,
              bibendum a ipsum. Aliquam a nibh efficitur, convallis orci in,
              placerat orci.
            </Text>
            <Text as="b">- A very cool person</Text>
          </Box>
          <Box borderWidth="1px" maxWidth="400px" style={{ padding: "10px" }}>
            <Text>
              Aliquam a nibh efficitur, convallis orci in, placerat orci.
              Praesent egestas purus lectus, eu blandit lacus consequat eu.
              Proin facilisis nibh vehicula velit dictum, sed viverra urna
              mollis lorem ipsum!!!!
            </Text>
            <Text as="b">- A very cool person</Text>
          </Box>
        </SimpleGrid>
      </Center>
      <br />
    </div>
  );
}
