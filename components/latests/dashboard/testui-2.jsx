import React from 'react';
import { WithUser } from "@clerk/nextjs";
import Microlink from '@microlink/react'

function Greeting() {
  return (
    <WithUser>
      {(user) => {
        if (user && user.unsafeMetadata && user.unsafeMetadata.galleryImgs) {
          const { galleryImgs } = user.unsafeMetadata;

          return (
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">              {galleryImgs[0].galleryImg.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.url}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                </li>
              ))}
              {galleryImgs.map((item) => (
                <><p key={item.name}>🧠 {item.city} - </p><Microlink url={item.name} fetchData /></>
                ))}
            </div>
          );
        } else {
          return<div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-medium mb-4">No data available</h2>
          <p className="text-gray-500">Please add some posts.</p>
          <a
            href="https://connect.unlimitpotential.com/collections"
            className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
              />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">Quick Launch</span>
          </a>
        </div>;
        }
      }}
    </WithUser>
  );
}

export default Greeting;
