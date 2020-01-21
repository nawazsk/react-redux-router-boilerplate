import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App({match:{params}}) {
  return (
    <div className="App">
      <AddTodo />
      <TodoList filter={params.filter || 'SHOW_ALL'} />
      <Filters />
    </div>
  );
}

export default App;
