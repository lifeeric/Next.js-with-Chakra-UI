"use client";

import { Image, Avatar, AvatarBadge, Center } from "@chakra-ui/react";

// eslint-disable-next-line
export default ({ img }) => {
  return (
    <Center w="200px">
      <Avatar size="2xl" src={img} alt="Dan Abramov">
        <AvatarBadge
          boxSize="0.89em"
          bg="blue.300"
          icon="/verified.png"
          colorSchema="facebook"
        />
      </Avatar>
    </Center>
  );
};
