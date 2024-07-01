import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href="/add-todo"
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
      >
        Add Todo
      </Link>
      <Link
        href="/todos"
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-300"
      >
        Get Todos
      </Link>
    </div>
  );
}
