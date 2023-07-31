import React from 'react'
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Login from "../src/components/Authentication/Login";
import Signup from "../src/components/Authentication/Signup";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box d="flex"
        justifyContent={"center"}
        p={3}
        bg={'white'}
        m="40px 0 15px 0"
        w="100%"
        borderRadius={"1g"}
        borderWidth={"1px"}
    >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} >
          Let's Engage in talk
        </Text>
      </Box>
    <Box d="flex"
        justifyContent={"center"}
        p={4}
        bg={'white'}
        m="40px 0 15px 0"
        w="100%"
        borderRadius={"1g"}
        borderWidth={"1px"}
      ><Tabs variant='soft rounded'>
  <TabList mb="1em">
    <Tab width ="50%">Login</Tab>
    <Tab  width ="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs></Box></Container>
  )
}

export default Homepage
