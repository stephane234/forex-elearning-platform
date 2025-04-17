import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Progress,
  Stack,
  Badge,
  Button,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';

const CourseProgressCard = ({ courseId }: { courseId: string }) => {
  const course = courses.find((c) => c.id === courseId);
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');

  if (!course) return null;

  // Mock progress - in a real app, this would come from a backend
  const progress = Math.floor(Math.random() * 100);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'green';
      case 'intermediate':
        return 'orange';
      case 'advanced':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
      transition="all 0.3s"
    >
      <Stack spacing={4}>
        <Box>
          <HStack spacing={2} mb={2}>
            <Badge colorScheme={getLevelColor(course.level)}>
              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
            </Badge>
            {course.isAIGenerated && (
              <Badge colorScheme="purple">AI Generated</Badge>
            )}
          </HStack>
          <Heading size="md" mb={2}>
            {course.title}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')} noOfLines={2}>
            {course.description}
          </Text>
        </Box>

        <Box>
          <Text mb={2}>Progress: {progress}%</Text>
          <Progress value={progress} colorScheme="blue" borderRadius="full" />
        </Box>

        <Button
          colorScheme="blue"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          Continue Learning
        </Button>
      </Stack>
    </Box>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Container maxW="container.xl" py={8}>
        <Heading>Please sign in to view your dashboard</Heading>
      </Container>
    );
  }

  const purchasedCourses = user.purchasedCourses || [];
  const recommendedCourses = courses
    .filter((course) => !purchasedCourses.includes(course.id))
    .slice(0, 3);

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={8}>
        <Box>
          <Heading mb={2}>Welcome back, {user.displayName}!</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Continue your forex trading journey
          </Text>
        </Box>

        {purchasedCourses.length > 0 ? (
          <Box>
            <Heading size="lg" mb={4}>
              Your Courses
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {purchasedCourses.map((courseId) => (
                <CourseProgressCard key={courseId} courseId={courseId} />
              ))}
            </SimpleGrid>
          </Box>
        ) : (
          <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue('white', 'gray.800')}
            textAlign="center"
          >
            <Text fontSize="lg" mb={4}>
              You haven't purchased any courses yet
            </Text>
            <Button
              colorScheme="blue"
              onClick={() => navigate('/courses')}
            >
              Browse Courses
            </Button>
          </Box>
        )}

        {recommendedCourses.length > 0 && (
          <Box>
            <Heading size="lg" mb={4}>
              Recommended Courses
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {recommendedCourses.map((course) => (
                <Box
                  key={course.id}
                  bg={useColorModeValue('white', 'gray.800')}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={6}
                >
                  <Stack spacing={4}>
                    <Heading size="md">{course.title}</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.400')}>
                      {course.description}
                    </Text>
                    <Button
                      colorScheme="blue"
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default Dashboard; 