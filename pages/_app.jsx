import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DefaultSeo } from "next-seo";
import Layout from "../lib/layout";
import "../styles/css.scss";

const theme = createTheme({
  palette: {
      primary: {
          main: "#3498db",
          light: "#73c9ff",
          dark: "#002884",
          contrastText: "#000000"
      },
      secondary: {
          main: "#9b59b6",
          light: "#cd88e9",
          dark: "#6b2c86",
          contrastText: "#ffffff"
      }
  }
});

export default function Root({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
