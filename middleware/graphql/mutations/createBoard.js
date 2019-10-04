import { GraphQLList, GraphQLString } from 'graphql';
import BoardGraphQLType from '../types/boardType';
import Board from './../../database/models/board';

const Mutation = {
  type: BoardGraphQLType,
  args: {
    title: { type: GraphQLString },
    statuses: { type: GraphQLList(GraphQLString) },
  },
  resolve: async (parent, { title, statuses }) => {
    const newBoard = new Board({
        title: title,
        statuses: statuses,
        dateCreated: new Date(),
    });

    return newBoard.save().catch(console.log);
  }
};

export default Mutation;
