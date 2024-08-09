import { TAuthor } from './author';

export type TDataSource = {
  id?: string | number;
  [key: string]: string | string[] | number | boolean | TAuthor | undefined;
};

export type THeaderTable = {
  title?: string;
  key?: string;
  renderBody?: (_: TDataSource, index: number) => JSX.Element;
  renderHead?: (title: string, key: string) => JSX.Element;
};
