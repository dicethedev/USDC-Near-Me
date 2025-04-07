export interface BusinessInput {
  name: string;
  address: string;
  city: string;
  country: string;
  category: string;
  lat: number;
  lng: number;
  acceptsUSDC?: boolean;
}

export interface BusinessResponse extends BusinessInput {
  id: number;
  createdAt: Date;
}
