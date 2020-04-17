import Head from 'next/head';
import { Global, css } from '@emotion/core';

import Header from './Header';


export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gray: #3D3D3D;
            --gray2: #6F6F6F;
            --orange: #DA552F
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }
          
          body {
            font-size: 1.6rem;
            line-height: 1.5;
          }

          h1, h2, h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <Head>
        <title>Product Hunt - NextJS - Firebase</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}