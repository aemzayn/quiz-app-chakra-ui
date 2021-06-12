import { useContext } from "react";
import { ColorSchemeContext } from "../context/ColorScheme";
import {
  Flex,
  Heading,
  Button,
  IconButton,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ColorSchemeType } from "../interfaces";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title = "Create a new game" }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorScheme, changeColorTheme } = useContext(
    ColorSchemeContext
  ) as ColorSchemeType;

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
          icon={
            <Icon
              onClick={toggleColorMode}
              as={colorMode === "dark" ? HiSun : HiMoon}
            />
          }
        />
      </Flex>
    </Flex>
  );
};

export default Header;
