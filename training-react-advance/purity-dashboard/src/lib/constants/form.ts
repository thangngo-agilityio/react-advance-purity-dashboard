import { ERROR_MESSAGES } from './message';
import { REGEX } from './regex';

export const AUTH_SCHEMA = {
  NAME: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Name'),
  },
  EMAIL: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.EMAIL_INVALID,
    },
  },
  PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
  },
  CONFIRM_PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Confirm password'),
    validate: (val: string, { password }: { password: string }) => {
      if (password && val !== password) {
        return ERROR_MESSAGES.PASSWORD_NOT_MATCH;
      }
    },
  },
  IMAGE: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Image'),
    pattern: {
      value: REGEX.IMG,
      message: ERROR_MESSAGES.IMAGE_INVALID,
    },
  },
  ROLE: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Role'),
  },
  JOB: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Job'),
  },
  EMPOLYED: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Employed'),
  },
  PROJECT_NAME: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Project Name'),
  },
  BUDGET: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Budget'),
    validate: (value: number) => {
      if (value <= 0) {
        return ERROR_MESSAGES.BUDGET_INVALID;
      }
      if (!REGEX.LIMIT_NUMBER.test(value.toString())) {
        return ERROR_MESSAGES.LIMIT_BUDGET;
      }

      return true;
    },
  },
  COMPLETION: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Completion'),
    validate: (value: number) => {
      if (value < 0) {
        return ERROR_MESSAGES.COMPLETION_INVALID;
      }
      if (!REGEX.PERCENTAGE.test(value.toString())) {
        return ERROR_MESSAGES.LIMIT_COMPLETION;
      }

      return true;
    },
  },
};
