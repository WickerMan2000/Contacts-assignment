export interface IContact {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
};

export type Address = {
    city: string;
    geo: {};
    street: string;
    suite: string;
    zipcode: string;
};

export type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};

export type BooleanFn = (state: boolean) => boolean;