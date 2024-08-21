import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useCallback, useMemo, useState } from 'react';

// Components
import Header from '@/ui/components/Header';
import {
  FetchingModal,
  Modal,
  ProjectForm,
  Switch,
  CardInfor,
  InforItem,
  CardProject,
  UserForm,
  ProjectDetail,
  Fetching,
} from '@/ui/components';
import {
  EditIcon,
  LineIcon,
  OverviewIcon,
  ProjectIcon,
  TeamIcon,
} from '@/ui/icons';
import Avatar from '@/ui/components/common/Avatar';

// Hooks
import {
  TProjectResponse,
  TUserRecordResponse,
  useProject,
  useUpdateUser,
} from '@/lib/hooks';

// Constants
import { ROUTES } from '@/lib/constants';

// Stores
import { authStore } from '@/lib/stores';

// Types
import { TRecordProject, TRecordUser } from '@/lib/types';
import { SUCCESS_MESSAGE } from '@/lib/constants/message';

const ProfilePage = () => {
  const [isProjectId, setIsProjectId] = useState('')
  const [isOpenModalDetail, setModalDetail] = useState(false);

  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenModal, onToggle: setIsOpenModal } = useDisclosure();

  const user = authStore((state) => state.user);
  const setUser = authStore((state) => state.setUser);
  const toast = useToast();

  const { projectData, projectId, createProject, isFetching, loadingProjectId } = useProject(isProjectId);
  const { updateUser } = useUpdateUser();

  const handleCreateProject = useCallback(async (data: TRecordProject) => {
    try {
      const payload = {
        records: [
          {
            fields: {
              projectName: data.fields.projectName,
              budget: Number(data.fields.budget),
              avatar: data.fields.avatar,
              status: data.fields.status,
              completion: Number(data.fields.completion),
              image: data.fields.image,
              description: data.fields.description,
            },
          },
        ],
      };

      await createProject(payload as unknown as TProjectResponse);

      toast({
        title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Project'),
        description: SUCCESS_MESSAGE.PROJECT_SUCCESS,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const handleUpdateUser = useCallback(async (data: TRecordUser) => {
    try {
      const payload = {
        records: [
          {
            id: data.id,
            fields: {
              name: data.fields.name,
              email: data.fields.email,
              password: data.fields.password,
              avatar: data.fields.avatar,
              phone: data.fields.phone,
              location: data.fields.location,
            },
          },
        ],
      };

      setUser({ user: payload as unknown as TRecordUser });
      await updateUser(payload as unknown as TUserRecordResponse);

      toast({
        title: SUCCESS_MESSAGE.TITLE_MESSAGE_UPDATE('User'),
        description: SUCCESS_MESSAGE.USER_UPDATE,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const handleToggleModalDetail = () => {
    setModalDetail((prev) => !prev)
  }

  const handleClickDetail = (id: string) => {
    setIsProjectId(id)
    handleToggleModalDetail()
  };

  const handleSubmitProject = useCallback((data: TRecordProject) => {
    handleCreateProject(data);
  }, []);

  const handleSubmitUser = useCallback((data: TRecordUser) => {
    handleUpdateUser(data);
  }, []);

  const subHeader = useMemo(() => (
    <Stack
      p="16px"
      w={{ base: "90%", md: "97%" }}
      mb="-56px"
      flexDirection={{ base: 'column', md: 'row' }}
      borderRadius="lg"
      alignItems="center"
      bgGradient="linear(to-t, linear.300, linear.400)"
      justifyContent="space-between"
    >
      {
        <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Box position="relative" mb={{ base: "5px", md: "unset" }}>
            <Avatar
              width="80px"
              height="80px"
              src={`${user?.fields.avatar}`}
              alt={`${user?.fields.name}`}
            />
            <Flex
              w="26px"
              h="26px"
              borderRadius="8px"
              boxShadow="0 2px 5.5px 0 rgba(0, 0, 0, .06)"
              cursor="pointer"
              bgColor="background.100"
              position="absolute"
              bottom="-4px"
              right="-6px"
              alignItems="center"
              justifyContent="center"
              onClick={onToggle}
            >
              <EditIcon />
            </Flex>
          </Box>
          <VStack ml={{ base: "unset", md: "22px" }} alignItems={{ base: "center", md: "flex-start" }} gap={0}>
            <Heading size="lg">{user?.fields.name}</Heading>
            <Text variant="tertiary">{user?.fields.email}</Text>
          </VStack>
        </Flex>
      }

      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Button variant="iconTertiary" leftIcon={<OverviewIcon />}>
          OVERVIEW
        </Button>
        <Button variant="iconTertiary" leftIcon={<TeamIcon />}>
          TEAMS
        </Button>
        <Button variant="iconTertiary" leftIcon={<ProjectIcon />}>
          PROJECTS
        </Button>
      </Flex>
    </Stack>
  ), [user, onToggle])

  const cardInformation = useMemo(() => (
    <Grid w="100%" templateColumns={{ base: "", lg: "repeat(3, 1fr)" }} gap="24px" mb="24px">
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
  ), [user])

  return (
    <VStack mt="24px">
      <VStack
        w="100%"
        height="300px"
        bgImage="/imgs/background-profile.svg"
        bgRepeat='no-repeat'
        bgSize='cover'
        borderRadius="lg"
        justifyContent="space-between"
        mb={{ base: "130px", md: "74px" }}
      >
        <Header
          name="Profile"
          path={ROUTES.PROFILE}
          colorFill="text.100"
          colorIcon="#FFF"
        />
        {subHeader}
      </VStack>
      {cardInformation}
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
        <Grid w="100%" templateColumns={{ base: '', lg: "repeat(4, 1fr)" }} gap="24px">
          <GridItem>
            <VStack
              w="100%"
              h="342px"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.400"
              gap="10px"
              onClick={setIsOpenModal}
              justifyContent="center"
              opacity={1}
              cursor="pointer"
              transition=".2s"
              _hover={{
                opacity: 0.6,
              }}
            >
              <AddIcon />
              <Heading textAlign="center">Create a New Project</Heading>
            </VStack>
          </GridItem>
          {projectData.map((project) => (
            <FetchingModal isLoading={isFetching}>
              <GridItem>
                <CardProject
                  id={project.id}
                  key={project.fields.projectName}
                  image={project.fields.image}
                  name={project.fields.projectName}
                  projectId={project.fields._id}
                  description={project.fields.description}
                  onClick={handleClickDetail}
                />
              </GridItem>
            </FetchingModal>
          ))}
        </Grid>
      </VStack>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={setIsOpenModal}
          title="Add Project"
          haveCloseButton
          body={
            <ProjectForm
              onCloseModal={setIsOpenModal}
              onSubmit={handleSubmitProject}
            />
          }
        />
      )}

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="Update Profile"
          haveCloseButton
          body={
            <UserForm onCloseModal={onToggle} onSubmit={handleSubmitUser} />
          }
        />
      )}

      {isOpenModalDetail && (
        <Modal
          isOpen={isOpenModalDetail}
          onClose={handleToggleModalDetail}
          title="View Detail Project"
          haveCloseButton
          isProjectDetail
          body={
            <Fetching isLoading={loadingProjectId}>
              <ProjectDetail
                projectId={projectId?.fields._id}
                image={projectId?.fields.image}
                name={projectId?.fields.projectName}
                budget={projectId?.fields.budget}
                status={projectId?.fields.status}
                completion={projectId?.fields.completion}
                description={projectId?.fields.description}
              />
            </Fetching>
          }
        />
      )}
    </VStack>
  );
};

export default ProfilePage;
