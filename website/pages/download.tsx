import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react'
import Image from 'next/image'

const Landing: FC = () => {
  return (
    <Box backgroundColor="#1b202b" w="100%" h="100vh" px="32">
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
        color={'brand.100'}
        textAlign="center"
        pt="50"
      >
        Download Today<br />
      </Heading>
      <Flex justifyContent="space-evenly" pt="20">
        <Box>
          <Image src="/browser.svg" width="300vh" height="300vh" />
        </Box>
        <Flex w="20" h="65vh" justifyContent="center" alignContent="center">
          <Box w="2px" h="full" backgroundColor="lightgray"></Box>
        </Flex>
        <Box>
          <Image src="/computer.svg" width="300vh" height="300vh" />
        </Box>
      </Flex>
    </Box>
  );
}


const Download = () => {
  return (
    <Landing />
  );
}

export default Download;