import React, { useContext } from 'react';
import TaskContext from '../../../context/task.context';
import { Card, Button } from 'react-bootstrap';

import './task-item.styles.scss';

const TaskItem = props => {
  const { task } = props;
  const { completedTask, deleteTask } = useContext(TaskContext);

  return (
    <Card className='task-container'>
      <Card.Header className={`${task.completed ? 'completed' : 'pending'}`}>
        {task.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.description}</Card.Text>
        <div className='buttons-container'>
          <Button
            className='button'
            variant='outline-danger'
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            Delete
          </Button>
          {!task.completed ? (
            <Button
              className='button'
              variant='outline-success'
              onClick={() => {
                completedTask(task.id);
              }}
            >
              Completed
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
