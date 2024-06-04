import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#f3f2ef">
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
              World
            </Link>
            <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Business
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Opinion
            </Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Tech
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Headline News Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>
            Headline News
          </Heading>
          <Box mb={8}>
            <Heading as="h3" size="md" mb={2}>
              Major Event Shakes the World
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box mb={8}>
            <Heading as="h3" size="md" mb={2}>
              Economic Trends to Watch
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </Box>

        {/* Sidebar for Trending Topics */}
        <Box flex="1" bg="#f3f2ef" p={4} borderRadius="md">
          <Heading as="h3" size="lg" mb={4}>
            Trending Topics
          </Heading>
          <VStack align="start" spacing={4}>
            <Text>#Economy</Text>
            <Text>#Politics</Text>
            <Text>#Technology</Text>
            <Text>#Health</Text>
            <Text>#Environment</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="#f3f2ef" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>
              About
            </Link>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;