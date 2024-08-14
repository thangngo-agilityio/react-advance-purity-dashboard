import { renderHook, waitFor } from '@testing-library/react';

// Hooks
import { TAuthorResponse, TCreateAuthorPayload, useAuthor } from '../useAuthor';

// Mocks
import {
  AUTHORS,
  MOCK_ADD_AUTHOR_PAYLOAD,
  MOCK_AUTHORS_SUCCESS_RES,
  MOCK_UPDATE_AUTHOR_PAYLOAD,
  MOCK_UPDATE_SUCCESS_RES,
} from '@/lib/mocks';

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

  it('should fetch authors successfully', async () => {
    const { result } = renderHook(() => useAuthor(), {
      wrapper: queryProviderWrapper,
    });

    await waitFor(() => expect(result.current.authorData).toEqual(AUTHORS));
  });

  it('should add Author successfully', async () => {
    jest
      .spyOn(mainHttpService, 'post')
      .mockResolvedValue(MOCK_AUTHORS_SUCCESS_RES);

    const { result } = renderHook(() => useAuthor(), {
      wrapper: queryProviderWrapper,
    });

    result.current.createAuthor(MOCK_ADD_AUTHOR_PAYLOAD as unknown as TCreateAuthorPayload);

    await waitFor(() =>
      expect(jest.spyOn(mainHttpService, 'post')).toHaveBeenCalled(),
    );
  });

  it('should update author successfully', async () => {
    jest
      .spyOn(mainHttpService, 'put')
      .mockResolvedValue(MOCK_UPDATE_SUCCESS_RES);

    const { result } = renderHook(() => useAuthor(), {
      wrapper: queryProviderWrapper,
    });

    result.current.updateAuthor(MOCK_UPDATE_AUTHOR_PAYLOAD as unknown as TAuthorResponse);

    await waitFor(() => expect(mainHttpService.put).toHaveBeenCalled());
  });


});
