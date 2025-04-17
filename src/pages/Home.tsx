import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaChartLine, FaGraduationCap, FaRobot } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  return (
    <Stack align="center" textAlign="center">
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{text}</Text>
    </Stack>
  );
};

const Home = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container maxW="container.xl" py={20}>
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            textAlign="center"
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight="110%"
            >
              Master Forex Trading{' '}
              <Text as="span" color="blue.500">
                with Confidence
              </Text>
            </Heading>
            <Text
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="3xl"
              fontSize="xl"
            >
              Learn forex trading from beginner to advanced levels with our
              comprehensive video courses. Get access to expert knowledge and
              AI-generated content to accelerate your trading journey.
            </Text>
            <Stack spacing={6} direction={{ base: 'column', sm: 'row' }}>
              {user ? (
                <Button
                  as={RouterLink}
                  to="/courses"
                  colorScheme="blue"
                  size="lg"
                  px={8}
                >
                  Browse Courses
                </Button>
              ) : (
                <Button
                  as={RouterLink}
                  to="/signup"
                  colorScheme="blue"
                  size="lg"
                  px={8}
                >
                  Get Started
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={FaChartLine}
            title="Expert Trading Knowledge"
            text="Learn from experienced traders and gain insights into successful trading strategies."
          />
          <Feature
            icon={FaGraduationCap}
            title="Structured Learning Path"
            text="Progress from basic concepts to advanced trading techniques with our organized curriculum."
          />
          <Feature
            icon={FaRobot}
            title="AI-Enhanced Content"
            text="Access AI-generated content that complements expert tutorials and covers essential trading topics."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home; 