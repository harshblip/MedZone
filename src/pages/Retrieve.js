import React, { useEffect } from "react";
import { CircularProgressbar } from "../react-circular-progressbar";
import "../react-circular-progressbar/dist/styles.css";

// importing global stylesheets
import "../dist/output.css";
import "../tsrc/styles.css";

import map from "../assets/images/map.png";
import mapImage from "../assets/images/map.png";
import doctor from "../assets/images/doctor.png";
import call from "../assets/images/call.png";
import covid from "../assets/images/fever(1).png";
import distance from "../assets/images/social-distancing(1).png";
import photo from "../assets/images/photo.jpg";
import { buildStyles } from "react-circular-progressbar";
import logo from "../assets/logo.svg";
import loading from "../assets/images/newimage2.png";


// importing the hooks
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

//importing components
import DocCard from "../components/DocCard";
import SortByRelief from "../components/SortByRelief";
import SortByDistance from "../components/SortByDistance";
import SortBySymptoms from "../components/SortBySymptoms";
import { FormControl } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Retrieve() {
  const [addsym, setnewsymp] = useState("");
  const [array, setsymp] = useState([]); // array for symptoms
  const [string, setLocation] = useState("");
  const sympInput = useRef(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [check,setcheck] = useState([]) //  creating a array to save symptoms.
  const history = useHistory();

  // creating boolean states for sorting
  const [sortbyD, setsortD] = useState(false);
  const [sortbyR, setsortR] = useState(false);
  const [sortbyS, setsortS] = useState(false);

  // function to handle sorting
  const handleclickD = () => {
    setsortD(true);
    setsortR(false);
    setsortS(false);
  };
  const handleclickR = () => {
    setsortD(false);
    setsortR(true);
    setsortS(false);
  };
  const handleclickS = () => {
    setsortD(false);
    setsortR(false);
    setsortS(true);
  };
  var names = [];
 

  // function to handle ADD
  const handleAdd = (e) => {
    e.preventDefault();
    const naya = addsym.trim(); // if any leading spaces
    //naya= naya.replace(/ +/g, "");
    setcheck((prevSymps) => [...prevSymps, naya]);
    console.log(check);
    if (naya && !array.includes(naya)) {
      setsymp((prevSymps) => [...prevSymps, naya]);
    }
    setnewsymp("");
    sympInput.current.focus(); // no need to click again and again on input target
  };
  const handleAccess = async (e) => {
    var arrstring = "";
    e.preventDefault();
    let details = {
      array,
      string,
    };
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        arrstring += array[i];
      } else {
        arrstring += array[i];
        arrstring += ",";
      }
    }

    try {
      const res = await fetch(
        `https://frightened-colt-teddy.cyclic.app/api/doctors/get?array=${arrstring}&string=${string}`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const d = await res.json();

      setIsPending(false);
      setData(d);
      setError(null);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("the fetch was aborted");
      } else {
        setIsPending(false);
        setError("Could not fetch the data");
      }
    }
  };
  for (const key in data) {
    if (Array.isArray(data[key])) {
      names = [...names, ...data[key]];
    }
  }
  const matches = useMediaQuery("(max-width: 1024px");
  const handlehome = () => {
    history.push("/");
  };

  // Removing the cards for new search
  const handleclear =() =>{
    setData(false);
  }

  return (
    <div className="fullwid">
      <div className="bg-greey">
        <div className="bg-greey w-full h-screen">
          <div className="bg-white fixed w-full top-0 z-50">
            <div className="xl:py-6 xs:py-14 right-0 left-0 z-10 w-full">
              <div className="px-10 flex flex-row cursor-pointer">
                <img
                  src={logo}
                  className="logo xs:-mt-9 xl:-mt-0 xs:flex xs:justify-center"
                />
                <div className="flex xl:divide-x-2 xl:divide-gray-600">
                  <div>
                    <nav className="font-secularone">
                      <p
                        className=" xl:text-3xl xs:text-8xl xs:ml-6 xl:ml-3 mr-8 lg:visible xs:mt-32 xl:mt-2 cursor-pointer text-black"
                        onClick={handlehome}
                      >
                        {" "}
                        MedZone{" "}
                      </p>
                    </nav>
                  </div>
                  <div className="px-10 xl:mt-1 text-black xs:mt-32 xs:text-8xl  xl:text-3xl lg:-ml-0 xs:ml-12 font-kaushan">
                    Your Doctors
                  </div>
                </div>
              </div>
              <hr
                style={{
                  background: "gray",
                  color: "black",
                  borderColor: "gray",
                  height: "1px",
                  marginTop: "9px",
                }}
                className="line"
              />
            </div>
          </div>
          <div className="xs:flex xs: xs:flex-col">
            <div className="xl:fixed xs:px-96 xl:px-0 xs:mt-56 xs:py-72 xl:mt-0 xl:py-40">
              <div className="xl:px-6 xl:-ml-0 xs:-ml-12">
                <div className="xl:ml-10 xs:ml-2 xs:px-64 relative xl:px-36 xs:py-100 xl:py-72 borderform xs:rounded-2xl xs:border-5 xl:border-4 sidebarbg -mt-10">
                  <div className="absolute xl:-mt-0 xs:-mt-64 -ml-28">
                    <p className="flex justify-center xs:-mt-96 xl:-mt-56 text-black font-pacifico xs:text-9xl xl:text-6xl">
                      {" "}
                      Fillup!
                    </p>
                    <p className="font-semibold text-black xs:mt-64 xl:mt-14 font-web xs:text-5xl lg:text-base xs:mb-10 xl:mb-0">
                      {" "}
                      Write your symptoms{" "}
                    </p>
                    <div className="xl:mt-4 xs:mt-12 ">
                      <FormControl>
                        <TextField
                          onChange={(e) => setnewsymp(e.target.value)}
                          value={addsym}
                          ref={sympInput}
                          sx={{
                            width: { sm: 400, xl: 228 },
                            borderRadius: 90,
                            fontFamily: "Sans",
                          }}
                          id="outlined-basic"
                          label="cold, fever..."
                          variant="outlined"
                          size="small"
                          inputProps={{ sx: { height: { sm: 40, xl: 20 } } }}
                        />
                      </FormControl>
                    </div>
                    <button
                      className="xl:py-2 xs:py-4 xs:px-10 xl:px-4 ml-4 xs:mt-16 xl:mt-4 xs:text-4xl xl:text-sm font-popi xs:rounded-lg bg-slate-500 text-white"
                      onClick={handleAdd}
                    >
                      {" "}
                      Add{" "}
                    </button>
                    <p className="text-black">
                      Symptoms:{" "}
                      {array.map((i) => (
                        <em key={i} className="text-black ">
                          {i},
                        </em>
                      ))}
                    </p>
                    <p className="font-semibold text-black font-web xs:text-5xl xl:text-base xs:mt-52 xl:mt-10 mb-2">
                      {" "}
                      Your Location{" "}
                    </p>
                    <div className="xl:mt-4 xs:mt-14">
                      <FormControl>
                        <TextField
                          required
                          onChange={(e) => setLocation(e.target.value)}
                          value={string}
                          sx={{
                            width: { sm: 390, xl: 228 },
                            // borderRadius: 90,
                            
                            borderBlockColor: "black",
                          }}
                          inputProps={{ sx: { height: { sm: 40, xl: 20 } } }}
                          id="outlined-basic"
                          label="Hawkins, Indiana"
                          variant="outlined"
                          size="small"
                          class = "textfield"
                        />
                      </FormControl>
                    </div>
                    <button
                      className="xl:py-2 xs:px-10 xs:py-5 xl:px-5 ml-4 mb-6 xs:mt-12 xl:mt-4 xs:text-4xl xl:text-sm font-popi xs:rounded-lg bg-slate-500 text-white"
                      onClick={handleAccess}
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* xs:-mr-90  */}
            <div className="xl:py-40 mr-5 xl:flex md:mr-32 xl:justify-end xl:items-end xl:-mt-7">
              <div className="lg:mr-1 xs:flex xs:justify-end xs:items-end xl:fixed xs:-mt-28 xs:mb-12 xl:-mt-6 xl:-mb-12">
                <div className="flex flex-row xs:gap-56 xl:gap-9">
                  <div>
                    <button className="xl:px-3 xs:px-14 xs:py-11 xl:py-3 rounded-lg xs:text-4xl xl:text-base font-bold mt-1 font-popi border-2 border-black" onClick={handleclear}>
                      {" "}
                      Clear{" "}
                    </button>
                  </div>
                  <div className="xl:fixed  dropdown xl:px-1 xs:-ml-44 xl:ml-0">
                    <label
                      tabindex="0"
                      className="btndropdown xl:py-0 px-14 bg-white border-2 border-black text-black xl:-mr-16 hover:bg-white font-popi font-semibold m-1"
                    >
                      {" "}
                      <p className="font-popi font-semibold xl:text-base xs:text-4xl">
                        {" "}
                        Sort{" "}
                      </p>
                    </label>
                    <ul
                      tabindex="0"
                      className="dropdown-content menu shadow bg-base-100 rounded-box px-10"
                    >
                      <li>
                        <a className="sort1 font-popi" onClick={handleclickR}>
                          {" "}
                          Relief{" "}
                        </a>
                      </li>
                      <li>
                        <a className="sort1 font-popi" onClick={handleclickD}>
                          {" "}
                          Distance{" "}
                        </a>
                      </li>
                      <li>
                        <a className="sort1 font-popi" onClick={handleclickS}>
                          {" "}
                          Symptoms Matched{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:-mt-36 xs:-mt-58 xs:flex xs:justify-center flex justify-center items-end lg:ml-40">
              {!data && (
                <div className="xl:mt-10">
                  {" "}
                  <img src={loading} height="440" width="440" alt="svg" class = "loadingimage" />{" "}
                </div>
              )}
              {error && <p>Error occured</p>}
              {isPending && <p color="red">Loading...</p>}
              {
                // displaying data without sorting
                !sortbyD && !sortbyR && !sortbyS && data && (
                  <div className="">
                    {" "}
                    <DocCard arr={names} arr1 = {check} />{" "}
                  </div>
                )
              }
              {sortbyR && !sortbyD && !sortbyS && data && (
                <SortByRelief arr={names} arr1 = {check} />
              )}
              {sortbyD && !sortbyR  && !sortbyS  && data && (
                <SortByDistance arr={names} arr1 ={check} />
              )}
              {sortbyS && !sortbyD && !sortbyR && data && (
                <SortBySymptoms arr={names} arr1={check} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
