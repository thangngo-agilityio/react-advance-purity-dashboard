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
  id: string;
  fields: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
    job: string;
    status?: AUTHOR_STATUS;
    employed: string;
  };
};

export type AuthorFormData = {
  id: string;
  name: string;
  email: string;
  role: string;
  job: string;
  employed: string;
};
