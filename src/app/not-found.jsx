import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="mt-4 text-lg md:text-xl">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-accent text-black rounded"
      >
        Go Home
      </Link>
    </div>
  );
}