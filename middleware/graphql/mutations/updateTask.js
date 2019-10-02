import { GraphQLInt, GraphQLString } from 'graphql';
import TaskGraphQLType from '../types/taskType';
import Task from './../../database/models/task';

const Mutation = {
    type: TaskGraphQLType,
    args: {
      title: { type: GraphQLString },
      points: { type: GraphQLInt },
      status: { type: GraphQLInt },
      boardId: { type: GraphQLString },
    },
  resolve: async (parent, { title, points, status, boardId }) => {
    const task = await Task.findById(id);

    task.title = title;
    task.points = points;
    task.status = status;
    task.boardId = boardId;

    return task.save()
  }
};

export default Mutation;
