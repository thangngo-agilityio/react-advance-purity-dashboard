import { render } from "@testing-library/react";

// Components
import AuthLayout from "..";

const mockAuthStore = jest.fn()
jest.mock('@/stores', () => ({
  authStore: jest.fn(),
}));


jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(),
}));

describe('Auth layout', () => {
  it('renders children when user is authenticated', () => {
    // Mock the state of authStore to return a user with an email
    mockAuthStore.mockReturnValue({
      user: { fields: { email: 'thang@gmail.com' } },
    });

    const { asFragment } = render(
      <AuthLayout>
        <div>Authenticated Content</div>
      </AuthLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})
