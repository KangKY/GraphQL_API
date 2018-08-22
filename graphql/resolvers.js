const personFrame = {
    name : "kki",
    age : 18,
    gender : "male"
}


const resolvers = {
    Query:{
        person:() => personFrame
    }
}

export default resolvers;