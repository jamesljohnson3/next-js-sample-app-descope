import { AuthProvider } from "@descope/react-sdk";
import type { AppProps } from "next/app";
import {ClerkProvider, RedirectToSignUp, SignedIn, SignedOut,} from "@clerk/nextjs";
import { ThemeProvider } from "next-themes"
import "../styles/styles.css";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { builder, Builder, withChildren } from '@builder.io/react';
import { useRouter } from "next/router";
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


export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const publicPages = ["/index2b"];
  const privatePages = ["/"];

  return ( <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
    <ClerkProvider {...pageProps} > <SignedIn> {privatePages.includes(pathname) ? (
            <RedirectToSignUp /> 
          ) : (
            <Component {...pageProps} />
          )}</SignedIn>

    <AuthProvider
      projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
      baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL}
    > 
    <SignedOut>
    {publicPages.includes(pathname) ? (
            <RedirectToSignUp /> 
          ) : (
            <Component {...pageProps} />
          )}</SignedOut>
         

    </AuthProvider>
    </ClerkProvider>
  </NextUIProvider>
</NextThemesProvider>

  );
}
