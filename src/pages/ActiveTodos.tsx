import { useTodos } from "../hooks/useTodos";
import TodoList from "../components/TodoList";

// Página de tareas activas (no completadas)
export default function ActiveTodos() {
  const { todos, toggleTodo, deleteTodo } = useTodos();
  const active = todos.filter(todo => !todo.completed);

  return (
    <div>
      <TodoList todos={active} onToggle={toggleTodo} onDelete={deleteTodo} />
      {active.length === 0 && (
        <p className="text-gray-400 mt-4">¡No tienes tareas activas!</p>
      )}
    </div>
  );
}