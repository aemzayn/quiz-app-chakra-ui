import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { ColorSchemeContext } from "../context/ColorScheme";
import {
  Flex,
  Heading,
  Button,
  IconButton,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { HiMoon, HiSun, HiHome } from "react-icons/hi";
import { IColorSchemeType } from "../interfaces/IColorScheme";
import theme from "../theme";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title = "Create a new game" }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme, changeColorTheme } = useContext(
    ColorSchemeContext
  ) as IColorSchemeType;

  let colorName = colorScheme?.charAt(0).toUpperCase() + colorScheme?.substr(1);
  const themeColor =
    Object.entries(theme.colors).find(
      (color) => color[0] === colorScheme
    )![1]![500] || "#1a202c";

  return (
    <>
      <Head>
        <meta name="theme-color" content={themeColor} />
      </Head>
      <Flex justifyContent="space-between">
        <Heading size="md">{title}</Heading>
        <Flex>
          <Button
            onClick={changeColorTheme}
            size="sm"
            colorScheme={colorScheme}
          >
            {colorName}
          </Button>
          <IconButton
            aria-label="Theme toggler"
            size="sm"
            ml={2}
            colorScheme={colorScheme}
            onClick={toggleColorMode}
            icon={<Icon as={colorMode === "dark" ? HiSun : HiMoon} />}
          />
          <Link href="/">
            <IconButton
              as="a"
              aria-label="Home button"
              size="sm"
              cursor="pointer"
              ml={2}
              colorScheme={colorScheme}
              icon={<Icon as={HiHome} />}
            />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
