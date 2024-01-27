"use client";
import { useEffect, useState } from "react";
import Addtodo, { FormData } from "@/components/Addtodo";
import Todos from "@/components/Todos";
import { TodoGetTask } from "@/services/TodoGetTask";
import { TodoPostTask } from "@/services/TodoCreateTask";
import { TodoPutTask } from "@/services/TodoUpdateTask";
import { TodoDeleteTask } from "@/services/TodoDeleteTask";

export interface TypeTodo {
  id: string;
  item: string;
  sort: string;
  todoStatu: string;
  addDate: string;
  completDate: null;
}

export interface TypeTodos {
  uncompleted: TypeTodo[];
}

export default function Home() {
  const [results, setResult] = useState<TypeTodos>();

  const handleGetTodos = async () => {
    const todos = (await TodoGetTask()) as TypeTodos;
    setResult(todos);
  };
  const handleAddTodo = async (data: any) => {
    await TodoPostTask(data);
    setResult({
      ...results,
      uncompleted: [
        {
          id: `${Math.floor(Math.random() * 1000)}`,
          item: data.item,
          sort: `${
            +results?.uncompleted[results?.uncompleted.length - 1].sort! + 1
          }`,
          todoStatu: "1",
          addDate: `${new Date()}`,
          completDate: null,
        },
        ...results?.uncompleted!,
      ],
    });
  };

  const handleEditTodo = async (todo: any) => {
    await TodoPutTask(todo);
    setResult({
      ...results,
      uncompleted:
        results?.uncompleted?.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              ...todo,
            };
          }
          return item;
        }) || [],
    });
  };

  const onHandleDeleteTodo = async (todo: any) => {
    await TodoDeleteTask({
      // id: `${Math.floor(Math.random() * 1000)}`,
      id: 1,
      type: 2,
      sort: true,
      item: "",
    });
    setResult({
      ...results,
      uncompleted:
        results?.uncompleted?.filter((item) => item.id !== todo.id) || [],
    });
  };
  const handleCompleteTodo = async (todo: any) => {
    await TodoPutTask({
      id: +todo.id,
      type: 2,
      sort: true,
      item: "NextJSNew.sahda",
    });
    handleGetTodos();
  };
  const handleunCompleteTodo = async (todo: any) => {
    await TodoPutTask({
      id: +todo.id,
      type: 1,
      sort: true,
      item: "NextJSNew.sahda",
    });
    handleGetTodos();
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <div className="">
      <Addtodo onAddTodo={handleAddTodo} />
      {results && (
        <Todos
          results={results}
          onHandleDeleteTodo={onHandleDeleteTodo}
          onHandleEditTodo={handleEditTodo}
          onHandleCompleteTodo={handleCompleteTodo}
          onHandleunCompleteTodo={handleunCompleteTodo}
        />
      )}
    </div>
  );
}
