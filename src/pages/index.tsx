import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Introduction from '#/components/introduction';
import Experience from '#/components/experience';
// import ContentOfTable from '#/components/ContentOfTable';

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
        <meta property="og:url" content="https://hyeonsu-jung.vercel.app/" />
        <meta property="og:image" content="https://github.com/junghyeonsu/hyeonsu-jung/blob/main/public/hyeonsu.jpeg?raw=true" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="정현수 포트폴리오" />
        <meta property="og:title" content="정현수 포트폴리오" />
        <meta property="og:description" content="최고의 프론트엔드 개발자를 꿈꾸는 정현수의 포트폴리오입니다." />
        <meta property="og:locale" content="ko" />
        <meta name="description" content="최고의 프론트엔드 개발자를 꿈꾸는 정현수의 포트폴리오입니다." />
        <meta name="google-site-verification" content="03tUkcTUQFs2twM6WNUdGdFy78xmlW1U0EfmTfRGCS8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Section>
          <Introduction />
          <Experience />
          {/* <ContentOfTable /> */}
        </Section>
      </body>
    </div>
  );
}
