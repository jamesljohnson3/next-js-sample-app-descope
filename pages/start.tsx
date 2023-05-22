/* eslint-disable react/no-unescaped-entities */
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
import {SignInForm} from "../components/SignInForm";
import { Gate, useSubscription } from "use-stripe-subscription";
import { FormStepper, FormValue, Loader, ModalsProvider, PrevButton, Property, PropertyList, StepperCompleted, useModals } from '@saas-ui/react'
import { useSnackbar } from '@saas-ui/react'
import { Field, FormLayout} from '@saas-ui/react'
import {
  StepForm,
  FormStep, Button,
  NextButton,
} from '@saas-ui/react'
import { EmptyState } from '@saas-ui/react'
import { useAuth } from "@descope/react-sdk";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SyntheticEvent, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getUserDisplayName, validateRequestSession } from "../utils/auth";
import { builder, BuilderComponent } from '@builder.io/react'
import {
	ButtonGroup, Spacer, Text
  } from '@chakra-ui/react'
import {
	createTheme,
	NextUIProvider } from "@nextui-org/react";
  import Boxui from './testui-final';
  const lightTheme = createTheme({
	type: "light",
	theme: {
	  colors: {}
	}
  });
  
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  const alertResponse = async (path: RequestInfo | URL) => {
    const res = await fetch(path);
    const body = await res.text();
    alert(`Path requested: ${path}\nResponse: ${body}`);
  };
export default function Home (props: any) {
  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve, reject) => {
      fetch('https://hook.us1.make.com/e727pmawescz23ls88greva6s24l9yma', {
        method: 'POST', // Adjust the HTTP method as needed (e.g., GET, POST, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content type for your API
        },
        body: JSON.stringify(params), // Convert params to JSON string
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('API request failed');
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
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
  
  const snackbar = useSnackbar()

  const modals = useModals()
  const next = () => {
    const id = modals.open({
      title: 'Modal step 2',
      body: 'Step 2',
      footer: (
        <>
          <Button onClick={() => modals.close(id)} mr="3"  />
          <Button onClick={() => modals.closeAll()}  />
        </>
      ),
    })
  }
  return (
    <div className={styles.container}>
      <Head>
				<title>Console | Unlimited Now </title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>   
<NextUIProvider theme={lightTheme}>
			<div className="min-h-screen flex max-w-7xl mx-auto xl:grid xl:grid-cols-10 gap-5">
			<Nav />

				<main className="col-span-5 w-full border-x border-slate-200">
					<Header title="Home" />
					<SignedIn><Tabs /><Boxui/> </SignedIn>       <SignedOut>  {!authenticated && (
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        )}
        {authenticated && (
          <>
<div className="grid grid-flow-col rounded-3xl bg-layer-2 p-8 md:col-span-2" >
  <div><h2 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
      You're in control.
    </h2>
    <p className="mt-4 text-lg">
      All of your stats are displayed in an easy to understand
      dashboard. Make decisions with confidence.
    </p>
    <img
      className="mt-6 lg:mt-14 max-h-24"
      src="https://i.imgur.com/5JzWVvz.png"
      alt=""
    /></div><div><EmptyState
    colorScheme="primary"
    icon=""
    title="No customers yet"
    description="You haven't imported any customers yet."
    actions={
      <>
         <Button label="Import customers" colorScheme="primary" />
      <Button label="Create customer" />
      </>
    }
  />
  </div>    </div>       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

    <StepForm
      defaultValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <FormLayout>
        <FormStepper>
          <FormStep
            name="project"
            title="Create"
          >
            <FormLayout>
              <Field name="name" isRequired label="Name" />
              <Field name="description" label="Description" />
            </FormLayout>
          </FormStep>
          <FormStep
            name="members"
            title="Share"
          >
            <FormLayout>
              <Field
                name="members"
                type="textarea"
                label="Invite people"
                placeholder="hello@saas-ui.dev, etc"
                autoFocus
              />
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Manage">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Property label="Name" value={<FormValue name="name" />} />
                <Property
                  label="Description"
                  value={<FormValue name="description" />}
                />
              </PropertyList>
            </FormLayout>
          </FormStep>

          <StepperCompleted>
            <Loader>We are setting up your project, just a moment...</Loader>
          </StepperCompleted>
        </FormStepper>
        <ButtonGroup w="full">
          <PrevButton variant="ghost" />
          <Spacer />
          <NextButton />
        </ButtonGroup>
      </FormLayout>
    </StepForm></div>           </>
        )} 
  
</SignedOut>   

				</main>
				<aside className="col-span-3 hidden xl:flex flex-col w-[350px]">
					<div className="sticky top-0">
						<Search /> <div>
        <Gate feature="feature1">Plan has &quot;feature1&quot;</Gate>
        <Gate feature="feature1" negate>
          Plan does not have &quot;feature1&quot;
        </Gate>{" "}
    
      </div>
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
          <><Link href="https://feed.unlimitpotential.com/" passHref>
									  <button>Login</button>
								  </Link></>   
        )}
        {authenticated && (
          <>
            <div className={styles.description}>
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div className={styles.description}>Unlock all features</div>free for a limited time only
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
  