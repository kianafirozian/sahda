import { FormData } from "@/components/Addtodo";

export async function TodoDeleteTask(data: FormData) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}delete.php`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();

  return res;
}
