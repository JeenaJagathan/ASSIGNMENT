import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './reducers';
import TodoList from './TodoList';

function TodoPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => dispatch(fetchTodos(data)));
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h4" >
          To do List
        </Typography>
      <TodoList />
    </div>
  );
}

export default TodoPage;
