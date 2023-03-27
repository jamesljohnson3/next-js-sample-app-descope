import * as React from "react";
import Image from 'next/image'

export default function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <span className="span">
                  <Image
                    alt="avatar"
                    draggable="false"
                    height="1.25"
                    width="1.25"
                    marginright="0.75"
                    image="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/other.svg"
                    className="raw-img"
                  />
                </span>
                <div>
                  <p margin="0" className="p">
                    docs
                  </p>
                  <p margin="0" font="0.875rem" className="p-2">
                    docs.vercel.app
                  </p>
                </div>
              </div>
              <div className="div-6">No Git Repository connected.</div>
              <p marginbottom="0" font="0.875rem" className="p-3">
                5d
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: inherit;
          flex-basis: 33.3333%;
          max-width: 33.3333%;
          padding-bottom: 10.6667px;
          padding-left: 10.6667px;
          padding-right: 10.6667px;
          padding-top: 10.6667px;
        }
        @media (max-width: 991px) {
          .div {
            flex-basis: 50%;
            max-width: 50%;
          }
        }
        @media (max-width: 640px) {
          .div {
            flex-basis: 100%;
            max-width: 100%;
          }
        }
        .div-2 {
          width: 100%;
        }
        .div-3 {
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
        .div-4 {
          padding-bottom: 16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          width: 100%;
        }
        .div-5 {
          align-items: center;
          display: flex;
        }
        .span {
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
        .div-6 {
          background-color: rgb(17, 17, 17);
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
          padding-left: 16px;
          padding-right: 16px;
          display: flex;
          flex-direction: column;
          font-size: 0.875rem;
          justify-content: center;
          margin-bottom: 16px;
          margin-top: 16px;
          min-height: 3rem;
        }
        .p-3 {
          margin-top: 14px;
          font-size: 0.875rem;
          color: rgb(136, 136, 136);
          line-height: 1.625em;
          letter-spacing: -0.005625em;
        }
      `}</style>
    </>
  );
}