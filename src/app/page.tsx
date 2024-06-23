import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main className="flex-1 bg-neutral-950 p-4">
      <h1 className="text-xl">Welcome Home</h1>
    </main>
  );
}
