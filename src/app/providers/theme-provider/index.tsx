import { createTheme, MantineProvider } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
