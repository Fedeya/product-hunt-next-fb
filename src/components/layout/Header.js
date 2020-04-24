import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Navigation from './Navigation';

import Search from '../ui/Search';
import Button from '../ui/Button';

const Nav = styled.nav`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  margin-right: 2rem;
  cursor: pointer;
`

export default function Header() {

  const user = false;

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gray3);
        padding: 1rem 0;
      `}
    >
      <Nav>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>P</Logo>
          </Link>
          <Search />
          <Navigation />
        </div>

        <div
          css={css`
              display: flex;
              align-items: center;
          `}
        >
          {
            user ? (
              <>
                <p
                  css={css`
                    margin-right: 2rem;
                  `}
                >
                  Hola: Federico
                </p>
                <Button type="button" bgColor>Log Out</Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button bgColor>Login</Button>
                </Link>
                <Link href="/create-account">
                  <Button>Create Account</Button>
                </Link>
              </>
            )
          }
        </div>
      </Nav>
    </header>
  );
}