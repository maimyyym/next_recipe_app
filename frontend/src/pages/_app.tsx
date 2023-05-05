import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/services/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
  <Component {...pageProps} />
    </ApolloProvider>
  )
}
