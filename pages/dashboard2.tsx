/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { AppShell, Group, Header, Text } from '@mantine/core';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/dist/server/api-utils';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Nav from '../components/Nav/Nav';
import SaveComponent from '../components/Save/Save';
import { sampleData } from '../data/SampleData';

interface ContentsProps {
  children: React.ReactNode;
}

const ContentsComponent: React.FC<ContentsProps> = (props) => {
  console.log('ContentsComponent - props: ');
  console.dir(props);
  return (
    <>
      {props.children}
    </>
  );
};

export default function HomePage() {
  const header = (
    <Header height={60} p="xs">
      Header
    </Header>
  );

  const [saveElement, setSaveElement] = useState<convert.Element>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
  acceptedFiles.forEach((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const xmlAsJS: convert.Element = convert.xml2js(reader.result as string, {
        compact: false,
        alwaysChildren: true,
      }) as convert.Element;
      console.log('xmlAsJS');
      console.dir(xmlAsJS);
      setSaveElement(xmlAsJS?.elements ? xmlAsJS.elements[0] : undefined);
    };
    reader.readAsText(file);
    });
  }, [saveElement]);

  return (
    <>
      <AppShell
        padding="md"
        navbar={<Nav saves={[saveElement]} />}
        header={header}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      >
       <></>
        <SaveComponent key={uuidv4()} {...saveElement} />
        <ColorSchemeToggle />
      </AppShell>
    </>
  );
}
