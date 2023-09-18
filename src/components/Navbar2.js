import React, { useState } from "react";
// import global css here
import "../dist/output.css";
import "../tsrc/styles.css";
import "../assets/styled.css";

export default function Navbar2(){
    return (
        <div>
            <div className="relative">
          <div className="px-10 flex flex-row cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-tabler icon-tabler-medical-cross"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4361A7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
            </svg>
            <div className="flex divide-x-2 divide-gray-600">
              <div>
                <nav className="font-secularone">
                  <p className=" text-4xl ml-3 mr-8 font-semibold cursor-pointer text-blue-600">
                    {" "}
                    MedZone{" "}
                  </p>
                </nav>
              </div>
              <div className="px-10 text-4xl font-popi">Your Doctors</div>
            </div>
          </div>
        </div>
        </div>
    )
}