export let movies = [
    {
        id:1,
        name : "sdff",
        score : 99
    },
    {
        id:2,
        name : "wqer",
        score : 344
    },
    {
        id:3,
        name : "1233",
        score : 22
    },
    {
        id:4,
        name : "nbxcx",
        score : 74
    },
    {
        id:5,
        name : "yhyyy",
        score : 5
    }
];
export const getMovies = ()=> movies;

export const getById = id => {
    const filteredContent = movies.filter(movie => id === movie.id);
    return filteredContent[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

