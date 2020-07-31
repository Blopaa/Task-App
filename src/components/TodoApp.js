import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {

  const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []

    // return [
    //     {
    //       id: new Date().getTime(),
    //       desc: "aprender react",
    //       done: false,
    //     },
    //   ];

  }

  const [todos, dispatch] = useReducer(todoReducer, [], init);



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    console.log(todoId);

    const action = {
        type: 'delete',
        payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {

    dispatch({
        type: 'toggle',
        payload: todoId
    })

  }

  const handleAddTodo = (newTodo) => {
  
      dispatch({
        type: "add",
        payload: newTodo,
      });
  }

//   console.log(description);


  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
            <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </div>
        <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </div>
  );
};
