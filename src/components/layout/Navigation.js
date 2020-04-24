import Link from 'next/link';
import styled from '@emotion/styled';

const NavList = styled.ul`
  padding-left: 2rem;
  display: flex;

  li > a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gray2);
    font-family: 'PT Sans', sans-serif;

    &:last-of-type {
      margin-block: 0;
    }
  }
`;

export default function Navigation() {
  return (
    <NavList>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/populars">
          <a>Popular</a>
        </Link>
      </li>
      <li>
        <Link href="/new-product">
          <a>New Product</a>
        </Link>
      </li>
    </NavList>
  );
}