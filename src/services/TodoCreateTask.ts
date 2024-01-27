import { FormData } from "@/components/Addtodo";

export async function TodoPostTask(data: FormData) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}create/task/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();

  return res;
}
