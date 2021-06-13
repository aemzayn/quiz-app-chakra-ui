import { useContext } from "react";
import Link from "next/link";
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

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title = "Create a new game" }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme, changeColorTheme } = useContext(
    ColorSchemeContext
  ) as IColorSchemeType;

  let colorName = colorScheme?.charAt(0).toUpperCase() + colorScheme?.substr(1);

  return (
    <Flex justifyContent="space-between">
      <Heading size="md">{title}</Heading>
      <Flex>
        <Button onClick={changeColorTheme} size="sm" colorScheme={colorScheme}>
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
  );
};

export default Header;
