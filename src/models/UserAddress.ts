export type UserAddress = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
};

export type UserAddressCreation = Omit<UserAddress, "id">;
