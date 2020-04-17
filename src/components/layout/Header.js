import Link from 'next/link';

import Search from '../ui/Search';
import Navigation from './Navigation';


export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <p>P</p>
          <Search />
          <Navigation />
        </div>

        <div>
          <p>Hola: Federico</p>
          <button type="button">Log Out</button>
          <Link href="/">Login</Link>
          <Link href="/">Create Account</Link>
        </div>
      </nav>
    </header>
  );
}