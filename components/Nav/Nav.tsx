/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import convert from 'xml-js';

import { Navbar } from '@mantine/core';
import { Brand } from '../Brand/Brand';
import { MainLinks } from '../MainLinks/MainLinks';

interface NavProps {
  saves: Array<convert.Element | undefined>;
  children?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ saves, children }) => (
  <Navbar height={600} p="xs" width={{ base: 300 }}>
    <Navbar.Section mt="xs">
      <Brand />
    </Navbar.Section>
    <Navbar.Section grow mt="md">
      <MainLinks />
    </Navbar.Section>
  </Navbar>
);

export default Nav;
