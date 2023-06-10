/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
  } from '@saas-ui/sidebar'
  import { Box, Flex, Text, Checkbox } from "@chakra-ui/react";


const navigation = [
    { name: 'Dashboard', href: '#', icon: <svg>...</svg>, current: true },
    { name: 'Team', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Projects', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Calendar', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Documents', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Reports', href: '#', icon: <svg>...</svg>, current: false },
  ];
  
  const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
    { name: 'GraphQL API', href: '#' },
    { name: 'Customer migration guides', href: '#' },
    { name: 'Profit sharing program', href: '#' },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Example() {
  const [open, setOpen] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <AppShell
  navbar={
    <Box as="header" borderBottomWidth="1px" py="2" px="4">
Logo  

  </Box>
  }
  sidebar={
    <Sidebar>
      <SidebarSection>
        <NavItem>Home</NavItem>
        <NavItem>Settings</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
  <Box as="main" flex="1" py="2" px="4" overflowY="auto">
    Your application content
  </Box>
</AppShell>
  )
}
