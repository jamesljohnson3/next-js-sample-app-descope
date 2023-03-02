/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

export const asImports = (props: convert.Element) => {
  const lines: string[] = [
    'import React, { useState, useEffect } from \'react\';',
    'import convert from \'xml-js\';',
    'import { Group, Text, TextInput } from \'@mantine/core\';',
    'import { v4 as uuidv4 } from \'uuid\';',
    'import { findEl, findElText } from \'../../Utils/Utils\';',
  ];
  props.elements?.forEach((el: convert.Element) => {
    if (el.type === 'element') {
      lines.push(`import ${asComponentName(el)} from './${pascalName(el)}/${pascalName(el)}';`);
    }
  });
  return lines.join('\n');
};
