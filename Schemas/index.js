const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");
const UserType = require('./TypeDef/UserType')
const data = require("../mockdata.json");

// if we want to pass arg
// args: { id: { type: GraphQLInt } },
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUser: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return data;
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                body: { type: GraphQLString },
            },
            resolve(parent, args) {
                data.push({
                    id: data.length + 1,
                    name: args.name,
                    email: args.email,
                    body: args.body,
                });
                return args;
            },
        },
    },
});

//  it is combination vetween Query and mutation

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})