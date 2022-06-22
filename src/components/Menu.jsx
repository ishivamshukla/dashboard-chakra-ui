import React from "react";
import { Box ,
         Tab,
          Tabs,
          TabList,
          TabPanel,
          TabPanels,
  } from "@chakra-ui/react";

function Menu() {
  return (
    <Box>
    <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Menu</Tab>
    <Tab _selected={{ color: 'white', bg: 'black' }}>Reviews</Tab>
    <Tab>Info</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>Menu</p>
    </TabPanel>
    <TabPanel>
      <p>Reviews</p>
    </TabPanel>
    <TabPanel>
      <p>Info</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  )
}

export default Menu;
