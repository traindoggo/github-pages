import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main className={`flex-1 flex flex-col pt-6 p-10 bg-neutral-950`}>
      <header className={`p-4 flex justify-center`}>
        <div className={`flex gap-6 animate-text-focus-in`}>
          <h1 className={`text-4xl`}>Hello World</h1>
          <span className={`text-4xl`}>:^&#41;</span>
        </div>
      </header>

      <div className={`flex-1`}></div>
    </main>
  );
}
