import { AuthProvider } from "@descope/react-sdk";
import type { AppProps } from "next/app";
import {ClerkProvider, RedirectToSignUp, SignedIn, SignedOut,} from "@clerk/nextjs";
import { ThemeProvider } from "next-themes"
import "../styles/styles.css";
import { SaasProvider } from '@saas-ui/react'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { extendTheme } from '@chakra-ui/react'
import { useTheme as useNextTheme } from 'next-themes'
import { theme as baseTheme } from '@saas-ui/theme-glass'
import { Switch, useTheme } from '@nextui-org/react'
import { builder, Builder, withChildren } from '@builder.io/react';
import { useRouter } from "next/router";
import { Layout } from '../components/layout'
import { theme as glassTheme } from '@saas-ui/theme-glass'
import { SubscriptionProvider } from "use-stripe-subscription";
import { getCurrentBrowserFingerPrint } from '@rajesh896/broprint.js';
import { useState } from "react";
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { ChakraProvider, GlobalStyle, Image } from "@chakra-ui/react";

builder.init('c1b3106624e34af79d2e33c90a9e9021');

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
})

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme(
  {
    // your overrides
  },

  glassTheme,
  baseTheme)
export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const { announcement, header, footer } = pageProps
  const [browserFingerprint, setBrowserFingerPrint] = useState("");
  const getBrowserFingerPrint = () => {
    getCurrentBrowserFingerPrint().then((res) => {
      setBrowserFingerPrint(res)
    }).catch((err) => {
      setBrowserFingerPrint(JSON.stringify(err))
    })
 }
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: "L97FAMI8f2OvG1SdVJjl"
      }}
    >
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <SubscriptionProvider
            stripePublishableKey='pk_live_51JAmIGBrSm8eSKa6hU793rP2rh9ELoTELaxp0lZDHVzuVKvXMGya86NF7VtUyVtjH5VboYcxVH3jEsFDcp0iDln700WeOC9jix'
          >
            <ClerkProvider {...pageProps}>
              <AuthProvider
                projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
                baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL}
              >
                <ChakraProvider theme={theme}>
                  <SaasProvider theme={theme}>
                    <Layout
                      announcementProps={announcement}
                      headerProps={header}
                      footerProps={footer}
                    >
                      <Component {...pageProps} />
                    </Layout>
                  </SaasProvider>
                </ChakraProvider>
              </AuthProvider>
            </ClerkProvider>
          </SubscriptionProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </FpjsProvider>
  );
}
