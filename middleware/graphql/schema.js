import { GraphQLSchema, GraphQLObjectType} from 'graphql';

import getBoardByBoardId from './queries/getBoardByBoardId';
import getTasksByBoardId from './queries/getTasksByBoardId';

import createBoard from './mutations/createBoard';
import createTask from './mutations/createTask';
import updateTask from './mutations/updateTask';
import deleteTask from './mutations/deleteTask';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getBoardByBoardId,
    getTasksByBoardId,
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createBoard,
    createTask,
    updateTask,
    deleteTask,
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
