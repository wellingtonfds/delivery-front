import createApolloClient from "@/graphql/client";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}
