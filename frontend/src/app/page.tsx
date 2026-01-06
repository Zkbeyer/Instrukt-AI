export default async function Home() {
  const res = await fetch("http://localhost:8000/health", { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Frontend is up</h1>
      <pre className="mt-4 rounded p-4">{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}