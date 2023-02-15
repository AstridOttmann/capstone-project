import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";
import useVoices from "@/hooks/useVoices";

export default function App({ Component, pageProps }) {
  const availableVoices = useVoices();

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout>
        <Component {...pageProps} availableVoices={availableVoices} />
      </Layout>
    </>
  );
}
