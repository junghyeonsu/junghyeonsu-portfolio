import React from 'react';
import Head from 'next/head';
import Main from '#/components/main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hyeonsu Jung</title>
        <meta name="description" content="Hyeonsu Jung's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
}
