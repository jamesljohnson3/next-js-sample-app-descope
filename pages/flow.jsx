import * as React from 'react'
import Image from 'next/image'

export default function MyComponent() {
  return (
    <div className="basis-[33.3333%] max-w-[33.3333%] box-border p-[10.6667px] max-md:basis-6/12 max-md:max-w-[50%] max-sm:basis-full max-sm:max-w-full">
      <div className="w-full">
        <div className="shadow-[rgb(51,51,51)_0px_0px_0px_1px] bg-black border box-border transition-all duration-[0.2s] ease-[ease] delay-[0s] duration-[0.2s] rounded-[5px] border-b border-solid border-[rgba(0,0,0,0)] border-l border-transparent border-r border-t">
          <div className="w-full p-[16px]">
            <div className="items-center flex">
              <span className="bg-white border box-border inline-block h-[calc(35px)] overflow-hidden overflow-x-hidden overflow-y-hidden relative align-top w-[calc(35px)] mr-[12px] rounded-[50%] border-b border-solid border-l border-white border-r border-t">
                <Image
                  alt="avatar"
                  draggable="false"
                  height="1.25"
                  width="1.25"
                  marginright="0.75"
                  image="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/other.svg"
                  className="w-full inline-block h-full object-cover select-none max-w-full rounded-[50%]"
                />
              </span>
              <div>
                <p
                  margin="0"
                  className="text-[1em] leading-6 font-medium tracking-[-0.005625em]"
                >
                  docs
                </p>
                <p
                  margin="0"
                  font="0.875rem"
                  className="text-sm text-[rgb(153,153,153)] leading-5 tracking-[-0.005625em]"
                >
                  docs.vercel.app
                </p>
              </div>
            </div>
            <div className="bg-[rgb(17,17,17)] border text-[rgb(136,136,136)] flex flex-col text-sm justify-center min-h-[3rem] my-[16px] px-[16px] rounded-[5px] border-b border-solid border-[rgb(51,51,51)] border-l border-r border-t">
              No Git Repository connected.
            </div>
            <p
              marginbottom="0"
              font="0.875rem"
              className="text-sm text-[rgb(136,136,136)] leading-[1.625em] tracking-[-0.005625em] mt-[14px]"
            >
              5d
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
