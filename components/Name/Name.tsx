/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

import { Group, Text, TextInput } from '@mantine/core';

import { findEl, findElText } from '../Utils/Utils';

interface NameProps extends convert.Element {
    onChange: (name: convert.Element) => void,
    children?: React.ReactNode,
}

const NamePortionComponent: React.FC<NameProps> = (props) => {
    console.log('');
    const [nameValue, setNameValue] = useState(findElText(props) as string);
    useEffect(() => {
        props.onChange({
            text: nameValue,
            ...props,
        });
    }, [nameValue, setNameValue]);

    return (
        <TextInput
          value={nameValue}
          onChange={(e) => {
              setNameValue(e.target.value);
          }}
        />
    );
};

const NameComponent: React.FC<NameProps> = (props) => {
    //console.log('NameComponent');
    //console.dir(props);
    const [firstElement, setFirstElement] = useState<convert.Element>(findEl(props, 'first') as convert.Element);
    const [nickElement, setNickElement] = useState<convert.Element>(findEl(props, 'nick') as convert.Element);
    const [lastElement, setLastElement] = useState<convert.Element>(findEl(props, 'last') as convert.Element);

    return (
        <Group>
            <NamePortionComponent onChange={setFirstElement} {...firstElement} />
            <NamePortionComponent onChange={setNickElement} {...nickElement} />
            <NamePortionComponent onChange={setLastElement} {...lastElement} />
        </Group>
    );
};

export default NameComponent;
