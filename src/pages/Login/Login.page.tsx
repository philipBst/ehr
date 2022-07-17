import { Component } from "solid-js";
import bgTop from "../../assets/bgTop.png";
import bgBottom from "../../assets/bgBottom.png";
import google from "../../assets/google.svg";
import microsoft from "../../assets/microsoft.svg";
import apple from "../../assets/apple.svg";

const Login: Component = () => {
  return (
    <div class="grid min-h-screen w-screen grid-cols-2">
      <div class="relative w-full bg-white">
        <div class="absolute top-0 left-0 z-10 min-h-screen w-full bg-gradient-to-t from-[#006B77] to-[#006b77bf]"></div>
        <div class="mx-auto box-border w-8/12 p-0">
          <img
            src={bgTop}
            alt="top backgroung image"
            class="absolute top-0 left-0 mx-auto w-full bg-cover"
          />
        </div>
        <img
          src={bgBottom}
          alt="bottom background image"
          class="absolute left-0 bottom-0 w-full"
        />
        <div class="absolute top-0 left-0 z-20 flex min-h-screen w-full items-center justify-center">
          <ul class="flex flex-col gap-2 tracking-wide text-white">
            <li>· Better connect to your patients.</li>
            <li>· Ensure privacy and protection on ones health data.</li>
            <li>· Help improve medical information and service system.</li>
          </ul>
        </div>
      </div>
      <div class="flex w-full items-center justify-center bg-white px-4">
        <div class="text-center">
          <p class="border-b-2 border-green-800 pb-2 font-bold">
            Organization of Medical Diagnostics Information and Health Reports.
          </p>
          <div class="mt-4 flex flex-col space-y-4 px-8">
            <input
              type="text"
              name="email/number"
              id="email/number"
              placeholder="Email/Phone Number"
              class="border-b border-[#006B77] border-opacity-50 pb-2 outline-none placeholder:text-center"
            />
            <input
              type="password"
              name="pasword"
              id="pasword"
              placeholder="Password"
              class="border-b border-[#006B77] border-opacity-50 pb-2 outline-none placeholder:text-center"
            />
            <button class="rounded-md bg-gradient-to-t from-[#006B77] to-[#006b77bf] py-2 text-white">
              Log In
            </button>
            <span class="opacity-50">Alternatively,</span>
            <button class="flex min-w-max items-center justify-between rounded-md border-2 p-2 font-medium">
              <div>
                <img src={google} alt="google icon" class="h-6 w-6" />
              </div>
              <span>Continue With Google</span>
              <span></span>
            </button>
            <button class="flex min-w-max items-center justify-between rounded-md border-2 p-2 font-medium">
              <div>
                <img src={microsoft} alt="google icon" class="h-6 w-6" />
              </div>
              <span>Continue With Microsoft</span>
              <span></span>
            </button>
            <button class="flex min-w-max items-center justify-between rounded-md border-2 p-2 font-medium">
              <div>
                <img src={apple} alt="google icon" class="h-6 w-6" />
              </div>
              <span>Continue With Apple</span>
              <span></span>
            </button>
            <span class="border-b border-green-700 p-0"></span>
            <p class="mx-auto mt-8 max-w-max cursor-pointer text-[#006B77]">
              Forgot or Change Password?
            </p>
            <p>
              Do not have an account?
              <button class="text-[#006B77]"> Register.</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
