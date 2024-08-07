import { Status } from '../types';

export const STATUS_LABEL = {
  [Status.ONLINE]: 'primary',
  [Status.OFFLINE]: 'secondary',
  [Status.WORKING]: 'tertiary',
  [Status.CANCELED]: 'tertiary',
  [Status.DONE]: 'tertiary',
};
