import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoLogIn } from "react-icons/io5";

interface NavBarProps {
  logoUrl: string;
}

export default function NavBar(props: NavBarProps) {
  return (
    <div>
      <Box
        w="100%"
        fontSize="18px!important"
        p={["10px 10px", "10px 50px", "10px 50px"]}
        bg="white"
        position="relative"
      >
        <Flex>
          <Box flex={1}>
            <Image
              h="36px"
              src={props.logoUrl}
              display={"inline-block"}
            />
          </Box>
          <Button
            bg="#FFF"
            ml={["1rem", "0rem", "0rem"]}
            mr={["0.5rem", "1rem", "1rem"]}
            p={["0rem 0.5rem"]}
          >
            Docs
          </Button>
          <Button bg="#FFF" mr={["0.5rem", "1rem", "1rem"]} p={["0rem 0.5rem"]}>
            Studio
          </Button>
          <Button colorScheme="brand" _hover={{ bg: "#000" }}>
            Get Started
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
