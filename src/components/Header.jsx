import React from 'react'
import NavarBig from './NavarBig';

function Header() {
  return (
    <div>
      <header className=" bg-white px-6 shadow">
        <div className="flex h-16 items-center justify-between max-w-6xl mx-auto">
          <button
            className=" text-slate-500 
          ml-1 rounded p-1 hover:bg-sky-500 focus:ring-offset-1 hover:text-slate-100 focus:ring-2 focus:ring-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex -mr-4  items-center space-x-8">
            <a
              href="#"
              className="text-sky-500 hover:rotate-6 duration-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
                |{" "}
              </svg>
            </a>
            <NavarBig></NavarBig>
          </div>
          <div className="flex">
            <button
              class="rounded-full text-slate-500 transition colors hover:text-sky-500
            focus:ring-2 focus:ring-slate-200
            focus:ring-offset-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
            <button
              class="ml-5 rounded-full text-slate-500 transition colors hover:text-sky-500
            focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"
            >
              <img
                className="size-7 rounded-full"
                src="https://ui-avatars.com/api?name=Nicolas+Vega"
                alt="Nicolas Vega"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
