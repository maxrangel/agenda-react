import React, { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskForm = props => {
  const [validated, setValidated] = useState(false);
  const taskTitleRef = useRef('');
  const taskDescriptionRef = useRef('');

  const { show, onClose, onAddTask } = props;

  const onSubmitTask = event => {
    event.preventDefault();

    const inputTitle = taskTitleRef.current.value;
    const inputDescription = taskDescriptionRef.current.value;

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(false);

    onAddTask(inputTitle, inputDescription);
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add a new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To add a new task, you must fill this form.</p>

        <Form noValidate validated={validated} onSubmit={onSubmitTask}>
          <Form.Group>
            <Form.Label>Task title</Form.Label>
            <Form.Control
              ref={taskTitleRef}
              required
              type='text'
              placeholder='Task title'
            />

            <Form.Control.Feedback type='invalid'>
              Please add a title for your task.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Task description</Form.Label>
            <Form.Control
              ref={taskDescriptionRef}
              required
              type='text'
              placeholder='Task description'
            />

            <Form.Control.Feedback type='invalid'>
              Please add a desription for your task.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant='outline-primary' type='submit'>
            Add Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskForm;
