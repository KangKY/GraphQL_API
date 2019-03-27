import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// Over-fetching : 필요 이상의 정보를 DB에서 가져오는 것
// Under-fetching : 하나의 REST 완성을 위해 너무 많은 요청을 하는 것
// URL이 무의미, 하나의 엔드포인트로도 모든 쿼리 가능
// graphql-yoga는 서버 측 CRA과 같음

// schema에서 Query는 서버 혹은 DB에서 정보를 받을 때만 사용.
// Mutation은 서버 혹은 DB에서 정보를 바꿀 경우에만 사용.
const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
});



server.start(()=> console.log("Server Runnig"));