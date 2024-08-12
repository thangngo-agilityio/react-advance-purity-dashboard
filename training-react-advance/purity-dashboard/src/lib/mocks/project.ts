import { PROJECT_STATUS } from '../constants';
import { TRecordProject } from '../types';

export const PROJECT_DATA_MOCK: TRecordProject = {
  id: 'rec393ALcB4az1FUZ',
  createdTime: '2024-08-11T17:08:32.000Z',
  fields: {
    completion: 12,
    projectName: 'Project ',
    image: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
    avatar: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
    _id: '7',
    status: PROJECT_STATUS.WORKING,
    budget: 123213,
    description: 'asdasd'
  },
};
