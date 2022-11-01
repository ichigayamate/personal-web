import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";
import { config } from '@fortawesome/fontawesome-svg-core';
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../lib/layout";
import Head from "next/head";

import theme from "../lib/components/ui/theme";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/css.css";

config.autoAddCss = false

export default function Root({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </>
  )
}