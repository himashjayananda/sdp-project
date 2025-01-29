import {
  Button,
  Center,
  Divider,
  Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <Center h={"100vh"} bg={"gray"}>
      <Image
        src="assets/bg-login.jpg"
        alt="logo"
        style={{
          position: "absolute",
          opacity: 0.5,
          height: "100%",
        }}
      />
      <Paper
        maw={640}
        w={480}
        px="xl"
        py={"48px"}
        withBorder
        radius={20}
        style={{ zIndex: 10 }}
      >
        <Title mb={"xl"} ta={"center"}>
          Dispatcher Login
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Email"
            required
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Password"
            mt="lg"
            required
          />
          <Divider my={"xl"} />
          <Button type="submit" mt="xl" fullWidth color="teal">
            Submit
          </Button>
          <Text mt="md" ta={"center"} size="sm" c={"dimmed"}>
            Forgot Password?
          </Text>
        </form>
      </Paper>
    </Center>
  );
};

export default Login;
