import { useState, useEffect } from "react";
import  { type Todo } from "../types";

// Este custom hook gestiona el estado de las tareas y las sincroniza con LocalStorage.
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Recuperamos las tareas almacenadas al iniciar la app
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Guardamos cada cambio en las tareas en LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Función para añadir una tarea nueva
  function addTodo(text: string) {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  }
  // Función para alternar completado
  function toggleTodo(id: string) {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }
  // Función para eliminar
  function deleteTodo(id: string) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  // Función para limpiar completadas
  function clearCompleted() {
    setTodos(todos => todos.filter(todo => !todo.completed));
  }

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted };
}