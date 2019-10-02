import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    points: { type: GraphQLInt },
    dateCreated: { type: GraphQLString },
    status: { type: GraphQLInt },
    boardId: { type: GraphQLString }
  })
});

export default TaskType;
