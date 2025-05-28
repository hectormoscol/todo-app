import { useForm } from "react-hook-form";

// Formulario para añadir tareas nuevas usando React Hook Form para mejor control y validación
export default function TodoForm({ onAdd }: { onAdd: (text: string) => void }) {
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  function onSubmit(data: { text: string }) {
    if (data.text.trim()) {
      onAdd(data.text.trim());
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 mb-4"
      autoComplete="off"
    >
      <input
        {...register("text", { required: true })}
        className="flex-1 border rounded px-3 py-2"
        placeholder="¿Qué necesitas hacer?"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Añadir
      </button>
    </form>
  );
}