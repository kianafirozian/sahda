"use client";
import { TypeTodo } from "@/app/page";
import { useState } from "react";
import { FormData } from "./Addtodo";

interface OneTodo {
  todo: TypeTodo;
  onHandleEditTodo: (data: FormData) => void;
  onHandleDeleteTodo: (data: FormData) => void;
  onHandleCompleteTodo: (data: FormData) => void;
  onHandleunCompleteTodo: (data: FormData) => void;
}

export default function Todo({
  todo,
  onHandleEditTodo,
  onHandleDeleteTodo,
  onHandleCompleteTodo,
  onHandleunCompleteTodo,
}: OneTodo) {
  const [value, setValue] = useState<string>(todo.item);

  return (
    <div className="m-5">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="bg-gray-200 inline-block mr-5 rounded-md shadow-md font-bold text-gray-700"
      />
      <button
        onClick={() =>
          onHandleEditTodo({
            ...todo,
            item: value,
          })
        }
        className="mr-5 bg-amber-400 rounded-md"
      >
        Edit
      </button>

      <button
        onClick={() => onHandleDeleteTodo(todo)}
        className="mr-5 bg-amber-500 rounded-md"
      >
        delete
      </button>
      {todo.todoStatu === "2" ? (
        <button onClick={() => onHandleCompleteTodo(todo)}>completed</button>
      ) : (
        <button onClick={() => onHandleunCompleteTodo(todo)}>Uncomplete</button>
      )}
    </div>
  );
}
