export interface Business {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  category: strings;
  acceptsUSDC: boolean;
  lat: number;
  lng: number;
  createdAt?: Date;
}

export interface BusinessCreateInput
  extends Omit<Business, "id" | "createdAt" | "acceptsUSDC"> {
  acceptsUSDC?: boolean; // Optional override
}

export interface BusinessAPIResponse {
  data: Business[];
  error?: string;
}
