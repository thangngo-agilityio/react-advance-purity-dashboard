import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_PATH, AUTHOR_STATUS } from '../constants';
import { mainHttpService } from '../service';
import { TFiledAuthor } from '../types';

export type TAuthorResponse = {
  records: TFiledAuthor[];
};

export type TCreateAuthorPayload = {
  fields: {
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
    queryFn: () =>
      mainHttpService.get<TAuthorResponse>(API_PATH.AUTHOR).then((res) => {
        return res.data;
      }),
  });

  const authorData: TFiledAuthor[] = data?.records || [];

  const { mutateAsync: createAuthor } = useMutation({
    mutationFn: async (author: TCreateAuthorPayload) =>
      (await mainHttpService.post<TAuthorResponse>(API_PATH.AUTHOR, author))
        .data.records,

    onSuccess: (dataResponse) => {
      const newData = dataResponse.map((data) => data.fields);
      console.log('newData', newData);

      queryClient.setQueryData(
        [API_PATH.AUTHOR],
        (oldData: TAuthorResponse) => [newData, ...(oldData.records || [])],
      );
    },
  });

  const { mutateAsync: updateAuthor } = useMutation({
    mutationFn: async (
      author: Partial<TAuthorResponse & { authorId: string }>,
    ) =>
      (await mainHttpService.put<TAuthorResponse>(API_PATH.AUTHOR, author)).data
        .records,
  });

  return { authorData, createAuthor, updateAuthor };
};
