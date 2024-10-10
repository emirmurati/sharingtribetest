import { db } from "~/server/db";
import Form from "./components/form";

export default async function HomePage() {
  const post = await db.post.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Hello
      <Form />
      {post.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </main>
  );
}
