export type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  isRemember?: boolean;
  name?: string;
};

export type TUser = {
  fields: {
    email: string;
    password: string;
    name?: string;
    location?: string;
    phone?: string;
  };
};

export type IUser = {
  email: string;
  password: string;
  name?: string;
  location?: string;
  phone?: string;
};
