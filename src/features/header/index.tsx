import { NavLink } from "react-router";
import clsx from "clsx";
import { Button, Flex, Title, useMantineTheme } from "@mantine/core";
import styles from "./header.module.css";

const Header = () => {
  const theme = useMantineTheme();

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      px={"xl"}
      py={"lg"}
      style={{ borderBottom: `1px solid ${theme.colors.gray[3]}` }}
    >
      <Flex align={"center"} gap={"xl"}>
        <Title order={3}>Dispatcher Portal</Title>
        <Flex gap={"md"}>
          <NavLink
            to={"/shipments"}
            className={({ isActive }) =>
              clsx(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Shipments
          </NavLink>
          <NavLink
            to={"/reports"}
            className={({ isActive }) =>
              clsx(styles.navLink, isActive && styles.navLinkActive)
            }
          >
            Reports
          </NavLink>
        </Flex>
      </Flex>
      <Button color="teal" variant="light">
        Logout
      </Button>
    </Flex>
  );
};

export default Header;
