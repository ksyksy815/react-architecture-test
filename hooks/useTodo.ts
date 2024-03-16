"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import queryKeys from "./query-keys";
import todoClient from "@/api/todo/todo-client";
import { Todo } from "@/type/todo.type";
import { ChangeEvent } from "react";

export default function useTodo() {
  const queryClient = useQueryClient();

  const todoList = useQuery({
    queryKey: [queryKeys.todo.list],
    queryFn: () => todoClient.getTodoList(),
  });

  const updateTodo = useMutation({
    mutationFn: todoClient.updateTodo,
    onMutate: (newTodo) => {
      queryClient.setQueryData([queryKeys.todo.list], (oldData: Todo) => {
        return {
          ...oldData,
          data: oldData.data.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }),
        };
      });
    },
  });

  const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    console.dir(event.target.id);
    console.log(event.target.checked);
    // updateTodo.mutate({})
  };

  return {
    todoList,
    handleChange: handleChangeCheck,
  };
}
