const account = '/account';
const movie = "/movie";
const nowPaying = "/now_playing";

const urlsConfig = {
    account: {
        base: account,

    },
    movie: {
        base: movie,
        moviesNowPlaying: `${movie}${nowPaying}`,

    }
};

export {
    urlsConfig
};
