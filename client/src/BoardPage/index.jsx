import React, { useState } from 'react';
import { TaskColumn } from './taskColumn';
import { DragDropContext } from "react-beautiful-dnd";
import * as styles from './styles.module.scss';

const data = [
    {
        title: 'Backlog',
        id: '6134a',
        tasks: [
            {
                id: 'asdfasdfg',
                taskId: 'JS-123',
                title: 'Task Title 1',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
            },
            {
                id: '32151235',
                taskId: 'JS-123',
                title: 'Task Title 2',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
                order: 1,
            },
            {
                id: '624362347',
                taskId: 'JS-123',
                title: 'Task Title 3',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
                order: 2,
            },
        ]
    },
    {
        title: 'In Progress',
        id: '32a5',
        tasks: [
            {
                id: '234623623462',
                taskId: 'JS-123',
                title: 'Some shit in prgoress Title',
                description: 'Some 1 description....',
                color: '#dfdfdf',
                points: 3,
            },
            {
                id: '162346',
                taskId: 'JS-123',
                title: 'Some shit in prgoress Title 2',
                description: 'Some 2 description....',
                color: '#dfdfdf',
                points: 3,
            },
            {
                id: '4327',
                taskId: 'JS-123',
                title: 'Some shit in prgoress Title 3',
                description: 'Some 3 description....',
                color: '#dfdfdf',
                points: 3,
            },
        ]
    },
    {
        title: 'Complete',
        id: '12b34',
        tasks: [
            {
                id: '17423',
                taskId: 'JS-123',
                title: 'Task Title 1',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
            },
            {
                id: '2345234534268856',
                taskId: 'JS-123',
                title: 'Task Title 2',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
            },
            {
                id: '7543734547',
                taskId: 'JS-123',
                title: 'Task Title 3',
                description: 'Some description....',
                color: '#dfdfdf',
                points: 3,
            },
        ]
    }
];

const arrayToObjectDictionary = (array) =>
   array.reduce((dict, item) => {
     dict[item.id] = item
     return dict
   }, {})

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

export function BoardPage() {
    const columnDictionary = arrayToObjectDictionary(data);
    const [board, setBoard] = useState(columnDictionary);

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
            
            setBoard(updatedBoard);
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

        setBoard(updatedBoard);
    };

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
