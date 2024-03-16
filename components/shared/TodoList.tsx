"use client";
import { Todo } from "@/type/todo.type";
import React from "react";
import useTodo from "@/hooks/useTodo";

const TodoList = () => {
  const { todoList, handleChange } = useTodo();

  return (
    <div className="flex flex-col gap-y-3 p-5">
      {todoList.data?.map((todo: Todo) => (
        <div key={todo.id} className="flex items-center gap-x-3">
          <input
            id={`${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
          />

          <div>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
