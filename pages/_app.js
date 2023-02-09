import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "@/components/Header";
import MainNavigation from "@/components/MainNavigation";
import useVoices from "@/hooks/useVoices";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const availableVoices = useVoices();
  console.log("ava", availableVoices);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>

      <Header />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} availableVoices={availableVoices} />
      </SWRConfig>
      <MainNavigation />
    </>
  );
}
