import { renderHook, waitFor } from '@testing-library/react';

// Hooks
import { getProjectId, TProjectResponse, useProject } from '../useProject';

// Mocks
import {
  MOCK_ADD_PROJECT_PAYLOAD,
  MOCK_PROJECTS_SUCCESS_RES,
  MOCK_UPDATE_PROJECT_PAYLOAD,
  MOCK_UPDATE_SUCCESS_RES,
  PROJECT,
  PROJECT_DATA_MOCK,
} from '@/lib/mocks';

// Service
import { mainHttpService } from '@/lib/service';

// Utils
import { queryProviderWrapper } from '@/lib/utils';

describe('useProject', () => {
  beforeEach(() => {
    jest
      .spyOn(mainHttpService, 'get')
      .mockResolvedValue(MOCK_PROJECTS_SUCCESS_RES);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch project successfully', async () => {
    const { result } = renderHook(() => useProject(), {
      wrapper: queryProviderWrapper,
    });

    await waitFor(() => expect(result.current.projectData).toEqual(PROJECT));
  });

  it('should fetch project Id successfully', async () => {
    const { result } = renderHook(() => getProjectId(PROJECT_DATA_MOCK.id), {
      wrapper: queryProviderWrapper,
    });

    await waitFor(() =>
      expect(result.current.projectId).toEqual(PROJECT_DATA_MOCK.id),
    );
  });

  it('should add project successfully', async () => {
    jest
      .spyOn(mainHttpService, 'post')
      .mockResolvedValue(MOCK_PROJECTS_SUCCESS_RES);

    const { result } = renderHook(() => useProject(), {
      wrapper: queryProviderWrapper,
    });

    result.current.createProject(
      MOCK_ADD_PROJECT_PAYLOAD as unknown as TProjectResponse,
    );

    await waitFor(() =>
      expect(jest.spyOn(mainHttpService, 'post')).toHaveBeenCalled(),
    );
  });

  it('should update project successfully', async () => {
    jest
      .spyOn(mainHttpService, 'put')
      .mockResolvedValue(MOCK_UPDATE_SUCCESS_RES);

    const { result } = renderHook(() => useProject(), {
      wrapper: queryProviderWrapper,
    });

    result.current.updateProject(
      MOCK_UPDATE_PROJECT_PAYLOAD as unknown as TProjectResponse,
    );

    await waitFor(() => expect(mainHttpService.put).toHaveBeenCalled());
  });
});
