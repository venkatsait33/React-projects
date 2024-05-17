import {
  Box,
  Button,
  Input,
  Select,
  Checkbox,
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  Th,
  Thead,
  TableContainer,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { INITIAL_STATE, formReducer } from "./FormReducer";

const UserRow = ({ name, gender, role, maritalStatus, serialNo }) => (
  <>
    <Tr>
      <Td>{serialNo}</Td>
      <Td>{name}</Td>
      <Td>{gender}</Td>
      <Td>{role}</Td>
      <Td>{maritalStatus ? "married" : "unmarried"}</Td>
    </Tr>
  </>
);

const LoginForm = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <Box
      display="flex"
      gap="4"
      mt="2"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      justifyContent="center"
      flexDir="column"
      maxW="960px"
      mx="auto"
      bg="slateblue"
      textColor="white"
    >
      <Heading textColor="white" mb="2" textAlign="center">
        Login Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <span>
          Name
          <Input
            type="text"
            placeholder="Enter your name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
            mb="2"
          />
        </span>

        <span>
          Gender
          <Select
            value={state.gender}
            onChange={(e) =>
              dispatch({ type: "UPDATE_GENDER", payload: e.target.value })
            }
            mb="2"
          >
            <option style={{ background: "slateblue", color: "white" }}>
              Male
            </option>
            <option style={{ background: "slateblue", color: "white" }}>
              Female
            </option>
            <option style={{ background: "slateblue", color: "white" }}>
              Prefer Not to Say
            </option>
          </Select>
        </span>
        <span>
          Role{" "}
          <Select
            value={state.role}
            onChange={(e) =>
              dispatch({ type: "UPDATE_ROLE", payload: e.target.value })
            }
            mb="2"
          >
            <option style={{ background: "slateblue", color: "white" }}>
              FrontEnd Developer
            </option>
            <option style={{ background: "slateblue", color: "white" }}>
              BackEnd Developer
            </option>
            <option style={{ background: "slateblue", color: "white" }}>
              FullStack Developer
            </option>
          </Select>
        </span>

        <Checkbox
          isChecked={state.maritalStatus}
          onChange={() => dispatch({ type: "TOGGLE_MARITAL_STATUS" })}
        >
          Married
        </Checkbox>
        <Box marginTop="4" display="flex" gap="3" justifyContent="center">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleReset} marginLeft="2">
            Reset
          </Button>
        </Box>
      </form>
      {submittedData.length === 0 ? (
        <Box
          data-testid="no-user-container"
          mt="3"
          color="white"
          textAlign="center"
        >
          no users found
        </Box>
      ) : (
        <TableContainer border="1px solid white" mt="3" borderRadius="10px">
          <Table marginTop="4" variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th style={{ color: "white" }}>S.No</Th>
                <Th style={{ color: "white" }}>Name</Th>
                <Th style={{ color: "white" }}>Gender</Th>
                <Th style={{ color: "white" }}>Role</Th>
                <Th style={{ color: "white" }}>Marital Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {submittedData.map((user, index) => (
                <UserRow key={index} {...user} serialNo={index + 1} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default LoginForm;
