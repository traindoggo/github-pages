import { blogs } from "@/db/seed";

export default function BlogPage() {
  return (
    <main className="flex-1 pt-6 px-10 bg-neutral-950">
      <header>
        <h1 className={`text-2xl`}>Blog Page</h1>
        <hr className={`my-4 border-neutral-600`} />
        <p>Description : Media Query</p>
      </header>

      <div
        className={`md:grid md:grid-cols-2 xl:grid xl:grid-cols-3
            flex flex-col gap-4 mt-6`}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`flex flex-col p-4 border border-neutral-500 rounded`}
          >
            <header className={`text-2xl`}>{blog.title}</header>
            <p
              className={`text-neutral-400 text-lg h-30
                overflow-hidden text-ellipsis line-clamp-4`}
            >
              {blog.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
