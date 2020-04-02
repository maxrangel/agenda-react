import React, { useState } from 'react';
import TaskContext from './context/task.context';

import './App.scss';

import TasksContainer from './containers/tasks/tasks.container';
import Header from './components/UI/header/header.component';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TaskForm from './containers/task-form/task-form.container';
import Task from './models/task.model';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const addTaskHandler = (taskTitle, taskDescription) => {
    const taskId = Math.round(Math.random() * 100);
    const newTask = new Task(taskId, taskTitle, taskDescription, false);

    setTasks([...tasks, newTask]);
  };

  const taskCompletedHandler = taskId => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) task.completed = true;
      return task;
    });

    setTasks([...updatedTasks]);
  };

  const taskDeleteHandler = taskId => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks.splice(taskIndex, 1);

    setTasks([...tasks]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTask: taskCompletedHandler,
        deleteTask: taskDeleteHandler
      }}
    >
      <Header />

      <Container fluid className='btn-container'>
        <Row>
          <Col>
            <Button
              variant='outline-primary'
              size='lg'
              block
              onClick={openModalHandler}
            >
              Add new task
            </Button>
          </Col>
        </Row>
      </Container>

      <TaskForm
        show={showModal}
        onAddTask={addTaskHandler}
        onClose={closeModalHandler}
      />

      <TasksContainer tasks={tasks} />
    </TaskContext.Provider>
  );
};

export default App;
