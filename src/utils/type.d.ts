type Login = {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    roles: Array<string>;
    isEmailVerified: boolean;
    __v: number;
  };
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type session = {
  user: {
    id: string | number;
    name?: string;
    email?: string;
    image?: string;
  };
  expires: string;
};
