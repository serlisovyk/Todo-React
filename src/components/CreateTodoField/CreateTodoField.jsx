import { useState } from 'react'

export default function CreateTodoField({ handleAddTodo }) {
  const [title, setTitle] = useState('')

  function handleSubmitForm(e) {
    e.preventDefault()
    handleAddTodo(title)
    setTitle('')
  }

  const handleChangeTitle = (e) => setTitle(e.target.value)

  return (
    <form
      className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20"
      onSubmit={handleSubmitForm}
    >
      <label htmlFor="title"></label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChangeTitle}
        value={title}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task..."
      />
    </form>
  )
}
