// Component
import { BuildIcon, CardIcon, ChartIcon, HomeIcon, PersonIcon } from '../icons';

// Constants
import { ROUTES } from './router';

export const MENU_ITEM_LIST = () => [
  {
    id: 1,
    leftIcon: HomeIcon,
    menuItemContent: 'Dashboards',
    destination: '/',
  },
  {
    id: 2,
    leftIcon: ChartIcon,
    menuItemContent: 'Tables',
    destination: `/`,
  },
  {
    id: 3,
    leftIcon: CardIcon,
    menuItemContent: 'Billing',
    destination: `/${ROUTES.BILLING}`,
  },
  {
    id: 4,
    leftIcon: BuildIcon,
    menuItemContent: 'RTL',
    destination: `/${ROUTES.RTL}`,
  },
];

export const ACCOUNT_LIST = () => [
  {
    id: 1,
    leftIcon: PersonIcon,
    menuItemContent: 'Profile',
    destination: `/${ROUTES.PROFILE}`,
  },
];

export const SIDEBAR_LIST = [
  {
    id: 1,
    title: '',
    listItem: MENU_ITEM_LIST,
  },
  {
    id: 2,
    title: 'ACCOUNT PAGES',
  },
];
