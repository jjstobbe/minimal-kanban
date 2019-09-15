import React, { Fragment } from 'react';
import * as styles from './styles.module.scss';

const dateOptions = { month: 'short', day: 'numeric' };

export function Task(props) {
    const { task } = props;

    const dateCreated = new Date();

    const backgroundColor = {
        backgroundColor: task.color,
    }

    return (
        <Fragment>
            <div className={styles.taskTopRow}>
                <span className={styles.taskId}>
                    {task.taskId}
                </span>
                <span className={styles.taskDate}>
                    {dateCreated.toLocaleDateString('en-US', dateOptions)}
                </span>
            </div>
            
            <div className={styles.taskBottomRow}>
                <span className={styles.taskTitle}>
                    {task.title}
                </span>
                <span className={styles.taskPoints} style={backgroundColor}>
                    {task.points}
                </span>
            </div>
        </Fragment>
    );
}