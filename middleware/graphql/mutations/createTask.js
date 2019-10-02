import { GraphQLString } from 'graphql';
import TaskGraphQLType from '../types/taskType';
import Task from './../../database/models/task';

const Mutation = {
  type: TaskGraphQLType,
  args: {
    title: { type: GraphQLString },
    boardId: { type: GraphQLString },
  },
  resolve: async (parent, { title, boardId }) => {
    console.log(title, boardId);

    const newTask = new Task({
        title: title,
        boardId: boardId,
        dateCreated: new Date(),
    });

    return newTask.save().catch(console.log);
  }
};

export default Mutation;
