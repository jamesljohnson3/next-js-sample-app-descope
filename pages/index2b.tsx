import Head from 'next/head';
import Nav from '../components/ui/Nav';
import Header from '../components/ui/Header';
import Search from '../components/ui/Search';
import PanelItem from '../components/ui/PanelItem';
import Panel from '../components/ui/Panel';
import PanelItemTrends from '../components/ui/PanelItemTrends';
import Footer from '../components/ui/Footer';
import Tabs from '../components/ui/radix/Tabs';
import { ClerkProvider } from "@clerk/clerk-react";
import { UserButton,  useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignIn } from "@clerk/nextjs";


import { useAuth } from "@descope/react-sdk";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SyntheticEvent, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getUserDisplayName, validateRequestSession } from "../utils/auth";
import { builder, BuilderComponent } from '@builder.io/react'

import {
	createTheme,
	NextUIProvider } from "@nextui-org/react";
  
  const lightTheme = createTheme({
	type: "light",
	theme: {
	  colors: {}
	}
  });
  
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function Home (props: any) {
  
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
	alert(`Result: ${result.success ? "Success" : "Error"}`);
  };
  

  return (
    <div className={styles.container}>
      <Head>
				<title>Twitter UI Clone</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>   
<NextUIProvider theme={lightTheme}>
			<div className="min-h-screen flex max-w-7xl mx-auto xl:grid xl:grid-cols-10 gap-5">
				{!authenticated && (
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        )}
        {authenticated && (
          <>
          <Nav />
          </>
        )}
				<main className="col-span-5 w-full border-x border-slate-200">
					<Header title="Home" />
					<SignedIn><Tabs /> </SignedIn>       <SignedOut>   <SignIn/> </SignedOut>   

				</main>
				<aside className="col-span-3 hidden xl:flex flex-col w-[350px]">
					<div className="sticky top-0">
						<Search /> 
						<Panel title="What's happening" href="/">
						<Greeting />
							<PanelItemTrends
								title="Next JS"
								category="Development"
								stat="57.5K"
							/>
							<PanelItemTrends title="Figma" category="Design" stat="107.5K" />
							<PanelItemTrends
								title="Webflow"
								category="Design"
								stat="127.5K"
							/>
							<PanelItemTrends
								title="Tailwind CSS"
								category="Development"
								stat="87.5K"
							/>
							<PanelItemTrends
								title="Vercel"
								category="Development"
								stat="27.5K"
							/>
						</Panel>
						<Panel title="Who to follow" href="/">
							<PanelItem
								src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjd8NzkwMjQ2NTJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
								name="Charles Deluvio"
								username="charlesdeluvio"
								initials="CD"
							/>
							<PanelItem
								src="https://images.unsplash.com/photo-1613951085587-cfe5d0a6cffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NzkwMjQ2NTJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
								name="Tolga Ulkan"
								username="tolgaulkan"
								initials="TU"
							/>
							<PanelItem
								src="https://images.unsplash.com/photo-1614777735430-7b46df56b404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3OTAyNDY1Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
								name="Rob Potter"
								username="robpotter"
								initials="RB"
							/>
						</Panel>{!authenticated && (
          <><Link href="/login" passHref>
									  <button>Login</button>
								  </Link></>   
        )}
        {authenticated && (
          <>
            <div className={styles.description}>
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div className={styles.description}>Go Pro Now </div>free for a limited time only
            <form onSubmit={handleSubmit}>
              <button type="submit">Activate Pro Account</button>
            </form>
          </>
        )}

						<Footer />
					</div>
				</aside>
			</div></NextUIProvider> 
    </div>
  );
}


function Greeting() {
	// Use the useUser hook to get the Clerk.user object
	// This hook causes a re-render on user changes
	const { isLoaded, isSignedIn, user } = useUser();
	
	if (!isLoaded || !isSignedIn) {
	  // You can handle the loading or signed state separately
	  return null;
	}
	
	return <div>Hello, {user.username}!</div>;
  }
  