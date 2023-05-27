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
                <p key={item.name}>🧠 {item.city} - {item.name}</p>
              ))}
            </div>
          );
        } else {
          return <p>You are not signed in.</p>;
        }
      }}
    </WithUser>
  );
}

export default Greeting;
