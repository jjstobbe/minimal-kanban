import { GraphQLSchema, GraphQLObjectType} from 'graphql';

import getTasksByBoardId from './queries/getTasksByBoardId';

import createTask from './mutations/createTask';
import updateTask from './mutations/updateTask';
import deleteTask from './mutations/deleteTask';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getTasksByBoardId,
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createTask,
    updateTask,
    deleteTask,
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
