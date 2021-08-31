/* eslint-disable */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="Hyeonsu Jung's portfolio" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js" />
          <script src="https://unpkg.com/smoothscroll-anchor-polyfill" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
