/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

const childrenAreElements = (props: convert.Element) => props.elements && props.elements[0]?.type !== 'text';

export const asEffects = (props: convert.Element) => {
  let lines: string[] = [];
  if (props.elements) {
    const elementStates = props.elements.map((el: convert.Element) => `        ${asStateName(el)},`);
    const elementStateDeps = props.elements.map((el: convert.Element) => asStateName(el));
    const elementLines = [
      '      elements: [',
      ...elementStates,
      '      ],',
    ];
    const textLines = [
      '      text: value,',
    ];
    const getLines = () => childrenAreElements(props) ? elementLines : textLines;
    lines = [
      '  useEffect(() => {',
      '    props.onChange({',
      ...getLines(),
      '      ...props,',
      '    });',
      `  }, [${childrenAreElements(props) ? [...elementStateDeps, 'props'].join(', ') : ['value', 'props'].join(', ')}]);`,
    ];
  }
  return lines.join('\n');
};
