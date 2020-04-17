import Link from 'next/link';

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Popular</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>New Product</a>
        </Link>
      </li>
    </ul>
  );
}