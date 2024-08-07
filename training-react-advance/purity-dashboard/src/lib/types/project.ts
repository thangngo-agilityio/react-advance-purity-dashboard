import { PROJECT_STATUS } from '../constants';

export type TProject = {
  id: string;
  projectName: string;
  avatar: string;
  budget: number;
  status: PROJECT_STATUS;
  completion: number;
};
