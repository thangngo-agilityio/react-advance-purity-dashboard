export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  EMPTY_DATA: 'No data found',
  EMAIL_INVALID: 'Email is invalid',
  PASSWORD_NOT_MATCH: 'Password does not match',
  AUTH_INCORRECT: 'Email or password is incorrect',
  IMAGE_INVALID: 'Image is invalid',
  BUDGET_INVALID: 'Budget is invalid',
  COMPLETION_INVALID: 'Completion is invalid',
  LIMIT_BUDGET: 'Budget must not exceed 1 million',
  LIMIT_COMPLETION: 'Budget must not exceed 100%',
  SOMETHING_ERROR: 'Something went wrong!!',
};
