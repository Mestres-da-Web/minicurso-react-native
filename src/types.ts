export interface Theme {
  primary: string;
  title: string;
  description: string;
  inactiveButtonText: string;
  horizontalLine: string;
  borderColor: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  pastPrice: number;
  category: string;
  brand: string;
  store: string;
}
