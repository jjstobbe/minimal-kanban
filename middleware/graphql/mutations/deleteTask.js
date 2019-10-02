import { GraphQLString } from 'graphql';
import TaskGraphQLType from '../types/taskType';
import Task from './../../database/models/task';

const Mutation = {
  type: TaskGraphQLType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (parent, { id }) => {
    return await Task.findOneAndDelete(id)
  }
};

export default Mutation;
