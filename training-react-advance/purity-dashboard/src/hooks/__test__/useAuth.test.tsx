import { act, renderHook, waitFor } from "@testing-library/react";

// Service
import { mainHttpService } from "@/service";

// Hooks
import { TUserRecordResponse, useAuthLogin, useAuthLogout, useAuthRegister, useUpdateUser } from "../useAuth";

// Utils
import { queryProviderWrapper } from "@/utils";

// Mocks
import { MOCK_ADD_USER_PAYLOAD, MOCK_UPDATE_SUCCESS_RES, MOCK_UPDATE_USER_PAYLOAD, MOCK_USER_SUCCESS_RES, USER } from "@/mocks";

const useNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useAuth', () => {
  beforeEach(() => {
    jest
      .spyOn(mainHttpService, 'get')
      .mockResolvedValue(MOCK_USER_SUCCESS_RES);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch user successfully', async () => {
    const { result } = renderHook(() => useAuthLogin(), {
      wrapper: queryProviderWrapper,
    });

    await waitFor(() => expect(result.current.users?.records).toEqual(USER));
  });

  it('should create account successfully', async () => {
    jest
      .spyOn(mainHttpService, 'post')
      .mockResolvedValue(MOCK_USER_SUCCESS_RES);

    const { result } = renderHook(() => useAuthRegister(), {
      wrapper: queryProviderWrapper,
    });

    result.current.createAccount({ records: MOCK_ADD_USER_PAYLOAD });

    await waitFor(() =>
      expect(jest.spyOn(mainHttpService, 'post')).toHaveBeenCalled(),
    );
  });

  it('should logout account successfully', async () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { result } = renderHook(() => useAuthLogout());

    // Before logout
    expect(result.current.isLogoutHandling).toBe(false);

    // Trigger logout
    act(() => {
      result.current.signOut();
    });

    // During logout
    expect(result.current.isLogoutHandling).toBe(true);

    // Wait for the logout timeout
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
  });

  it('should update account successfully', async () => {
    jest
      .spyOn(mainHttpService, 'put')
      .mockResolvedValue(MOCK_UPDATE_SUCCESS_RES);

    const { result } = renderHook(() => useUpdateUser(), {
      wrapper: queryProviderWrapper,
    });

    result.current.updateUser(MOCK_UPDATE_USER_PAYLOAD as unknown as TUserRecordResponse);

    await waitFor(() => expect(mainHttpService.put).toHaveBeenCalled());
  })
})
