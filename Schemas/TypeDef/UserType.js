const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require("graphql");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        body: {
            type: GraphQLString,
        },
    }),
});


module.exports = UserType