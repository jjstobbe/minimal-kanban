import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

const BoardType = new GraphQLObjectType({
  name: 'Board',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    statuses: { type: new GraphQLList(GraphQLString) },
    dateCreated: { type: GraphQLString },
  })
});

export default BoardType;
