import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "@/components/Header";
import MainNavigation from "@/components/MainNavigation";
import useVoices from "@/hooks/useVoices";

export default function App({ Component, pageProps }) {
  const availableVoices = useVoices();

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Header />
      <Component {...pageProps} availableVoices={availableVoices} />
      <MainNavigation />
    </>
  );
}
