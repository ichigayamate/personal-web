import { DefaultSeo } from "next-seo";
import Layout from "../lib/layout";
import { AnimatePresence } from "framer-motion";
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/css.css";
import "daisyui/dist/styled.css";

config.autoAddCss = false
export default function Root({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Layout>
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
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}