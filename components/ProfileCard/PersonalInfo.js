"use client";

import { Text, Box, Heading } from "@chakra-ui/react";

// eslint-disable-next-line
export default ({ name, role, location, registeredDate }) => {
  return (
    <Box>
      <Heading as="h1" size="md" textTransform="capitalize">
        {name}
      </Heading>
      <Text pt="2" fontSize="sm">
        {role}
      </Text>
      <Text pt="2" fontSize="sm">
        {location}
      </Text>
      <Text pt="2" fontSize="sm">
        {registeredDate}
      </Text>
    </Box>
  );
};
