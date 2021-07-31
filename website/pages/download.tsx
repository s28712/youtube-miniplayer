import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Landing: FC = () => {

  function downloadApplication() {
    const osList: Array<string> = ['Windows', 'Linux', 'Mac']; 
    const os: string = osList.find((v) => navigator.appVersion.indexOf(v) >= 0);

    if(os == 'Windows') {
      window.location.href = "/yt-windows.exe";
    }

    else if(os == 'Mac') {
      window.location.href = "/yt-mac.dmg";
    }

    else if(os == 'Linux') {
      window.location.href = "/yt-linux.AppImage";
    }

    else {}
  }

  function downloadExtension() {
    window.location.href = "/yt-extension.zip";
  }

  return (
    <Box backgroundColor="#1b202b" w="100%" h="full" px="32" pb="20">
      <Flex w="full" h="" justifyContent="center" alignContent="center">
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
      </Flex>

      <Flex justifyContent={{ base: 'center', md: 'space-evenly' }} alignContent="center" pt="20" direction={{ base: 'column', md: 'row' }}>
        <Box w="50vh">
          <Flex justifyContent="center" pr="5">
            <Image src="/browser.svg" width="300vh" height="300vh" />
          </Flex>
          <Heading color={'brand.100'} fontSize="24px" textAlign="center">Download Chrome Extension</Heading>
          <Flex justifyContent="center" pt="5">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'brand'}
              bg={'brand.100'}
              _hover={{ bg: 'brand.500' }}
              onClick={downloadExtension}>
              Download
            </Button>
          </Flex>
          <Flex justifyContent="center" mt="4">
            <Link href="/extension">
              <Text 
                cursor="pointer"
                textAlign="center" 
                color="gray.600" 
                _hover={{ color: "gray.500", textDecoration: "underline" }}
              >
                Add extension to chrome
              </Text>
            </Link>
          </Flex>
        </Box>

        <Flex w="20" h={{ base: '0px', md: '65vh' }} justifyContent="center" alignContent="center">
          <Box w={{ base: '0px', md: '2px' }} h="full" backgroundColor="lightgray"></Box>
        </Flex>
        
        <Box w="50vh">
          <Flex justifyContent="center" pr="5">
            <Image src="/computer.svg" width="300vh" height="300vh" />
          </Flex>
          <Heading color={'brand.100'} fontSize="24px" textAlign="center">Download Application</Heading>
          <Flex justifyContent="center" pt="5">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'brand'}
              bg={'brand.100'}
              _hover={{ bg: 'brand.500' }}
              onClick={downloadApplication}>
              Download
            </Button>
          </Flex>
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