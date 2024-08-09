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
    mutationFn: async (author: Omit<TCreateAuthorPayload, '_id'>) =>
      (await mainHttpService.post<TAuthorResponse>(API_PATH.AUTHOR, author))
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
    mutationFn: async (author: TCreateAuthorPayload) =>
      (await mainHttpService.put<TAuthorResponse>(API_PATH.AUTHOR, author))
        .data,
  });

  return { authorData, createAuthor, updateAuthor };
};
