import { BsTrash } from 'react-icons/bs'
import { FaPen } from 'react-icons/fa'

export default function TodoItemControl({ handleEditTodo, handleRemoveTodo, id }) {
  const handleClickEdit = () => handleEditTodo(id)
  const handleClickRemove = () => handleRemoveTodo(id)

  return (
    <div>
      <button onClick={handleClickEdit} className="mr-4">
        <FaPen
          size={22}
          className="text-gray-600 hover:text-blue-700 transition-colors ease-in-out duration-300"
        />
      </button>
      <button onClick={handleClickRemove}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  )
}
