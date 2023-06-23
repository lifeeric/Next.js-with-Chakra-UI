"use client";

import { Card, CardBody, Flex } from "@chakra-ui/react";

// eslint-disable-next-line
export default ({ children }) => {
  return (
    <Card>
      <CardBody>
        <Flex>
          {children}
        </Flex>
      </CardBody>
    </Card>
  );
};
