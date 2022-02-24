export interface PokemonInterface {
    id: number;
    name: string;
    url: string;
    image: string;
}

export interface PokemonResponseInterface {
    count: number;
    next: string;
    pages: number;
    prev: string;
    
    results: PokemonInterface[];
}