import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  Button,
  Stack,
  useColorModeValue,
  Select,
  HStack,
  Tag,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { Course } from '../types';

const CourseCard = ({ course }: { course: Course }) => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');

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

        <HStack spacing={2}>
          {course.topics.slice(0, 2).map((topic, index) => (
            <Tag key={index} size="sm" colorScheme="blue">
              {topic}
            </Tag>
          ))}
          {course.topics.length > 2 && (
            <Tag size="sm" colorScheme="gray">
              +{course.topics.length - 2} more
            </Tag>
          )}
        </HStack>

        <Stack
          direction="row"
          justify="space-between"
          align="center"
          pt={2}
        >
          <Text fontWeight="bold" fontSize="xl">
            ${course.price}
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            {course.duration}
          </Text>
        </Stack>

        <Button
          colorScheme="blue"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          View Course
        </Button>
      </Stack>
    </Box>
  );
};

const CourseLibrary = () => {
  const [level, setLevel] = useState<string>('all');
  const [sort, setSort] = useState<string>('default');

  const filteredCourses = courses
    .filter((course) => level === 'all' || course.level === level)
    .sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={8}>
        <Box>
          <Heading mb={4}>Course Library</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Browse our collection of forex trading courses
          </Text>
        </Box>

        <HStack spacing={4}>
          <FormControl w="200px">
            <FormLabel htmlFor="level-filter">Level</FormLabel>
            <Select
              id="level-filter"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </FormControl>

          <FormControl w="200px">
            <FormLabel htmlFor="sort-order">Sort By</FormLabel>
            <Select
              id="sort-order"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title">Title</option>
            </Select>
          </FormControl>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default CourseLibrary; 