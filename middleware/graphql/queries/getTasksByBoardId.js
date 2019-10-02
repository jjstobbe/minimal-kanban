import { GraphQLList, GraphQLString } from 'graphql';
import taskGraphQLType from '../types/taskType';
import Task from '../../database/models/task';

const Query = {
  type: new GraphQLList(taskGraphQLType),
  args: { boardId: { type: GraphQLString }},
  resolve: (parent, { boardId }) => Task.find({ boardId: boardId })
}

export default Query;
