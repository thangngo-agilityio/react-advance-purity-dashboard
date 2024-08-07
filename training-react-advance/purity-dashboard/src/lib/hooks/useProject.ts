import { useQuery } from '@tanstack/react-query';
import { API_PATH } from '../constants';
import { mainHttpService } from '../service';
import { TFiledProject } from '../types';

export type TProjectResponse = {
  records: TFiledProject[];
};

export const useProject = () => {
  const { data } = useQuery({
    queryKey: [API_PATH.PROJECT],
    queryFn: () =>
      mainHttpService.get<TProjectResponse>(API_PATH.PROJECT).then((res) => {
        return res.data;
      }),
  });

  const projectData: TFiledProject[] = data?.records || [];

  return { projectData };
};
