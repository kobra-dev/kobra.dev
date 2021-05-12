import { IconProps } from "@chakra-ui/icon";
import { Icon } from "@chakra-ui/react";

export type FACollection = "brands" | "regular" | "solid";

interface FontAwesomeIconProps extends IconProps {
    collection?: FACollection,
    name: string
}

export const getFaUrl = (name: string, collection?: string) => `https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@master/svgs/${collection ?? "solid"}/${name}.svg`;

// Unfortunately this method means that we can't change the color of the icon normally
export default function FontAwesomeIcon(props: FontAwesomeIconProps) {
    // Remove collection and name from props
    const { collection, name, ...otherProps } = props;

    return (
        <Icon viewBox="0 0 200 200" {...otherProps}>
            <image xlinkHref={getFaUrl(name, collection)} width="200" height="200"/>
        </Icon>
    );
}