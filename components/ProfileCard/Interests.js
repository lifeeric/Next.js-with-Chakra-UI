"use client";

import {  Box, Heading, Badge } from "@chakra-ui/react";

// eslint-disable-next-line
export default ({ entries }) => {
  return (
    <Box mt={5}>
      <Heading as="h1" size="x" textTransform="capitalize">
        Interests
      </Heading>
      {entries.map(si =>
        <Badge key={si} mr={2} fontSize="0.8em" borderRadius={"full"} px={3}>
          {si}
        </Badge>
      )}
    </Box>
  );
};
