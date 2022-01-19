import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </header>
      <main>
        <h1>Home</h1>
      </main>

    </>
  );
}