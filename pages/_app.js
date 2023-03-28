import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
