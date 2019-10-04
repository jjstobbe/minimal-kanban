import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import taskGraphQLType from './taskType';

const BoardOutputType = new GraphQLObjectType({
  name: 'BoardOutput',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    tasks: { type: new GraphQLList(taskGraphQLType) },
  })
});

export default BoardOutputType;
