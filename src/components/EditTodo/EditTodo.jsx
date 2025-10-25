import { useState } from 'react'
import { FaPen } from 'react-icons/fa'

let inputStyle = false

export default function EditTodo({ todo, handleEditTask }) {
  const [value, setValue] = useState(todo.title)

  const handleSubmit = (e) => {
    e.preventDefault()

    handleEditTask(value, todo.id)
  }

  const handleChange = (e) => {
    if (e.target.value) {
      setValue(e.target.value)
    } else {
      inputStyle = true
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-1 justify-between rounded-2xl ${
        inputStyle ? 'border-red-600' : 'border-gray-800'
      } border-2 p-5 w-1/2 mb-4`}
    >
      <label htmlFor="updateTask"></label>
      <input
        id="updateTask"
        name="updateTask"
        type="text"
        value={value}
        onChange={handleChange}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Update task"
      />
      <button type="submit" className="mr-4">
        <FaPen
          size={22}
          className="text-gray-600 hover:text-blue-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </form>
  )
}
