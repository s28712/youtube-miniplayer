import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Download', 'Extension'];
const urls = ['/', '/download', '/extension'];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={link}>
    {children}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link href="/"><Image src="/logo.png" width="60vh" height="60vh"></Image></Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink link="/" key={'/'}>Home</NavLink>
              <NavLink link="/download" key={'/download'}>Download</NavLink>
              <NavLink link="/extension" key={'/extension'}>Extension</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {urls.map((url, idx) => (
                <NavLink link={url} key={url}>{Links[idx]}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default NavBar;