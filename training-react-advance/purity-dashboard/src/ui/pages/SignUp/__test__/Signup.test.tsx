import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

// Components
import SignUpPage from "..";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockCreateAccount = jest.fn()

jest.mock('@/lib/hooks', () => ({
  useAuthRegister: () => ({
    createAccount: mockCreateAccount,
  }),
}));

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

const queryClient = new QueryClient();
describe('Sign Up page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render match with snapshot.', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <SignUpPage />
      </QueryClientProvider>
    );

    expect(container).toMatchSnapshot();
  });
})
