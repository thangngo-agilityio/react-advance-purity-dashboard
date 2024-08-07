import dayjs from 'dayjs';

// Types
import { TFiledAuthor } from '../types';

// Constants
import { TIME_FORMAT } from '../constants';

export const formatAuthorResponse = (authors: TFiledAuthor[] = []) =>
  authors.map((author) => {
    const { fields } = author || {};
    const { name, email, avatar, role, job, status, employed } = fields || {};

    return {
      name,
      email,
      avatar,
      role,
      job,
      authorStatus: status,
      employed: dayjs(employed).format(TIME_FORMAT),
    };
  });
