import { blogs } from "@/db/seed";
import { notFound } from "next/navigation";

export default function BlogPage({ params }: { params: { id: number } }) {
  const blog = blogs.find((blog) => blog.id == params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="flex-1 p-4 bg-neutral-950 px-10">
      <header className="mb-6">
        <h1 className={`text-3xl`}>{blog.title}</h1>
      </header>

      <hr className={`border-neutral-500 my-4`} />

      <div key={blog.id} className={``}>
        <p>{blog.content}</p>
      </div>
    </main>
  );
}
