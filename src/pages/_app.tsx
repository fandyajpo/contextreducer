import type { AppProps } from "next/app";
import GlobalProvider from "@/lib/Context";
import "@/styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  // WRAP ITU ANU COMPONENT-NYA
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
