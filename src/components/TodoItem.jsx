import React from 'react'

const TodoItem = ({index, todo, toggleComplete, handleDelete}) => {
  return (
    <>
      <span>
        {todo.text}
      </span>
      <button onClick={()=>{toggleComplete(index)}}>
        complete
      </button>
      <button onClick={()=>{handleDelete(index)}}>
        delete
      </button>
    </>
  )
}

export default TodoItem
