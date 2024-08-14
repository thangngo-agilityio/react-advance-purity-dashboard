import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

// Components
import SignInPage from "..";


// Mocks
import { USER } from "@/lib/mocks";

jest.mock('@/lib/hooks', () => ({
  useAuthLogin: () => ({
    users: USER,
  }),
}));

const mockAuthStore = jest.fn()
jest.mock('@/lib/stores', () => ({
  authStore: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

const mockToast = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: () => mockToast,
}));


describe('Sign In page', () => {

  const mockSetUser = jest.fn();

  beforeEach(() => {
    // Mock authStore implementation
    mockAuthStore.mockReturnValue({
      setUser: mockSetUser,
    });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render match with snapshot.', () => {
    const { container } = render(
      <SignInPage />
    );

    expect(container).toMatchSnapshot();
  });
})
