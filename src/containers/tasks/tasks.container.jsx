import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskItem from '../../components/tasks/task-item/task-item.component';

const TasksContainer = props => {
  const { tasks } = props;

  const tasksItems = tasks.map(task => {
    return (
      <Col key={task.id} xl={4} lg={4} md={6} sm={12} xs={12}>
        <TaskItem task={task} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>{tasksItems}</Row>
    </Container>
  );
};

export default TasksContainer;
