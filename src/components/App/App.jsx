import CreateTodoField from '../CreateTodoField/CreateTodoField'
import useTodos from '../../hooks/useTodos'
import TodoList from '../TodoList/TodoList'

export default function App() {
  const {
    todos,
    handleCompleteTodo,
    handleRemoveTodo,
    handleAddTodo,
    handleEditTodo,
    handleEditTask,
  } = useTodos()

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo</h1>
      <CreateTodoField handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleRemoveTodo={handleRemoveTodo}
        handleEditTodo={handleEditTodo}
        handleEditTask={handleEditTask}
      />
    </div>
  )
}
