import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main className={`flex-1 p-4 bg-neutral-950`}>
      <h1 className={`text-xl`}>Top Page</h1>
    </main>
  );
}
