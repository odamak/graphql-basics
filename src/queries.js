import {
    GraphQlString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';
import { find } from 'lodash';
import { ChannelType } from './channelTypes';
import channels from './channelMockup';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        type: ChannelType,
        name: 'ChannelQueryByID',
        fields: {
            channel: {
                type: ChannelType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLInt) },
                },
                resolve : (_, args) => {
                    const data = find(channels, (channel) => args.id === channel.id)
                    console.log('test', data);
                    return data;
                },
            },
        }
    })
})

export default schema;