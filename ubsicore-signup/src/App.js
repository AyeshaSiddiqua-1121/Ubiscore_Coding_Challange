import './App.css';
import React, { useState } from 'react';
import SignUpBox from './components/Boxes/SignUpBox';
import SignUpSuccess from './components/Pages/SignUpSuccess';
function App() {
const [isFormSubmit, setIsFormSubmit] = useState(false);

  return (
    <div className="app">
      <div className="flex w-full h-full lg:flex-row flex-col">
        {/* Left-hand Side Start*/}
        <div className="bg-dark-blue lg:w-1/2 w-full text-white">
          <div className=" flex relative flex-col mt-36 ml-40 w-2/4">
            <h3 className="text-3xl ">Jerrome Bell</h3>
            <p className="text-sm text-zinc-400 mt-3">Product Manager</p>
            <div className="z-30  w-[250px] sm:w-[450px]">
              <p className="text-md mt-6 ">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit”
              </p>
            </div>
            <div className="absolute bottom-0 right-[-100px]">
              <div className="w-20 h-20 bg-opacity-10 bg-gray-400 rounded-full   "></div>
            </div>

            {/* Progress Lines Start */}
            <div className="flex mt-6 gap-x-3">
              <div className="w-20 bg-gray-200 rounded-lg h-2"></div>
              <div className="w-8 bg-gray-200 rounded-lg h-2 dark:bg-gray-700"></div>
              <div className="w-8 bg-gray-200 rounded-full h-2 dark:bg-gray-700"></div>
            </div>
            {/* Progress Lines End */}
          </div>
        </div>
        {/* Left-hand Side End*/}

        {/* Right-hand Side Start */}
        <div className="lg:w-1/2 w-full flex justify-center">
          {isFormSubmit ? (
            <>
            <SignUpSuccess />
            </>
          ) : (
            <>
              <SignUpBox
                isFormSubmit={isFormSubmit}
                setIsFormSubmit={setIsFormSubmit}
              />
            </>
          )}
        </div>
        {/* Right-hand Side End */}
      </div>
    </div>
  );
}

export default App;
