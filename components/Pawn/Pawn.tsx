/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

import { Button, Grid, Stack, Text } from '@mantine/core';

import { useId } from '@mantine/hooks';
import { preProcessFile } from 'typescript';
import { LineDashed } from 'tabler-icons-react';
import JSZip from 'jszip';
import saveAs from 'file-saver';
import { findEl, findElText } from '../Utils/Utils';
import NameComponent from '../Name/Name';
import { asFile, asFileString, saveFile } from '../Generate/File';
import { pascalName } from '../Generate/Name';

const zip = new JSZip();
interface PawnProps extends convert.Element {
    children?: React.ReactNode,
}

const getNameString = (props: convert.Element) => {
    const nameElement = findEl(props, 'name') as convert.Element;
    const first = findElText(findEl(nameElement, 'first')) as string;
    const nick = findElText(findEl(nameElement, 'nick')) as string;
    const last = findElText(findEl(nameElement, 'last')) as string;
    return first + nick + last;
};

const recursePrint = (props: convert.Element, indent: number) => {
    if (props.type === 'element') {
        console.log(' '.repeat(indent) + props.name);
    } else {
        console.log(' '.repeat(indent) + props.text);
    }
    if (props.elements) {
        props.elements.forEach((element) => {
            recursePrint(element, indent + 2);
        });
    }
};

const recurseDownload = (props: convert.Element) => {
    console.log('recurseDownload');
    console.dir(props);
    const folderName = pascalName(props);
    const fileName = `${folderName}.tsx`;
    if (props.type === 'element') {
        const current_folder = zip.folder(folderName) as JSZip;
        current_folder.file(fileName, asFileString(props));
        if (props.elements && props.elements[0]?.type !== 'text') {
            props.elements?.forEach((el: convert.Element) => {
                recurseDownload(el);
            });
        }
    }
};

const downloadZip = (props: convert.Element) => {
    recurseDownload(props);
    zip.generateAsync({ type: 'blob' }).then((blob) => {
        saveAs(blob, 'gen_components.zip');
    });
};

const getFiles = (props: convert.Element): File[] => {
    console.log('getFiles');
    const files: File[] = [];
    if (props.type === 'element') {
        files.push(asFile(props));
        props.elements?.forEach((el: convert.Element) => {
            getFiles(el).forEach((file) => {
                files.push(file);
            });
        });
    }
    return files;
};

const PawnComponent: React.FC<PawnProps> = (props) => {
    //console.log('PawnComponent');
    //console.dir(props);
    const [nameElement, setNameElement] = useState<convert.Element>(findEl(props, 'name') as convert.Element);
    recursePrint(props, 0);
                //<Stack>
                    //{getFiles(props).map((file) => <Button onClick={() => {saveAs(file)}}>{file.name}</Button>)}
                //</Stack>
    return (
        <Grid key={useId()}>
            <Grid.Col key={useId()} span={3}>
                <NameComponent onChange={setNameElement} {...nameElement as convert.Element} />
            </Grid.Col>
            <Grid.Col key={useId()} span={6} offset={3}>
                <Button onClick={() => downloadZip(props)}>
                    <Text>Save Pawn</Text>
                </Button>
            </Grid.Col>
        </Grid>
    );
};

export default PawnComponent;
export { getNameString };
