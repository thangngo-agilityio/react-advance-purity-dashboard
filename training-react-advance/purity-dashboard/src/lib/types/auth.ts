export type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  isRemember?: boolean;
  name?: string;
};

export type TUser = {
  id: string;
  fields: {
    email: string;
    name: string;
    password: string;
    location: string;
    phone: string;
  };
  createdTime: string;
};
