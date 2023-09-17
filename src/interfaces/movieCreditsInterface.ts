export interface ICast{
    id: number;
    name: string;
    profile_path: string | null;
}
export interface ICraw {
    id: number;
    name: string;
}

export interface IMovieCredits {
    id: number;
    cast: ICast[];
    crew: ICraw[];
}