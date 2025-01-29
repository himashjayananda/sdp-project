import { Flex, Title } from "@mantine/core";

const NotFound = () => {
  return (
    <Flex justify={"center"} align={"center"} h={"100vh"} direction={"column"}>
      <Title order={1}>404 - Page Not Found</Title>
      <Title order={2} mt={"lg"} style={{ fontWeight: "400" }}>
        The page you are looking for does not exist.
      </Title>
    </Flex>
  );
};

export default NotFound;
