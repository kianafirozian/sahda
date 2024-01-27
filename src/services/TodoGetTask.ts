export async function TodoGetTask() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await result.json();

  return res;
}
