import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
  useColorModeValue,
  HStack,
  Tag,
  AspectRatio,
  useToast,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';

const CoursePage = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Container maxW="container.xl" py={8}>
        <Heading>Course Not Found</Heading>
      </Container>
    );
  }

  const hasPurchased = user?.purchasedCourses.includes(course.id);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      // Here you would integrate with Stripe or another payment provider
      // For now, we'll just show a success message
      toast({
        title: 'Purchase Successful',
        description: 'You now have access to this course.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Purchase Failed',
        description: 'There was an error processing your payment.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

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
    <Container maxW="container.xl" py={8}>
      <Stack spacing={8}>
        <Box>
          <HStack spacing={2} mb={4}>
            <Badge colorScheme={getLevelColor(course.level)}>
              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
            </Badge>
            {course.isAIGenerated && (
              <Badge colorScheme="purple">AI Generated</Badge>
            )}
          </HStack>
          <Heading mb={4}>{course.title}</Heading>
          <Text
            fontSize="xl"
            color={useColorModeValue('gray.600', 'gray.400')}
            mb={4}
          >
            {course.description}
          </Text>
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={useColorModeValue('white', 'gray.800')}
        >
          <AspectRatio ratio={16 / 9}>
            {hasPurchased ? (
              <iframe
                title={course.title}
                src={course.videoUrl}
                allowFullScreen
              />
            ) : (
              <iframe
                title={`${course.title} Preview`}
                src={course.previewUrl}
                allowFullScreen
              />
            )}
          </AspectRatio>
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'stretch', md: 'center' }}
          spacing={4}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.800')}
        >
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              ${course.price}
            </Text>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              Course Duration: {course.duration}
            </Text>
          </Box>
          {!hasPurchased && (
            <Button
              colorScheme="blue"
              size="lg"
              onClick={handlePurchase}
              isLoading={loading}
            >
              Purchase Course
            </Button>
          )}
        </Stack>

        <Box>
          <Heading size="md" mb={4}>
            Topics Covered
          </Heading>
          <HStack spacing={2} flexWrap="wrap">
            {course.topics.map((topic, index) => (
              <Tag key={index} size="lg" colorScheme="blue" m={1}>
                {topic}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default CoursePage; 