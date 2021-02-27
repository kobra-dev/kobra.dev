import { Box, Button, Flex, Image, Link, Stack } from '@chakra-ui/react';
import { NavbarDataFragment } from '../src/generated/queries';

const NavbarButton = (props: { isBrand: boolean; children: React.ReactNode }) =>
    props.isBrand ? (
        <Button colorScheme="brand" _hover={{ bg: '#000' }}>
            {props.children}
        </Button>
    ) : (
        <Button bg="#FFF" p={['0rem 0.5rem']} variant="ghost">
            {props.children}
        </Button>
    );

export default function NavBar(props: NavbarDataFragment) {
    return (
        <div>
            <Box
                w="100%"
                fontSize="18px!important"
                p={['10px 10px', '10px 50px', '10px 50px']}
                bg="white"
                position="relative"
            >
                <Flex>
                    <Box flex={1}>
                        <Image
                            h="36px"
                            src={props.logo.url ?? ''}
                            display={'inline-block'}
                        />
                    </Box>
                    <Stack
                        ml={['1rem', '0rem', '0rem']}
                        spacing={['0.5rem', '1rem', '1rem']}
                        direction="row"
                    >
                        {props.buttonsCollection.items.map((button, index) => (
                            <Link
                                key={index}
                                href={button.texturlPair.url.value}
                            >
                                <NavbarButton
                                    isBrand={button.isBrandColorBackground}
                                >
                                    {button.texturlPair.text}
                                </NavbarButton>
                            </Link>
                        ))}
                    </Stack>
                </Flex>
            </Box>
        </div>
    );
}
