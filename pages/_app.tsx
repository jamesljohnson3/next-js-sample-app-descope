import { AuthProvider } from "@descope/react-sdk";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "next-themes"
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return ( <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <ClerkProvider {...pageProps} >

    <AuthProvider
      projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}
      baseUrl={process.env.NEXT_PUBLIC_DESCOPE_BASE_URL}
    >
      <Component {...pageProps} />
    </AuthProvider>
    </ClerkProvider></ThemeProvider> 

  );
}
