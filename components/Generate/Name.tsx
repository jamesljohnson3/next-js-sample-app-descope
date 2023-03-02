/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import convert from 'xml-js';

export const pascalName = (props: convert.Element) => {
  const camelName = props.name as string;
  return camelName.charAt(0).toUpperCase() + camelName.slice(1);
};

export const camelName = (props: convert.Element) => props.name as string;

export const asComponentName = (props: convert.Element) => `${pascalName(props)}Component`;

export const asPropsName = (props: convert.Element) => `${pascalName(props)}Props`;

export const asStateName = (props: convert.Element) => `${camelName(props)}Element`;

export const asStateSetterName = (props: convert.Element) => `set${pascalName(props)}Element`;

export const asStateListName = (props: convert.Element) => `${camelName(props)}Elements`;

export const asStateListSetterName = (props: convert.Element) => `set${pascalName(props)}Elements`;
