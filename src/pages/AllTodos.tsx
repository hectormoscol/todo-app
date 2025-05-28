import { useTodos } from "../hooks/useTodos";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

// Página principal: muestra todas las tareas
export default function AllTodos() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <button
        className="mt-4 text-sm bg-gray-200 hover:bg-red-200 px-3 py-2 rounded"
        onClick={clearCompleted}
      >
        Limpiar completadas
      </button>
    </div>
  );
}