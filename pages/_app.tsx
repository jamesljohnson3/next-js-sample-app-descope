import { AuthProvider } from "@descope/react-sdk";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "next-themes"
import "../styles/styles.css";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

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
  
  return ( <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
    <ClerkProvider {...pageProps} >

    <AuthProvider
      projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
      baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL}
    > 
   
      <Component {...pageProps} />
    </AuthProvider>
    </ClerkProvider>
  </NextUIProvider>
</NextThemesProvider>

  );
}
}