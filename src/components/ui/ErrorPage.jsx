import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const ErrorPage = () => {
  //==> other method is also to get the error is one more hook is : "useRouteError()"
  //==> when we use this then we got more information about the error and we solve show that
  // return (
  // <h1 className="text-4xl font-bold flex justify-center items-center">
  //   404 not found Error
  // </h1>
  // );

  /*============== next error show hook is ============================*/
  const error = useRouteError();

  /*==================================================================== */

  /*=====>  this hook is use to navigate the page like go on prev page <========  */
  const navigate = useNavigate();

  function handlePageNavigation() {
    navigate(-1); //ye ek step pichhe le jane ka kaam karega
  }
  /*================================================================= */

  console.log(error);
  if (error.status === 404) {
    return (
      <>
        <div>
          <figure>
            <div className=" h-screen flex justify-center items-center flex-col">
              <div>
                {/* ==> this below one i use with one another website so for this we need a above lib ========*/}

                {/* <DotLottieReact
                  src="https://lottie.host/ed918b76-d53e-4036-8312-1a1141564ac0/avcoM4Fuad.lottie"
                  loop
                  autoplay
                  style={{ maxWidth: "500px", maxHeight: "500px" }}
                /> */}
                <img
                  src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                  alt="error-img"
                  className="max-w-125 max-h-125"
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-xl text-gray-500">{error.statusText}</p>
                <br />
                <p className="text-xl text-gray-500 ">{error.data}</p>
              </div>

              {/* ===> here which we use a navlink is good but it's direct rediect the user to home page but 
              if user want to go only prev page then it's not good for that there is a one hook in react-router is 
              "useNavigate()" which helps to achive this */}

              {/* ===========use navigate hook========================================= */}

              <button
                className="w-1/6 flex justify-center items-center cursor-pointer gap-4 mt-4 py-3 px-3 text-xl border-none rounded-md bg-red-500 text-white hover:bg-green-400 hover:border-black hover:border-solid hover:border hover:text-gray-700 "
                onClick={handlePageNavigation}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-left-icon lucide-arrow-left"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Go To Prev Page
              </button>

              {/* ======================================================================== */}
              <button className="w-1/6 mt-4 cursor-pointer border-none rounded-md bg-red-500 text-white hover:bg-green-400 hover:border-black hover:border-solid hover:border hover:text-gray-600 ">
                <NavLink
                  to="/"
                  className="flex justify-center text-xl items-center gap-4 py-3 px-3 "
                >
                  Go To Home Page
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right-icon lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </NavLink>
              </button>
            </div>
          </figure>
        </div>
      </>
    );
  }
};

export default ErrorPage;
