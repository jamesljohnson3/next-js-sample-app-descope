import { AuthProvider } from "@descope/react-sdk";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "next-themes"
import "/styles/globals.css"
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} >

    <AuthProvider
      projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
      baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem> <Component {...pageProps} /></ThemeProvider> 
    </AuthProvider>
    </ClerkProvider>

  );
}
