import EditTodo from '../EditTodo/EditTodo'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({
  todos,
  handleCompleteTodo,
  handleRemoveTodo,
  handleEditTodo,
  handleEditTask,
}) {
  return (
    <>
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No tasks yet</p>
      ) : (
        todos.map((todo) =>
          todo.isEditing ? (
            <EditTodo key={todo.id} todo={todo} handleEditTask={handleEditTask} />
          ) : (
            <TodoItem
              key={todo.id}
              {...todo}
              handleCompleteTodo={handleCompleteTodo}
              handleRemoveTodo={handleRemoveTodo}
              handleEditTodo={handleEditTodo}
              handleEditTask={handleEditTask}
            />
          )
        )
      )}
    </>
  )
}
