import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
function Problem_12() {
  return (
    <>
      <ChakraProvider>
        <LoginForm />
      </ChakraProvider>
    </>
  );
}

export default Problem_12;
