import { useAuth } from "@descope/react-sdk";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { SyntheticEvent, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getUserDisplayName, validateRequestSession } from "../utils/auth";
import mixpanel from 'mixpanel-browser';

export default function Home({ data }: { data: string }) {
    mixpanel.init('e5c0352c20459df6af09133edde98ba2', {debug: true}); 
    const handleClick = () => {
        mixpanel.track('Button Clicked', {
          user_id: mixpanel.get_distinct_id(),
        });
      };

      
  const { authenticated, user, logout, me } = useAuth();
  const onLogout = useCallback(() => {
    // Delete Descope refresh token cookie.
    // This is only required if Descope tokens are NOT managed in cookies.
    document.cookie = "DSR=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    logout();
  }, [logout]);

  useEffect(() => {
    if (authenticated) {
      // get current user (me) so they can later be used to display user information
      // this may be simplified later by the SDK
      me();
    }
  }, [authenticated]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
  
    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const result = await response.json();
    const message = result.success ? "Success" : "Error";
    alert(`Result: ${message}`);
    
    if (result.success) {
      window.location.href = "https://console.unlimitpotential.com/sign-in";
    }
  };
  
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/descope-sample-apps/next-js-sample-app">
            Descope Next.js Sample App
          </a>
        </h1>
        {!authenticated && (
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        )}
        {authenticated && (
          <>
            <div className={styles.description}>
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div className={styles.description}>Submit API Form</div>
            <form onSubmit={handleSubmit}>
              <button type="submit">Submit</button>
            </form>
          </>
        )}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <div>Server Side Props Data:</div>
          <div className={styles.card}>
            <code className={styles.code}>{data}</code>
          </div>
        </div>
      </main>
      <div>
      <Head>
        <title>Mixpanel Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Mixpanel Example</h1>
        <button onClick={handleClick}>Track Button Click</button>
      </main>
    </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const validated = await validateRequestSession(context.req);

  return {
    props: {
      data: validated ? "Validated" : "Not Validated",
    },
  };
};
