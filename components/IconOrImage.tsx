import { Image } from '@chakra-ui/react';
import { getSrcSetForContentfulUrl } from '../src/utils';
import { getFaUrl } from './FontAwesomeIcon';

interface IconOrImageProps {
    imageUrl?: string | null | undefined;
    faIconName?: string | null | undefined;
}

export default function IconOrImage(props: IconOrImageProps) {
    if (props.imageUrl) {
        return (
            <Image
                src={props.imageUrl}
                srcSet={getSrcSetForContentfulUrl(props.imageUrl)}
                rounded="1rem"
                shadow="xl"
            />
        );
    } else if (props.faIconName) {
        return (
            <Image
                src={getFaUrl(props.faIconName)}
                maxH="100px"
                filter="invert(0.5)"
                mb={4}
            />
        );
    }
    return <></>;
}
