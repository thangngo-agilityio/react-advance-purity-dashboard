import dayjs from 'dayjs';

// Types
import { TRecordAuthor } from '../types';

// Constants
import { DATE_FORMAT } from '../constants';

export const formatAuthorResponse = (authors: TRecordAuthor[] = []) =>
  authors.map((author) => {
    const { id, fields, createdTime } = author || {};
    const { _id, name, email, avatar, role, job, status, employed } =
      fields || {};

    return {
      id,
      createdTime,
      fields: {
        _id,
        name,
        email,
        avatar: avatar || '/public/imgs/avatar-default.svg',
        role,
        job,
        status,
        employed: dayjs(employed).format(DATE_FORMAT),
      },
      name,
      email,
      avatar: avatar || '/public/imgs/avatar-default.svg',
      role,
      job,
      status,
      employed: dayjs(employed).format(DATE_FORMAT),
    };
  });
