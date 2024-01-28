import { computed, ref } from "vue";
export default function useTodoSpace() {
  const todos = ref([
    {
      id: 1,
      text: "Learn javascript",
      completed: true,
    },
    {
      id: 2,
      text: "Learn Vue.js",
      completed: false,
    },
  ]);
  const input = ref("");

  function onAddTodo() {
    const trimmedInput = input.value.trim();

    if (trimmedInput.length === 0) {
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: trimmedInput,
      completed: false,
    };

    todos.value = [...todos.value, newTodo];
    input.value = "";
  }

  function onRemoveTodo(id: number) {
    todos.value = todos.value.filter((t) => t.id != id);
  }
  const activeTodo = computed(
    () => todos.value.filter((t) => !t.completed).length
  );
  return { todos, input, onAddTodo, onRemoveTodo, activeTodo };
}
