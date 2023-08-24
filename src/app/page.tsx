import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <Link href="/register">Register Page</Link>
        <br />
        <br />
        <Link href="/login">Login Page</Link>
      </div>
    </main>
  );
}
