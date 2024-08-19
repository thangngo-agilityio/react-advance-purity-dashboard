import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { API_PATH, AUTHOR_STATUS } from '../constants';
import { mainHttpService } from '../service';
import { TRecordAuthor } from '../types';
import { useMemo } from 'react';

export type TSearchAuthor = {
  name: string;
};

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

export const useAuthor = (queryParam?: TSearchAuthor) => {
  const queryClient = useQueryClient();

  const { name: searchName }: TSearchAuthor = Object.assign(
    {
      name: '',
    },
    queryParam,
  );

  const configs = {
    params: searchName,
  };

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [API_PATH.AUTHOR, searchName],
    queryFn: async () =>
      (
        await mainHttpService.get<TAuthorResponse>(
          `${API_PATH.AUTHOR}?view=Grid%20view`,
          configs,
          '',
        )
      ).data,
    refetchOnWindowFocus: false,
  });

  const authorData = data?.records || [];

  const authors: TRecordAuthor[] = useMemo((): TRecordAuthor[] => {
    const isNameMatchWith = (target: string): boolean =>
      (target || '').trim().toLowerCase().includes(searchName);
    console.log('searchName', isNameMatchWith(searchName));

    const dataA = authorData.filter((item) => {
      const isMatchName = isNameMatchWith(item.fields.name);

      console.log('isMatchName', isMatchName);

      return isMatchName;
    });

    console.log('dataA', dataA);
    return dataA;

    // return authorData.filter(({ fields: { name } }: TRecordAuthor) => {
    //   const isMatchWithName: boolean = isNameMatchWith(`${name}`);
    //   console.log('data', name);
    //   return isMatchWithName;
    // });
  }, [authorData, searchName]);

  const { mutateAsync: createAuthor } = useMutation({
    mutationFn: async (payload: Omit<TCreateAuthorPayload, '_id'>) =>
      (await mainHttpService.post<TAuthorResponse>(API_PATH.AUTHOR, payload))
        .data,

    onSuccess: (dataResponse) => {
      const newData = dataResponse.records;

      queryClient.setQueryData(
        [API_PATH.AUTHOR, searchName],
        (oldData: TAuthorResponse) => ({
          records: [...newData, ...(oldData?.records || [])],
        }),
      );
    },
  });

  const { mutateAsync: updateAuthor } = useMutation({
    mutationFn: async (author: TAuthorResponse) =>
      (await mainHttpService.put<TAuthorResponse>(API_PATH.AUTHOR, author))
        .data,
    onSuccess: async (_, variables) => {
      const newData = variables.records;

      queryClient.setQueryData(
        [API_PATH.AUTHOR, searchName],
        (oldData: TAuthorResponse) => ({
          records: oldData?.records?.map((item) =>
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

  return {
    authorData,
    authors,
    isLoading,
    isFetching,
    createAuthor,
    updateAuthor,
  };
};
