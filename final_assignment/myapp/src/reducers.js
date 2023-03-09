const FETCH_TODOS = "FETCH_TODOS";
const TOGGLE_TODO = "TOGGLE_TODO";

export function fetchTodos(todos) {
  return { type: FETCH_TODOS, payload: todos };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, payload: id };
}
const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default todoReducer;
