import React, { useState } from 'react';
import { TaskColumn } from './taskColumn';
import { DragDropContext } from "react-beautiful-dnd";
import * as styles from './styles.module.scss';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const BOARD_QUERY = gql`
{
    getBoardByBoardId (boardId: "5d96b1d276c1d44350e51b0b") {
        title
        id
		tasks {
			id
			title
			status
        }
    }  
}
`;

const arrayToObjectDictionary = (array) => 
    array.reduce((dict, item) => {
        dict[item.id] = item
        return dict
    }, {})

const dictionaryToObjectArray = (dict) =>
    Object.keys(dict).map((k) => dict[k])

const reorder = (array, startIndex, endIndex) => {
    const item = array[startIndex];
    const removedItemArray = removeItem(array, startIndex);
    const addedItemArray = insertItem(removedItemArray, endIndex, item);

    return addedItemArray;
};

const removeItem = (array, index) => {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

const insertItem = (array, index, newItem) => {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
}

// const urlParams = new URLSearchParams(window.location.search);
// const boardId = urlParams.get('id');

export function BoardPage() {
    const { loading, error, data, updateQuery } = useQuery(BOARD_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const updateBoard = (dict) => {
        // Send backend request?

        updateQuery(() => ({
            getBoardByBoardId: dictionaryToObjectArray(dict),
        }));
    };

    const board = arrayToObjectDictionary(data.getBoardByBoardId);

    const onDragEnd = (params) => {
        // Dropped outside of list
        if (!params.destination) {
            return;
        }

        // If it didn't move anywhere
        if (params.source.droppableId === params.destination.droppableId &&
            params.source.index === params.destination.index) {
            return;
        }

        const sourceColumn = board[params.source.droppableId];
        const destinationColumn = board[params.destination.droppableId];
        const movedTask = sourceColumn.tasks[params.source.index];

        // Same Column
        if (sourceColumn.id === destinationColumn.id) {
            const updatedTasks = reorder(sourceColumn.tasks, params.source.index, params.destination.index);

            const updatedColumn = {
                ...sourceColumn,
                tasks: updatedTasks
            };

            const updatedBoard = {
                ...board,
                [params.source.droppableId]: updatedColumn
            }
            
            updateBoard(updatedBoard);
            return;
        }

        // Different Columns
        const updatedSourceColumn = {
            ...sourceColumn,
            tasks: removeItem(sourceColumn.tasks, params.source.index),
        }
        const updatedDestinationColumn = {
            ...destinationColumn,
            tasks: insertItem(destinationColumn.tasks, params.destination.index, movedTask)
        };

        const updatedBoard = {
            ...board,
            [params.source.droppableId]: updatedSourceColumn,
            [params.destination.droppableId]: updatedDestinationColumn,
        }

        updateBoard(updatedBoard);
    }

    return (
        <div className={styles.boardContainer}>
            <DragDropContext onDragEnd={onDragEnd}>
                {
                    Object.entries(board).map((columnArray) => {
                        const column = columnArray[1];

                        return (<div key={column.id} className={styles.columnContainer}>
                            <TaskColumn dragId={column.id} title={column.title} tasks={column.tasks} />
                        </div>);
                    })
                }
            </DragDropContext>
        </div>
    );
}
