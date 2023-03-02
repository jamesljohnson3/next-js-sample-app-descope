/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { asComponentRefs } from './ComponentRefs';
import { asEffects } from './Effects';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

import { asStates } from './States';

const asGroup = (props: convert.Element) => [
    '    <Group>',
    asComponentRefs(props),
    '    </Group>',
  ].join('\n');

export const asComponent = (props: convert.Element) => {
  let lines: string[] = [];

  if (props.elements) {
    lines = [
      `const ${asComponentName(props)}: React.FC<${asPropsName(props)}> = (props: ${asPropsName(props)}) => {`,
      asStates(props),
      asEffects(props),
      '  return (',
      asGroup(props),
      '  );',
      '};',
    ];
  }
  return lines.join('\n');
};
