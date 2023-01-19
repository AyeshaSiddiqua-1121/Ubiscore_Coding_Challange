import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../assets/logo.jpg'
function SignUpSuccess(props) {
    const {
        setIsFormSubmit
    }=props
    const handleBackToHome=()=>{
        setIsFormSubmit(false)
    }
    // Getting store element
  const selectedUser = useSelector((state) => state.signup.selectedUser)
  return (
    <div className="bg-white w-[800px] rounded-md h-[920px] flex flex-col justify-start shadow-2xl drop-shadow-xl">
      {/* Page Start */}
      <div className="flex gap-3 mt-12 ml-8">
        <img src={logo} />
        <h2 className="text-dark-blue text-2xl font-bold">Ubiscore</h2>
      </div>
      <div className=" w-full p-6 mt-6">
        <h1 className="text-black text-3xl font-bold">
          Thank You {selectedUser.name} ...
        </h1>
        <p className="mt-2 text-sm text-zinc-500 font-normal">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
        </p>
        <div>
          <div className="flex flex-col  mt-10">
            <button
              onClick={handleBackToHome}
              className="bg-blue hover:bg-dark-blue text-white font-normal py-4 px-4 rounded w-3/4"
            >
             Back to Home
            </button>
            <label
              for="link-checkbox"
              className="mt-2 text-md font-semelight text-gray-500 border-slate-300  "
            >
              Questions? Email Us{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue  font-semibold"
              >
                help@ubiscore.com
              </a>
              .
            </label>
          </div>
        </div>
      </div>
      {/* Page End*/}
    </div>
  );
}

export default SignUpSuccess