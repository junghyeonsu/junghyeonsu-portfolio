import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Introduction from '#/components/sections/introduction';
import Skill from '#/components/sections/skill';
import Experience from '#/components/sections/experience';
import Contact from '#/components/sections/contact';
import ScrollGauge from '#/components/scrollGauge';

const Section = styled.section``;

export default function Main() {
  return (
    <div>
      <Head>
        <title>Hyeonsu Jung</title>
        <meta name="description" content="Hyeonsu Jung's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Section>
          <Introduction />
          <Skill />
          <Experience />
          <Contact />
        </Section>
      </div>
      <ScrollGauge />
    </div>
  );
}
