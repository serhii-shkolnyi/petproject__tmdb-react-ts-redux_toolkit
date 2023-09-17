const account = '/account';

const allMovie = "/discover/movie";
const movie = "/movie";
const nowPaying = "/now_playing";
const popular = "/popular";
const topRated = "/top_rated";
const upComing = "/upcoming";
const genres = '/genre/movie/list';
const searchMovie = '/search/movie';
const credits = "/credits";
const urlsConfig = {
    account: {
        base: account,

    },
    movie: {
        base: movie,
        allMovie: allMovie,
        nowPlaying: `${movie}${nowPaying}`,
        popular: `${movie}${popular}`,
        topRated: `${movie}${topRated}`,
        upComing: `${movie}${upComing}`,
        genres: genres,
        searchMovie: searchMovie,
        credits: (id: string | undefined): string => `${movie}/${id}${credits}`,
        movieDetails: (id: string | undefined): string => `${movie}/${id}`,
    }
};

export {
    urlsConfig
};
