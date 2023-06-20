export default async function getAllUsers() {
  const res = await fetch("http://localhost:1221/v1/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "mchemistry95@gmail.com",
      password: "123456Aa@",
    }),
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return await res.json();
}
