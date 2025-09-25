export interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export  interface Audioplayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

export interface Details {
    author: string;
    year: number;
}


export interface Product { 
    description: string;
    price: number;
}

export interface TaxCalculationOptions {
    tax?: number | null;
    products: Product[];
}
  

