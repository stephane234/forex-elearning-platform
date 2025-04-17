import { Box, Flex, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useAuth();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Flex align="center" mr={5}>
          <RouterLink to="/">
            <Heading as="h1" size="lg" letterSpacing="tight">
              ForexLearn
            </Heading>
          </RouterLink>
        </Flex>

        <Box display="flex" alignItems="center" gap={4}>
          {user ? (
            <>
              <Button as={RouterLink} to="/dashboard" variant="ghost">
                Dashboard
              </Button>
              <Button as={RouterLink} to="/courses" variant="ghost">
                Courses
              </Button>
              <Button onClick={signOut} colorScheme="red" variant="outline">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button as={RouterLink} to="/signin" variant="ghost">
                Sign In
              </Button>
              <Button as={RouterLink} to="/signup" colorScheme="blue">
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Flex>

      <Box as="main" p={4}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 