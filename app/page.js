"use client";

import { Box, Center } from "@chakra-ui/react";
import * as PIC from "@/components/";

export default function Home() {
  return (
    <Center mt={250}>
      <Box w={800}>
        <PIC.Card>
          <PIC.Avatar img="/dan-abramov.jpg" />
          <Box flex="1">
            <PIC.PersonalInfo
              name={"Samantha brooke"}
              role={"Creative Writer"}
              location={" Ontario, Canada"}
              registeredDate={" July, 2021"}
            />
            <PIC.Interests
              entries={["Productivity", "Work", "Business", "Woman"]}
            />
          </Box>
          <PIC.Buttons active={"Edit"} />
        </PIC.Card>
      </Box>
    </Center>
  );
}
