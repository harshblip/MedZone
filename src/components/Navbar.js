import React from "react";
// import global css here
import "../dist/output.css";
import "../tsrc/styles.css";
import "../assets/styled.css";

// jsx template starts here
export default function Navbar() {
  return (
    <div>
      <div class = "">
    <div class=" w-full py-10">
        <p class="ml-36 flex flex-row ">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-medical-cross" width="60" height="60" viewBox="0 0 24 24" stroke-width="2" stroke="#28282B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
          </svg>
            <nav class = "font-secularone">
              <p class=" text-4xl ml-8 mt-3 font-semibold cursor-pointer text-black"> MedZone </p>
            </nav>
            
          </p>
        <div class="font-monte -mt-10 mr-36 flex justify-end items-end text-base">
          <button class="mr-5 mb-2 text-black hover:text-white hover:bg-black" >About</button>
          <button class="mr-5 rounded-lg -mt-40 text-white bg-red-500 px-4 py-2">Contact Us</button>
        </div>
        <button class="hidden inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign out
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    
  </div>
    </div>
  );
}
