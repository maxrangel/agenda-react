import React from 'react';

export default React.createContext({
  tasks: [],
  completedTask: () => {},
  deleteTask: () => {}
});
