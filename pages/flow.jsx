import React from "react";

export default function Dashboard() {
  return (

   <header>
  <nav
    className="sticky top-0 z-10 flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div className="px-6">
      <button
        className="border-0 bg-transparent py-3 px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentE"
        aria-controls="navbarSupportedContentE"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>
      <div
        className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
        id="navbarSupportedContentE"
        data-te-collapse-item>
        <ul
          className="mr-auto flex flex-col md:flex-row"
          data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Features</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Pricing</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
    style="
      background-image: url('https://tecdn.b-cdn.net/img/new/slides/041.webp');
      height: 400px;
    ">
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.6)">
      <div className="flex h-full items-center justify-center">
        <div className="text-white">
          <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
          <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
          <button
            type="button"
            className="rounded border-2 border-neutral-50 px-7 pt-[10px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light">
            Call to action
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

   
  );
}
