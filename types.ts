export interface IOffer {
    _id: string;
    name: string;
    location: string;
    price: string;
    email: string;
    phoneNumber: string;
    description: string;
    createdAt: string;
}

export interface IOffers {
    offers: IOffer[];
}

export interface IForm {
    name: string;
    location: string;
    price: string;
    email: string;
    phoneNumber: string;
    description: string;
}
