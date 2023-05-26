/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import { StatusBar, useUppy, DragDrop } from '@uppy/react';
import Transloadit from '@uppy/transloadit';
import '@uppy/core/dist/style.css';
import '@uppy/status-bar/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import { RadioGroup } from '@headlessui/react';
import { useUser, SignIn, SignedIn, SignedOut, withUser, useClerk } from '@clerk/nextjs';

const TRANSLOADIT_KEY = '5fbf6af63e0e445abcc83a050048a887';
const TEMPLATE_ID = '9e9d24fbce8146369ce9faab869bfba1';
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function UploadForm() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0]);

 
  const uppy = useUppy(() => {
    const instance = new Uppy({
      autoProceed: true
    });

    instance.on('complete', (result) => {
      console.log(result);
    });

    instance.use(Transloadit, {
      params: {
        auth: { key: TRANSLOADIT_KEY },
        template_id: TEMPLATE_ID,
      },
    });

    instance.on('transloadit:complete', (assembly) => {
      const files = assembly.results[':original'];
      setUploadedFiles(files);
    });

    instance.on('transloadit:error', (error) => {
      console.error(error);
    });

    instance.on('complete', (result) => {
      if (result.successful && result.successful.length > 0) {
        const { uploadURLs } = result.successful[0];
        if (uploadURLs && uploadURLs.length > 0) {
          const { url } = uploadURLs[0];
          setUploadedImageUrl(url);
          console.log('Upload complete! We\'ve uploaded these files: ', result.successful);
        }
      }
    });

    return instance;
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://hook.us1.make.com/u86xn8shxxnyc2khlghth7ck9dctzb7m', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          result: uploadedFiles,
        }),
      });

      if (response.ok) {
        // Handle successful API response
        console.log('Data posted to API successfully');
      } else {
        // Handle API errors
        throw new Error('Error posting data to API');
      }
    } catch (error) {
      // Handle fetch request error
      console.error(error);
    }
  };

  return (
    <>
      <SignedIn>
        Uppy Transloadit Test
        <DragDrop uppy={uppy} />
        <form className="needs-validation" onSubmit={handleFormSubmit}>
          {/* Rest of your form content */}
        </form>
        <StatusBar uppy={uppy} />
      </SignedIn>
      <SignedOut>Hello</SignedOut>
    </>
  );
}

export default withUser(UploadForm);
