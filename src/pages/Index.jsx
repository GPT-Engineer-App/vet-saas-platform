import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaStethoscope, FaCalendarAlt, FaChartBar, FaUserMd } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Box as="nav" w="full" py={4} px={8} bg="white" boxShadow="sm" position="sticky" top={0} zIndex={3}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              VetSaaS
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="/login">Log In</Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="gray.50" py={20}>
          <VStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBhdCUyMHdvcmt8ZW58MHx8fHwxNzE1NDQ1NjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="full" />
            <Heading as="h2" size="xl">
              Empowering Veterinarians with Smart Solutions
            </Heading>
            <Text fontSize="lg" textAlign="center">
              Streamline your veterinary practice with our all-in-one platform.
            </Text>
            <Button colorScheme="teal" size="lg">
              Request Demo
            </Button>
          </VStack>
        </Flex>

        {/* Features Section */}
        <Box id="features" py={10}>
          <Heading as="h3" size="lg" textAlign="center" mb={6}>
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} px={8}>
            <Feature icon={FaCalendarAlt} title="Appointment Scheduling" description="Efficiently manage your appointments with a few clicks." />
            <Feature icon={FaUserMd} title="Patient Records" description="Secure and easy access to all patient histories." />
            <Feature icon={FaChartBar} title="Analytics" description="Gain insights into your practice’s performance." />
            <Feature icon={FaStethoscope} title="Telemedicine" description="Consult remotely with integrated video calls." />
          </SimpleGrid>
        </Box>

        {/* Testimonials Section */}
        <Box id="testimonials" bg="gray.100" py={10}>
          <Heading as="h3" size="lg" textAlign="center" mb={6}>
            What Our Users Say
          </Heading>
          <Stack spacing={8} maxW="container.md" mx="auto" px={4}>
            <Testimonial text="VetSaaS has revolutionized how we manage our clinic. Highly recommended!" author="Dr. Jane Smith, DVM" />
            <Testimonial text="The analytics feature is a game changer for our practice." author="Dr. John Doe, Veterinary Specialist" />
          </Stack>
        </Box>

        {/* Pricing Section */}
        <Box id="pricing" py={10}>
          <Heading as="h3" size="lg" textAlign="center" mb={6}>
            Pricing Plans
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={8}>
            <PricingPlan name="Basic" price="29" features={["10 GB Storage", "Up to 2 Staff Accounts", "Basic Support"]} />
            <PricingPlan name="Professional" price="79" features={["50 GB Storage", "Up to 10 Staff Accounts", "Priority Support"]} recommended />
            <PricingPlan name="Enterprise" price="149" features={["Unlimited Storage", "Unlimited Staff Accounts", "24/7 Support"]} />
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.200" py={6}>
          <Flex justify="space-between" px={8}>
            <Text>&copy; {new Date().getFullYear()} VetSaaS. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

const Feature = ({ icon, title, description }) => (
  <VStack spacing={3}>
    <Box as={icon} size="40px" />
    <Text fontWeight="bold">{title}</Text>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

const Testimonial = ({ text, author }) => (
  <Box p={5} shadow="md" bg="white" borderRadius="md">
    <Text mb={4}>"{text}"</Text>
    <Text fontWeight="bold" textAlign="right">
      - {author}
    </Text>
  </Box>
);

const PricingPlan = ({ name, price, features, recommended }) => (
  <VStack bg="white" p={5} shadow="md" borderRadius="md" borderWidth={recommended ? "2px" : "1px"} borderColor={recommended ? "teal.500" : "gray.200"}>
    <Text fontWeight="bold" fontSize="xl">
      {name}
    </Text>
    <Text fontSize="2xl" fontWeight="bold">
      ${price}/mo
    </Text>
    <Stack spacing={2} align="stretch">
      {features.map((feature, index) => (
        <Text key={index}>&bull; {feature}</Text>
      ))}
    </Stack>
    {recommended && (
      <Text color="teal.500" fontWeight="bold">
        Most Popular!
      </Text>
    )}
  </VStack>
);

export default Index;
