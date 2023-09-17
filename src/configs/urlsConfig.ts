const account = '/account';

const movie = "/movie";
const nowPaying = "/now_playing";
const popular = "/popular";
const topRated = "/top_rated";
const upComing = "/upcoming";


const urlsConfig = {
    account: {
        base: account,

    },
    movie: {
        base: movie,
        nowPlaying: `${movie}${nowPaying}`,
        popular: `${movie}${popular}`,
        topRated: `${movie}${topRated}`,
        upComing: `${movie}${upComing}`,

    }
};

export {
    urlsConfig
};
