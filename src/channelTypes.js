import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

const ChannelType = new GraphQLObjectType({
    name: 'channel',
    fields: {
        id: { type: GraphQLInt},
        name: { type: GraphQLString }
    }
})

export { ChannelType };