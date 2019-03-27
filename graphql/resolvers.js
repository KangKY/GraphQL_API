import {getMovies, getMovie, getSuggestions, deleteMovie, addMovie} from './db';
// resolvers는 기본적으로 어떠한 처리도 가능하다
// 다른 API를 호출하거나 다른 DB를 접근하거나, 원래 DB를 접근하거나 등


const resolvers = {
    Query:{
        movies:(_, {limit,rating}) => getMovies(limit,rating),
        movie:(_, { id }) => getMovie(id),
        suggestions:(_, { id }) => getSuggestions(id)
        // _ 는 현재 Object를 보내는 Object(아마 self나 this 같은 개념일듯)
    }
}


/*const resolvers = {
    Query:{
        movies:() => getMovies(),
        movie:(_, { id }) => getById(id)
        // _ 는 현재 Object를 보내는 Object(아마 self나 this 같은 개념일듯)
    },
    Mutation: {
        addMovie:(_, {name, score}) => addMovie(name, score),
        deleteMovie: (_,{id}) => deleteMovie(id)
    }
}*/

export default resolvers;