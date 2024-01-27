import { FormData } from "@/components/Addtodo";

export async function TodoPutTask(data: FormData) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}update.php`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();

  return res;
}
