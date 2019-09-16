import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from './Task';
import * as styles from './styles.module.scss';

export function TaskColumn(props) {
    return (
        <Droppable droppableId={props.dragId}>
            {(provided, snapshot) => (
            <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="group-wrapper"
            >
                <div className={styles.groupTitle}>
                    { props.title }
                </div>

                {props.tasks && props.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index} className="player-box">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={styles.taskContainer}
                            >
                                <Task task={task} />
                            </div>
                        )}
                    </Draggable>
                ))}

                { provided.placeholder }
            </div>
            )}
        </Droppable>
    );
}