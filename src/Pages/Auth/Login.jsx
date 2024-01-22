import { useState } from "react";
import { BsPersonCircle, BsEyeSlash } from 'react-icons/bs';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="font-poppins">
      <div className="flex items-center justify-center h-screen mx-auto max-w-7xl">
        <div className="flex-1">
          <div className="flex flex-wrap">
            <div className="w-full py-6 bg-gray-100 shadow-md lg:py-7 lg:w-1/2 dark:bg-gray-900">
              <div className="max-w-md mx-auto">
                <div className="px-4 my-7">
                  <div className="mb-7">
                    <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-green-600 rounded-lg dark:bg-green-600 ">
                      <BsPersonCircle size={32} color="#ffffff" />
                    </span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-center text-gray-800 dark:text-gray-400">
                    Login your Account
                  </h2>
                  <p className="text-base text-center text-gray-500 mb-7 dark:text-gray-400">
                    Please fill your credentials
                  </p>
                  <form action="" className="">
                    <div className="mb-4">
                      <input
                        type="text"
                        className="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="relative flex items-center mb-4">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Password"
                        required
                      />
                      <BsEyeSlash
                        className="absolute right-0 mt-2 mr-3 i dark:text-gray-50 cursor-pointer"
                        size={16}
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                    <div className="relative flex items-center mb-4">
                      <input
                        type="password"
                        className="w-full py-4 rounded-lg px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Repeat password"
                        required
                      />
                      <BsEyeSlash
                        className="absolute right-0 items-center mr-3 dark:text-gray-50 cursor-pointer"
                        size={16}
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                    <div className="mb-4 text-right">
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button
                      className="w-full py-4 mb-4 font-semibold text-gray-200 bg-green-600 rounded-lg px-7 dark:text-gray-300 dark:bg-green-600 hover:text-blue-200"
                      type="submit"
                    >
                      LOGIN
                    </button>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Need an account?{' '}
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      >
                        Create an account
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative items-center justify-center hidden w-full lg:flex lg:w-1/2">
              <div className="absolute inset-0 z-10 bg-gray-900 opacity-40"></div>
              <img
                className="absolute inset-0 z-0 object-cover w-full h-full ml-auto"
                src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Background"
              />
              <div className="top-0 z-10 max-w-xl mx-auto mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-100 dark:text-gray-300">
                  Welcome to our community and join with us
                </h2>
                <div className="max-w-lg mx-auto mb-6">
                  <p className="pt-6 font-medium text-gray-300 dark:text-gray-300">
                    Lorem ipsum dor amet sidcuscd andih wkoidus iusoyions hejitywa qopasation dummy text ipsum
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-2 font-medium bg-green-600 text-gray-50 dark:text-gray-300"
                >
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;