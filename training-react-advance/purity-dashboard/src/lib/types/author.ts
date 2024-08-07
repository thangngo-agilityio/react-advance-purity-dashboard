import { AUTHOR_STATUS } from '../constants';

export type TAuthor = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  job: string;
  status: AUTHOR_STATUS;
  employed: string;
};

export type TFiledAuthor = {
  fields: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    job: string;
    status: AUTHOR_STATUS;
    employed: string;
  };
};
