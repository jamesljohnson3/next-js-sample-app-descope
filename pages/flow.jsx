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
<Box/>
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
        .div-28 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          line-height: 18.8571px;
          block-size: 18.8516px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          inline-size: 321px;
          outline-color: rgb(179, 179, 179);
          perspective-origin: 160.5px 9.42188px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 9.42578px;
        }
        .div-29 {
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
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 13px;
        }
        .div-30 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Display VF", "Square Sans Display",
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 34.4922px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 17.2422px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 17.2461px 13px;
        }
        .a-7 {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          height: 26px;
          inline-size: 30.1172px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 15.0547px 13px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 15.0586px 13px;
        }
        .div-31 {
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
          margin-top: 24px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 321px;
          margin-block-start: 24px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .div-32 {
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
          align-items: baseline;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .span-5 {
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
          font-size: 24px;
          font-weight: 600;
          line-height: 37.7143px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: block;
          inline-size: 95.375px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 47.6875px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 47.6875px 18.8555px;
        }
        .div-33 {
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
          block-size: 22px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 90.9922px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 45.4922px 11px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 45.4961px 11px;
        }
        .span-6 {
          border-bottom: 0px;
          border-bottom-color: rgb(0, 178, 59);
          border-color: rgb(0, 178, 59);
          border-left: 0px;
          border-left-color: rgb(0, 178, 59);
          border-right: 0px;
          border-right-color: rgb(0, 178, 59);
          border-top: 0px;
          border-top-color: rgb(0, 178, 59);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 18.8571px;
          border-block-color: rgb(0, 178, 59);
          border-block-end-color: rgb(0, 178, 59);
          border-block-start-color: rgb(0, 178, 59);
          border-inline-color: rgb(0, 178, 59);
          border-inline-end-color: rgb(0, 178, 59);
          border-inline-start-color: rgb(0, 178, 59);
          caret-color: rgb(0, 178, 59);
          color: rgb(0, 178, 59);
          column-rule-color: rgb(0, 178, 59);
          outline-color: rgb(0, 178, 59);
          perspective-origin: 0px 0px;
          text-decoration: none solid rgb(0, 178, 59);
          text-decoration-color: rgb(0, 178, 59);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 0px 0px;
          white-space: nowrap;
        }
        .div-34 {
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
          .div-34 {
            width: auto;
            flex-grow: 1;
          }
        }
        @media (max-width: 640px) {
          .div-34 {
            width: auto;
            flex-grow: 0;
          }
        }
        .div-35 {
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
          .div-35 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-36 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          line-height: 18.8571px;
          block-size: 18.8516px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          inline-size: 321px;
          outline-color: rgb(179, 179, 179);
          perspective-origin: 160.5px 9.42188px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 9.42578px;
        }
        .div-37 {
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
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 13px;
        }
        .div-38 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Display VF", "Square Sans Display",
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 140.586px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 70.2891px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 70.293px 13px;
        }
        .a-8 {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          height: 26px;
          inline-size: 30.1172px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 15.0547px 13px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 15.0586px 13px;
        }
        .div-39 {
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
          margin-top: 24px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 321px;
          margin-block-start: 24px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .div-40 {
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
          font-size: 24px;
          line-height: 37.7143px;
          align-items: baseline;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: block;
          inline-size: 66.8047px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 33.3984px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 33.4023px 18.8555px;
          font-weight: 600;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
        }
        .div-41 {
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
          .div-41 {
            width: auto;
            flex-grow: 1;
          }
        }
        .div-42 {
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
          .div-42 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-43 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          line-height: 18.8571px;
          block-size: 18.8516px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          inline-size: 321px;
          outline-color: rgb(179, 179, 179);
          perspective-origin: 160.5px 9.42188px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 9.42578px;
        }
        .div-44 {
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
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 13px;
        }
        .div-45 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Display VF", "Square Sans Display",
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 102.625px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 51.3125px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 51.3125px 13px;
        }
        .a-9 {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          height: 26px;
          inline-size: 30.1172px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 15.0547px 13px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 15.0586px 13px;
        }
        .div-46 {
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
          margin-top: 24px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 321px;
          margin-block-start: 24px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .div-47 {
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
          font-size: 24px;
          line-height: 37.7143px;
          align-items: baseline;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: block;
          inline-size: 96.8984px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 48.4453px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 48.4492px 18.8555px;
          font-weight: 600;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
        }
        .div-48 {
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
          .div-48 {
            width: auto;
            flex-grow: 1;
          }
        }
        .div-49 {
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
          .div-49 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-50 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          line-height: 18.8571px;
          block-size: 18.8516px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          inline-size: 321px;
          outline-color: rgb(179, 179, 179);
          perspective-origin: 160.5px 9.42188px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 9.42578px;
        }
        .div-51 {
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
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 13px;
        }
        @media (max-width: 991px) {
          .div-51 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-52 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Display VF", "Square Sans Display",
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 81.1094px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 40.5547px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 40.5547px 13px;
        }
        .a-10 {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          height: 26px;
          inline-size: 30.1172px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 15.0547px 13px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 15.0586px 13px;
        }
        .div-53 {
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
          margin-top: 24px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 321px;
          margin-block-start: 24px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        @media (max-width: 991px) {
          .div-53 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-54 {
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
          align-items: baseline;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        @media (max-width: 991px) {
          .div-54 {
            width: auto;
            align-self: stretch;
          }
        }
        .span-7 {
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
          font-size: 24px;
          font-weight: 600;
          line-height: 37.7143px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: block;
          inline-size: 66.8047px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 33.3984px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 33.4023px 18.8555px;
        }
        .div-55 {
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
          block-size: 22px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 76.1953px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 38.0938px 11px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 38.0977px 11px;
        }
        .span-8 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 18.8571px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          outline-color: rgb(179, 179, 179);
          perspective-origin: 0px 0px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 0px 0px;
          white-space: nowrap;
        }
        .div-56 {
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
          block-size: 361.141px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          grid-column-start: span 2;
          grid-row-start: span 2;
          inline-size: 766px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 383px 180.57px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 383px 180.57px;
          margin-bottom: 53px;
        }
        @media (max-width: 991px) {
          .div-56 {
            width: auto;
            flex-grow: 1;
          }
        }
        .div-57 {
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
          block-size: 361.141px;
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
          inline-size: 766px;
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
          perspective-origin: 383px 180.57px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 383px 180.57px;
        }
        @media (max-width: 991px) {
          .div-57 {
            width: auto;
            align-self: stretch;
          }
        }
        .div-58 {
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
          margin-right: -16px;
          block-size: 311.141px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          bottom: 0px;
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          flex-wrap: wrap;
          inline-size: 732px;
          inset: 0px;
          inset-block: 0px;
          inset-block-end: 0px;
          inset-block-start: 0px;
          inset-inline: 0px;
          inset-inline-end: 0px;
          inset-inline-start: 0px;
          justify-content: center;
          left: 0px;
          margin-inline-end: -16px;
          min-block-size: 200px;
          min-height: 200px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 366px 155.57px;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          top: 0px;
          transform-origin: 366px 155.57px;
        }
        @media (max-width: 991px) {
          .div-58 {
            width: auto;
            align-self: center;
          }
        }
        .div-59 {
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
          padding-bottom: 24px;
          padding-top: 24px;
          align-items: center;
          block-size: 311.141px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          flex-direction: column;
          inline-size: 732px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          padding-block: 24px;
          padding-block-end: 24px;
          padding-block-start: 24px;
          perspective-origin: 366px 155.57px;
          text-align: center;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 366px 155.57px;
          width: 732px;
        }
        @media (max-width: 991px) {
          .div-59 {
            width: auto;
            flex-grow: 0;
          }
        }
        .h4 {
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
          font-weight: 600;
          line-height: 24px;
          margin-bottom: 8px;
          margin-top: 37px;
          block-size: 24px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 232.398px;
          margin: 24px 0px 8px;
          margin-block: 24px 8px;
          margin-block-end: 8px;
          margin-block-start: 24px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 116.195px 12px;
          text-align: center;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 116.199px 12px;
        }
        .p-6 {
          border-bottom: 0px;
          border-bottom-color: rgb(115, 115, 115);
          border-color: rgb(115, 115, 115);
          border-left: 0px;
          border-left-color: rgb(115, 115, 115);
          border-right: 0px;
          border-right-color: rgb(115, 115, 115);
          border-top: 0px;
          border-top-color: rgb(115, 115, 115);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 14px;
          block-size: 88px;
          border-block-color: rgb(115, 115, 115);
          border-block-end-color: rgb(115, 115, 115);
          border-block-start-color: rgb(115, 115, 115);
          border-inline-color: rgb(115, 115, 115);
          border-inline-end-color: rgb(115, 115, 115);
          border-inline-start-color: rgb(115, 115, 115);
          caret-color: rgb(115, 115, 115);
          color: rgb(115, 115, 115);
          column-rule-color: rgb(115, 115, 115);
          height: 88px;
          inline-size: 350px;
          margin: 0px 0px 14px;
          margin-block: 0px 14px;
          margin-block-end: 14px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(115, 115, 115);
          perspective-origin: 175px 44px;
          text-align: center;
          text-decoration: none solid rgb(115, 115, 115);
          text-decoration-color: rgb(115, 115, 115);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 175px 44px;
          width: 350px;
          margin-top: 13px;
        }
        .a-11 {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-weight: 600;
          line-height: 25.1429px;
          block-size: 25.1406px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          inline-size: 109.734px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 54.8672px 12.5703px;
          text-align: center;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 54.8672px 12.5703px;
        }
        .div-60 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          background-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          padding: 16px;
          perspective-origin: 320.664px 116.992px;
          transform-origin: 320.668px 116.992px;
          width: auto;
          align-self: center;
          box-shadow: 1px 1px 9px -7px rgba(0, 0, 0, 1);
          margin-left: auto;
          margin-top: 62px;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-60 {
            margin-top: 427px;
          }
        }
        @media (max-width: 640px) {
          .div-60 {
            min-width: 260px;
          }
        }
        .div-61 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          background-color: rgb(242, 242, 242);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 131.797px 100.992px;
          text-align: center;
          transform-origin: 131.801px 100.992px;
        }
        @media (max-width: 991px) {
          .div-61 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-61 {
            display: none;
          }
        }
        .div-62 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          perspective-origin: 93.5781px 12.5547px;
          transform-origin: 93.582px 12.5586px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          line-height: 25.12px;
          margin-bottom: 8px;
          margin-block-end: 8px;
        }
        .div-63 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 12px;
          margin-bottom: 16px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          margin-block-end: 16px;
          outline-color: rgb(106, 111, 114);
          perspective-origin: 32.7188px 9.41406px;
          text-decoration: none solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          transform-origin: 32.7188px 9.41797px;
        }
        .a-12 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 0px none rgb(255, 255, 255);
          border-block-color: rgb(255, 255, 255);
          border-block-end: 0px none rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start: 0px none rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom: 0px none rgb(255, 255, 255);
          border-bottom-color: rgb(255, 255, 255);
          border-bottom-left-radius: 200px;
          border-bottom-right-radius: 200px;
          border-color: rgb(255, 255, 255);
          border-inline: 0px none rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end: 0px none rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start: 0px none rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-radius: 200px;
          border-right: 0px none rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top: 0px none rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          height: 37px;
          justify-content: center;
          line-height: 12px;
          margin-block-end: 10px;
          margin-bottom: 10px;
          min-inline-size: 80px;
          min-width: 80px;
          outline-color: rgb(255, 255, 255);
          padding: 0px 30px;
          padding-left: 30px;
          padding-right: 30px;
          perspective-origin: 53.2734px 18.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          transform-origin: 53.2773px 18.5px;
          pointer-events: auto;
        }
        .div-64 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 172.867px 100.992px;
          text-align: center;
          transform-origin: 172.871px 100.992px;
        }
        @media (max-width: 991px) {
          .div-64 {
            display: flex;
          }
        }
        .div-65 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          perspective-origin: 83.2422px 12.5547px;
          transform-origin: 83.2422px 12.5586px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          line-height: 25.12px;
          margin-bottom: 8px;
          margin-block-end: 8px;
        }
        .div-66 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 12px;
          margin-bottom: 16px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          margin-block-end: 16px;
          outline-color: rgb(106, 111, 114);
          perspective-origin: 35.7188px 9.41406px;
          text-decoration: line-through solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          text-decoration-line: line-through;
          transform-origin: 35.7188px 9.41797px;
        }
        .a-13 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 0px none rgb(255, 255, 255);
          border-block-color: rgb(255, 255, 255);
          border-block-end: 0px none rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start: 0px none rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom: 0px none rgb(255, 255, 255);
          border-bottom-color: rgb(255, 255, 255);
          border-bottom-left-radius: 200px;
          border-bottom-right-radius: 200px;
          border-color: rgb(255, 255, 255);
          border-inline: 0px none rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end: 0px none rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start: 0px none rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-radius: 200px;
          border-right: 0px none rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top: 0px none rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          height: 37px;
          justify-content: center;
          line-height: 12px;
          margin-block-end: 10px;
          margin-bottom: 10px;
          min-inline-size: 80px;
          min-width: 80px;
          outline-color: rgb(255, 255, 255);
          padding: 0px 30px;
          padding-left: 30px;
          padding-right: 30px;
          perspective-origin: 83.9297px 18.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          transform-origin: 83.9336px 18.5px;
          pointer-events: auto;
        }
        .div-67 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 300;
          line-height: 15.7px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          outline-color: rgb(106, 111, 114);
          perspective-origin: 134.648px 7.84375px;
          text-decoration: none solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          transform-origin: 134.652px 7.84766px;
        }
        .div-68 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          background-color: rgb(242, 242, 242);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 131.797px 100.992px;
          text-align: center;
          transform-origin: 131.801px 100.992px;
          background-image: url(https://cdn.shopify.com/s/files/1/0625/2498/1504/files/Frame_4.png?v=1643255990);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          box-shadow: 1px 1px 11px -4px rgba(0, 0, 0, 1);
          min-width: 259px;
        }
        @media (max-width: 640px) {
          .div-68 {
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F9bad95a98b844fb68236e78bae828193);
            margin-top: auto;
            margin-bottom: auto;
            min-height: 200px;
            min-width: 146px;
          }
        }
        .div-69 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          perspective-origin: 93.5781px 36.2266px;
          transform-origin: 93.582px 36.2266px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
        }
        .div-70 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          background-color: rgb(255, 255, 255);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: none;
          padding: 16px;
          perspective-origin: 320.664px 116.992px;
          transform-origin: 320.668px 116.992px;
          width: auto;
          align-self: center;
        }
        @media (max-width: 991px) {
          .div-70 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .div-70 {
            margin-top: 27px;
            padding-bottom: 0px;
            height: 187px;
            display: flex;
            min-width: 250px;
            box-shadow: 1px 1px 13px -8px rgba(0, 0, 0, 1);
            margin-bottom: 20px;
          }
        }
        .div-71 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          background-color: rgb(242, 242, 242);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 131.797px 100.992px;
          text-align: center;
          transform-origin: 131.801px 100.992px;
        }
        @media (max-width: 991px) {
          .div-71 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-71 {
            display: none;
          }
        }
        .div-72 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          perspective-origin: 93.5781px 12.5547px;
          transform-origin: 93.582px 12.5586px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          line-height: 25.12px;
          margin-bottom: 8px;
          margin-block-end: 8px;
        }
        .div-73 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 12px;
          margin-bottom: 16px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          margin-block-end: 16px;
          outline-color: rgb(106, 111, 114);
          perspective-origin: 32.7188px 9.41406px;
          text-decoration: none solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          transform-origin: 32.7188px 9.41797px;
        }
        .a-14 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 0px none rgb(255, 255, 255);
          border-block-color: rgb(255, 255, 255);
          border-block-end: 0px none rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start: 0px none rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom: 0px none rgb(255, 255, 255);
          border-bottom-color: rgb(255, 255, 255);
          border-bottom-left-radius: 200px;
          border-bottom-right-radius: 200px;
          border-color: rgb(255, 255, 255);
          border-inline: 0px none rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end: 0px none rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start: 0px none rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-radius: 200px;
          border-right: 0px none rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top: 0px none rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          height: 37px;
          justify-content: center;
          line-height: 12px;
          margin-block-end: 10px;
          margin-bottom: 10px;
          min-inline-size: 80px;
          min-width: 80px;
          outline-color: rgb(255, 255, 255);
          padding: 0px 30px;
          padding-left: 30px;
          padding-right: 30px;
          perspective-origin: 53.2734px 18.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          transform-origin: 53.2773px 18.5px;
          pointer-events: auto;
        }
        .div-74 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          background-color: rgb(242, 242, 242);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 131.797px 100.992px;
          text-align: center;
          transform-origin: 131.801px 100.992px;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Ff7033084a3d547939031e3bf37f92d01);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          box-shadow: 1px 1px 11px -4px rgba(0, 0, 0, 1);
        }
        @media (max-width: 640px) {
          .div-74 {
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fdca54205299f45309f42ad291f75a507);
            max-width: 187px;
            min-width: 256px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            max-height: 112px;
          }
        }
        .div-75 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          perspective-origin: 93.5781px 36.2266px;
          transform-origin: 93.582px 36.2266px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
        }
        .div-76 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          align-items: center;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 16px;
          perspective-origin: 172.867px 100.992px;
          text-align: center;
          transform-origin: 172.871px 100.992px;
        }
        @media (max-width: 991px) {
          .div-76 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-76 {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .div-77 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 300;
          perspective-origin: 83.2422px 36.2266px;
          transform-origin: 83.2422px 36.2266px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        .a-15 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 0px none rgb(255, 255, 255);
          border-block-color: rgb(255, 255, 255);
          border-block-end: 0px none rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start: 0px none rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom: 0px none rgb(255, 255, 255);
          border-bottom-color: rgb(255, 255, 255);
          border-bottom-left-radius: 200px;
          border-bottom-right-radius: 200px;
          border-color: rgb(255, 255, 255);
          border-inline: 0px none rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end: 0px none rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start: 0px none rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-radius: 200px;
          border-right: 0px none rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top: 0px none rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          height: 37px;
          justify-content: center;
          line-height: 12px;
          margin-block-end: 10px;
          margin-bottom: 10px;
          min-inline-size: 80px;
          min-width: 80px;
          outline-color: rgb(255, 255, 255);
          padding: 0px 30px;
          padding-left: 30px;
          padding-right: 30px;
          perspective-origin: 83.9297px 18.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          transform-origin: 83.9336px 18.5px;
          pointer-events: auto;
        }
        @media (max-width: 640px) {
          .a-15 {
            margin-top: 0px;
            margin-bottom: 54px;
            background-color: rgba(0, 0, 0, 1);
            box-shadow: 1px 1px 3px 0 rgba(238, 238, 238, 1);
          }
        }
        .div-78 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 300;
          line-height: 15.7px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          outline-color: rgb(106, 111, 114);
          perspective-origin: 134.648px 7.84375px;
          text-decoration: none solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          transform-origin: 134.652px 7.84766px;
        }
        .h5 {
          border-bottom: 0px;
          border-bottom-color: rgb(34, 34, 34);
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-left-color: rgb(34, 34, 34);
          border-right: 0px;
          border-right-color: rgb(34, 34, 34);
          border-top: 0px;
          border-top-color: rgb(34, 34, 34);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          margin-bottom: 16px;
          border-block-color: rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start-color: rgb(34, 34, 34);
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          margin-block: 0px 16px;
          margin-block-end: 16px;
          outline-color: rgb(34, 34, 34);
          perspective-origin: 114.453px 12px;
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          transform-origin: 114.457px 12px;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .h5 {
            padding-top: 31px;
          }
        }
        .div-79 {
          border-bottom: 1px solid rgb(242, 242, 242);
          border-bottom-color: rgb(242, 242, 242);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(242, 242, 242);
          border-left: 1px solid rgb(242, 242, 242);
          border-left-color: rgb(242, 242, 242);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(242, 242, 242);
          border-right-color: rgb(242, 242, 242);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(242, 242, 242);
          border-top-color: rgb(242, 242, 242);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          font-variant: proportional-nums;
          font-variant-numeric: proportional-nums;
          padding-bottom: 6px;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 0px;
          align-items: center;
          background-color: rgb(255, 255, 255);
          border-block: 1px solid rgb(242, 242, 242);
          border-block-color: rgb(242, 242, 242);
          border-block-end: 1px solid rgb(242, 242, 242);
          border-block-end-color: rgb(242, 242, 242);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(242, 242, 242);
          border-block-start-color: rgb(242, 242, 242);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline: 1px solid rgb(242, 242, 242);
          border-inline-color: rgb(242, 242, 242);
          border-inline-end: 1px solid rgb(242, 242, 242);
          border-inline-end-color: rgb(242, 242, 242);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(242, 242, 242);
          border-inline-start-color: rgb(242, 242, 242);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: rgba(17, 24, 39, 0.1) 0px 0px 4px 0px;
          display: flex;
          flex-wrap: wrap;
          height: 92px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding: 8px 24px;
          perspective-origin: 556px 33px;
          text-rendering: geometricprecision;
          transform-origin: 556px 33px;
          width: auto;
          margin-top: 85px;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-79 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .div-79 {
            display: none;
          }
        }
        .button-3 {
          align-items: center;
          border-block: 0px none rgba(0, 0, 0, 0.26);
          border-block-color: rgba(0, 0, 0, 0.26);
          border-block-end: 0px none rgba(0, 0, 0, 0.26);
          border-block-end-color: rgba(0, 0, 0, 0.26);
          border-block-start: 0px none rgba(0, 0, 0, 0.26);
          border-block-start-color: rgba(0, 0, 0, 0.26);
          border-bottom: 0px none rgba(0, 0, 0, 0.26);
          border-bottom-color: rgba(0, 0, 0, 0.26);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-color: rgba(0, 0, 0, 0.26);
          border-inline: 0px none rgba(0, 0, 0, 0.26);
          border-inline-color: rgba(0, 0, 0, 0.26);
          border-inline-end: 0px none rgba(0, 0, 0, 0.26);
          border-inline-end-color: rgba(0, 0, 0, 0.26);
          border-inline-start: 0px none rgba(0, 0, 0, 0.26);
          border-inline-start-color: rgba(0, 0, 0, 0.26);
          border-left: 0px none rgba(0, 0, 0, 0.26);
          border-left-color: rgba(0, 0, 0, 0.26);
          border-radius: 8px;
          border-right: 0px none rgba(0, 0, 0, 0.26);
          border-right-color: rgba(0, 0, 0, 0.26);
          border-top: 0px none rgba(0, 0, 0, 0.26);
          border-top-color: rgba(0, 0, 0, 0.26);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          bottom: 0px;
          caret-color: rgba(0, 0, 0, 0.26);
          color: rgba(0, 0, 0, 0.26);
          column-rule-color: rgba(0, 0, 0, 0.26);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-weight: 500;
          inset: 0px;
          inset-inline-end: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          margin-inline-end: 73.4297px;
          margin-right: 73.4297px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgba(0, 0, 0, 0.26);
          padding: 0px 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 32px 16px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgba(0, 0, 0, 0.26);
          text-decoration-color: rgba(0, 0, 0, 0.26);
          text-transform: uppercase;
          top: 0px;
          transform-origin: 32px 16px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          visibility: hidden;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-9 {
          border-bottom: 0px;
          border-color: rgba(0, 0, 0, 0.26);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 24.5px;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 24px 14px;
          transform-origin: 24px 14px;
          width: 48px;
        }
        .button-4 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 59.9531px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 59.957px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-10 {
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          margin-right: 12px;
          background-color: rgba(238, 238, 243, 1);
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          caret-color: rgb(255, 255, 255);
          color: rgba(92, 90, 90, 1);
          column-rule-color: rgb(255, 255, 255);
          height: 30px;
          margin-inline-end: 12px;
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          width: 30px;
        }
        .div-80 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-5 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 75.0312px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 75.0352px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-11 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
        }
        .div-81 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-6 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 89.1172px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 89.1172px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-12 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
        }
        .div-82 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-7 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 68.7422px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 68.7422px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-13 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
          background-color: rgba(106, 93, 249, 1);
          color: rgba(255, 255, 255, 1);
        }
        .div-83 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          margin-left: 73.4297px;
          margin-right: 4px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-inline: 73.4297px 4px;
          margin-inline-end: 4px;
          margin-inline-start: 73.4297px;
          perspective-origin: 34.7109px 16px;
          transform-origin: 34.7148px 16px;
        }
        .span-14 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          margin-right: 4px;
          align-items: center;
          display: flex;
          justify-content: center;
          margin-inline-end: 4px;
          perspective-origin: 32.7109px 16px;
          transform-origin: 32.7148px 16px;
        }
        .button-8 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 1px solid rgb(106, 93, 249);
          border-block-color: rgb(106, 93, 249);
          border-block-end: 1px solid rgb(106, 93, 249);
          border-block-end-color: rgb(106, 93, 249);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(106, 93, 249);
          border-block-start-color: rgb(106, 93, 249);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom: 0px;
          border-bottom-color: rgb(106, 93, 249);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(255, 255, 255);
          border-inline: 1px solid rgb(106, 93, 249);
          border-inline-color: rgb(106, 93, 249);
          border-inline-end: 1px solid rgb(106, 93, 249);
          border-inline-end-color: rgb(106, 93, 249);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(106, 93, 249);
          border-inline-start-color: rgb(106, 93, 249);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-left: 0px;
          border-left-color: rgb(106, 93, 249);
          border-left-style: solid;
          border-left-width: 1px;
          border-radius: 16px;
          border-right: 0px;
          border-right-color: rgb(106, 93, 249);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgb(106, 93, 249);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          bottom: 0px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-gap: 8px;
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          gap: 8px;
          height: 32px;
          inset: 0px;
          left: 0px;
          outline-color: rgb(255, 255, 255);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          padding: 0px 16px;
          padding-left: 16px;
          padding-right: 16px;
          perspective-origin: 15.7109px 8.5px;
          position: relative;
          right: 0px;
          row-gap: 8px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          top: 0px;
          transform-origin: 15.7148px 8.5px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .div-84 {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-right: auto;
          margin-top: 60px;
          width: auto;
          align-self: center;
          min-width: 899px;
          margin-left: auto;
        }
        @media (max-width: 991px) {
          .div-84 {
            display: flex;
            flex-direction: column;
            min-width: 200px;
            align-items: stretch;
          }
        }
        @media (max-width: 640px) {
          .div-84 {
            margin-top: 105px;
          }
        }
        .div-85 {
          display: flex;
        }
        @media (max-width: 991px) {
          .div-85 {
            align-items: center;
          }
        }
        .div-86 {
          margin-right: 7px;
          align-items: center;
          border-radius: 33px;
          border-top-left-radius: 33px;
          box-shadow: rgba(0, 0, 0, 0.11) 9px 9px 51px;
          display: flex;
          height: 65px;
          justify-content: center;
          width: 65px;
        }
        @media (max-width: 991px) {
          .div-86 {
            margin-right: 15px;
            height: 33px;
            width: 33px;
          }
        }
        .raw-img-2 {
          width: 42px;
          display: block;
          border-radius: 67px;
        }
        @media (max-width: 991px) {
          .raw-img-2 {
            width: 18px;
          }
        }
        .div-87 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          font-family: "Play", sans-serif;
        }
        .div-88 {
          display: flex;
        }
        @media (max-width: 991px) {
          .div-88 {
            align-items: center;
          }
        }
        .div-89 {
          margin-right: 7px;
          align-items: center;
          border-radius: 33px;
          border-top-left-radius: 33px;
          box-shadow: rgba(0, 0, 0, 0.11) 9px 9px 51px;
          display: flex;
          height: 65px;
          justify-content: center;
          width: 65px;
        }
        @media (max-width: 991px) {
          .div-89 {
            margin-right: 15px;
            height: 33px;
            width: 33px;
          }
        }
        .raw-img-3 {
          width: 42px;
          display: block;
          border-radius: 67px;
        }
        @media (max-width: 991px) {
          .raw-img-3 {
            width: 18px;
          }
        }
        .div-90 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          font-family: "Play", sans-serif;
        }
        .div-91 {
          display: flex;
        }
        @media (max-width: 991px) {
          .div-91 {
            align-items: center;
          }
        }
        .div-92 {
          margin-right: 7px;
          align-items: center;
          border-radius: 33px;
          border-top-left-radius: 33px;
          box-shadow: rgba(0, 0, 0, 0.11) 9px 9px 51px;
          display: flex;
          height: 65px;
          justify-content: center;
          width: 65px;
        }
        @media (max-width: 991px) {
          .div-92 {
            margin-right: 15px;
            height: 33px;
            width: 33px;
          }
        }
        .raw-img-4 {
          width: 42px;
          display: block;
          border-radius: 67px;
        }
        @media (max-width: 991px) {
          .raw-img-4 {
            width: 18px;
          }
        }
        .div-93 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          font-family: "Play", sans-serif;
        }
        .div-94 {
          display: flex;
        }
        @media (max-width: 991px) {
          .div-94 {
            align-items: center;
          }
        }
        .div-95 {
          margin-right: 7px;
          align-items: center;
          border-radius: 33px;
          border-top-left-radius: 33px;
          box-shadow: rgba(0, 0, 0, 0.11) 9px 9px 51px;
          display: flex;
          height: 65px;
          justify-content: center;
          width: 65px;
        }
        @media (max-width: 991px) {
          .div-95 {
            margin-right: 15px;
            height: 33px;
            width: 33px;
          }
        }
        .raw-img-5 {
          width: 42px;
          display: block;
          border-radius: 67px;
        }
        @media (max-width: 991px) {
          .raw-img-5 {
            width: 18px;
          }
        }
        .div-96 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          font-family: "Play", sans-serif;
        }
        .div-97 {
          border-bottom: 0px;
          border-bottom-color: rgb(34, 34, 34);
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-left-color: rgb(34, 34, 34);
          border-right: 0px;
          border-right-color: rgb(34, 34, 34);
          border-top: 0px;
          border-top-color: rgb(34, 34, 34);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          line-height: 21.4286px;
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          background-color: rgb(255, 255, 255);
          border-block-color: rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start-color: rgb(34, 34, 34);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          height: 972px;
          outline-color: rgb(34, 34, 34);
          padding: 16px;
          perspective-origin: 560px 217.5px;
          text-align: left;
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          text-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px;
          text-size-adjust: 100%;
          transform-origin: 560px 217.5px;
          width: 1005px;
          margin-top: 31px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-97 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .div-97 {
            width: 300px;
            height: 809px;
            display: flex;
          }
        }
        .div-98 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-bottom: 16px;
          align-items: baseline;
          display: flex;
          justify-content: space-between;
          margin-block-end: 16px;
          perspective-origin: 544px 13px;
          transform-origin: 544px 13px;
          font-weight: 600;
        }
        .h2 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 18px;
          line-height: 26px;
          margin-right: 12px;
          margin-inline-end: 12px;
          perspective-origin: 79.0078px 13px;
          transform-origin: 79.0117px 13px;
        }
        .div-99 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          display: flex;
          perspective-origin: 77.1875px 12px;
          transform-origin: 77.1875px 12px;
        }
        .a-16 {
          color: rgb(17, 100, 169);
          text-decoration: none rgb(17, 100, 169);
          text-decoration-color: rgb(17, 100, 169);
          border-bottom: 0px;
          border-bottom-color: rgb(17, 100, 169);
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-left-color: rgb(17, 100, 169);
          border-right: 0px;
          border-right-color: rgb(17, 100, 169);
          border-top: 0px;
          border-top-color: rgb(17, 100, 169);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          margin-right: 12px;
          border-block-color: rgb(17, 100, 169);
          border-block-end-color: rgb(17, 100, 169);
          border-block-start-color: rgb(17, 100, 169);
          border-inline-color: rgb(17, 100, 169);
          border-inline-end-color: rgb(17, 100, 169);
          border-inline-start-color: rgb(17, 100, 169);
          caret-color: rgb(17, 100, 169);
          column-rule-color: rgb(17, 100, 169);
          cursor: pointer;
          margin-inline-end: 12px;
          outline-color: rgb(17, 100, 169);
          perspective-origin: 59.1875px 12px;
          text-align: right;
          transform-origin: 59.1875px 12px;
        }
        .div-100 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          bottom: 0px;
          inset: 0px;
          left: 0px;
          perspective-origin: 12px 12px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 12px 12px;
        }
        .button-9 {
          appearance: button;
          border-block: 0px none rgb(177, 177, 177);
          border-block-color: rgb(177, 177, 177);
          border-block-end: 0px none rgb(177, 177, 177);
          border-block-end-color: rgb(177, 177, 177);
          border-block-start: 0px none rgb(177, 177, 177);
          border-block-start-color: rgb(177, 177, 177);
          border-bottom: 0px none rgb(177, 177, 177);
          border-bottom-color: rgb(177, 177, 177);
          border-color: rgb(177, 177, 177);
          border-inline: 0px none rgb(177, 177, 177);
          border-inline-color: rgb(177, 177, 177);
          border-inline-end: 0px none rgb(177, 177, 177);
          border-inline-end-color: rgb(177, 177, 177);
          border-inline-start: 0px none rgb(177, 177, 177);
          border-inline-start-color: rgb(177, 177, 177);
          border-left: 0px none rgb(177, 177, 177);
          border-left-color: rgb(177, 177, 177);
          border-right: 0px none rgb(177, 177, 177);
          border-right-color: rgb(177, 177, 177);
          border-top: 0px none rgb(177, 177, 177);
          border-top-color: rgb(177, 177, 177);
          caret-color: rgb(177, 177, 177);
          color: rgb(177, 177, 177);
          column-rule-color: rgb(177, 177, 177);
          cursor: pointer;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          line-height: 21.4286px;
          outline-color: rgb(177, 177, 177);
          perspective-origin: 12px 12px;
          text-decoration: none solid rgb(177, 177, 177);
          text-decoration-color: rgb(177, 177, 177);
          transform-origin: 12px 12px;
          background-color: rgba(0, 0, 0, 0);
        }
        .em {
          border-bottom: 0px;
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: "Material Design Icons";
          font-size: 24px;
          line-height: 24px;
          vertical-align: middle;
          display: inline-flex;
          perspective-origin: 12px 12px;
          transform-origin: 12px 12px;
        }
        .span-15 {
          border-bottom: 0px;
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-bottom: -1px;
          margin-left: -1px;
          margin-right: -1px;
          margin-top: -1px;
          bottom: 25px;
          clip: rect(0px, 0px, 0px, 0px);
          display: block;
          height: 1px;
          inset: 0px 1px 25px 24px;
          inset-block: 0px 25px;
          inset-block-end: 25px;
          inset-block-start: 0px;
          inset-inline: 24px 1px;
          inset-inline-end: 1px;
          inset-inline-start: 24px;
          left: 24px;
          margin: -1px;
          margin-block: -1px;
          margin-block-end: -1px;
          margin-block-start: -1px;
          margin-inline: -1px;
          margin-inline-end: -1px;
          margin-inline-start: -1px;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 0.5px 0.5px;
          position: absolute;
          right: 1px;
          top: 0px;
          transform-origin: 0.5px 0.5px;
          width: 1px;
        }
        .div-101 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 12px 0px;
          transform-origin: 12px 0px;
        }
        .div-102 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-wrap: wrap;
          margin-inline: -16px;
          margin-inline-end: -16px;
          margin-inline-start: -16px;
          perspective-origin: 560px 180.5px;
          transform-origin: 560px 180.5px;
          margin-top: auto;
          margin-bottom: auto;
        }
        .div-103 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 16px;
          padding-right: 16px;
          bottom: 0px;
          flex-basis: 50%;
          inset: 0px;
          left: 0px;
          max-width: 50%;
          perspective-origin: 280px 73px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 280px 73px;
        }
        .div-104 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 264px 70px;
          transform-origin: 264px 70px;
        }
        .div-105 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-bottom: 4px;
          margin-block-end: 4px;
          perspective-origin: 264px 12px;
          transform-origin: 264px 12px;
          line-height: 24px;
          margin-block: 0px 4px;
          font-weight: 600;
        }
        .div-106 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          margin-bottom: 16px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          margin-block-end: 16px;
          outline-color: rgb(85, 85, 85);
          perspective-origin: 264px 12px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 264px 12px;
        }
        .div-107 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          display: flex;
          perspective-origin: 264px 36px;
          text-align: center;
          transform-origin: 264px 36px;
        }
        .div-108 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34) rgb(229, 229, 229) rgb(34, 34, 34)
            rgb(34, 34, 34);
          border-left: 0px;
          border-right: 1px solid rgb(229, 229, 229);
          border-right-color: rgb(229, 229, 229);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: none solid none none;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 20px;
          padding-right: 24px;
          padding-top: 20px;
          align-items: center;
          border-inline-end: 1px solid rgb(229, 229, 229);
          border-inline-end-color: rgb(229, 229, 229);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          display: flex;
          justify-content: flex-end;
          perspective-origin: 83.8359px 36px;
          transform-origin: 83.8398px 36px;
        }
        .em-2 {
          border-bottom: 0px;
          border-bottom-color: rgb(177, 177, 177);
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-left-color: rgb(177, 177, 177);
          border-right: 0px;
          border-right-color: rgb(177, 177, 177);
          border-top: 0px;
          border-top-color: rgb(177, 177, 177);
          font-family: "Material Design Icons";
          font-size: 32px;
          line-height: 32px;
          margin-left: 4px;
          margin-right: 12px;
          vertical-align: middle;
          background-color: rgb(255, 255, 255);
          border-block-color: rgb(177, 177, 177);
          border-block-end-color: rgb(177, 177, 177);
          border-block-start-color: rgb(177, 177, 177);
          border-inline-color: rgb(177, 177, 177);
          border-inline-end-color: rgb(177, 177, 177);
          border-inline-start-color: rgb(177, 177, 177);
          caret-color: rgb(177, 177, 177);
          color: rgb(177, 177, 177);
          column-rule-color: rgb(177, 177, 177);
          display: flex;
          margin-inline: 4px 12px;
          margin-inline-end: 12px;
          margin-inline-start: 4px;
          outline-color: rgb(177, 177, 177);
          perspective-origin: 16px 16px;
          text-decoration: none solid rgb(177, 177, 177);
          text-decoration-color: rgb(177, 177, 177);
          transform-origin: 16px 16px;
        }
        .div-109 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          perspective-origin: 47.3359px 12px;
          transform-origin: 47.3398px 12px;
        }
        .div-110 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 20px;
          padding-left: 24px;
          padding-top: 20px;
          align-items: center;
          display: flex;
          flex-grow: 1;
          justify-content: flex-start;
          perspective-origin: 180.156px 36px;
          transform-origin: 180.16px 36px;
        }
        @media (max-width: 991px) {
          .div-110 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-110 {
            display: none;
          }
        }
        .em-3 {
          border-bottom: 0px;
          border-bottom-color: rgb(177, 177, 177);
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-left-color: rgb(177, 177, 177);
          border-right: 0px;
          border-right-color: rgb(177, 177, 177);
          border-top: 0px;
          border-top-color: rgb(177, 177, 177);
          font-family: "Material Design Icons";
          font-size: 32px;
          line-height: 32px;
          margin-left: 4px;
          margin-right: 12px;
          vertical-align: middle;
          border-block-color: rgb(177, 177, 177);
          border-block-end-color: rgb(177, 177, 177);
          border-block-start-color: rgb(177, 177, 177);
          border-inline-color: rgb(177, 177, 177);
          border-inline-end-color: rgb(177, 177, 177);
          border-inline-start-color: rgb(177, 177, 177);
          caret-color: rgb(177, 177, 177);
          color: rgb(177, 177, 177);
          column-rule-color: rgb(177, 177, 177);
          display: flex;
          margin-inline: 4px 12px;
          margin-inline-end: 12px;
          margin-inline-start: 4px;
          outline-color: rgb(177, 177, 177);
          perspective-origin: 16px 16px;
          text-decoration: none solid rgb(177, 177, 177);
          text-decoration-color: rgb(177, 177, 177);
          transform-origin: 16px 16px;
        }
        .div-111 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          perspective-origin: 58.6797px 12px;
          transform-origin: 58.6836px 12px;
        }
        .div-112 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 16px;
          padding-right: 16px;
          bottom: 0px;
          flex-basis: 50%;
          inset: 0px;
          left: 0px;
          max-width: 50%;
          perspective-origin: 280px 73px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 280px 73px;
        }
        .div-113 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 264px 73px;
          transform-origin: 264px 73px;
        }
        .div-114 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-bottom: 4px;
          align-items: baseline;
          display: flex;
          justify-content: space-between;
          margin-block-end: 4px;
          perspective-origin: 84.7734px 12px;
          transform-origin: 84.7773px 12px;
          line-height: 24px;
          margin-right: 12px;
          margin-inline-end: 12px;
          font-weight: 600;
        }
        .div-115 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          margin-bottom: 16px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          margin-block-end: 16px;
          outline-color: rgb(85, 85, 85);
          perspective-origin: 264px 12px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 264px 12px;
        }
        .div-116 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
        }
        .div-117 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          height: auto;
          width: 200px;
          padding-bottom: 30px;
        }
        @media (max-width: 640px) {
          .div-117 {
            width: auto;
            flex-grow: 1;
            padding-left: 18px;
            padding-top: 18px;
            padding-bottom: 18px;
            padding-right: 30px;
          }
        }
        .div-118 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
        }
        @media (max-width: 640px) {
          .div-118 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-119 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-119 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-120 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .div-121 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
        }
        @media (max-width: 640px) {
          .div-121 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-122 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-122 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-123 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .div-124 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
        }
        @media (max-width: 640px) {
          .div-124 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-125 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-125 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-126 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .div-127 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
        }
        @media (max-width: 640px) {
          .div-127 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-128 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-128 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-129 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .div-130 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
        }
        @media (max-width: 640px) {
          .div-130 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-131 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-131 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-132 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .div-133 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 14px;
          height: auto;
          background-color: rgba(0, 0, 0, 1);
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 640px) {
          .div-133 {
            max-width: 300px;
          }
        }
        .div-134 {
          display: flex;
          flex-direction: column;
          position: relative;
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 31px;
          padding-left: 16px;
          padding-right: 16px;
          perspective-origin: 272px 358.086px;
          transform-origin: 272px 358.09px;
          background-color: rgba(255, 255, 255, 1);
          margin-left: auto;
          margin-right: auto;
          max-width: 545px;
        }
        .div-135 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          max-height: 233px;
        }
        @media (max-width: 640px) {
          .div-135 {
            border-radius: 21px;
            box-shadow: 1px 5px 13px -8px rgba(0, 0, 0, 1);
          }
        }
        .image-2 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-2 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-136 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 256px 50.5px;
          transform-origin: 256px 50.5px;
        }
        .h4-2 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 18px;
          line-height: 26px;
          padding-bottom: 16px;
          perspective-origin: 256px 21px;
          transform-origin: 256px 21px;
        }
        @media (max-width: 640px) {
          .h4-2 {
            padding-top: 20px;
            padding-left: 6px;
          }
        }
        .div-137 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 16px;
          perspective-origin: 256px 29.5px;
          transform-origin: 256px 29.5px;
        }
        .div-138 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          perspective-origin: 256px 21.5px;
          transform-origin: 256px 21.5px;
        }
        .div-139 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-140 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-141 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-142 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-143 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-144 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-145 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-146 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-147 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-148 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-149 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-150 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-151 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-152 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-153 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-154 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-155 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-156 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-157 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-158 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-159 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-160 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-right: 4px;
          background-color: rgb(229, 229, 229);
          flex-grow: 1;
          height: 3px;
          margin-inline-end: 4px;
          perspective-origin: 9.63281px 1.5px;
          transform-origin: 9.63672px 1.5px;
        }
        .div-161 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-top: 12px;
          align-items: center;
          display: flex;
          flex-basis: 100%;
          justify-content: space-between;
          perspective-origin: 256px 20px;
          transform-origin: 256px 20px;
        }
        .p-7 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          padding-right: 40px;
          padding-top: 4px;
          perspective-origin: 30.7422px 14px;
          transform-origin: 30.7461px 14px;
        }
        .div-162 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 56.3594px 14px;
          transform-origin: 56.3633px 14px;
        }
        .div-163 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          max-width: 25px;
        }
        .image-3 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-3 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .em-4 {
          border-bottom: 0px;
          border-bottom-color: rgb(177, 177, 177);
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-left-color: rgb(177, 177, 177);
          border-right: 0px;
          border-right-color: rgb(177, 177, 177);
          border-top: 0px;
          border-top-color: rgb(177, 177, 177);
          font-family: "Material Design Icons";
          font-size: 15px;
          line-height: 15px;
          padding-right: 4px;
          padding-top: 2px;
          vertical-align: middle;
          border-block-color: rgb(177, 177, 177);
          border-block-end-color: rgb(177, 177, 177);
          border-block-start-color: rgb(177, 177, 177);
          border-inline-color: rgb(177, 177, 177);
          border-inline-end-color: rgb(177, 177, 177);
          border-inline-start-color: rgb(177, 177, 177);
          caret-color: rgb(177, 177, 177);
          color: rgb(177, 177, 177);
          column-rule-color: rgb(177, 177, 177);
          display: flex;
          outline-color: rgb(177, 177, 177);
          perspective-origin: 9.5px 8.5px;
          text-decoration: none solid rgb(177, 177, 177);
          text-decoration-color: rgb(177, 177, 177);
          transform-origin: 9.5px 8.5px;
        }
        .p-8 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          padding-top: 4px;
          perspective-origin: 14.7188px 14px;
          transform-origin: 14.7227px 14px;
        }
        .hr {
          border-block-color: rgb(229, 229, 229) rgb(221, 221, 221);
          border-block-end: 0px none rgb(221, 221, 221);
          border-block-end-color: rgb(221, 221, 221);
          border-block-start-color: rgb(229, 229, 229);
          border-block-start-style: solid;
          border-block-style: solid none;
          border-bottom: 0px none rgb(221, 221, 221);
          border-bottom-color: rgb(221, 221, 221);
          border-color: rgb(229, 229, 229) rgb(221, 221, 221) rgb(221, 221, 221);
          border-inline: 0px none rgb(221, 221, 221);
          border-inline-color: rgb(221, 221, 221);
          border-inline-end: 0px none rgb(221, 221, 221);
          border-inline-end-color: rgb(221, 221, 221);
          border-inline-start: 0px none rgb(221, 221, 221);
          border-inline-start-color: rgb(221, 221, 221);
          border-left: 0px none rgb(221, 221, 221);
          border-left-color: rgb(221, 221, 221);
          border-right: 0px none rgb(221, 221, 221);
          border-right-color: rgb(221, 221, 221);
          border-style: solid none none;
          border-top-color: rgb(229, 229, 229);
          border-top-style: solid;
          padding-bottom: 16px;
          perspective-origin: 256px 8.5px;
          transform-origin: 256px 8.5px;
        }
        .p-9 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 256px 48px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 256px 48px;
        }
        .div-164 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 8px;
          padding-right: 8px;
          padding-top: 16px;
          display: flex;
          flex-wrap: wrap;
          margin-inline: -16px;
          margin-inline-end: -16px;
          margin-inline-start: -16px;
          perspective-origin: 272px 47px;
          transform-origin: 272px 47px;
        }
        .div-165 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 16px;
          padding-right: 16px;
          bottom: 0px;
          flex-basis: 33.3333%;
          inset: 0px;
          left: 0px;
          perspective-origin: 88px 39px;
          position: relative;
          right: 0px;
          text-align: center;
          top: 0px;
          transform-origin: 88px 39px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 640px) {
          .div-165 {
            max-width: 74.33330000000001%;
            min-width: 275px;
          }
        }
        .div-166 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-gap: 16px;
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          gap: 16px;
          grid-template-columns: 322px 322px 322px 322px;
          grid-template-rows: 60px 60px;
          height: auto;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          padding: 40px;
          perspective-origin: 708px 108px;
          row-gap: 16px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 108px;
          user-select: none;
          width: 100%;
          word-wrap: break-word;
          align-self: stretch;
          flex-grow: 0;
          flex-direction: column;
          min-width: 258px;
        }
        @media (max-width: 640px) {
          .div-166 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-167 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          padding-bottom: 28.8px;
          padding-left: 11.2px;
          padding-right: 11.2px;
          padding-top: 28.8px;
          background-color: rgb(50, 50, 50);
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          column-gap: 8px;
          cursor: pointer;
          display: flex;
          gap: 8px;
          min-inline-size: 150px;
          padding: 28.8px 11.2px;
          row-gap: 8px;
          width: 100%;
          align-self: stretch;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-167 {
            padding-right: 0px;
            padding-left: 0px;
          }
        }
        .div-168 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          align-items: center;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          column-gap: 6px;
          display: flex;
          gap: 6px;
          perspective-origin: 74.3906px 10.1953px;
          row-gap: 6px;
          transform-origin: 74.3945px 10.1992px;
          margin-left: auto;
          margin-right: auto;
          font-size: 13.6px;
          font-weight: 500;
          line-height: 20.4px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          text-align: center;
        }
        .p-10 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          font-size: 14px;
          line-height: 22px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 72px 22px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 72px 22px;
        }
        .div-169 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 49px;
          padding-right: 16px;
          bottom: 0px;
          flex-basis: 100%;
          inset: 0px;
          left: 0px;
          max-width: 100%;
          perspective-origin: 560px 107.5px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 560px 107.5px;
          padding-top: 60px;
          background-color: rgba(250, 250, 250, 1);
          padding-bottom: 31px;
          border-radius: 26px;
          min-height: 279px;
          margin-top: 61px;
        }
        @media (max-width: 640px) {
          .div-169 {
            margin-top: 27px;
            padding-top: 6px;
          }
        }
        .div-170 {
          border-bottom: 0px;
          border-bottom-color: rgb(177, 177, 177);
          border-color: rgb(177, 177, 177);
          border-left: 0px;
          border-left-color: rgb(177, 177, 177);
          border-right: 0px;
          border-right-color: rgb(177, 177, 177);
          border-top: 0px;
          border-top-color: rgb(177, 177, 177);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-left: -16px;
          margin-right: -16px;
          border-block-color: rgb(177, 177, 177);
          border-block-end-color: rgb(177, 177, 177);
          border-block-start-color: rgb(177, 177, 177);
          border-inline-color: rgb(177, 177, 177);
          border-inline-end-color: rgb(177, 177, 177);
          border-inline-start-color: rgb(177, 177, 177);
          caret-color: rgb(177, 177, 177);
          color: rgb(177, 177, 177);
          column-rule-color: rgb(177, 177, 177);
          display: flex;
          flex-wrap: wrap;
          margin-inline: -16px;
          margin-inline-end: -16px;
          margin-inline-start: -16px;
          outline-color: rgb(177, 177, 177);
          perspective-origin: 560px 20px;
          text-decoration: none solid rgb(177, 177, 177);
          text-decoration-color: rgb(177, 177, 177);
          transform-origin: 560px 20px;
        }
        .div-171 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 16px;
          padding-right: 16px;
          bottom: 0px;
          display: flex;
          flex-basis: 100%;
          inset: 0px;
          justify-content: space-between;
          left: 0px;
          max-width: 100%;
          perspective-origin: 114.453px 12px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 114.457px 12px;
          border-bottom-color: rgb(34, 34, 34);
          border-left-color: rgb(34, 34, 34);
          border-right-color: rgb(34, 34, 34);
          border-top-color: rgb(34, 34, 34);
          line-height: 24px;
          margin-bottom: 16px;
          border-block-color: rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start-color: rgb(34, 34, 34);
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          margin-block: 0px 16px;
          margin-block-end: 16px;
          outline-color: rgb(34, 34, 34);
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .div-171 {
            margin-left: auto;
            margin-right: auto;
            padding-top: 20px;
            padding-left: 33px;
            padding-bottom: 16px;
          }
        }
        .div-172 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          margin-left: -16px;
          margin-right: -16px;
          display: flex;
          flex-wrap: wrap;
          margin-inline: -16px;
          margin-inline-end: -16px;
          margin-inline-start: -16px;
          perspective-origin: 560px 63px;
          transform-origin: 560px 63px;
        }
        @media (max-width: 640px) {
          .div-172 {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .div-173 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-left: 16px;
          padding-right: 16px;
          bottom: 0px;
          flex-basis: 100%;
          inset: 0px;
          left: 0px;
          max-width: 100%;
          perspective-origin: 560px 63px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 560px 63px;
          max-height: 1280px;
          min-height: 150px;
        }
        .div-174 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          perspective-origin: 544px 63px;
          transform-origin: 544px 63px;
          margin-bottom: 18px;
        }
        @media (max-width: 640px) {
          .div-174 {
            display: flex;
            flex-direction: row;
            overflow: auto;
          }
        }
        .a-17 {
          color: rgb(17, 100, 169);
          text-decoration: none rgb(17, 100, 169);
          text-decoration-color: rgb(17, 100, 169);
          border-bottom: 0px;
          border-bottom-color: rgb(17, 100, 169);
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-left-color: rgb(17, 100, 169);
          border-right: 0px;
          border-right-color: rgb(17, 100, 169);
          border-top: 0px;
          border-top-color: rgb(17, 100, 169);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-right: 16px;
          border-block-color: rgb(17, 100, 169);
          border-block-end-color: rgb(17, 100, 169);
          border-block-start-color: rgb(17, 100, 169);
          border-inline-color: rgb(17, 100, 169);
          border-inline-end-color: rgb(17, 100, 169);
          border-inline-start-color: rgb(17, 100, 169);
          bottom: 0px;
          caret-color: rgb(17, 100, 169);
          column-rule-color: rgb(17, 100, 169);
          cursor: pointer;
          flex-basis: 33.3333%;
          inset: 0px;
          left: 0px;
          max-width: 33.3333%;
          outline-color: rgb(17, 100, 169);
          perspective-origin: 181.328px 63px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 181.332px 63px;
          display: flex;
        }
        @media (max-width: 991px) {
          .a-17 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .a-17 {
            display: none;
          }
        }
        .div-175 {
          border-bottom: 1px solid rgb(229, 229, 229);
          border-bottom-color: rgb(229, 229, 229);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(229, 229, 229);
          border-left: 1px solid rgb(229, 229, 229);
          border-left-color: rgb(229, 229, 229);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(229, 229, 229);
          border-right-color: rgb(229, 229, 229);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(229, 229, 229);
          border-top-color: rgb(229, 229, 229);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          border-block: 1px solid rgb(229, 229, 229);
          border-block-color: rgb(229, 229, 229);
          border-block-end: 1px solid rgb(229, 229, 229);
          border-block-end-color: rgb(229, 229, 229);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(229, 229, 229);
          border-block-start-color: rgb(229, 229, 229);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-inline: 1px solid rgb(229, 229, 229);
          border-inline-color: rgb(229, 229, 229);
          border-inline-end: 1px solid rgb(229, 229, 229);
          border-inline-end-color: rgb(229, 229, 229);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(229, 229, 229);
          border-inline-start-color: rgb(229, 229, 229);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 173.328px 63px;
          transform-origin: 173.332px 63px;
        }
        .div-176 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 62px 62px;
          transform-origin: 62px 62px;
        }
        .div-177 {
          display: flex;
          flex-direction: row;
        }
        .div-178 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 104px;
          overflow: hidden;
        }
        .image-4 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-4 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-179 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 12px;
          padding: 12px;
          perspective-origin: 110.328px 62px;
          transform-origin: 110.332px 62px;
          display: flex;
          flex-direction: column;
        }
        .p-11 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 98.3281px 24px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 98.332px 24px;
          margin-left: auto;
          margin-right: auto;
        }
        .p-12 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 98.3281px 12px;
          transform-origin: 98.332px 12px;
          margin-left: auto;
          margin-right: auto;
        }
        .span-16 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          text-decoration: line-through solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          text-decoration-line: line-through;
        }
        .span-17 {
          border-bottom: 0px;
          border-bottom-color: rgb(228, 15, 10);
          border-color: rgb(228, 15, 10);
          border-left: 0px;
          border-left-color: rgb(228, 15, 10);
          border-right: 0px;
          border-right-color: rgb(228, 15, 10);
          border-top: 0px;
          border-top-color: rgb(228, 15, 10);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(228, 15, 10);
          border-block-end-color: rgb(228, 15, 10);
          border-block-start-color: rgb(228, 15, 10);
          border-inline-color: rgb(228, 15, 10);
          border-inline-end-color: rgb(228, 15, 10);
          border-inline-start-color: rgb(228, 15, 10);
          caret-color: rgb(228, 15, 10);
          color: rgb(228, 15, 10);
          column-rule-color: rgb(228, 15, 10);
          outline-color: rgb(228, 15, 10);
          text-decoration: none solid rgb(228, 15, 10);
          text-decoration-color: rgb(228, 15, 10);
        }
        .div-180 {
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          display: none;
          flex-wrap: wrap;
          perspective-origin: 544px 63px;
          transform-origin: 544px 63px;
        }
        @media (max-width: 991px) {
          .div-180 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-180 {
            display: flex;
            flex-direction: row;
            overflow: auto;
            margin-top: 16px;
          }
        }
        .a-18 {
          color: rgb(17, 100, 169);
          text-decoration: none rgb(17, 100, 169);
          text-decoration-color: rgb(17, 100, 169);
          border-bottom: 0px;
          border-bottom-color: rgb(17, 100, 169);
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-left-color: rgb(17, 100, 169);
          border-right: 0px;
          border-right-color: rgb(17, 100, 169);
          border-top: 0px;
          border-top-color: rgb(17, 100, 169);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-right: 16px;
          border-block-color: rgb(17, 100, 169);
          border-block-end-color: rgb(17, 100, 169);
          border-block-start-color: rgb(17, 100, 169);
          border-inline-color: rgb(17, 100, 169);
          border-inline-end-color: rgb(17, 100, 169);
          border-inline-start-color: rgb(17, 100, 169);
          bottom: 0px;
          caret-color: rgb(17, 100, 169);
          column-rule-color: rgb(17, 100, 169);
          cursor: pointer;
          flex-basis: 33.3333%;
          inset: 0px;
          left: 0px;
          max-width: 33.3333%;
          outline-color: rgb(17, 100, 169);
          perspective-origin: 181.328px 63px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 181.332px 63px;
        }
        @media (max-width: 640px) {
          .a-18 {
            padding-right: 0px;
            padding-bottom: 0px;
          }
        }
        .div-181 {
          border-bottom: 1px solid rgb(229, 229, 229);
          border-bottom-color: rgb(229, 229, 229);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(229, 229, 229);
          border-left: 1px solid rgb(229, 229, 229);
          border-left-color: rgb(229, 229, 229);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(229, 229, 229);
          border-right-color: rgb(229, 229, 229);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(229, 229, 229);
          border-top-color: rgb(229, 229, 229);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          border-block: 1px solid rgb(229, 229, 229);
          border-block-color: rgb(229, 229, 229);
          border-block-end: 1px solid rgb(229, 229, 229);
          border-block-end-color: rgb(229, 229, 229);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(229, 229, 229);
          border-block-start-color: rgb(229, 229, 229);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-inline: 1px solid rgb(229, 229, 229);
          border-inline-color: rgb(229, 229, 229);
          border-inline-end: 1px solid rgb(229, 229, 229);
          border-inline-end-color: rgb(229, 229, 229);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(229, 229, 229);
          border-inline-start-color: rgb(229, 229, 229);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 173.328px 63px;
          transform-origin: 173.332px 63px;
        }
        @media (max-width: 640px) {
          .div-181 {
            width: 264.3281px;
          }
        }
        .div-182 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 62px 62px;
          transform-origin: 62px 62px;
        }
        .div-183 {
          display: flex;
          flex-direction: row;
        }
        .div-184 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 104px;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .div-184 {
            padding-top: 16px;
          }
        }
        .image-5 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-5 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-185 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 12px;
          padding: 12px;
          perspective-origin: 110.328px 62px;
          transform-origin: 110.332px 62px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-185 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-185 {
            display: flex;
          }
        }
        .p-13 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 98.3281px 24px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 98.332px 24px;
          display: flex;
        }
        @media (max-width: 991px) {
          .p-13 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .p-13 {
            display: none;
            margin-top: 0px;
          }
        }
        .p-14 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 98.3281px 12px;
          transform-origin: 98.332px 12px;
        }
        .span-18 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          text-decoration: line-through solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          text-decoration-line: line-through;
        }
        .span-19 {
          border-bottom: 0px;
          border-bottom-color: rgb(228, 15, 10);
          border-color: rgb(228, 15, 10);
          border-left: 0px;
          border-left-color: rgb(228, 15, 10);
          border-right: 0px;
          border-right-color: rgb(228, 15, 10);
          border-top: 0px;
          border-top-color: rgb(228, 15, 10);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(228, 15, 10);
          border-block-end-color: rgb(228, 15, 10);
          border-block-start-color: rgb(228, 15, 10);
          border-inline-color: rgb(228, 15, 10);
          border-inline-end-color: rgb(228, 15, 10);
          border-inline-start-color: rgb(228, 15, 10);
          caret-color: rgb(228, 15, 10);
          color: rgb(228, 15, 10);
          column-rule-color: rgb(228, 15, 10);
          outline-color: rgb(228, 15, 10);
          text-decoration: none solid rgb(228, 15, 10);
          text-decoration-color: rgb(228, 15, 10);
        }
        .a-19 {
          color: rgb(17, 100, 169);
          text-decoration: none rgb(17, 100, 169);
          text-decoration-color: rgb(17, 100, 169);
          border-bottom: 0px;
          border-bottom-color: rgb(17, 100, 169);
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-left-color: rgb(17, 100, 169);
          border-right: 0px;
          border-right-color: rgb(17, 100, 169);
          border-top: 0px;
          border-top-color: rgb(17, 100, 169);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-right: 16px;
          border-block-color: rgb(17, 100, 169);
          border-block-end-color: rgb(17, 100, 169);
          border-block-start-color: rgb(17, 100, 169);
          border-inline-color: rgb(17, 100, 169);
          border-inline-end-color: rgb(17, 100, 169);
          border-inline-start-color: rgb(17, 100, 169);
          bottom: 0px;
          caret-color: rgb(17, 100, 169);
          column-rule-color: rgb(17, 100, 169);
          cursor: pointer;
          flex-basis: 33.3333%;
          inset: 0px;
          left: 0px;
          max-width: 33.3333%;
          outline-color: rgb(17, 100, 169);
          perspective-origin: 181.328px 63px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 181.332px 63px;
          display: flex;
        }
        @media (max-width: 991px) {
          .a-19 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .a-19 {
            display: none;
          }
        }
        .div-186 {
          border-bottom: 1px solid rgb(229, 229, 229);
          border-bottom-color: rgb(229, 229, 229);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(229, 229, 229);
          border-left: 1px solid rgb(229, 229, 229);
          border-left-color: rgb(229, 229, 229);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(229, 229, 229);
          border-right-color: rgb(229, 229, 229);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(229, 229, 229);
          border-top-color: rgb(229, 229, 229);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          border-block: 1px solid rgb(229, 229, 229);
          border-block-color: rgb(229, 229, 229);
          border-block-end: 1px solid rgb(229, 229, 229);
          border-block-end-color: rgb(229, 229, 229);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(229, 229, 229);
          border-block-start-color: rgb(229, 229, 229);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-inline: 1px solid rgb(229, 229, 229);
          border-inline-color: rgb(229, 229, 229);
          border-inline-end: 1px solid rgb(229, 229, 229);
          border-inline-end-color: rgb(229, 229, 229);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(229, 229, 229);
          border-inline-start-color: rgb(229, 229, 229);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 173.328px 63px;
          transform-origin: 173.332px 63px;
        }
        .div-187 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 62px 62px;
          transform-origin: 62px 62px;
        }
        .div-188 {
          display: flex;
          flex-direction: row;
        }
        .div-189 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 104px;
          overflow: hidden;
        }
        .image-6 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-6 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-190 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 12px;
          padding: 12px;
          perspective-origin: 110.328px 62px;
          transform-origin: 110.332px 62px;
        }
        .p-15 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 98.3281px 24px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 98.332px 24px;
        }
        .p-16 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 98.3281px 12px;
          transform-origin: 98.332px 12px;
        }
        .span-20 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          text-decoration: line-through solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          text-decoration-line: line-through;
        }
        .span-21 {
          border-bottom: 0px;
          border-bottom-color: rgb(228, 15, 10);
          border-color: rgb(228, 15, 10);
          border-left: 0px;
          border-left-color: rgb(228, 15, 10);
          border-right: 0px;
          border-right-color: rgb(228, 15, 10);
          border-top: 0px;
          border-top-color: rgb(228, 15, 10);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(228, 15, 10);
          border-block-end-color: rgb(228, 15, 10);
          border-block-start-color: rgb(228, 15, 10);
          border-inline-color: rgb(228, 15, 10);
          border-inline-end-color: rgb(228, 15, 10);
          border-inline-start-color: rgb(228, 15, 10);
          caret-color: rgb(228, 15, 10);
          color: rgb(228, 15, 10);
          column-rule-color: rgb(228, 15, 10);
          outline-color: rgb(228, 15, 10);
          text-decoration: none solid rgb(228, 15, 10);
          text-decoration-color: rgb(228, 15, 10);
        }
        .a-20 {
          color: rgb(17, 100, 169);
          text-decoration: none rgb(17, 100, 169);
          text-decoration-color: rgb(17, 100, 169);
          border-bottom: 0px;
          border-bottom-color: rgb(17, 100, 169);
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-left-color: rgb(17, 100, 169);
          border-right: 0px;
          border-right-color: rgb(17, 100, 169);
          border-top: 0px;
          border-top-color: rgb(17, 100, 169);
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-right: 16px;
          border-block-color: rgb(17, 100, 169);
          border-block-end-color: rgb(17, 100, 169);
          border-block-start-color: rgb(17, 100, 169);
          border-inline-color: rgb(17, 100, 169);
          border-inline-end-color: rgb(17, 100, 169);
          border-inline-start-color: rgb(17, 100, 169);
          bottom: 0px;
          caret-color: rgb(17, 100, 169);
          column-rule-color: rgb(17, 100, 169);
          cursor: pointer;
          flex-basis: 33.3333%;
          inset: 0px;
          left: 0px;
          max-width: 33.3333%;
          outline-color: rgb(17, 100, 169);
          perspective-origin: 181.328px 63px;
          position: relative;
          right: 0px;
          top: 0px;
          transform-origin: 181.332px 63px;
          display: flex;
        }
        @media (max-width: 991px) {
          .a-20 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .a-20 {
            display: none;
          }
        }
        .div-191 {
          border-bottom: 1px solid rgb(229, 229, 229);
          border-bottom-color: rgb(229, 229, 229);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(229, 229, 229);
          border-left: 1px solid rgb(229, 229, 229);
          border-left-color: rgb(229, 229, 229);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(229, 229, 229);
          border-right-color: rgb(229, 229, 229);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(229, 229, 229);
          border-top-color: rgb(229, 229, 229);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          border-block: 1px solid rgb(229, 229, 229);
          border-block-color: rgb(229, 229, 229);
          border-block-end: 1px solid rgb(229, 229, 229);
          border-block-end-color: rgb(229, 229, 229);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(229, 229, 229);
          border-block-start-color: rgb(229, 229, 229);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-inline: 1px solid rgb(229, 229, 229);
          border-inline-color: rgb(229, 229, 229);
          border-inline-end: 1px solid rgb(229, 229, 229);
          border-inline-end-color: rgb(229, 229, 229);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(229, 229, 229);
          border-inline-start-color: rgb(229, 229, 229);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 5px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 173.328px 63px;
          transform-origin: 173.332px 63px;
        }
        .div-192 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 62px 62px;
          transform-origin: 62px 62px;
        }
        .div-193 {
          display: flex;
          flex-direction: row;
        }
        .div-194 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 104px;
          overflow: hidden;
        }
        .image-7 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-7 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-195 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          padding-bottom: 12px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 12px;
          padding: 12px;
          perspective-origin: 110.328px 62px;
          transform-origin: 110.332px 62px;
        }
        .p-17 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          perspective-origin: 98.3281px 24px;
          text-decoration: none solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          transform-origin: 98.332px 24px;
        }
        .p-18 {
          border-bottom: 0px;
          border-color: rgb(17, 100, 169);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: ProximaNova, sans-serif;
          font-size: 15px;
          perspective-origin: 98.3281px 12px;
          transform-origin: 98.332px 12px;
        }
        .span-22 {
          border-bottom: 0px;
          border-bottom-color: rgb(85, 85, 85);
          border-color: rgb(85, 85, 85);
          border-left: 0px;
          border-left-color: rgb(85, 85, 85);
          border-right: 0px;
          border-right-color: rgb(85, 85, 85);
          border-top: 0px;
          border-top-color: rgb(85, 85, 85);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(85, 85, 85);
          border-block-end-color: rgb(85, 85, 85);
          border-block-start-color: rgb(85, 85, 85);
          border-inline-color: rgb(85, 85, 85);
          border-inline-end-color: rgb(85, 85, 85);
          border-inline-start-color: rgb(85, 85, 85);
          caret-color: rgb(85, 85, 85);
          color: rgb(85, 85, 85);
          column-rule-color: rgb(85, 85, 85);
          outline-color: rgb(85, 85, 85);
          text-decoration: line-through solid rgb(85, 85, 85);
          text-decoration-color: rgb(85, 85, 85);
          text-decoration-line: line-through;
        }
        .span-23 {
          border-bottom: 0px;
          border-bottom-color: rgb(228, 15, 10);
          border-color: rgb(228, 15, 10);
          border-left: 0px;
          border-left-color: rgb(228, 15, 10);
          border-right: 0px;
          border-right-color: rgb(228, 15, 10);
          border-top: 0px;
          border-top-color: rgb(228, 15, 10);
          font-family: ProximaNova, sans-serif;
          font-weight: 700;
          line-height: 24px;
          border-block-color: rgb(228, 15, 10);
          border-block-end-color: rgb(228, 15, 10);
          border-block-start-color: rgb(228, 15, 10);
          border-inline-color: rgb(228, 15, 10);
          border-inline-end-color: rgb(228, 15, 10);
          border-inline-start-color: rgb(228, 15, 10);
          caret-color: rgb(228, 15, 10);
          color: rgb(228, 15, 10);
          column-rule-color: rgb(228, 15, 10);
          outline-color: rgb(228, 15, 10);
          text-decoration: none solid rgb(228, 15, 10);
          text-decoration-color: rgb(228, 15, 10);
        }
        .div-196 {
          border-bottom: 0px;
          border-bottom-color: rgba(147, 147, 147, 0.16);
          border-bottom-style: solid;
          border-color: rgba(147, 147, 147, 0.16);
          border-left: 0px;
          border-left-color: rgba(147, 147, 147, 0.16);
          border-left-style: solid;
          border-right: 0px;
          border-right-color: rgba(147, 147, 147, 0.16);
          border-right-style: solid;
          border-style: solid;
          border-top: 0px;
          border-top-color: rgba(147, 147, 147, 0.16);
          border-top-style: solid;
          font-family: Rubik, sans-serif;
          font-variant: tabular-nums;
          font-variant-numeric: tabular-nums;
          line-height: 24px;
          border-block-color: rgba(147, 147, 147, 0.16);
          border-block-end-color: rgba(147, 147, 147, 0.16);
          border-block-end-style: solid;
          border-block-start-color: rgba(147, 147, 147, 0.16);
          border-block-start-style: solid;
          border-block-style: solid;
          border-inline-color: rgba(147, 147, 147, 0.16);
          border-inline-end-color: rgba(147, 147, 147, 0.16);
          border-inline-end-style: solid;
          border-inline-start-color: rgba(147, 147, 147, 0.16);
          border-inline-start-style: solid;
          border-inline-style: solid;
          caret-color: rgb(216, 216, 216);
          color: rgb(216, 216, 216);
          column-rule-color: rgb(216, 216, 216);
          cursor: url("https://app.simplified.com/static/media/c-default.fe2f3a54.svg"),
            auto;
          display: flex;
          justify-content: center;
          outline-color: rgb(216, 216, 216);
          overflow-wrap: break-word;
          perspective-origin: 708px 209.797px;
          text-decoration: none solid rgb(216, 216, 216);
          text-decoration-color: rgb(216, 216, 216);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 708px 209.797px;
          user-select: none;
          width: 1416px;
          word-wrap: break-word;
        }
        @media (max-width: 640px) {
          .div-196 {
            width: 286px;
            margin-top: 58px;
          }
        }
        .div-197 {
          display: none;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          width: auto;
          min-height: 20px;
          min-width: 653px;
          overflow: hidden;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          align-self: center;
        }
        @media (max-width: 991px) {
          .div-197 {
            min-width: 469px;
            max-width: 667px;
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-197 {
            min-width: 226px;
            width: 100vw;
            display: flex;
            min-height: 291px;
            margin-left: calc(50% - 50vw);
          }
        }
        .image-8 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-8 {
          width: 100%;
          padding-top: 75%;
          pointer-events: none;
          font-size: 0;
        }
        .div-198 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 100vh;
          background-color: rgba(255, 255, 255, 1);
          width: 100vw;
          margin-left: calc(50% - 50vw);
        }
        @media (max-width: 640px) {
          .div-198 {
            min-height: 511px;
          }
        }
        .section {
          margin-top: 83px;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
          width: 100vw;
          height: 100vh;
        }
        @media (max-width: 991px) {
          .section {
            margin-top: 50px;
            margin-bottom: 50px;
          }
        }
        @media (max-width: 640px) {
          .section {
            margin-top: 18px;
            margin-bottom: 50px;
            padding-top: 55px;
          }
        }
        .div-199 {
          max-width: 1290px;
          display: flex;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          height: 100vh;
        }
        @media (max-width: 991px) {
          .div-199 {
            flex-wrap: wrap;
          }
        }
        .div-200 {
          width: 25%;
          display: flex;
          position: relative;
          min-height: 1px;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        @media (max-width: 991px) {
          .div-200 {
            width: 100%;
          }
        }
        .div-201 {
          align-content: center;
          align-items: center;
          display: flex;
          padding-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 15px;
          flex-wrap: wrap;
          position: relative;
          width: 100%;
        }
        .div-202 {
          width: 100%;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-203 {
          margin-bottom: 10px;
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1.2em;
          text-transform: uppercase;
          font-family: Jost, sans-serif;
          color: rgba(0, 0, 0, 1);
        }
        @media (max-width: 991px) {
          .div-203 {
            margin-bottom: 8px;
            font-size: 11px;
          }
        }
        .div-204 {
          width: 100%;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-205 {
          margin-bottom: 15px;
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
          font-size: 38px;
          line-height: 1.2em;
          font-family: Jost, sans-serif;
          letter-spacing: 0px;
          color: rgba(0, 0, 0, 1);
        }
        @media (max-width: 991px) {
          .div-205 {
            margin-bottom: 8px;
            font-size: 26px;
          }
        }
        .div-206 {
          width: 100%;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-207 {
          margin-bottom: 32px;
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
          color: rgb(117, 118, 124);
          font-size: 17px;
          line-height: 1.5em;
        }
        @media (max-width: 991px) {
          .div-207 {
            margin-bottom: 16px;
            font-size: 14px;
          }
        }
        .a-21 {
          width: 100%;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
          display: flex;
          cursor: pointer;
          pointer-events: auto;
        }
        .div-208 {
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
          width: auto;
          flex-grow: 1;
        }
        .div-209 {
          text-align: center;
          text-decoration: none;
          font-weight: 500;
          align-items: center;
          border-radius: 2px;
          border-top-left-radius: 2px;
          display: flex;
          font-family: Jost, sans-serif;
          font-size: 15px;
          height: 42px;
          justify-content: center;
          padding-bottom: 8px;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 8px;
          position: relative;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(221, 221, 221);
          border-left: 1px solid transparent;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid transparent;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          color: rgb(33, 37, 41);
          transition: color 0.15s ease-in-out 0s,
            background-color 0.15s ease-in-out 0s,
            border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
          transition-delay: 0s, 0s, 0s, 0s;
          transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
          transition-property: color, background-color, border-color, box-shadow;
          transition-timing-function: ease-in-out, ease-in-out, ease-in-out,
            ease-in-out;
          user-select: none;
          vertical-align: middle;
          pointer-events: auto;
        }
        .div-210 {
          width: 50%;
          display: flex;
          position: relative;
          min-height: 1px;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-211 {
          align-content: center;
          align-items: center;
          display: flex;
          padding-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 15px;
          flex-wrap: wrap;
          position: relative;
          width: 100%;
        }
        .div-212 {
          width: 100%;
          text-align: center;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-213 {
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
        }
        .div-214 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          min-height: 692px;
          min-width: 20px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .div-214 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-214 {
            display: none;
          }
        }
        .image-9 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-9 {
          width: 100%;
          padding-top: 66.10000000000001%;
          pointer-events: none;
          font-size: 0;
        }
        .div-215 {
          width: 25%;
          display: flex;
          position: relative;
          min-height: 1px;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        @media (max-width: 991px) {
          .div-215 {
            width: 50%;
          }
        }
        .div-216 {
          align-content: center;
          align-items: center;
          display: flex;
          padding-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 15px;
          flex-wrap: wrap;
          position: relative;
          width: 100%;
        }
        .div-217 {
          width: 100%;
          text-align: center;
          position: relative;
          align-content: normal;
          align-items: normal;
          align-self: auto;
          flex-basis: auto;
          flex-direction: row;
          flex-grow: 0;
          flex-wrap: nowrap;
          gap: normal;
          justify-content: normal;
          order: 0;
        }
        .div-218 {
          transition: background 0.3s ease 0s, border 0.3s ease 0s,
            border-radius 0.3s ease 0s, box-shadow 0.3s ease 0s,
            -webkit-box-shadow 0.3s ease 0s;
          transition-delay: 0s, 0s, 0s, 0s, 0s;
          transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
          transition-property: background, border, border-radius, box-shadow,
            -webkit-box-shadow;
          transition-timing-function: ease, ease, ease, ease, ease;
        }
        .div-219 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .div-219 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-219 {
            display: none;
          }
        }
        .image-10 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-10 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-220 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .div-220 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-220 {
            display: none;
          }
        }
        .image-11 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-11 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .div-221 {
          display: none;
          flex-direction: column;
          position: relative;
          margin-top: 136px;
          height: auto;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-221 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 640px) {
          .div-221 {
            min-width: 165px;
          }
        }
        .div-222 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-222 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-223 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 640px) {
          .div-223 {
            height: auto;
            flex-grow: 0;
            min-width: 86px;
          }
        }
        .form {
          column-gap: 1rem;
          gap: 1rem;
          row-gap: 1rem;
          grid-auto-flow: column;
          grid-auto-columns: max-content;
          align-items: center;
          width: 100%;
          display: grid;
          margin-top: 1.5rem;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .form {
            column-gap: 0.5rem;
            gap: 0.5rem;
            row-gap: 0.5rem;
          }
        }
        @media (max-width: 640px) {
          .form {
            grid-auto-flow: row;
            grid-auto-columns: auto;
          }
        }
        .input-2 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 24px;
          padding-right: 24px;
          width: 20rem;
          height: 4rem;
          padding-bottom: 16px;
          padding-top: 16px;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          color: rgb(31, 32, 36);
          background-color: rgba(31, 32, 36, 0.07);
          border-bottom-style: none;
          border-left-style: none;
          border-right-style: none;
          border-style: none;
          border-top-style: none;
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          flex-grow: 1;
          border-bottom-color: rgb(107, 114, 128);
          border-bottom-width: 1px;
          border-color: rgb(107, 114, 128);
          border-left-color: rgb(107, 114, 128);
          border-left-width: 1px;
          border-right-color: rgb(107, 114, 128);
          border-right-width: 1px;
          border-top-color: rgb(107, 114, 128);
          border-top-width: 1px;
          border-width: 1px;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .input-2 {
            font-size: 1.125rem;
            line-height: 1;
            width: 18rem;
            height: 3.25rem;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-top: 12px;
          }
        }
        @media (max-width: 640px) {
          .input-2 {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
        .button-10 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 32px;
          padding-right: 32px;
          height: 4rem;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.08) 0px 11px 29px 0px;
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-color: rgba(0, 0, 0, 1);
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          white-space: nowrap;
          cursor: pointer;
          appearance: button;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          border-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button-10 {
            font-size: 1.125rem;
            line-height: 1;
            padding-left: 24px;
            padding-right: 24px;
            height: 3.25rem;
            border-color: rgb(229, 231, 235);
          }
        }
        @media (max-width: 640px) {
          .button-10 {
            font-size: 1rem;
            padding-left: 20px;
            padding-right: 20px;
            height: 2.75rem;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-224 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 640px) {
          .div-224 {
            height: auto;
            flex-grow: 0;
          }
        }
        .input-3 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 24px;
          padding-right: 24px;
          width: 20rem;
          height: 4rem;
          padding-bottom: 16px;
          padding-top: 16px;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          color: rgb(31, 32, 36);
          background-color: rgba(31, 32, 36, 0.07);
          border-bottom-style: none;
          border-left-style: none;
          border-right-style: none;
          border-style: none;
          border-top-style: none;
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          flex-grow: 1;
          border-bottom-color: rgb(107, 114, 128);
          border-bottom-width: 1px;
          border-color: rgb(107, 114, 128);
          border-left-color: rgb(107, 114, 128);
          border-left-width: 1px;
          border-right-color: rgb(107, 114, 128);
          border-right-width: 1px;
          border-top-color: rgb(107, 114, 128);
          border-top-width: 1px;
          border-width: 1px;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .input-3 {
            font-size: 1.125rem;
            line-height: 1;
            width: 18rem;
            height: 3.25rem;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-top: 12px;
          }
        }
        @media (max-width: 640px) {
          .input-3 {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
        .button-11 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 32px;
          padding-right: 32px;
          height: 4rem;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.08) 0px 11px 29px 0px;
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-color: rgba(0, 0, 0, 1);
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          white-space: nowrap;
          cursor: pointer;
          appearance: button;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          border-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button-11 {
            font-size: 1.125rem;
            line-height: 1;
            padding-left: 24px;
            padding-right: 24px;
            height: 3.25rem;
            border-color: rgb(229, 231, 235);
          }
        }
        @media (max-width: 640px) {
          .button-11 {
            font-size: 1rem;
            padding-left: 20px;
            padding-right: 20px;
            height: 2.75rem;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-225 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 640px) {
          .div-225 {
            height: auto;
            flex-grow: 0;
          }
        }
        .input-4 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 24px;
          padding-right: 24px;
          width: 20rem;
          height: 4rem;
          padding-bottom: 16px;
          padding-top: 16px;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          color: rgb(31, 32, 36);
          background-color: rgba(31, 32, 36, 0.07);
          border-bottom-style: none;
          border-left-style: none;
          border-right-style: none;
          border-style: none;
          border-top-style: none;
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          flex-grow: 1;
          border-bottom-color: rgb(107, 114, 128);
          border-bottom-width: 1px;
          border-color: rgb(107, 114, 128);
          border-left-color: rgb(107, 114, 128);
          border-left-width: 1px;
          border-right-color: rgb(107, 114, 128);
          border-right-width: 1px;
          border-top-color: rgb(107, 114, 128);
          border-top-width: 1px;
          border-width: 1px;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .input-4 {
            font-size: 1.125rem;
            line-height: 1;
            width: 18rem;
            height: 3.25rem;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-top: 12px;
          }
        }
        @media (max-width: 640px) {
          .input-4 {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
        .button-12 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 32px;
          padding-right: 32px;
          height: 4rem;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.08) 0px 11px 29px 0px;
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-color: rgba(0, 0, 0, 1);
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          white-space: nowrap;
          cursor: pointer;
          appearance: button;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          border-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button-12 {
            font-size: 1.125rem;
            line-height: 1;
            padding-left: 24px;
            padding-right: 24px;
            height: 3.25rem;
            border-color: rgb(229, 231, 235);
          }
        }
        @media (max-width: 640px) {
          .button-12 {
            font-size: 1rem;
            padding-left: 20px;
            padding-right: 20px;
            height: 2.75rem;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(25% - 15px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-226 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        .input-5 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 24px;
          padding-right: 24px;
          width: 20rem;
          height: 4rem;
          padding-bottom: 16px;
          padding-top: 16px;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          color: rgb(31, 32, 36);
          background-color: rgba(31, 32, 36, 0.07);
          border-bottom-style: none;
          border-left-style: none;
          border-right-style: none;
          border-style: none;
          border-top-style: none;
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          flex-grow: 1;
          border-bottom-color: rgb(107, 114, 128);
          border-bottom-width: 1px;
          border-color: rgb(107, 114, 128);
          border-left-color: rgb(107, 114, 128);
          border-left-width: 1px;
          border-right-color: rgb(107, 114, 128);
          border-right-width: 1px;
          border-top-color: rgb(107, 114, 128);
          border-top-width: 1px;
          border-width: 1px;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .input-5 {
            font-size: 1.125rem;
            line-height: 1;
            width: 18rem;
            height: 3.25rem;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-top: 12px;
          }
        }
        @media (max-width: 640px) {
          .input-5 {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
        .button-13 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 32px;
          padding-right: 32px;
          height: 4rem;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.08) 0px 11px 29px 0px;
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-color: rgba(0, 0, 0, 1);
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          white-space: nowrap;
          cursor: pointer;
          appearance: button;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          border-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button-13 {
            font-size: 1.125rem;
            line-height: 1;
            padding-left: 24px;
            padding-right: 24px;
            height: 3.25rem;
            border-color: rgb(229, 231, 235);
          }
        }
        @media (max-width: 640px) {
          .button-13 {
            font-size: 1rem;
            padding-left: 20px;
            padding-right: 20px;
            height: 2.75rem;
          }
        }
        .div-227 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 52px;
          height: auto;
          flex-grow: 1;
          margin-bottom: 44px;
        }
        @media (max-width: 991px) {
          .div-227 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-227 {
            display: none;
          }
        }
        .div-228 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-228 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-5 {
            width: 100%;
          }
        }
        .div-229 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: auto;
          width: 81%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          padding-left: 0px;
          padding-right: 0px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          box-shadow: 1px 1px 12px -4px rgba(0, 0, 0, 1);
          border-radius: 20px;
        }
        @media (max-width: 640px) {
          .div-229 {
            border-radius: 37px;
            box-shadow: 1px 1px 13px -7px rgba(0, 0, 0, 1);
            margin-top: 25px;
            padding-top: 10px;
            width: 96%;
          }
        }
        .image-12 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-12 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-230 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: auto;
          width: 81%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 1);
          border-width: -0;
          border-style: solid;
          border-radius: 11px;
        }
        @media (max-width: 991px) {
          .div-230 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .div-230 {
            border-radius: 14px;
            box-shadow: 1px 1px 13px -8px rgba(0, 0, 0, 1);
            padding-top: 0px;
            margin-top: 33px;
            display: none;
          }
        }
        .image-13 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-13 {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-7 {
            width: 100%;
          }
        }
        .div-231 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          padding-left: 0px;
          padding-right: 0px;
          padding-top: 0px;
          margin-top: 20px;
          margin-bottom: 0px;
        }
        @media (max-width: 640px) {
          .div-231 {
            width: 86%;
          }
        }
        .image-14 {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer-14 {
          width: 100%;
          padding-top: 49.4%;
          pointer-events: none;
          font-size: 0;
        }
        .div-232 {
          display: none;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          min-height: 100px;
          margin-left: auto;
          margin-right: auto;
        }
        .section-2 {
          width: 100%;
          align-self: stretch;
          flex-grow: 1;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        .div-233 {
          border-bottom: 0px;
          border-bottom-color: rgb(106, 111, 114);
          border-color: rgb(106, 111, 114);
          border-left: 0px;
          border-left-color: rgb(106, 111, 114);
          border-right: 0px;
          border-right-color: rgb(106, 111, 114);
          border-top: 0px;
          border-top-color: rgb(106, 111, 114);
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 300;
          line-height: 15.7px;
          border-block-color: rgb(106, 111, 114);
          border-block-end-color: rgb(106, 111, 114);
          border-block-start-color: rgb(106, 111, 114);
          border-inline-color: rgb(106, 111, 114);
          border-inline-end-color: rgb(106, 111, 114);
          border-inline-start-color: rgb(106, 111, 114);
          caret-color: rgb(106, 111, 114);
          color: rgb(106, 111, 114);
          column-rule-color: rgb(106, 111, 114);
          outline-color: rgb(106, 111, 114);
          perspective-origin: 134.648px 7.84375px;
          text-decoration: none solid rgb(106, 111, 114);
          text-decoration-color: rgb(106, 111, 114);
          transform-origin: 134.652px 7.84766px;
          text-align: center;
          padding-top: 22px;
          padding-bottom: 24px;
        }
        .a-22 {
          align-items: center;
          background-color: rgba(0, 0, 0, 1);
          border-block: 0px none rgb(255, 255, 255);
          border-block-color: rgb(255, 255, 255);
          border-block-end: 0px none rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start: 0px none rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom: 0px none rgb(255, 255, 255);
          border-bottom-color: rgb(255, 255, 255);
          border-bottom-left-radius: 200px;
          border-bottom-right-radius: 200px;
          border-color: rgb(255, 255, 255);
          border-inline: 0px none rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          border-inline-end: 0px none rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start: 0px none rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-left: 0px none rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-radius: 200px;
          border-right: 0px none rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top: 0px none rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          display: flex;
          font-family: Inter, sans-serif;
          font-size: 12px;
          font-weight: 500;
          height: 37px;
          justify-content: center;
          line-height: 12px;
          margin-block-end: 10px;
          margin-bottom: 10px;
          min-inline-size: 80px;
          min-width: 80px;
          outline-color: rgb(255, 255, 255);
          padding: 0px 30px;
          padding-left: 30px;
          padding-right: 30px;
          perspective-origin: 53.2734px 18.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          transform-origin: 53.2773px 18.5px;
          pointer-events: auto;
        }
        .div-234 {
          border-bottom: 1px solid rgb(242, 242, 242);
          border-bottom-color: rgb(242, 242, 242);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(242, 242, 242);
          border-left: 1px solid rgb(242, 242, 242);
          border-left-color: rgb(242, 242, 242);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(242, 242, 242);
          border-right-color: rgb(242, 242, 242);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(242, 242, 242);
          border-top-color: rgb(242, 242, 242);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          font-variant: proportional-nums;
          font-variant-numeric: proportional-nums;
          padding-bottom: 6px;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 0px;
          align-items: center;
          background-color: rgb(255, 255, 255);
          border-block: 1px solid rgb(242, 242, 242);
          border-block-color: rgb(242, 242, 242);
          border-block-end: 1px solid rgb(242, 242, 242);
          border-block-end-color: rgb(242, 242, 242);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(242, 242, 242);
          border-block-start-color: rgb(242, 242, 242);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-inline: 1px solid rgb(242, 242, 242);
          border-inline-color: rgb(242, 242, 242);
          border-inline-end: 1px solid rgb(242, 242, 242);
          border-inline-end-color: rgb(242, 242, 242);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(242, 242, 242);
          border-inline-start-color: rgb(242, 242, 242);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: rgba(17, 24, 39, 0.1) 0px 0px 4px 0px;
          display: flex;
          flex-wrap: wrap;
          height: auto;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding: 8px 24px;
          perspective-origin: 556px 33px;
          text-rendering: geometricprecision;
          transform-origin: 556px 33px;
          width: 1062px;
          margin-top: 0px;
          flex-grow: 0;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-234 {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .div-234 {
            display: none;
          }
        }
        .button-14 {
          align-items: center;
          border-block: 0px none rgba(0, 0, 0, 0.26);
          border-block-color: rgba(0, 0, 0, 0.26);
          border-block-end: 0px none rgba(0, 0, 0, 0.26);
          border-block-end-color: rgba(0, 0, 0, 0.26);
          border-block-start: 0px none rgba(0, 0, 0, 0.26);
          border-block-start-color: rgba(0, 0, 0, 0.26);
          border-bottom: 0px none rgba(0, 0, 0, 0.26);
          border-bottom-color: rgba(0, 0, 0, 0.26);
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-color: rgba(0, 0, 0, 0.26);
          border-inline: 0px none rgba(0, 0, 0, 0.26);
          border-inline-color: rgba(0, 0, 0, 0.26);
          border-inline-end: 0px none rgba(0, 0, 0, 0.26);
          border-inline-end-color: rgba(0, 0, 0, 0.26);
          border-inline-start: 0px none rgba(0, 0, 0, 0.26);
          border-inline-start-color: rgba(0, 0, 0, 0.26);
          border-left: 0px none rgba(0, 0, 0, 0.26);
          border-left-color: rgba(0, 0, 0, 0.26);
          border-radius: 8px;
          border-right: 0px none rgba(0, 0, 0, 0.26);
          border-right-color: rgba(0, 0, 0, 0.26);
          border-top: 0px none rgba(0, 0, 0, 0.26);
          border-top-color: rgba(0, 0, 0, 0.26);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          bottom: 0px;
          caret-color: rgba(0, 0, 0, 0.26);
          color: rgba(0, 0, 0, 0.26);
          column-rule-color: rgba(0, 0, 0, 0.26);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-weight: 500;
          inset: 0px;
          inset-inline-end: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          margin-inline-end: 73.4297px;
          margin-right: 73.4297px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgba(0, 0, 0, 0.26);
          padding: 0px 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 32px 16px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgba(0, 0, 0, 0.26);
          text-decoration-color: rgba(0, 0, 0, 0.26);
          text-transform: uppercase;
          top: 0px;
          transform-origin: 32px 16px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          visibility: hidden;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-24 {
          border-bottom: 0px;
          border-color: rgba(0, 0, 0, 0.26);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 24.5px;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 24px 14px;
          transform-origin: 24px 14px;
          width: 48px;
        }
        .button-15 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 59.9531px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 59.957px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-25 {
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(255, 255, 255);
          border-left-color: rgb(255, 255, 255);
          border-right-color: rgb(255, 255, 255);
          border-top-color: rgb(255, 255, 255);
          margin-right: 12px;
          background-color: rgb(106, 93, 249);
          border-block-color: rgb(255, 255, 255);
          border-block-end-color: rgb(255, 255, 255);
          border-block-start-color: rgb(255, 255, 255);
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline-color: rgb(255, 255, 255);
          border-inline-end-color: rgb(255, 255, 255);
          border-inline-start-color: rgb(255, 255, 255);
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          height: 30px;
          margin-inline-end: 12px;
          outline-color: rgb(255, 255, 255);
          text-decoration: none solid rgb(255, 255, 255);
          text-decoration-color: rgb(255, 255, 255);
          width: 30px;
        }
        .div-235 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-16 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 75.0312px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 75.0352px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-26 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
        }
        .div-236 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-17 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 89.1172px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 89.1172px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-27 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
        }
        .div-237 {
          border-bottom: 3px solid rgb(204, 204, 204);
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 3px;
          border-color: rgb(0, 0, 0) rgb(0, 0, 0) rgb(204, 204, 204);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          font-family: Inter, -apple-system, Arial, sans-serif;
          font-size: 14px;
          margin-left: 8px;
          margin-right: 8px;
          border-block-end: 3px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 3px;
          height: 1px;
          margin-inline: 8px;
          margin-inline-end: 8px;
          margin-inline-start: 8px;
          perspective-origin: 24px 2px;
          transform-origin: 24px 2px;
          width: 48px;
        }
        .button-18 {
          align-items: center;
          border-block: 0px none rgb(128, 128, 128);
          border-block-color: rgb(128, 128, 128);
          border-block-end: 0px none rgb(128, 128, 128);
          border-block-end-color: rgb(128, 128, 128);
          border-block-start: 0px none rgb(128, 128, 128);
          border-block-start-color: rgb(128, 128, 128);
          border-bottom: 0px none rgb(128, 128, 128);
          border-bottom-color: rgb(128, 128, 128);
          border-bottom-left-radius: 100px;
          border-bottom-right-radius: 100px;
          border-color: rgb(128, 128, 128);
          border-inline: 0px none rgb(128, 128, 128);
          border-inline-color: rgb(128, 128, 128);
          border-inline-end: 0px none rgb(128, 128, 128);
          border-inline-end-color: rgb(128, 128, 128);
          border-inline-start: 0px none rgb(128, 128, 128);
          border-inline-start-color: rgb(128, 128, 128);
          border-left: 0px none rgb(128, 128, 128);
          border-left-color: rgb(128, 128, 128);
          border-radius: 100px;
          border-right: 0px none rgb(128, 128, 128);
          border-right-color: rgb(128, 128, 128);
          border-top: 0px none rgb(128, 128, 128);
          border-top-color: rgb(128, 128, 128);
          border-top-left-radius: 100px;
          border-top-right-radius: 100px;
          bottom: 0px;
          caret-color: rgb(128, 128, 128);
          color: rgb(128, 128, 128);
          column-rule-color: rgb(128, 128, 128);
          display: flex;
          font-family: Inter, -apple-system, Arial, sans-serif;
          inset: 0px;
          justify-content: center;
          left: 0px;
          line-height: 28px;
          min-inline-size: 64px;
          min-width: 64px;
          outline-color: rgb(128, 128, 128);
          padding: 24px 12px;
          padding-bottom: 24px;
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 24px;
          perspective-origin: 68.7422px 24px;
          pointer-events: none;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(128, 128, 128);
          text-decoration-color: rgb(128, 128, 128);
          text-transform: capitalize;
          top: 0px;
          transform-origin: 68.7422px 24px;
          transition-duration: 0.25s;
          transition-property: background;
          transition-timing-function: ease-out;
          user-select: none;
          vertical-align: middle;
          background-color: rgba(0, 0, 0, 0);
        }
        .span-28 {
          border-bottom: 1px solid rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-left: 1px solid rgb(204, 204, 204);
          border-right: 1px solid rgb(204, 204, 204);
          border-top: 1px solid rgb(204, 204, 204);
          font-family: Inter, -apple-system, Arial, sans-serif;
          align-items: center;
          display: flex;
          justify-content: center;
          perspective-origin: 15px 15px;
          transform-origin: 15px 15px;
          border-bottom-color: rgb(204, 204, 204);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-left-color: rgb(204, 204, 204);
          border-left-style: solid;
          border-left-width: 1px;
          border-right-color: rgb(204, 204, 204);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top-color: rgb(204, 204, 204);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          margin-right: 12px;
          border-block: 1px solid rgb(204, 204, 204);
          border-block-color: rgb(204, 204, 204);
          border-block-end: 1px solid rgb(204, 204, 204);
          border-block-end-color: rgb(204, 204, 204);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(204, 204, 204);
          border-block-start-color: rgb(204, 204, 204);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-inline: 1px solid rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          border-inline-end: 1px solid rgb(204, 204, 204);
          border-inline-end-color: rgb(204, 204, 204);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(204, 204, 204);
          border-inline-start-color: rgb(204, 204, 204);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 50%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          margin-inline-end: 12px;
          width: 28px;
        }
        .div-238 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-left: auto;
          margin-right: auto;
          font-size: 19px;
          margin-top: -14px;
          margin-bottom: auto;
          height: auto;
          align-self: center;
        }
        @media (max-width: 640px) {
          .div-238 {
            height: auto;
            flex-grow: 0;
          }
        }
        .input-6 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 24px;
          padding-right: 24px;
          width: 20rem;
          height: 4rem;
          padding-bottom: 16px;
          padding-top: 16px;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          color: rgb(31, 32, 36);
          background-color: rgba(31, 32, 36, 0.07);
          border-bottom-style: none;
          border-left-style: none;
          border-right-style: none;
          border-style: none;
          border-top-style: none;
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          flex-grow: 1;
          border-bottom-color: rgb(107, 114, 128);
          border-bottom-width: 1px;
          border-color: rgb(107, 114, 128);
          border-left-color: rgb(107, 114, 128);
          border-left-width: 1px;
          border-right-color: rgb(107, 114, 128);
          border-right-width: 1px;
          border-top-color: rgb(107, 114, 128);
          border-top-width: 1px;
          border-width: 1px;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
        }
        @media (max-width: 991px) {
          .input-6 {
            font-size: 1.125rem;
            line-height: 1;
            width: 18rem;
            height: 3.25rem;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-top: 12px;
          }
        }
        @media (max-width: 640px) {
          .input-6 {
            width: 100%;
            height: 2.75rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
        .button-19 {
          font-size: 1.25rem;
          line-height: 1.4;
          padding-left: 32px;
          padding-right: 32px;
          height: 4rem;
          transition-duration: 0.15s;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform, filter, backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0) 0px 0px 0px 0px,
            rgba(0, 0, 0, 0.08) 0px 11px 29px 0px;
          color: rgb(255, 255, 255);
          font-weight: 700;
          background-color: rgba(0, 0, 0, 1);
          border-radius: 0.75rem;
          border-top-left-radius: 0.75rem;
          white-space: nowrap;
          cursor: pointer;
          appearance: button;
          border-bottom: 0px solid;
          border-left: 0px solid;
          border-right: 0px solid;
          border-top: 0px solid;
          border-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button-19 {
            font-size: 1.125rem;
            line-height: 1;
            padding-left: 24px;
            padding-right: 24px;
            height: 3.25rem;
            border-color: rgb(229, 231, 235);
          }
        }
        @media (max-width: 640px) {
          .button-19 {
            font-size: 1rem;
            padding-left: 20px;
            padding-right: 20px;
            height: 2.75rem;
          }
        }
        .div-239 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 15px;
        }
      `}</style>{" "}
    </>
  );
}