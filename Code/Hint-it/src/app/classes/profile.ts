export class profile
{
    id: number;
    name: string;
    description: string;
    photo: string; // link? 
    points: number;
    tags: string[]; 
    posts: number[]; // posts IDs - pobieranie danych z innej klasy
}