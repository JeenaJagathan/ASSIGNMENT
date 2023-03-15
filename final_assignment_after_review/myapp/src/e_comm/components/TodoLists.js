
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  markTodoCompleted,
  clearAlltodo,
} from "../redux/actions";

export const TodoLists = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState([]);

  const actionClick = (data) => {
    if (data && data?.type === "edit") {
      dispatch(editTodo(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      dispatch(deleteTodo(data?.todo?.id));
    }
  };

  const changeEvent = (e, todoId) => {
    if (e?.target?.name !== "select_all_todo" && e?.target?.checked === true) {
      if (selectedTodo.indexOf(todoId) === -1) {
        setSelectedTodo((todo) => [...todo, todoId]);
      }
    } else if (
      e?.target?.name !== "select_all_todo" &&
      e?.target?.checked === false
    ) {
      const todos = selectedTodo.filter((todo) => todo !== todoId);
      setSelectedTodo(todos);
    }

    if (e?.target?.name === "select_all_todo" && e?.target?.checked === true) {
      todos &&
        todos.forEach((todo, index) => {
          const allChkbox = document.getElementsByName(`todo_${index}`);

          for (let chk of allChkbox) {
            chk.checked = true;
            let todoId = todo?.id;

            setSelectedTodo((todo) => [...todo, todoId]);
          }
        });
    } else if (
      e?.target?.name === "select_all_todo" &&
      e?.target?.checked === false
    ) {
      todos &&
        todos.forEach((todo, index) => {
          const allChkbox = document.getElementsByName(`todo_${index}`);
          for (let chk of allChkbox) {
            chk.checked = false;
            setSelectedTodo([]);
          }
        });
    }
  };

  const markCompleted = () => {
    dispatch(markTodoCompleted(selectedTodo));
  };

  return (
    <div className="container my-2">
      <div className="row pb-4" style={{ height: "60px" }}>
        <div className="col-xl-12 text-right">
          {selectedTodo.length > 0 && (
            <>
              <Button
                className="btn btn-danger"
                onClick={() => dispatch(clearAlltodo())}
              >
                Clear Todos
              </Button>
              <Button className="btn btn-success ml-2" onClick={markCompleted}>
                Mark As Completed
              </Button>
            </>
          )}
        </div>
      </div>

      <Table className="table table-bordered">
        <TableHead>
          <TableRow>
            <TableCell width="3%">
              <Checkbox
                onChange={(e) => changeEvent(e)}
                name={"select_all_todo"}
              />
            </TableCell>
            <TableCell width="30%">Name</TableCell>
            <TableCell width="42%">Description</TableCell>
            <TableCell width="8%">Status</TableCell>
            <TableCell width="20%">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {todos &&
            todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    value={todo?.id}
                    onChange={(e) => changeEvent(e, todo?.id)}
                    name={`todo_${index}`}
                  />
                </TableCell>
                <TableCell>{todo?.title}</TableCell>
                <TableCell>{todo?.description}</TableCell>
                <TableCell>
                  {todo?.isCompleted ? (
                    <span className="badge badge-success p-2">Completed</span>
                  ) : todo?.isPending ? (
                    <span className="badge badge-danger p-2">Pending</span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    className="btn btn-primary btn-sm"
                    onClick={() => actionClick({ todo: todo, type: "edit" })}
                  >
                    Edit
                  </Button>
                  <br />
                  <Button
                    color="primary"
                    // variant="contained"
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => actionClick({ todo: todo, type: "delete" })}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};
