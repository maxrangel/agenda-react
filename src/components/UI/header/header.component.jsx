import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = props => {
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      sticky='top'
      bg='primary'
      variant='dark'
    >
      <Navbar.Brand>Personal Agenda</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
