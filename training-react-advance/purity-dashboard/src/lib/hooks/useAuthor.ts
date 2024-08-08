import { useMutation, useQuery } from '@tanstack/react-query';
import { API_PATH } from '../constants';
import { mainHttpService } from '../service';
import { TFiledAuthor } from '../types';

export type TAuthorResponse = {
  records: TFiledAuthor[];
};

export const useAuthor = () => {
  const { data } = useQuery({
    queryKey: [API_PATH.AUTHOR],
    queryFn: () =>
      mainHttpService.get<TAuthorResponse>(API_PATH.AUTHOR).then((res) => {
        return res.data;
      }),
  });

  const authorData: TFiledAuthor[] = data?.records || [];

  const { mutateAsync: createAuthor } = useMutation({
    mutationFn: async (author: TAuthorResponse) =>
      await mainHttpService
        .post<TAuthorResponse>(API_PATH.AUTHOR, author)
        .then((res) => {
          return res;
        }),
  });

  return { authorData, createAuthor };
};
