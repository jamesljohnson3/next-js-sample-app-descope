
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from 'react';
import Box from './ma';
import * as React from "react";
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { UserButton,  useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

const solutions = [
    { name: 'Analytics', description: 'See what others see', href: 'https://connect.unlimitpotential.com/flow', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Direct to Consumer', href: 'https://space.unlimitpotential.com/upgrade', icon: CursorArrowRaysIcon },
    { name: 'Apps & Security', description: "Update Preferences", href: 'https://accounts.unlimitpotential.com/upgrade', icon: FingerPrintIcon },
 { name: 'Integrations', description: 'Automations', href: 'https://studio.unlimitpotential.com/upgrade', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Go Live', href: 'https://console.unlimitpotential.com/upgrade', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Sellers Accounts', href: 'https://lillieai-betav1b.unlimitpotential.com/upgrade', icon: PlayCircleIcon },
    { name: 'Goals & Settings', href: 'https://feed.unlimitpotential.com/upgrade', icon: PhoneIcon },
  ]
export default function MyComponent() {
  return (
    <>
      <div className="div">
        <nav className="nav">
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">
                <a
                  aria-label="Logo"
                  href="https://unlimitpotential.com/"
                  className="a"
                >
                  <div className="div-5" lockAspectRatio={false}>
                    <picture>
                      <source
                        srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                        type="image/webp"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                        srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                        className="image"
                      />
                    </picture>
                    <div className="builder-image-sizer image-sizer" />
                  </div>
                </a>
                <nav className="nav-2">
                  <a className="a-2">Integrations</a>
                  <a className="a-3">Extensions</a>
                  <a className="a-4">Apps</a>
                  <a className="a-5">Partners</a>
                </nav>
              </div>
              
<Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>            
            </div>
          </div>
        </nav>
<SignedOut><Box/></SignedOut>
<SignedIn>
        <div className="dashboard-style-2">
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">
                <div className="div-9">
                  <div className="div-10">
                    <span className="span" />
                    <input
                      type="text"
                      placeholder="Search..."
                      autoComplete="off"
                      scale="1.25"
                      width="100%"
                      value=""
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <button type="button" marginleft="1" className="button">
                New Project
              </button>
              <button
                type="button"
                marginleft="1"
                px="0"
                width="48px"
                className="button-2"
              >
                <span className="span-2" />
              </button>
            </div>
            <div margintop="1" className="div-11">
              <div className="div-12">
                <div className="div-13">
                  <div className="div-14">
                    <div className="div-15">
                      <div className="div-16">
                        <span className="span-3">
                          <Image
                            alt="avatar"
                            draggable="false"
                            height="1.25"
                            width="1.25"
                            marginright="0.75"
                            image="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/next.svg"
                            className="raw-img"
                          />
                        </span>
                        <div>
                          <p margin="0" className="p">
                            react-dashboard-design
                          </p>
                          <p margin="0" font="0.875rem" className="p-2">
                            react-dashboard-design.vercel.app
                          </p>
                        </div>
                      </div>
                      <div margin="0" className="div-17">
                        Bump version
                      </div>
                      <p marginbottom="0" font="0.875rem" className="p-3">
                        4m
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-18">
                <div className="div-19">
                  <div className="div-20">
                    <div className="div-21">
                      <div className="div-22">
                        <span className="span-4">
                          <Image
                            alt="avatar"
                            draggable="false"
                            height="1.25"
                            width="1.25"
                            marginright="0.75"
                            image="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/next.svg"
                            className="raw-img"
                          />
                        </span>
                        <div>
                          <p margin="0" className="p">
                            github-blog
                          </p>
                          <p margin="0" font="0.875rem" className="p-4">
                            github.blog
                          </p>
                        </div>
                      </div>
                      <div margin="0" className="div-23">
                        Fix font-size in footer
                      </div>
                      <p marginbottom="0" font="0.875rem" className="p-5">
                        8d
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SignedIn>
      </div>{" "}
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          height: auto;
          background-color: rgba(255, 255, 255, 1);
          flex-grow: 0;
          width: auto;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div {
            width: 100%;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .nav {
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0px;
          transition-duration: 0.15s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 40;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          background-color: rgba(255, 255, 255, 1);
          max-height: 75px;
        }
        @media (max-width: 640px) {
          .nav {
            width: 100vw;
            align-self: stretch;
            margin-left: calc(50% - 50vw);
            background-color: rgba(254, 254, 254, 1);
          }
        }
        .div-2 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-left: auto;
          margin-right: auto;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          width: 100vw;
          max-width: 1000px;
        }
        @media (max-width: 991px) {
          .div-2 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        @media (max-width: 640px) {
          .div-2 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-3 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
          justify-content: space-between;
          display: flex;
          position: relative;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .div-3 {
            padding-bottom: 1rem;
            padding-top: 1rem;
          }
        }
        .div-4 {
          align-items: center;
          flex-basis: 0%;
          flex-grow: 1;
          display: flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a {
          border-radius: 9999px;
          border-top-left-radius: 9999px;
          cursor: pointer;
          transform: none;
          transition-duration: 0.1s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: -3px;
          width: 100%;
          min-height: 45px;
          min-width: 36px;
          overflow: hidden;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 106.5%;
          pointer-events: none;
          font-size: 0;
        }
        .nav-2 {
          display: block;
          margin-left: 1.5rem;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .nav-2 {
            display: none;
          }
        }
        .a-2 {
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgba(82, 82, 82, 1);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-3 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgba(88, 88, 88, 1);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-4 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgba(78, 78, 78, 1);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-5 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgba(74, 74, 75, 1);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-6 {
          justify-content: flex-end;
          flex-basis: 0%;
          flex-grow: 1;
          display: inline-flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          cursor: pointer;
          pointer-events: auto;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgba(42, 42, 42, 1);
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 640px) {
          .a-6 {
            color: rgba(70, 70, 70, 1);
          }
        }
        .dashboard-style-2 {
          background-color: rgb(17, 17, 17);
          min-height: calc(100vh - 172px);
          width: 100vw;
          margin-left: calc(50% - 50vw);
        }
        .div-6 {
          display: flex;
          flex-flow: row wrap;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
          padding-bottom: 32px;
          padding-left: 21.3333px;
          padding-right: 21.3333px;
          padding-top: 32px;
          width: 782pt;
        }
        .div-7 {
          display: flex;
          width: 100%;
        }
        .div-8 {
          display: inline-block;
          font-size: calc(15.75px);
          height: 40.5px;
          width: 100%;
        }
        .div-9 {
          align-items: center;
          display: inline-flex;
          height: 40.5px;
          width: 100%;
        }
        .div-10 {
          background-color: rgb(0, 0, 0);
          align-items: center;
          border-bottom: 1px solid rgb(51, 51, 51);
          border-bottom-color: rgb(51, 51, 51);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(51, 51, 51);
          border-left: 1px solid rgb(51, 51, 51);
          border-left-color: rgb(51, 51, 51);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 5px;
          border-right: 1px solid rgb(51, 51, 51);
          border-right-color: rgb(51, 51, 51);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(51, 51, 51);
          border-top-color: rgb(51, 51, 51);
          border-top-left-radius: 5px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          display: inline-flex;
          flex-basis: 0%;
          flex-grow: 1;
          height: 100%;
          transition: border 0.2s ease 0s, color 0.2s ease 0s;
          transition-delay: 0s, 0s;
          transition-duration: 0.2s, 0.2s;
          transition-property: border, color;
          transition-timing-function: ease, ease;
          user-select: none;
          vertical-align: middle;
        }
        .span {
          align-items: center;
          cursor: default;
          display: inline-flex;
          height: 100%;
          justify-content: center;
          line-height: 1;
          pointer-events: none;
          position: relative;
          width: 38.5px;
        }
        .input {
          font-size: 14px;
          background-color: transparent;
          border-bottom: none;
          border-left: none;
          border-right: none;
          border-top: none;
          margin-bottom: 3.5px;
          margin-right: 8.75px;
          margin-top: 3.5px;
          outline: none;
          width: 100%;
        }
        .button {
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(255, 255, 255);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left: 1px solid rgb(255, 255, 255);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 5px;
          border-right: 1px solid rgb(255, 255, 255);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(255, 255, 255);
          border-top-left-radius: 5px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          color: rgb(0, 0, 0);
          cursor: pointer;
          display: inline-flex;
          font-size: calc(14px);
          height: calc(40px);
          justify-content: center;
          line-height: calc(40px);
          margin-left: 16px;
          min-width: min-content;
          outline: none;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          padding-left: 18.4px;
          padding-right: 18.4px;
          position: relative;
          text-align: center;
          text-transform: capitalize;
          transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
            border 200ms ease 0ms, color 200ms ease 0ms;
          transition-delay: 0ms, 0ms, 0ms, 0ms;
          transition-duration: 200ms, 200ms, 200ms, 200ms;
          transition-property: background-color, box-shadow, border, color;
          transition-timing-function: ease, ease, ease, ease;
          user-select: none;
          white-space: nowrap;
          border-color: rgba(0, 0, 0, 0);
          align-items: center;
          top: -1px;
          z-index: 1;
        }
        @media (max-width: 991px) {
          .button {
            border-color: rgb(255, 255, 255);
          }
        }
        .button-2 {
          background-color: rgb(0, 0, 0);
          border-bottom: 1px solid rgb(51, 51, 51);
          border-bottom-color: rgb(51, 51, 51);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(51, 51, 51);
          border-left: 1px solid rgb(51, 51, 51);
          border-left-color: rgb(51, 51, 51);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 5px;
          border-right: 1px solid rgb(51, 51, 51);
          border-right-color: rgb(51, 51, 51);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(51, 51, 51);
          border-top-color: rgb(51, 51, 51);
          border-top-left-radius: 5px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          color: rgb(136, 136, 136);
          cursor: pointer;
          display: inline-block;
          font-size: calc(14px);
          height: calc(40px);
          justify-content: center;
          line-height: calc(40px);
          margin-left: 16px;
          min-width: 48px;
          outline: none;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          text-align: center;
          text-transform: capitalize;
          transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
            border 200ms ease 0ms, color 200ms ease 0ms;
          transition-delay: 0ms, 0ms, 0ms, 0ms;
          transition-duration: 200ms, 200ms, 200ms, 200ms;
          transition-property: background-color, box-shadow, border, color;
          transition-timing-function: ease, ease, ease, ease;
          user-select: none;
          white-space: nowrap;
        }
        .span-2 {
          right: 0px;
          align-items: center;
          color: rgb(136, 136, 136);
          display: flex;
          justify-content: center;
          top: 50%;
          z-index: 1;
        }
        .div-11 {
          justify-content: flex-start;
          display: flex;
          flex-wrap: wrap;
          width: calc(100% + 21.3333px);
          margin-bottom: -10.6667px;
          margin-left: -10.6667px;
          margin-right: -10.6667px;
          margin-top: 16px;
        }
        .div-12 {
          display: inherit;
          flex-basis: 33.3333%;
          max-width: 33.3333%;
          padding-bottom: 10.6667px;
          padding-left: 10.6667px;
          padding-right: 10.6667px;
          padding-top: 10.6667px;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-basis: 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 640px) {
          .div-12 {
            flex-basis: 100%;
            max-width: 100%;
          }
        }
        .div-13 {
          width: 100%;
        }
        .div-14 {
          box-shadow: rgb(51, 51, 51) 0px 0px 0px 1px;
          background-color: rgb(0, 0, 0);
          border-bottom: 1px solid transparent;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgba(0, 0, 0, 0);
          border-left: 1px solid transparent;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 5px;
          border-right: 1px solid transparent;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-left-radius: 5px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          transition: all 0.2s ease 0s;
          transition-duration: 0.2s;
        }
        .div-15 {
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          width: 100%;
        }
        .div-16 {
          align-items: center;
          display: flex;
        }
        .span-3 {
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(255, 255, 255);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left: 1px solid rgb(255, 255, 255);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 50%;
          border-right: 1px solid rgb(255, 255, 255);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(255, 255, 255);
          border-top-left-radius: 50%;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          display: inline-block;
          height: calc(35px);
          margin-right: 12px;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          vertical-align: top;
          width: calc(35px);
        }
        .raw-img {
          width: 100%;
          border-radius: 50%;
          border-top-left-radius: 50%;
          display: inline-block;
          height: 100%;
          object-fit: cover;
          user-select: none;
          max-width: 100%;
        }
        .p {
          font-size: 1em;
          line-height: 1.5rem;
          font-weight: 500;
          letter-spacing: -0.005625em;
        }
        .p-2 {
          font-size: 0.875rem;
          color: rgb(153, 153, 153);
          line-height: 1.25rem;
          letter-spacing: -0.005625em;
        }
        .div-17 {
          display: flex;
          flex-direction: column;
          font-size: 1em;
          justify-content: center;
          margin-bottom: 16px;
          margin-top: 16px;
          min-height: 3rem;
          color: rgb(153, 153, 153);
          line-height: 1.625em;
          font-weight: 500;
          letter-spacing: -0.005625em;
        }
        .p-3 {
          margin-top: 14px;
          font-size: 0.875rem;
          color: rgb(136, 136, 136);
          line-height: 1.625em;
          letter-spacing: -0.005625em;
        }
        .div-18 {
          display: inherit;
          flex-basis: 33.3333%;
          max-width: 33.3333%;
          padding-bottom: 10.6667px;
          padding-left: 10.6667px;
          padding-right: 10.6667px;
          padding-top: 10.6667px;
        }
        @media (max-width: 991px) {
          .div-18 {
            flex-basis: 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 640px) {
          .div-18 {
            flex-basis: 100%;
            max-width: 100%;
          }
        }
        .div-19 {
          width: 100%;
        }
        .div-20 {
          box-shadow: rgb(51, 51, 51) 0px 0px 0px 1px;
          background-color: rgb(0, 0, 0);
          border-bottom: 1px solid transparent;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgba(0, 0, 0, 0);
          border-left: 1px solid transparent;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 5px;
          border-right: 1px solid transparent;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-left-radius: 5px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          transition: all 0.2s ease 0s;
          transition-duration: 0.2s;
        }
        .div-21 {
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          width: 100%;
        }
        .div-22 {
          align-items: center;
          display: flex;
        }
        .span-4 {
          background-color: rgb(255, 255, 255);
          border-bottom: 1px solid rgb(255, 255, 255);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left: 1px solid rgb(255, 255, 255);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 50%;
          border-right: 1px solid rgb(255, 255, 255);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(255, 255, 255);
          border-top-left-radius: 50%;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          display: inline-block;
          height: calc(35px);
          margin-right: 12px;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          vertical-align: top;
          width: calc(35px);
        }
        .p-4 {
          font-size: 0.875rem;
          color: rgb(153, 153, 153);
          line-height: 1.25rem;
          letter-spacing: -0.005625em;
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          font-size: 1em;
          justify-content: center;
          margin-bottom: 16px;
          margin-top: 16px;
          min-height: 3rem;
          color: rgb(153, 153, 153);
          line-height: 1.625em;
          font-weight: 500;
          letter-spacing: -0.005625em;
        }
        .p-5 {
          margin-top: 14px;
          font-size: 0.875rem;
          color: rgb(136, 136, 136);
          line-height: 1.625em;
          letter-spacing: -0.005625em;
        }
        .div-24 {
          border-bottom: 0px;
          border-bottom-color: rgb(34, 34, 34);
          border-color: rgb(234, 234, 234) rgb(34, 34, 34) rgb(34, 34, 34);
          border-left: 0px;
          border-left-color: rgb(34, 34, 34);
          border-right: 0px;
          border-right-color: rgb(34, 34, 34);
          border-style: solid none none;
          border-top: 8px solid rgb(234, 234, 234);
          border-top-color: rgb(234, 234, 234);
          border-top-style: solid;
          border-top-width: 8px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 18.84px;
          padding-bottom: 24px;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 0px;
          background-color: rgba(246, 248, 248, 0.5);
          border-block-color: rgb(234, 234, 234) rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start: 8px solid rgb(234, 234, 234);
          border-block-start-color: rgb(234, 234, 234);
          border-block-start-style: solid;
          border-block-start-width: 8px;
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          margin-block-start: 28px;
          outline-color: rgb(34, 34, 34);
          padding: 24px;
          perspective-origin: 344.664px 144.992px;
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          text-size-adjust: 100%;
          transform-origin: 344.668px 144.992px;
          width: 100vw;
          margin-left: auto;
          margin-right: auto;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        @media (max-width: 991px) {
          .div-24 {
            min-height: 1759px;
          }
        }
        @media (max-width: 640px) {
          .div-24 {
            min-height: 817px;
            padding-bottom: 0px;
            margin-left: 0px;
            margin-bottom: 0px;
            margin-right: 0px;
            height: 100vh;
            max-width: 341px;
          }
        }
        .div-25 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 722.266px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-gap: 24px;
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          gap: 24px;
          grid-template-columns: 371px 371px 371px;
          grid-template-rows: 156.562px 156.562px 168.57px 168.57px;
          inline-size: 1161px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 580.5px 361.133px;
          row-gap: 24px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 580.5px 361.133px;
          width: 100vw;
          align-self: center;
          padding-left: 125px;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin-top: 80px;
            padding-left: 0px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        @media (max-width: 640px) {
          .div-25 {
            width: 100vw;
            align-self: center;
            margin-left: calc(50% - 50vw);
            padding-left: 12px;
          }
        }
        .div-26 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 156.562px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 371px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 185.5px 78.2812px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 185.5px 78.2812px;
        }
        @media (max-width: 991px) {
          .div-26 {
            width: auto;
            flex-grow: 1;
          }
        }
        @media (max-width: 640px) {
          .div-26 {
            width: auto;
            flex-grow: 0;
          }
        }
        .div-27 {
          border-bottom: 1px solid rgb(247, 247, 247);
          border-bottom-color: rgb(247, 247, 247);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(247, 247, 247);
          border-left: 1px solid rgb(247, 247, 247);
          border-left-color: rgb(247, 247, 247);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(247, 247, 247);
          border-right-color: rgb(247, 247, 247);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(247, 247, 247);
          border-top-color: rgb(247, 247, 247);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          padding-bottom: 24px;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 24px;
          background-color: rgb(255, 255, 255);
          block-size: 156.562px;
          border-block: 1px solid rgb(247, 247, 247);
          border-block-color: rgb(247, 247, 247);
          border-block-end: 1px solid rgb(247, 247, 247);
          border-block-end-color: rgb(247, 247, 247);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(247, 247, 247);
          border-block-start-color: rgb(247, 247, 247);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-end-end-radius: 8px;
          border-end-start-radius: 8px;
          border-inline: 1px solid rgb(247, 247, 247);
          border-inline-color: rgb(247, 247, 247);
          border-inline-end: 1px solid rgb(247, 247, 247);
          border-inline-end-color: rgb(247, 247, 247);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(247, 247, 247);
          border-inline-start-color: rgb(247, 247, 247);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 8px;
          border-start-end-radius: 8px;
          border-start-start-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px,
            rgba(0, 0, 0, 0.1) 0px 0px 4px 0px;
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 371px;
          outline-color: rgb(26, 26, 26);
          overflow: auto;
          overflow-x: auto;
          overflow-y: auto;
          padding: 24px;
          padding-block: 24px;
          padding-block-end: 24px;
          padding-block-start: 24px;
          padding-inline: 24px;
          padding-inline-end: 24px;
          padding-inline-start: 24px;
          perspective-origin: 185.5px 78.2812px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 185.5px 78.2812px;
        }
        @media (max-width: 991px) {
          .div-27 {
            width: auto;
            align-self: stretch;
          }
        }
        
      `}</style>{" "}
    </>
  );
}