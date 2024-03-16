const endpoints = {
  baseURL: "https://jsonplaceholder.typicode.com",
  todo: (id: number) => `/todos/${id}`,
  todos: "/todos",
  createPost: "/todos",
  updateTodo: (id: number) => `/todos/${id}`,
  deleteTodo: (id: number) => `/todos/${id}`,
};

export default endpoints;
