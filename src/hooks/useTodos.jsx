import { useState } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState([])

  const handleCompleteTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const handleAddTodo = title => {
    setTodos(prev => [
      { id: todos.length + 1, title, isCompleted: false, isEditing: false },
      ...prev,
    ])
  }

  const handleRemoveTodo = id => setTodos([...todos].filter(t => t.id !== id))

  const handleEditTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const handleEditTask = (title, id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo
      )
    )
  }

  return {
    todos,
    handleCompleteTodo,
    handleRemoveTodo,
    handleAddTodo,
    handleEditTodo,
    handleEditTask,
  }
}
