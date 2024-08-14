import { renderHook, waitFor } from '@testing-library/react';

// Hooks
import { useAuthor } from '../useAuthor';

// Mocks
import { AUTHORS, MOCK_AUTHORS_SUCCESS_RES } from '@/lib/mocks';

// Service
import { mainHttpService } from '@/lib/service';

// Utils
import { queryProviderWrapper } from '@/lib/utils';

describe('useAuth', () => {
  beforeEach(() => {
    jest
      .spyOn(mainHttpService, 'get')
      .mockResolvedValue(MOCK_AUTHORS_SUCCESS_RES);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch products successfully', async () => {
    const { result } = renderHook(() => useAuthor(), {
      wrapper: queryProviderWrapper,
    });

    await waitFor(() => expect(result.current.authorData).toEqual(AUTHORS));
  });
});
