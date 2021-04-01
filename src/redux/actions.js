const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

export function addToDo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteToDo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateToDo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}
