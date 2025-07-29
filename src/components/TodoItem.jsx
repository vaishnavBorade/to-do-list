import React from 'react'

const TodoItem = ({index, todo, toggleComplete, handleDelete}) => {
  return (
    <>
      <div>
        {todo.text}
      </div>
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
