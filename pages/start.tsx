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
  FormStep,
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
	Button, ButtonGroup, Text
  } from '@chakra-ui/react'
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
  const alertResponse = async (path: RequestInfo | URL) => {
    const res = await fetch(path);
    const body = await res.text();
    alert(`Path requested: ${path}\nResponse: ${body}`);
  };
export default function Home (props: any) {
   const onSubmit = (params: any) => {
    console.log(params)
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

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
					<SignedIn><Tabs /><Button
      onClick={() =>
        snackbar({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Snackbar
    </Button> <Button
      colorScheme="red"
      onClick={() =>
        modals.confirm({
          title: 'Delete user',
          body: 'Are you sure you want to delete this user?',
          confirmProps: {
            colorScheme: 'red',
            label: 'Delete',
          },
          onConfirm: () => {}, // action
        })
      }
    >
      Delete user
    </Button> </SignedIn>       <SignedOut>        <div className="max-w-3xl mx-auto">
    <StepForm
      defaultValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep
            name="project"
            title="Project details"
          >
            <FormLayout>
              <Field name="name" isRequired label="Name" />
              <Field name="description" label="Description" />
              <NextButton />
            </FormLayout>
          </FormStep>
          <FormStep
            name="members"
            title="Invite your team"
          >
            <FormLayout>
              <Field
                name="members"
                type="textarea"
                label="Invite people"
                placeholder="hello@saas-ui.dev, etc"
                autoFocus
              />
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Property label="Name" value={<FormValue name="name" />} />
                <Property
                  label="Description"
                  value={<FormValue name="description" />}
                />
              </PropertyList>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>

          <StepperCompleted>
            <Loader>We are setting up your project, just a moment...</Loader>
          </StepperCompleted>
        </FormStepper>
      </FormLayout>
    </StepForm></div> <EmptyState
  colorScheme="primary"
  icon=""
  title="No customers yet"
  description="You haven't imported any customers yet."
  actions={
    <>
      <Button colorScheme="primary" />
      <Button  />
    </>
  }
/>
</SignedOut>   

				</main>
				<aside className="col-span-3 hidden xl:flex flex-col w-[350px]">
					<div className="sticky top-0">
						<Search /> <div>
        <Gate feature="feature1">Plan has &quot;feature1&quot;</Gate>
        <Gate feature="feature1" negate>
          Plan does not have &quot;feature1&quot;
        </Gate>{" "}
        <Button
      onClick={() =>
        modals.open({
          title: 'Modal step 1',
          body: 'Step 1',
          footer: (
            <>
              <Button onClick={next}  />
            </>
          ),
        })
      }
    >
      Open modal
    </Button>
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
  