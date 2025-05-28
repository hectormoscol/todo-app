import { useTodos } from "../hooks/useTodos";
import TodoList from "../components/TodoList";

// Página de tareas completadas
export default function CompletedTodos() {
  const { todos, toggleTodo, deleteTodo } = useTodos();
  const completed = todos.filter(todo => todo.completed);

  return (
    <div>
      <TodoList todos={completed} onToggle={toggleTodo} onDelete={deleteTodo} />
      {completed.length === 0 && (
        <p className="text-gray-400 mt-4">¡No tienes tareas completadas!</p>
      )}
    </div>
  );
}