/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback } from 'react';
import convert from 'xml-js';

export function findEl(
  el: convert.Element | convert.ElementCompact, name: string | string[]
  ): convert.Element | convert.ElementCompact | undefined {
  if (Array.isArray(name)) {
    let currentEl: convert.Element | convert.ElementCompact | undefined = el;
    name.forEach((n) => {
      if (currentEl) {
        currentEl = findEl(currentEl, n);
      }
    });
    return currentEl;
  }
  if (el && el.elements) {
    return el.elements.find(
      (element: convert.Element | convert.ElementCompact) => element.name === name);
  }
  return undefined;
}

export function findElText(
  el: convert.Element | convert.ElementCompact | undefined
  ): string | number | boolean {
  if (el && el.elements) {
    const textElement = el.elements.find((element: convert.Element) => element.type === 'text');
    if (textElement) {
      return textElement.text ? textElement.text : '';
    }
  }
  return '';
}

export const loadXMLToJS = (file: File) => {
  const reader = new FileReader();
  reader.onload = () => convert.xml2js(
    reader.result as string, { compact: false, alwaysChildren: true }
  );
  reader.readAsText(file);
};
