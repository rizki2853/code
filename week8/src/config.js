const CONFIG = {
    KEY: 'f9757d52c24dda3a4a99a7a21709e09c',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',
    CACHE: {
        NAME: 'MovieCatalogue-V1'
    },
    idb: {
        name: 'MovieCatalogue-DB',
        version: 1,
        objects: {
            movie: {
                key: 'id',
                name: 'movie',
            },
        },
    },
};

export default CONFIG;
