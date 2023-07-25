export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
};
