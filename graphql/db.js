// GraphQL 서버와 다른 API를 결합하는 예시
import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data : {
            data : {movies}
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating : rating
        }
    });
    return movies;
}

export const getMovie = async id => {
    const {
        data : {
            data : {movie}
        }
    } = await axios(MOVIE_DETAIL_URL, {
        params: {
            movie_id : id
        }
    });
    return movie;
}

export const getSuggestions = async id => {
    const {
        data : {
            data : {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id : id
        }
    });
    return movies;
}























/*let movies = [
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
    const filteredContent = movies.filter(movie => movie.id === id);
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

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length+1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}*/