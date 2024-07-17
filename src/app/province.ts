export interface Province {
    name: string;
    capital: string;
    population: number;
    cities: City[];
}


export interface City {
    name: string;
    population: number;
}
