import React, { useState } from "react";

const Index = () => {
  const [selectedOption, setSelectedOption] = useState("active");

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
    saveUserAction(event.target.value);
  };

  const saveUserAction = async (action: any) => {
    try {
      const response = await fetch("/api/save-action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
      {/* Code block starts */}
      <div className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
        <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
          <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
            Job Postings
          </h2>
          <p className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">
            Come work in an environment that allows you to learn alongside
            accomplished developers.
          </p>
        </div>
        <div className="lg:hidden w-full relative mt-2 md:mt-4">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#a0aec0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select
            aria-label="Selected tab"
            className="focus:outline-none form-select block w-full p-3 border border-gray-300 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent relative z-10"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="inactive" className="text-sm text-gray-600 dark:text-gray-400">
              Inactive
            </option>
            <option value="active" className="text-sm text-indigo-700 dark:text-indigo-600">
              Active
            </option>
            <option value="inactive" className="text-sm text-gray-600 dark:text-gray-400">
              Inactive
            </option>
            <option value="inactive" className="text-sm text-gray-600 dark:text-gray-400">
            Inactive</option>
                    </select>
                </div>
                <ul className="hidden lg:flex items-center lg:mt-6 xl:mt-0">
                    <li className="font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-gray-200 dark:bg-gray-700 text-indigo-700 dark:text-indigo-600 text-sm">Active</li>
                    <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">Inactive</li>
                    <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">Inactive</li>
                    <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-sm">Inactive</li>
                </ul>
            </div>
            {/* Code block ends */}
        </div>
    );
};
export default Index;
