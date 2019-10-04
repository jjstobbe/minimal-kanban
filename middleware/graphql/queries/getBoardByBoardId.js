import { GraphQLList, GraphQLString } from 'graphql';
import boardOutputGraphQLType from '../types/boardOutputType';
import Board from '../../database/models/board';
import Task from '../../database/models/task';

const Query = {
  type: new GraphQLList(boardOutputGraphQLType),
  args: { boardId: { type: GraphQLString }},
  resolve: async (parent, { boardId }) => {
    const board = await Board.findById(boardId);
    const allBoardTasks = await Task.find({ boardId: boardId });

    const outputBoard = board.statuses.map((status, index) => ({
        title: status,
        id: status,
        tasks: allBoardTasks.filter((task) => task.status === index)
    }));

    return outputBoard;
  }
}

export default Query;
