import React from 'react'
import cn from 'classnames'
import CheckBox from '../CheckBox/CheckBox'
import TodoItemControl from '../TodoItemControl/TodoItemControl'

export default function TodoItem({
  id,
  title,
  isCompleted,
  handleCompleteTodo,
  handleRemoveTodo,
  handleEditTodo,
}) {
  const handleClickComplete = () => handleCompleteTodo(id)

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button className="flex items-center" onClick={handleClickComplete}>
        <CheckBox isCompleted={isCompleted} />
        <span
          className={cn({
            'line-through': isCompleted,
          })}
        >
          {title}
        </span>
      </button>
      <TodoItemControl
        id={id}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  )
}
