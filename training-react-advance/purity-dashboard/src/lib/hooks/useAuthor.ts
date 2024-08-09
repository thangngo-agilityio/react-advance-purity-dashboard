import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_PATH, AUTHOR_STATUS } from '../constants';
import { mainHttpService } from '../service';
import { TRecordAuthor } from '../types';

export type TAuthorResponse = {
  records: TRecordAuthor[];
};

export type TCreateAuthorPayload = {
  fields: {
    _id: number;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    job: string;
    status?: AUTHOR_STATUS;
    employed: string;
  };
}[];

export const useAuthor = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [API_PATH.AUTHOR],
    queryFn: async () =>
      (await mainHttpService.get<TAuthorResponse>(API_PATH.AUTHOR)).data,
  });

  const authorData = data?.records || [];

  const { mutateAsync: createAuthor } = useMutation({
    mutationFn: async (payload: Omit<TCreateAuthorPayload, '_id'>) =>
      (await mainHttpService.post<TAuthorResponse>(API_PATH.AUTHOR, payload))
        .data,

    onSuccess: (dataResponse) => {
      const newData = dataResponse.records;

      queryClient.setQueryData(
        [API_PATH.AUTHOR],
        (oldData: TAuthorResponse) => ({
          records: [...newData, ...oldData.records],
        }),
      );
    },
  });

  const { mutateAsync: updateAuthor } = useMutation({
    mutationFn: async (author: TAuthorResponse) =>
      (await mainHttpService.put<TAuthorResponse>(API_PATH.AUTHOR, author))
        .data,
    onSuccess: async (_, variables) => {
      const newData = variables.records.map((data) => data);

      queryClient.setQueryData(
        [API_PATH.AUTHOR],
        (oldData: TAuthorResponse) => ({
          records: oldData.records.map((item) =>
            item.id === newData[0].id
              ? {
                  ...item,
                  fields: {
                    ...item.fields,
                    name: newData[0].fields.name,
                    email: newData[0].fields.email,
                    avatar: newData[0].fields.avatar,
                    role: newData[0].fields.role,
                    job: newData[0].fields.job,
                    employed: newData[0].fields.employed,
                  },
                }
              : item,
          ),
        }),
      );
    },
  });

  return { authorData, createAuthor, updateAuthor };
};
