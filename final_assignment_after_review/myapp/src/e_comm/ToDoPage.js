import { makeStyles } from '@material-ui/core';
import React from 'react'
import { TodoLists } from './components/TodoLists'

import { AddTodo } from './components/AddTodo';
import SideBar from '../e_comm/SideBar';

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
    }}));
function ToDoPage() {
    const classes = useStyles();
  return (
      <><SideBar/>
    <div className={classes.container}>   
    <h2>Todo Application</h2>
    <AddTodo />
    <TodoLists/>
  </div></>
  )
}

export default ToDoPage;