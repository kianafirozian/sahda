"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export interface FormData {
  id?: string | number;
  item: string;
  type?: any;
  sort?: any;
}

interface AddTodo {
  onAddTodo: (data: FormData) => void;
}

export default function Addtodo({ onAddTodo }: AddTodo) {
  const schema = yup.object({
    item: yup.string().required("please fill out the Todo"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: FormData) => {
    onAddTodo(data);
  };

  return (
    <div className="flex h-auto justify-center items-center p-10">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmitForm(data);
          reset();
        })}
        className="max-w-sm"
      >
        <label className="block text-gray-500 font-bold justify-center items-center mb-1">
          Todo
        </label>
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          {...register("item")}
        />
        {errors.item?.type === "required" && (
          <h6 className="text-sm text-red-500 font-bold">
            please fill out the form
          </h6>
        )}
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-3"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
