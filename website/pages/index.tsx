import { NextPage } from 'next'
import { FC, ReactElement, useRef } from 'react'
import { FastSVG, SimpleSVG, FeatureSVG } from '../components/svg'
import Link from 'next/link'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  SimpleGrid,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';


interface LandingProps {
  scrollToFeature: any
}


const Landing: FC<LandingProps> = ({ scrollToFeature }) => {

  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}
      h='100vh'
      w="full"
      px={10}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            textColor={'gray.200'}
            align="center"
          >
            YT Miniplayer,
          </Text>
          <br />
          <Text as={'span'} color={'brand.400'}>
            simple as ever!
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          The YT Miniplayer is a better, more intuitive youtube miniplayer. The current inbuilt miniplayer 
          is old news, time for the future!
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}>
          <Link href="/download">
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'brand'}
              bg={'brand.100'}
              _hover={{ bg: 'brand.500' }}>
              Get Started
            </Button>
          </Link>
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            onClick={scrollToFeature}
           >
            More Details
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={{ md: 'flex-end', base: 'center' }}
        ml={2}
        align={'center'}
        position={'relative'}
        w={'full'}
       >
        <Image
          alt={'Main Image'}
          fit={'cover'}
          align={'center'}
          p={0}
          mr={{md: 8, base: 0}}
          w={'70%'}
          h={'100%'}
          src={
            '/logo.png'
          }
        />
      </Flex>
    </Stack>
  );
}

interface FeatureProps {
  title: string;
  text: string;
  icon: React.FunctionComponent;
}

const Feature: FC<FeatureProps> = ({ title, text, icon }) => {

  function currIcon() {
    if(icon === FastSVG) {
      return <FastSVG />
    }

    else if(icon === SimpleSVG) {
      return <SimpleSVG />
    }

    else {
      return (
        <Flex justify="center" align="center" w='full' h='full'>
          <Box w='80%'>
            <FeatureSVG />
          </Box>
        </Flex>
      );
    }
  }

  return (
    <Box w="full">
      <Flex w="full" justify="center">
        <Box w='15vh' h='15vh' bg={'white'} rounded="full">{ currIcon() }</Box>
       </Flex>
      <Heading textAlign="center" textColor="white" mt="6">{ title }</Heading>
      <Text textAlign="center" textColor="gray.400" mt="1">{ text }</Text>
    </Box>
  );
};

const Features: FC = () => {
  return (
    <Box p={4} bg="gray.700" w="full" h="full" py={20}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          title={'Fast'}
          text={
            'Using the extension that you add to your browser, having a youtube miniplayer has never been easier. Just one tap, and presto, the miniplayer starts.'
          }
          icon={FastSVG}
        />
        <Feature
          title={'Simple'}
          text={
            'When it comes to installing the application, it could not be easer. Go to the download page to download the application and add the extension. That\'s it.'
          }
          icon={SimpleSVG}
        />
        <Feature
          title={'Featurific'}
          text={
            'With features on par with the inbuilt miniplayer in the browser, along with many more rich features such as URL play, the YT Miniplayer is an easy choice for anyone'
          }
          icon={FeatureSVG}
        />
      </SimpleGrid>
    </Box>
  );
}

const Ending: FC = () => {
  return (
    <Box w="full" h="60vh" py={10}>
      <Heading textColor="white" textAlign="center" fontSize="6xl">What are you Waiting For?</Heading>
      <Text textColor={'brand.100'} textAlign="center" fontSize="3xl" mt="1">Download Today!</Text>
      <Flex justify="center" align="center" h="50%">
        <Link href="/download">
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'brand'}
            bg={'brand.100'}
            _hover={{ bg: 'brand.500' }}>
            Get Started
          </Button>
        </Link>
       </Flex>
    </Box>
  );
}

const Index: NextPage = () => {
  const featureRef = useRef(null);

  function scrollToFeature() {
    featureRef ? featureRef.current.scrollIntoView({ behavior: 'smooth' }) : {};
  }

  return (
    <Box bg={'gray.800'} w='full' h='full'>
      <Landing scrollToFeature={scrollToFeature} />
      <div ref={featureRef}>
        <Features />
      </div>
      <Ending />
    </Box>
  );
}

export default Index;