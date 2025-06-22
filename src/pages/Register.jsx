import React from "react";

function Register() {
  const handleSubmit = () => {};
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div class="rounded bg-gray-300">
        <ol class="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
          <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div class="-mt-2">
                <time class="text-xs/none font-medium text-gray-700">
                  12/02/2025
                </time>

                <h3 class="text-lg font-bold text-gray-900">Kickoff</h3>

                <p class="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div class="-mt-2">
                <time class="text-xs/none font-medium text-gray-700">
                  5/03/2025
                </time>

                <h3 class="text-lg font-bold text-gray-900">First Milestone</h3>

                <p class="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span class="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div class="-mt-2">
                <time class="text-xs/none font-medium text-gray-700">
                  24/04/2025
                </time>

                <h3 class="text-lg font-bold text-gray-900">Launch</h3>

                <p class="mt-0.5 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
        </ol>
      </div>
      <div className="rounded lg:col-span-2 ml-4 bg-white p-6 shadow-md">
        <div  className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
        <div>
          <h2>Create an Account</h2>
        </div>
        <form onSubmit={{ handleSubmit }}>
          <div className="mb-4">
            <label htmlFor="username">
             <span class="text-sm font-medium text-gray-700"> Username </span>
              <input type="text" id="username" class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
            </label>
          </div>
          <div>
            <label htmlFor="Email">
              <span class="text-sm font-medium text-gray-700"> Email </span>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="Email"
                  className="mt-0.5 w-full rounded border-gray-300 pe-8 shadow-sm"/>
                  <span className="absolute inset-y-0 right-0 grid w-8 place-content-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </span>
              </div>
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <span class="text-sm font-medium text-gray-700"> Password </span>
              <input type="password" id="password"class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">
             <span class="text-sm font-medium text-gray-700"> Confirm Password </span>
              <input type="password" id="confirmPassword" class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
            </label>
          </div>
          <div>
            <button type="submit"
             class="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
            >Register</button>
          </div>
        </form>
        <div>
          <p>
            Already have an account? <a href="/Login">Login here</a>.
          </p>
          <p>
            By registering, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default Register;
