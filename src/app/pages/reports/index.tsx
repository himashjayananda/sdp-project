import { Flex, Title } from "@mantine/core";

const Reports = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"calc(100vh - 100px)"}
      direction={"column"}
    >
      <Title>Reports Page</Title>
      <Title order={3} mt={"lg"}>
        This page is under construction.
      </Title>
    </Flex>
  );
};

export default Reports;
