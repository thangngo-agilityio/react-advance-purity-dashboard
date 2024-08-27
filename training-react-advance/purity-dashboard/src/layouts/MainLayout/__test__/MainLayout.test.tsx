import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
import MainLayout from ".."

jest.mock('@/hooks', () => ({
  useAuthLogout: () => ({
    signOut: jest.fn(),
    isLogoutHandling: false
  }),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('@chakra-ui/react', () => ({
  useBreakpointValue: jest.fn(),
}));

const queryClient = new QueryClient();
describe('Main Layout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Should render match with snapshot.', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MainLayout>Layout</MainLayout>
      </QueryClientProvider>)

    expect(container).toMatchSnapshot();
  })
})
