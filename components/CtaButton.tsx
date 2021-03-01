import { Button, Link } from '@chakra-ui/react';
import { TextUrlPairDataFragment } from '../src/generated/queries';

interface CtaButtonProps extends TextUrlPairDataFragment {
    [otherProp: string]: any;
}

export default function CtaButton(props: CtaButtonProps) {
    const { text, url, ...otherProps } = props;
    return (
        <Link href={url.value} style={{ textDecoration: 'none' }}>
            <Button
                color="white"
                colorScheme="teal"
                bg="brand.500"
                style={{ textDecoration: 'none' }}
                size="lg"
                {...otherProps}
            >
                {text}
            </Button>
        </Link>
    );
}
