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

  const { mutateAsync: updateProject } = useMutation({
    mutationFn: async (project: TProjectResponse) =>
      (await mainHttpService.put<TProjectResponse>(API_PATH.PROJECT, project))
        .data,
    onSuccess: async (_, variables) => {
      const newData = variables.records.map((data) => data);

      queryClient.setQueryData(
        [API_PATH.PROJECT],
        (oldData: TProjectResponse) => ({
          records: oldData.records.map((item) =>
            item.id === newData[0].id
              ? {
                  ...item,
                  fields: {
                    ...item.fields,
                    projectName: newData[0].fields.projectName,
                    avatar: newData[0].fields.avatar,
                    budget: newData[0].fields.budget,
                    status: newData[0].fields.status,
                    completion: newData[0].fields.completion,
                    description: newData[0].fields.description,
                  },
                }
              : item,
          ),
        }),
      );
    },
  });

  return { projectData, isLoading, isFetching, createProject, updateProject };
};
