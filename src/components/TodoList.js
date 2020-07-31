import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
          <ul className="list-group list-group list-group-flush">
            {todos.map((todo, i) => (
                <TodoListItem  key={todo.id} todo={todo} index={i} todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
            ))}
          </ul>   
        </>
    )
}
