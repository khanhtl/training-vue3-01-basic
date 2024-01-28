import { ref } from "vue";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [
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
];

const err = ref();
const isLoading=ref(true);

function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(todos), 250);
  });
}

export default function useTodoService() {
  async function fetchTodos(): Promise<any> {
    try {
      isLoading.value=true;
      return await getTodos();
    } catch (error) {
      throw new Error("Network error");
    } finally {
      isLoading.value = false;
    }
  }
  async function addTodo(todo: Todo) {
    todos = [...todos, todo];
  }
  async function removeTodo(id: number) {
    todos = todos.filter((t) => t.id != id);
  }
  return { fetchTodos, addTodo, removeTodo, isLoading, err };
}
