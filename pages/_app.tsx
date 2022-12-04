import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";
import { config } from '@fortawesome/fontawesome-svg-core';

import Head from "next/head";

import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/css.css";
import Layout from "../lib/components/pages/layout";

config.autoAddCss = false

export default function Root({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <AnimatePresence>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://ichigayamate.xyz/',
            site_name: 'Ichigayamate Personal Website',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/manifest/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: '/manifest/apple-touch-icon.png',
              sizes: '76x76'
            },
            {
              rel: 'manifest',
              href: '/manifest/manifest.webmanifest'
            },
          ]}
          defaultTitle='Ichigayamate Personal Website'
          titleTemplate='%s - Ichigayamate Personal Website'
          description='Ichigayamate Personal Website'
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}