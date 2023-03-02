/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { Tabs } from '@mantine/core';
import { findEl, findElText } from '../Utils/Utils';

import MapComponent from '../Map/Map';

interface SaveProps extends convert.Element {
  children?: React.ReactNode,
}

const SaveComponent: React.FC<SaveProps> = (props) => {
  //console.log('SaveComponent');
  const [name, setName] = useState(props.name);

  const [maps, setMaps] = useState(findEl(props, ['game', 'maps'])?.elements ?? [] as convert.Element[]);

  const addMap = useCallback((map: convert.Element) => {
    setMaps(maps.concat(map));
  }, [maps, setMaps]);

  return (
    <>
      {maps.map((map: convert.Element) => (
          <MapComponent key={uuidv4()} {...map} />
        ))}
    </>
  );
};

export default SaveComponent;
