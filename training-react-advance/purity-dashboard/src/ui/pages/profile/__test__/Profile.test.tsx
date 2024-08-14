import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "@chakra-ui/react";

// Components
import ProfilePage from "..";


// Mocks
import { PROJECT } from "@/lib/mocks";
import { theme } from "@/ui/themes";

const mockCreateProject = jest.fn()
const mockUpdateUser = jest.fn()

jest.mock('@/lib/hooks', () => ({
  useProject: () => ({
    projectData: PROJECT,
    isLoading: false,
    isFetching: false,
    createProject: mockCreateProject,
  }),
  useUpdateUser: () => ({
    updateUser: mockUpdateUser
  }),
}));

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

const mockToast = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: () => mockToast,
}));


describe('Profile page', () => {

  beforeEach(() => {
    jest.clearAllMocks();

  })
  test('Should render match with snapshot.', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ProfilePage />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

})
