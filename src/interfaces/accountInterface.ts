export interface IAccount {
    id: number;
    name: string;
    iso_3166_1: string;
    avatar: {
        tmdb: {
            avatar_path: string;
        }
    }

}
