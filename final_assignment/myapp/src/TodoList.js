import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './reducers';
import { List, ListItem, ListItemIcon, Checkbox, ListItemText } from '@material-ui/core';

function TodoList() {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id} dense button onClick={() => dispatch(toggleTodo(todo.id))}>
          <ListItemIcon>
            <Checkbox edge="start" checked={todo.completed} />
          </ListItemIcon>
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;