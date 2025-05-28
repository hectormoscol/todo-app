import type { Todo } from "../types";
import { motion } from "framer-motion";

// Componente para mostrar cada tarea individualmente con animación de Framer Motion
export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40 }}
      className="flex items-center justify-between bg-white shadow rounded px-4 py-2 mb-2"
    >
      {/* El checkbox alterna el estado completado */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </label>
      {/* Botón para eliminar tarea */}
      <button
        className="text-red-500 hover:text-red-700 transition"
        onClick={() => onDelete(todo.id)}
        aria-label="Eliminar"
      >
        ✕
      </button>
    </motion.li>
  );
}