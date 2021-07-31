import { NextPage } from 'next'
import { FC, ReactNode } from 'react'
import NavBar from '../components/header'
import Image from 'next/image'
import {
  Box, 
  Text,
  Flex,
  Heading,
  Circle
} from '@chakra-ui/react'

interface ListItemInterface {
  id: number,
  title: string,
  children: ReactNode
}

const ListItem: FC<ListItemInterface> = ({ id, title, children }) => {
  return (
    <Box w="full" h="min-content">
      <Flex alignContent="center">
        <Circle size="60px" bg="brand.100" color="white">
          <Text fontSize="28px">{ id }</Text>
        </Circle>
        <Text color="white" fontSize="36" ml="6" mt="1">{ title }</Text>
      </Flex>
      <Box mt="4" ml="2">
        { children }
      </Box>
      <Box h="16"></Box>
    </Box>
  )
}

const Landing: FC = () => {
  return (
    <Box backgroundColor="#1b202b" w="100%" h="full" px="14" pb="20">
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        color={'brand.100'}
        pt="50"
        textDecoration="underline"
      >
        Add Extension to Chrome<br />
      </Heading>
      <Box h="5vh"></Box>
      <ListItem id={1} title="Unzip">
        <Text color="white" fontSize="20px">- Unzip chrome extension folder downloaded from download page</Text>
        <Text color="white" fontSize="20px" mt="1">- Remember and verify the location of the unzipped folder</Text>
      </ListItem>

      <ListItem id={2} title="Chrome Settings">
        <Text color="white" fontSize="20px">Open Chrome Settings</Text>
        <Box mt="5">
          <Image src="/settings.png" width="750vh" height="500vh"></Image>
        </Box>
      </ListItem>

      <ListItem id={3} title="Extensions">
        <Text color="white" fontSize="20px">Open Extensions Tab</Text>
        <Box mt="5">
          <Image src="/extensions.png" width="250vh" height="500vh"></Image>
        </Box>
      </ListItem>

      <ListItem id={4} title="Enable Developer Mode">
        <Text color="white" fontSize="20px">Go to the upper right hand corner and switch Developer Mode on</Text>
        <Box mt="5">
          <Image src="/developer_mode.png" width="1000vh" height="50vh"></Image>
        </Box>
      </ListItem>

      <ListItem id={5} title="Load the extension">
        <Text color="white" fontSize="20px">Select the "Load Unpacked" button and select the extensions folder unzipped in step 1</Text>
        <Box mt="5">
          <Image src="/load.png" width="200vh" height="75vh"></Image>
        </Box>
      </ListItem>
    </Box>
  );
}

const Extension: NextPage = () => {
  return (
    <>
      <NavBar />
      <Landing />
    </>
  );
}

export default Extension;