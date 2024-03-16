import axios from "axios";
import endpoints from "./endpoints";
import { todotSchema } from "./schemas";
import { Todo } from "@/type/todo.type";

const api = axios.create({
  baseURL: endpoints.baseURL,
});

const getTodoList = async () => {
  const { data: list } = await api.get(endpoints.todos);

  return list.map((data: Todo) => todotSchema.parse(data));
};

const updateTodo = async (id: number) => {
  const { data } = await api.put(endpoints.updateTodo(id));

  return todotSchema.parse(data);
};

const todoClient = {
  getTodoList,
  updateTodo,
};

export default todoClient;
