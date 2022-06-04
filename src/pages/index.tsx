import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import IntroductionContainer from '#/components/IntroductionContainer';
import ExperienceContainer from '#/components/ExperienceContainer';
import Footer from '#/components/Footer';
import ScrollTopButton from '#/components/ScrollTopButton';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>정현수 포트폴리오</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="최고의 프론트엔드 개발자를 꿈꾸는 정현수의 포트폴리오입니다." />
        <meta name="google-site-verification" content="03tUkcTUQFs2twM6WNUdGdFy78xmlW1U0EfmTfRGCS8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://junghyeonsu-dev.vercel.app/" />
        <meta property="og:site_name" content="정현수 포트폴리오" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="정현수 포트폴리오" />
        <meta property="og:description" content="최고의 프론트엔드 개발자를 꿈꾸는 정현수의 포트폴리오입니다." />
        <meta property="og:image" content="https://github.com/junghyeonsu/hyeonsu-jung/blob/main/public/hyeonsu.jpeg?raw=true" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="junghyeonsu-dev.vercel.app" />
        <meta property="twitter:url" content="https://junghyeonsu-dev.vercel.app/" />
        <meta name="twitter:title" content="정현수 포트폴리오" />
        <meta name="twitter:description" content="최고의 프론트엔드 개발자를 꿈꾸는 정현수의 포트폴리오입니다." />
        <meta name="twitter:image" content="https://github.com/junghyeonsu/hyeonsu-jung/blob/main/public/hyeonsu.jpeg?raw=true" />
        <meta name="twitter:label1" content="Category" />
        <meta name="twitter:data1" content="포트폴리오" />
      </Head>
      <main>
        <Section>
          <IntroductionContainer />
          <ExperienceContainer />
          <Footer />
          <ScrollTopButton />
        </Section>
      </main>
    </>
  );
}
