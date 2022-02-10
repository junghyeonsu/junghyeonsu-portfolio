import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Introduction from '#/components/sections/introduction';
import Experience from '#/components/sections/experience';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  return (
    <div>
      <Head>
        <title>정현수 포트폴리오</title>
        <meta name="description" content="Hyeonsu Jung's portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Section>
          <Introduction />
          <Experience />
        </Section>
      </body>
    </div>
  );
}
