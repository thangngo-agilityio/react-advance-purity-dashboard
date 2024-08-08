import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

// Components
import Header from '@/ui/components/Header';
import { Switch } from '@/ui/components';
import { LineIcon, OverviewIcon, ProjectIcon, TeamIcon } from '@/ui/icons';
import Avatar from '@/ui/components/common/Avatar';

// Constants
import { ROUTES } from '@/lib/constants';

// Stores
import { authStore } from '@/lib/stores';
import CardInfor from '@/ui/components/CardInfor';
import InforItem from '@/ui/components/InforItem';
import CardProject from '@/ui/components/CardProject';
import { useProject } from '@/lib/hooks';
import { AddIcon } from '@chakra-ui/icons';

const ProfilePage = () => {
  const user = authStore((state) => state.user);

  const { projectData } = useProject();

  return (
    <VStack mt="24px">
      <VStack
        w="100%"
        height="300px"
        bgImage="/public/imgs/background-profile.svg"
        borderRadius="lg"
        justifyContent="space-between"
        mb="74px"
      >
        <Header
          name="Profile"
          path={ROUTES.PROFILE}
          colorFill="text.100"
          colorIcon="#FFF"
        />

        <HStack
          p="16px"
          w="97%"
          mb="-56px"
          borderRadius="lg"
          alignItems="center"
          bgGradient="linear(to-t, linear.300, linear.400)"
          justifyContent="space-between"
        >
          {
            <Flex alignItems="center">
              <Avatar
                width="80px"
                height="80px"
                src={`${user?.fields.avatar}`}
                alt={`${user?.fields.name}`}
              />
              <VStack ml="22px" alignItems="flex-start" gap={0}>
                <Heading size="lg">{user?.fields.name}</Heading>
                <Text variant="tertiary">{user?.fields.email}</Text>
              </VStack>
            </Flex>
          }

          <Box>
            <Button variant="iconTertiary" leftIcon={<OverviewIcon />}>
              OVERVIEW
            </Button>
            <Button variant="iconTertiary" leftIcon={<TeamIcon />}>
              TEAMS
            </Button>
            <Button variant="iconTertiary" leftIcon={<ProjectIcon />}>
              PROJECTS
            </Button>
          </Box>
        </HStack>
      </VStack>

      <Grid w="100%" templateColumns="repeat(3, 1fr)" gap="24px" mb="24px">
        <GridItem>
          <CardInfor title="Platform Settings">
            <VStack alignItems="flex-start" gap="20px" mb="20px">
              <Heading color="text.400" fontSize="xs">
                ACCOUNT
              </Heading>
              <VStack gap="18px">
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone follows me"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone answers on my post"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone mentions me"
                />
              </VStack>
            </VStack>
            <VStack alignItems="flex-start" gap="20px">
              <Heading color="text.400" fontSize="xs">
                APPLICATION
              </Heading>
              <VStack gap="18px">
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="New launches and projects"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Monthly product updates"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Subscribe to newsletter"
                />
              </VStack>
            </VStack>
          </CardInfor>
        </GridItem>
        <GridItem>
          <CardInfor title="Profile Information">
            <VStack alignItems="flex-start" gap="30px">
              <Text>
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text>
              <LineIcon />
              <VStack alignItems="flex-start" gap="14px">
                <InforItem param="Full Name" content={user?.fields.name} />
                <InforItem param="Mobile" content={user?.fields.phone} />
                <InforItem param="Email" content={user?.fields.email} />
                <InforItem param="Location" content={user?.fields.location} />
                <InforItem param="Social Media" />
              </VStack>
            </VStack>
          </CardInfor>
        </GridItem>
        <GridItem>
          <CardInfor title="Conversations">
            <VStack alignItems="flex-start" gap="22px">
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">
                    Hi! I need more informations...
                  </Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">
                    Awesome work, can you change...
                  </Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">Have a great afternoon...</Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">About files I can...</Text>
                </VStack>
              </Flex>
            </VStack>
          </CardInfor>
        </GridItem>
      </Grid>

      <VStack
        w="100%"
        alignItems="flex-start"
        borderRadius="lg"
        px="22px"
        py="28px"
        bgColor="background.100"
      >
        <Box mb="24px">
          <Heading>Project</Heading>
          <Text>Architects design houses</Text>
        </Box>
        <Grid w="100%" templateColumns="repeat(4, 1fr)" gap="24px">
          {projectData.map((project, index) => (
            <GridItem>
              <CardProject
                projectNumber={index}
                src={`${project.fields.image}`}
                alt={`${project.fields.projectName}`}
                projectName={project.fields.projectName}
                description={project.fields.description}
              />
            </GridItem>
          ))}
          <GridItem>
            <VStack
              width="100%"
              height="100%"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.400"
              gap="10px"
              onClick={() => {}}
              justifyContent="center"
              opacity={1}
              cursor="pointer"
              transition=".2s ease-in-out"
              _hover={{
                opacity: 0.6,
              }}
            >
              <AddIcon />
              <Heading>Create a New Project</Heading>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
};

export default ProfilePage;