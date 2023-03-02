/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { SwitchesCard } from '../components/apiPage/switchCardApi';
import { SettingsCard } from '../components/settings/card';
import { ProgressCardColored } from '../components/general/usageStats';

export default function ApiPage() {
  const theme = useMantineTheme();
  const dataTable = require('../data/apiPage.json');
  const item = {
    title: 'Invitation link',
    description: 'https://mydomain.com/invitations/wjnfn3j4fn',
  };

  const usage = {
    allocated: 500,
    used: 130,
    percentage: 26,
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    >
      <SwitchesCard
        title={dataTable.title}
        description={dataTable.description}
        data={dataTable.data}
      />
            <SettingsCard title={item.title} description={item.description} />
            <ProgressCardColored usage={usage} />

    </AppShell>
  );
}
