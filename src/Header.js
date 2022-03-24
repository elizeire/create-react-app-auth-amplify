import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
    const { tokens } = useTheme();

    return (
        <Flex justifyContent="center">
            <Image
                alt="logo"
                src="https://www.senorics.com/hs-fs/hubfs/Logo/senorics_logo_RGB.png?width=2544&name=senorics_logo_RGB.png"
                padding={tokens.space.medium}
            />
        </Flex>
    );
}
