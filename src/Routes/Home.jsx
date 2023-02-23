import { Link } from "react-router-dom";
import { Button, Box, Stack } from "@chakra-ui/react";
import { AddIcon, ViewIcon } from "@chakra-ui/icons";
function Home() {
  return (
    <Stack direction={"column"} mt={5}>
      <Box
        alignContent={"center"}
        display={"flex"}
        gap={5}
        width={"100%"}
        justifyContent={"center"}
      >
        <Link to={"/create"}>
          <Button colorScheme="whatsapp" variant="outline">
            <AddIcon boxSize={4} m={2} /> Create Task
          </Button>
        </Link>
        <Link to={"/task"}>
          <Button colorScheme="whatsapp" variant="outline">
            <ViewIcon boxSize={4} m={2} /> Show Task
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}

export { Home };
