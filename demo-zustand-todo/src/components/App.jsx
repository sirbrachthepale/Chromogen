import React from 'react';
import { ChromogenZustandObserver } from 'chromogen';
import TodoList from './TodoList';
import '../styles/styles.css';

const App = () => (
  <>
    <ChromogenZustandObserver />
    <TodoList />
  </>
);

export default App;
