import React, { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import logo from '../../../assets/logo.jpg'
import { addUser, selectUser } from "./store/actions";
function SignUpBox(props) {
// Props
const{
    isFormSubmit,
    setIsFormSubmit
}=props


// States
const [infoLabel, setInfoLabel] = useState("");
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
const [checked, setChecked] = useState();
const [selectColor, setSelectColor] = useState('text-slate-400');
const [inputColor1, setInputColor1] = useState('bg-slate-0');
const [inputColor2, setInputColor2] = useState('bg-slate-0');
const [inputColor3, setInputColor3] = useState("bg-slate-0");
const [inputColor4, setInputColor4] = useState("bg-slate-0");
const [userDetails, setUserDetails] = useState({
    org_url:"",
    email:"",
    name:"",
    info_source:"",
    terms_and_cond:false
});
const [errorMessages, setErrorsMessages] = useState({});
const dispatch=useDispatch()

// Handling forms
const handleSubmit=(e)=>{
e.preventDefault()
console.log(userDetails);
setErrorsMessages(validateUser(userDetails))
// console.log("length", Object.keys(errorMessages).length);
if (Object.keys(errorMessages).length ===0) {
  setIsFormSubmit(true);
  dispatch(addUser(userDetails));
  dispatch(selectUser(userDetails));
}
}

// UseEffect to check errors live
useEffect(() => {
  console.log('Error 1',errorMessages);
  if (!Object.keys(errorMessages).length === 0 && !isFormSubmit) {
    // console.log('Error 2',errorMessages);
  }
}, [errorMessages]);

// Validate the user details
const validateUser=(values)=>{
    const formErrors={}
    var regEx=/^(?!.+@(gmail)\..+)(.+@.+\..+)$/; 
    
    if(!values.org_url){
        formErrors.org_url="Please enter organizational url "
        inputRef2.current.focus();

    }
    if (!values.name) {
      formErrors.name = "Please enter full name ";
        inputRef3.current.focus();

    }
    if(!values.email){
      formErrors.email = "Please enter working email ";
        inputRef2.current.focus();
    }
    if (!regEx.test(values.email)) {
      formErrors.email = "Please enter your business email address. This form does not accepet addresses from gmail.com ";
        inputRef2.current.focus();

    }
  
    return formErrors
}

// User Sign Up
  return (
    <div className="bg-white w-[800px] rounded-md h-[920px] flex flex-col justify-start shadow-2xl drop-shadow-xl">
      {/* Form Header Start */}
      <div className="flex gap-3 mt-12 ml-8">
        <img src={logo} />
        <h2 className="text-dark-blue text-2xl font-bold">Ubiscore</h2>
      </div>
      {/* Form Header End */}

      {/* Main Form Start */}
      <form className=" w-full p-6 mt-6" onSubmit={handleSubmit}>
        <h1 className="text-black text-3xl font-bold">Signup</h1>
        <p className="mt-2 text-sm text-zinc-500 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <div className="relative mt-12">
            <input
              id="org_url"
              name="org_email"
              type="text"
              ref={inputRef1}
              value={userDetails.org_url}
              className={`peer h-16 w-full pl-6 bg-inherit border rounded-sm outline-none  border-gray-300 text-gray-900 placeholder-transparent focus:ring-0 focus:outline-none focus:outline-none ${
                errorMessages.org_url
                  ? "focus:border-pink-400"
                  : "focus:border-slate-300"
              }`}
              placeholder="Organizational Web URL"
              onChange={(e) => {
                if (e) {
                  setInputColor1("bg-slate-100");
                  setUserDetails({ ...userDetails, org_url: e.target.value });
                }
              }}
            />
            <label
              for="org_url"
              className={`absolute left-4 px-2 -top-2.5 ${inputColor1} text-md peer-focus:bg-slate-50 peer-focus:p-2 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-gray-600 peer-focus:text-xs`}
            >
              Organizational Web URL
            </label>
            <p className="text-red-400 text-sm  mt-2">
              {errorMessages.org_url}
            </p>
          </div>
          <div className="relative mt-10">
            <input
              id="work_email"
              name="work_email"
              type="text"
              ref={inputRef2}
              value={userDetails.work_email}
              className={`peer h-16 w-full pl-6 bg-inherit border rounded-sm outline-none  border-gray-300 text-gray-900 placeholder-transparent focus:ring-0 focus:outline-none focus:outline-none ${
                errorMessages.email
                  ? "focus:border-pink-400"
                  : "focus:border-slate-300"
              }`}
              placeholder="Work Email"
              onChange={(e) => {
                if (e) {
                  setInputColor2("bg-slate-100");
                  setUserDetails({ ...userDetails, email: e.target.value });
                }
              }}
            />
            <label
              for="work_email"
              className={`absolute left-4 px-2 -top-2.5 ${inputColor2} text-md peer-focus:bg-slate-50 peer-focus:p-2 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-gray-600 peer-focus:text-xs`}
            >
              Work Email
            </label>
            <p className="text-red-400 text-sm  mt-2">{errorMessages.email}</p>
          </div>
          <div className="relative mt-10">
            <input
              id="full_name"
              name="full_name"
              ref={inputRef3}
              value={userDetails.name}
              type="text"
              className={`peer h-16 w-full pl-6 bg-inherit border rounded-sm outline-none  border-gray-300 text-gray-900 placeholder-transparent focus:ring-0 focus:outline-none focus:outline-none ${
                errorMessages.name
                  ? "focus:border-pink-400"
                  : "focus:border-slate-300"
              }`}
              placeholder="Organizational Web URL"
              onChange={(e) => {
                if (e) {
                  setInputColor3("bg-slate-100");
                  setUserDetails({ ...userDetails, name: e.target.value });
                }
              }}
            />
            <label
              for="full_name"
              className={`absolute left-4 px-2 -top-2.5 ${inputColor3} text-md peer-focus:bg-slate-50 peer-focus:p-2 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-gray-600 peer-focus:text-xs`}
            >
              Name
            </label>
            <p className="text-red-400 text-sm  mt-2">{errorMessages.name}</p>
          </div>
          <div className="relative mt-10">
            <select
              id="info_source"
              name="info_source"
              type="text"
              className={` peer h-16 w-full pl-6 bg-inherit border rounded-sm outline-none  border-gray-300 ${selectColor}  placeholder-transparent focus:outline-none focus:border-slate-300`}
              placeholder="How did you hear about us?"
              onClick={(e) => {
                if (e) {
                  setInfoLabel("How did you hear about us?");
                  setSelectColor("text-dark-blue");
                  setInputColor4("bg-slate-100");
                  setUserDetails({
                    ...userDetails,
                    info_source: e.target.value,
                  });
                }
              }}
            >
              <option value="default" className="text-blue" hidden>
                How did you hear about us?
              </option>
              <option value="Google Ads">Google Adds</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Discord">Discord</option>
            </select>
            <label
              for="full_name"
              className={`absolute left-4 px-2 -top-2.5 ${inputColor4} text-md peer-focus:bg-slate-50 peer-focus:p-2 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-gray-600 peer-focus:text-xs`}
            >
              {infoLabel}
            </label>
          </div>

          <div className="flex items-center mt-10">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className=" h-5 w-5 bg-slate-50 text-slate-300  rounded-md   "
            //   defaultChecked={checked}
              defaultChecked={userDetails.terms_and_cond}
              onChange={(e) => {
                  setUserDetails({ ...userDetails, terms_and_cond: e.target.checked });
              }}
            />
            <label
              for="link-checkbox"
              className="ml-2 text-md font-semelight text-gray-400 border-slate-300  "
            >
              Read and agree{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue underline font-semibold"
              >
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          <div className="flex flex-col  mt-10">
            <button
              type="submit"
              className="bg-blue hover:bg-dark-blue text-white font-normal py-4 px-4 rounded w-3/4"
            >
              Get started now
            </button>
            <label
              for="link-checkbox"
              className="mt-2 text-md font-semelight text-gray-500 border-slate-300  "
            >
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue  font-semibold"
              >
                Login
              </a>
              .
            </label>
          </div>
        </div>
      </form>

      {/* Main Form End */}
    </div>
  );
}

export default (SignUpBox);
