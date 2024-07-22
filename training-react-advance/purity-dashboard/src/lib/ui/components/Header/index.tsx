import { memo } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

// Component
import { LogoIcon } from "../../../icons";
import Navbar from "./NavbarItem";
import { Button } from "../common";


const Header = () => (
  <Flex>
    <Heading as='h1'>
      <LogoIcon />
    </Heading>
    <Box>
      <Navbar />
    </Box>

    <Box>
      <Button>
        Free Download
      </Button>
    </Box>
  </Flex>
)

export default memo(Header)
