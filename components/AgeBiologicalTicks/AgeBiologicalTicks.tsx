/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { Group, Text, TextInput } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

interface AgeBiologicalTicksProps extends convert.Element {
  onChange: (props: convert.Element) => void,
  children?: React.ReactNode,
}

const AgeBiologicalTicksComponent: React.FC<AgeBiologicalTicksProps> = (props: AgeBiologicalTicksProps) => {
  const [value, setValue] = useState<string>(findElText(props) as string);
  useEffect(() => {
    props.onChange({
      text: value,
      ...props,
    });
  }, [value, props]);
  return (
    <Group>
      <TextInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Group>
  );
};

export default AgeBiologicalTicksComponent;
