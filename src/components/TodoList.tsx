import { AnimatePresence } from "framer-motion";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

// Lista animada de tareas usando AnimatePresence de Framer Motion
export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul>
      <AnimatePresence>
        {/* Renderizamos cada tarea */}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}