import * as React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { SEO } from '../components/seo/seo'

import { FallInPlace } from '../components/motion/fall-in-place'
import { Hero } from '../components/hero'
import { Link, Br } from '@saas-ui/react'
import { Em } from '../components/typography'
import { NextjsLogo, ChakraLogo } from '../components/logos'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { Features } from '../components/features'
import { Faq } from '../components/faq'
import { Pricing } from '../components/pricing/pricing'
import { SyntheticEvent, useCallback, useEffect } from "react";
import { getUserDisplayName, validateRequestSession } from "../utils/auth";
import { useAuth } from "@descope/react-sdk";

import { ButtonLink } from '../components/button-link/button-link'
import { Testimonial, Testimonials } from '../components/testimonials'

import faq from '../data/faq'
import testimonials from '../data/testimonials'
import pricing from '../data/pricing'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '../components/highlights'



const Home: NextPage = () => {
  return (
    <Box>
     
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {

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
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
      {!authenticated && (
          <Link href="/login">
            <button>Login</button>
          </Link>
        )}
        {authenticated && (
          <>
            <div >
              Hello {getUserDisplayName(user)}
            </div>
            <button onClick={onLogout}>Logout</button>
            <div >Submit API Form</div>
            <form onSubmit={handleSubmit}>
              <button type="submit">Upgrade</button>
            </form>
          </>
        )}
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Build beautiful
                <Br /> websites smarter
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Unlimited Now a <Em>Next-Gen Tool</Em>
                <Br /> For Sellers, Small Business Owners <Br />{' '}
                and Creators
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://accounts.unlimitpotential.com/upgrade">
Manage Site          </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="http://command.unlimitpotential.com/"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Connect Feed
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <a href="https://accounts.unlimitpotential.com"><Box overflow="hidden" height="100%">
                <Image
                  src="https://res.cloudinary.com/unlimitednow/image/upload/v1677207023/Screen_Shot_2023-02-23_at_9.43.47_PM_gjbu32.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box></a>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

     
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
   <></>
  )
}

const FeaturesSection = () => {
  return (
   <></>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []]
    )
  }, [])

  return (
    <></>
  )
}

const PricingSection = () => {
  return (
   <></>
  )
}

const FaqSection = () => {
  return <></>
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: '',
        href: 'https://unlimitpotential.com/login',
      },
    },
  }
}