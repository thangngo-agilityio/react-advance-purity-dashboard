import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_PATH } from '../constants';
import { mainHttpService } from '../service';
import { TRecordProject } from '../types';

export type TProjectResponse = {
  records: TRecordProject[];
};

export const useProject = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [API_PATH.PROJECT],
    queryFn: async () =>
      (await mainHttpService.get<TProjectResponse>(API_PATH.PROJECT)).data,
    refetchOnWindowFocus: false,
  });

  const projectData = data?.records || [];

  const { mutateAsync: createProject } = useMutation({
    mutationFn: async (payload: TProjectResponse) =>
      (await mainHttpService.post<TProjectResponse>(API_PATH.PROJECT, payload))
        .data,

    onSuccess: (dataResponse) => {
      const newData = dataResponse.records;

      queryClient.setQueryData(
        [API_PATH.PROJECT],
        (oldData: TProjectResponse) => ({
          records: [...newData, ...oldData.records],
        }),
      );
    },
  });

  return { projectData, isLoading, isFetching, createProject };
};
