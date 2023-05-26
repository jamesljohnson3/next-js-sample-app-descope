/* eslint-disable @next/next/no-img-element */
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
    Uppy Transloadit Test
    <DragDrop uppy={uppy} />
    <form className="needs-validation" onSubmit={handleFormSubmit}>
        <div className="transloadit-drop-area">
          <div id="upload-progress-bar"></div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-10">
        <div className="col-span-4">
                <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                  Enter new title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name-on-card"
                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </div>
              </div>
          <RadioGroup value={selectedDeliveryMethod} onChange={setSelectedDeliveryMethod}>
            <RadioGroup.Label className="text-lg font-medium text-gray-900">Delivery method</RadioGroup.Label>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              {deliveryMethods.map((deliveryMethod) => (
                <RadioGroup.Option
                  key={deliveryMethod.id}
                  value={deliveryMethod}
                  className={({ checked, active }) =>
                    classNames(
                      checked ? 'border-transparent' : 'border-gray-300',
                      active ? 'ring-2 ring-indigo-500' : '',
                      'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                    )
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex-1 flex">
                        <div className="flex flex-col">
                          <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                            {deliveryMethod.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                            {deliveryMethod.turnaround}
                          </RadioGroup.Description>
                          <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                            {deliveryMethod.price}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked ? <>Icon</> : null}
                      <div
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-500' : 'border-transparent',
                          'absolute -inset-px rounded-lg pointer-events-none'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="photogallery">
        <div className="photogallery">
          {uploadedFiles.map((file) => (
            <img
              key={file.id}
              src={file.url}
              alt={file.name}
              className="w-full h-auto bg-gray-200 rounded-md"
            />
          ))}
        </div>
        </div>

        <button type="submit">Upload</button>
      </form>
    <StatusBar uppy={uppy} />
  </>
  );
}

export default withUser(UploadForm);
