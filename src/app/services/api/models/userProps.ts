export type userProps = {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: nameProps;
  address?: addressProps;
  phone?: string;
};

export type nameProps = {
  firstname?: string;
  lastname?: string;
};

export type addressProps = {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: geoLocationProps;
};

export type geoLocationProps = {
  lat?: number;
  long?: number;
};
