import { TypeTodos, TypeTodo } from "@/app/page";
import React from "react";
import Todo from "./Todo";
import { FormData } from "./Addtodo";

interface Props {
  results: TypeTodos;
  onHandleEditTodo: (data: FormData) => void;
  onHandleDeleteTodo: (data: FormData) => void;
  onHandleCompleteTodo: (data: FormData) => void;
  onHandleunCompleteTodo: (data: FormData) => void;
}

export default function Todos({
  results,
  onHandleEditTodo,
  onHandleDeleteTodo,
  onHandleCompleteTodo,
  onHandleunCompleteTodo,
}: Props) {
  return (
    <div>
      {results.uncompleted?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onHandleEditTodo={onHandleEditTodo}
          onHandleDeleteTodo={onHandleDeleteTodo}
          onHandleCompleteTodo={onHandleCompleteTodo}
          onHandleunCompleteTodo={onHandleunCompleteTodo}
        />
      ))}
    </div>
  );
}
