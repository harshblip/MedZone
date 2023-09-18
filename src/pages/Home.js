import React from "react";
import { Link } from "react-router-dom";
// import global css here
import "../dist/output.css";
import "../tsrc/styles.css";
import "../assets/styled.css";

// importing the svg component
import heart from "../assets/images/Cardiologist.gif";
import photo from "../assets/images/photo.jpg";
import SocialFollow from "../components/SocialFollow";
import logo from "../assets/logo.svg";

// importing the components
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

// jsx components starts here
export default function Home() {
  return (
    <div class = "fullwid">
      <div class="bg-greey xs:h-full xl:h-screen">
        <div class=" xl:w-full lg:py-7 xs:py-1">
          <p class="lg:ml-36 xs:main xs:mt-4 xs:ml-20 xl:flex xl:flex-row ">
            <img src = {logo} class = "logo xs:-mt-4  xl:-mt-0 xs:flex xs:justify-center"/>
            <nav class="name">
              <p class=" xl:text-3xl xs:text-10xl xs:flex xs:justify-center xs:-ml- xs:-mt-40 xl:ml-4 xl:mt-2 cursor-pointer text-black">
                {" "}
                MedZone{" "}
              </p>
            </nav>
          </p>
          <div class="font-monte -mt-10 mr-36 flex justify-end items-end">
            <button class="butttons mr-5 mb-2 text-black text-sm hover:text-white hover:bg-black">
              About
            </button>
            <button class="butttons mr-5 rounded-lg -mt-40 text-sm text-white bg-red-500 px-4 py-2" >
              Contact Us
            </button>
          </div>
          <button class="hidden inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div class="py-20 xs:py-24">
          <div class="w-full mx-auto ">
            <div class=" xl:h-full xs:w-full xl:w-9/12 xl:relative">
              <div class="absolute top-0 left-0 bottom-b opacity-50"></div>
              {/* height="420" width="420" sm:height="120" sm:width="600" */}
              <div class="xs:flex xs:flex-col">
                <div class="xl:absolute  xl:-mt-6 xl:ml-40 xl:flex xl:flex-col">
                  <img
                    src={heart}
                    height="420"
                    width="420"
                    class="heartimage"
                  />
                  <div class="screenend">
                    {" "}
                    <SocialFollow />{" "}
                  </div>
                </div>
                <div class="xl:absolute mt-28 xs:w-full xl:w-screen xl:flex xl:flex-col justify-center items-center xl:ml-96">
                  <div class="xl:w-full xl:mr-60 xs:-mt-14 xl:-mt-10">
                    <div class="xs:visible xl:invisible">
                      <p class="font-monte1 tagline xs:text-10xl xs:ml-1 text-blackk xl:text-7xl xl:-ml-28 xs:mt-32 xl:-mt-1">
                        {" "}
                        Not Feeling Well?{" "}
                      </p>
                      <p class="font-monte1 font-bold text-blackk xs:text-6xl xl:text-sm mr-16 xs:ml-14 xl:-ml-24 xs:mb-4 ok xl:mb-0 xs:mt-10 xl:mt-6">
                        Empower yourself with accurate and reliable 
                       <span class = "ml-22"> information
                        from {"   "}</span>
                        <span class="xl:text-lg xs:text-6xl ok font-semibold font-monte text-red-500">
                          real patient
                        </span>{" "}
                        experiences to <br/> get access the best healthcare
                        professionals.
                      </p>
                    </div>

                    <div class="xs:invisible xl:visible xl:w-full xl:mr-60 xs:-mt-14 xl:-mt-36">
                      <p class="font-monte1 tagline xs:text-4xl text-blackk xl:text-7xl xl:-ml-28 xl:-mt-1">
                        {" "}
                        Not Feeling Well?{" "}
                      </p>
                      <p class="font-monte1 font-bold  text-blackk xs:text-sm xl:text-sm mr-16 xs:ml-14 xl:-ml-24 mt-6">
                        Empower yourself with accurate and reliable information
                        from {"   "}
                        <span class="xl:text-lg xs:text-base font-semibold font-monte text-red-500">
                          real patient
                        </span>
                      </p>
                      <div class="xs:-ml- xl:-ml-40">
                        <p class="font-monte1 font-bold text-blackk text-sm xs:-ml-4 xl:-ml-36  -mr-8 mt-1">
                          {" "}
                          experiences to get access to the best healthcare
                          professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xs:py-16 xl:py-28  postandreceive justify-center  xl:ml-48 xl:-mr-20">
                  <div class="font-monte xs:-ml-92 lg:-mt-0 xl:ml-0 sm:py-96">
                    <div class="py wrapper xs:-mt-80 xl:-mt-60">
                      <div class=" link_wrapper">
                        <a
                          href="/post"
                          class="buttons xs:text-4xl xl:text-xs xs:rounded-2xl xl:rounded-xl"
                        >
                          <p class="xs:mt-8 xl:-mt-1"> Post </p>
                          {/* Post */}
                        </a>
                        <div class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 268.832 268.832"
                          >
                            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-row xs:-mt-64  xl:justify-center xl:-mr-64 xl:ml-8 xl:-mt-80">
                  <div class="font-monte xs:-mt-32 xl:-mt-52">
                    <div class="py wrapper xs:ml-56 xl:ml-40 sm:-mt-72">
                      <div class="link_wrapper">
                        <a
                          href="/retrieve"
                          class="buttons text-xs xs:rounded-2xl xl:rounded-xl"
                        >
                          <p class="xl:text-xs xs:text-4xl xs:mt-8 xl:mt-3"> Get my Doctor </p>
                        </a>
                        <div class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 268.832 268.832"
                          >
                            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="screenend1 py-4 xs:flex xs:justify-start xs:enabled xl:invisible">
                  <SocialFollow />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="-mt-100 screenend mb-64 mr-40 flex justify-end">
          <a href="https://play.google.com/store/apps/details?id=com.niraj.medzone">
            <img
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
              width="140"
              height="140"
              alt="Get it on Google Play"
              border="0"
            />
          </a>
        </div>
      </div>
      <div class="seconddiv h-full xl:w-full">
        <div class="py-4 ">
          <div class="xl:text-5xl xs:text-12xl flex justify-center items-center">
            <p class="xs:-ml-8 lg:-ml-0 mt-40 font-web font-semibold">
              {" "}
              Our{" "}
              <span class="font-semibold font-monte xl:text-8xl xs:text-13xl text-red-400">
                {" "}
                Team{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div class="mt-16 xs:w-full xs:flex xs:flex-col mb-32 relative lg:flex lg:flex-row justify-center xl:space-x-20">
          <div class="xs:grid xs:grid-cols-2 lg:flex lg:flex-row lg:space-x-20">
            <div class="card" data-state="#about">
              <div class="card-header ">
                <div
                  class="card-cover"
                  style={{
                    backgroundImage:
                      'url("https://cdn.dribbble.com/users/887237/screenshots/6086804/sketch_line_icons_with_abstract_background_4x.png?compress=1&resize=1000x750&vertical=top")',
                  }}
                ></div>
                <img class="card-avatar mb-4" src={photo} alt="avatar" />
                <h1 class="card-fullname text-black mb-10 xl:text-base xs:text-9xl font-monte">
                  Harsh Jipkate
                </h1>
                <p class="card-jobtitle text-black py-4 mt-5 font-monte">
                  React Frontend Developer
                </p>
              </div>
              <div class="card-main">
                <div class="card-section is-active" id="about">
                  <div class="card-content">
                    <div class="card-subtitle">ABOUT</div>
                    <p class="card-desc">Bhai mujhse nahi hoga.</p>
                  </div>
                  <div class="card-social">
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                        <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                        <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="card-buttons">
                  <button data-section="#about" class="is-active">
                    ABOUT
                  </button>
                </div>
              </div>
            </div>
            <div class="card" data-state="#about">
              <div class="card-header ">
                <div
                  class="card-cover"
                  style={{
                    backgroundImage:
                      'url("https://cdn.dribbble.com/users/887237/screenshots/6086804/sketch_line_icons_with_abstract_background_4x.png?compress=1&resize=1000x750&vertical=top")',
                  }}
                ></div>
                <img
                  class="card-avatar mb-4"
                  src="https://media.licdn.com/dms/image/C4D03AQEevEANJk7FFw/profile-displayphoto-shrink_800_800/0/1656132737446?e=2147483647&v=beta&t=4GNEK6dCqbI5pd_oYG9vRV5-EYvPQmkXxx0-24ZF9eU"
                  alt="avatar"
                />
                <h1 class="card-fullname text-black mb-8 font-monte">
                  Manant Tyagi
                </h1>
                <p class="card-jobtitle text-black py-4 font-monte">
                  Backend Developer
                </p>
              </div>
              <div class="card-main">
                <div class="card-section is-active" id="about">
                  <div class="card-content">
                    <div class="card-subtitle">ABOUT</div>
                    <p class="card-desc">
                      Passionate backend developer with 0 interns.
                    </p>
                  </div>
                  <div class="card-social">
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                        <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                        <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="card-buttons">
                  <button data-section="#about" class="is-active">
                    ABOUT
                  </button>
                </div>
              </div>
            </div>
            <div class="card" data-state="#about">
              <div class="card-header ">
                <div
                  class="card-cover"
                  style={{
                    backgroundImage:
                      'url("https://cdn.dribbble.com/users/887237/screenshots/6086804/sketch_line_icons_with_abstract_background_4x.png?compress=1&resize=1000x750&vertical=top")',
                  }}
                ></div>
                <img
                  class="card-avatar mb-4"
                  src="https://media.licdn.com/dms/image/C4D03AQHFeYG65q3B1g/profile-displayphoto-shrink_800_800/0/1662955924347?e=2147483647&v=beta&t=6V2GGF2SdMfx4xHfOIxpS_Zp9ilOxag2-MoHpm1P--8"
                  alt="avatar"
                />
                <h1 class="card-fullname text-black mb-8 font-monte">
                  Nikhil Rana
                </h1>
                <p class="card-jobtitle text-black py-4 font-monte ">
                  {" "}
                  React Frontend Developer {" "}
                </p>
              </div>
              <div class="card-main">
                <div class="card-section is-active" id="about">
                  <div class="card-content">
                    <div class="card-subtitle">ABOUT</div>
                    <p class="card-desc">He could do better but he didn't.</p>
                  </div>
                  <div class="card-social">
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                        <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                        <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="card-buttons">
                  <button data-section="#about" class="is-active">
                    ABOUT
                  </button>
                </div>
              </div>
            </div>
            <div class="card" data-state="#about">
              <div class="card-header ">
                <div
                  class="card-cover"
                  style={{
                    backgroundImage:
                      'url("https://cdn.dribbble.com/users/887237/screenshots/6086804/sketch_line_icons_with_abstract_background_4x.png?compress=1&resize=1000x750&vertical=top")',
                  }}
                ></div>
                <img
                  class="card-avatar mb-4"
                  src="https://media.licdn.com/dms/image/C5603AQECLN-5k6PL2A/profile-displayphoto-shrink_200_200/0/1602253155399?e=1678320000&v=beta&t=gC5MeoW-aXI1hFBwxJ4qeaZEUb_ON5yy_3LtNMd0g8w"
                  alt="avatar"
                />
                <h1 class="card-fullname text-black mb-8 font-monte">
                  Niraj Patidar
                </h1>
                <p class="card-jobtitle text-black py-4 font-monte">
                  App Developer of the website
                </p>
              </div>
              <div class="card-main">
                <div class="card-section is-active" id="about">
                  <div class="card-content">
                    <div class="card-subtitle">ABOUT</div>
                    <p class="card-desc">
                      This guy didn't do anything on the website.
                    </p>
                  </div>
                  <div class="card-social">
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                        <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                        <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="card-buttons">
                  <button data-section="#about" class="is-active">
                    ABOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
