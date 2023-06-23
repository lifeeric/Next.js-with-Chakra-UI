"use client";

import { Square, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

// eslint-disable-next-line
export default ({ active }) => {
  return (
    <Square size="150px" alignItems={"flex-start"} mt={5}>
      <Button leftIcon={<EditIcon />} variant="outline">
        {active}
      </Button>
    </Square>
  );
};
