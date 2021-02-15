import { Image } from "@chakra-ui/react";

interface IconOrImageProps {
    imageUrl?: string | null | undefined, 
    faIconName?: string | null | undefined
}

const getFaUrl = (name: string) => `https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@master/svgs/solid/${name}.svg`;

export default function IconOrImage(props: IconOrImageProps) {
    if(props.imageUrl) {
        return <Image src={props.imageUrl} rounded="1rem" shadow="xl"/>;
    }
    else if(props.faIconName) {
        return <Image src={getFaUrl(props.faIconName)} maxH="100px" filter="invert(0.5)" mb={4}/>;
    }
    return <></>;
}