import React from "react";
import "../dist/output.css";
import "../tsrc/styles.css";
import { FormControl } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import map from "../assets/images/map.png";
import mapImage from "../assets/images/map.png";
import doctor from "../assets/images/doctor.png";
import call from "../assets/images/call.png";
import covid from "../assets/images/fever(1).png";
import distance from "../assets/images/social-distancing(1).png";
import photo from "../assets/images/photo.jpg";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: 690,
    },
  },
});

export default function DocCard({ arr , arr1 }) {
  //console.log(arr1);
  return (
    <div>
      {arr &&
        arr.map((a) => (
          <div class="xl:-ml-7 grid grid-cols-1 xs:-ml-32 md:-mr-24 xl:grid xl:grid-cols-1 md:grid md:grid-cols-1 gap-1 xl:px-32">
            <div class="-mt-[11rem]">
              <div class="flex flex-col">
                <div>
                  <div
                    class="absolute cardnew"
                    style={{ textAlign: "left", textColor: "black" }}
                  >
                    <div class="rounded-xl shadow-xl flex flex-col w-full card-background image image-1 codepen relative">
                      <div
                        class="flex xs:flex xs:ml-96 circular xs:justify-end xl:ml-96 mt-4"
                        // style={{ height: 70, width: 70 }}
                      >
                        <CircularProgressbar
                          value={a.Relief}
                          text={`${a.Relief}%`}
                          styles={buildStyles({
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `rgba(62, 199, 83, ${a.Relief / 100})`,
                            textColor: "rgb(62, 199, 83)",
                            trailColor: "#d6d6d6",
                            // backgroundColor: '#3e98c7',
                          })}
                          class="circular"
                        />
                      </div>

                      <div class="flex text-xl font-semibold xs:-mt-36 xl:-mt-18 ml-5">
                        <img
                          src={doctor}
                          alt=""
                          height="21"
                          width="28"
                          class="mr-2 doctorimg"
                        />
                        <p class="font-montes xl:text-base text-black xs:text-5xl xs:mt-7 xl:mt-2 xs:ml-5 xl:ml-1">
                          {" "}
                          {a.DoctorName}{" "}
                        </p>
                        {/* <div class="text-xs mt-4 ml-1">(He/Her)</div> */}
                      </div>
                      <div class="font-web flex flex-row font-semibold text-xl xs:mt-8 xl:mt-6 ml-5">
                        <div>
                          <img
                            src={covid}
                            alt=""
                            height="12"
                            width="30"
                            class="mr-2 -mt-3 covidimg"
                          />
                        </div>
                        <p class="xl:ml-1 xs:mt-4 symps text-black xs:ml-5 xl:-mt-1 mb-2 xs:text-5xl xl:text-base">
                          {" "}
                          {arr1 &&
                            arr1.map((ar, x) => {
                              
                              if (a.Symptoms.includes(ar)) {
                                return <span>{ar} </span>;
                              }
                            })}
                        </p>
                      </div>
                      <div class="map-responsive font-popi xs:mt-2 xl:mt-2 ml-5">
                        <div class="inline-flex justify-start items-start">
                          <img
                            src={mapImage}
                            alt=""
                            height="25"
                            width="25"
                            class="mapimg"
                          />
                          <a
                            href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8"
                            class="location-button xs:text-41xl text-black xl:text-sm xs:ml-7 xl:ml-4 xs:mt-4  xl:-mt-0"
                          >
                            {" "}
                            {a.Address} <br />
                          </a>
                          <div class="xs:ml-48 xl:-ml-9 xs:flex xs:flex-row">
                            <img
                              src={call}
                              alt=""
                              height="2"
                              width="25"
                              class=" xl:ml-12 xs:-ml-44 mt-2 callimg"
                            />
                            <p class="font-web font-bold text-black xs:ml-3 xl:ml-2 xl:mt-2 xs:mt-4 xs:text-5xl xl:text-sm">
                              {" "}
                              {a.Contact}
                            </p>
                          </div>
                        </div>

                        <div class="-mt-1">
                          <hr
                            style={{
                              background: "gray",
                              color: "black",
                              borderColor: "gray",
                              height: "1px",
                              marginTop: "10px",
                            }}
                          />
                          <div class="mt-2 inline-flex">
                            <img
                              src={distance}
                              alt=""
                              height="25"
                              width="28"
                              class="distanceimg"
                            />
                            <p class="font-web font-bold text-black xs:text-5xl xl:mt-0 xs:mt-5 xl:text-base ml-2">
                              {" "}
                              273km &nbsp; away
                            </p>
                          </div>
                          <div class="flex justify-end">
                            <p class="font-web text-black xl:text-base xs:text-5xl font-bold mr-10 xs:-mt-20 xl:-mt-9">
                              {" "}
                              {a.UserName}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Accordion
                    sx={{
                      maxWidth: { sm: 1230, xl: 480 },
                      maxHeight: 2000,
                      size: 20,
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        backgroundColor: "#D7F0D7",
                        maxWidth: { sm: 1230, xl: 480 },
                        fontFamily: "Roboto",
                        borderRadius: 2,
                      }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{
                          marginLeft: 1,
                          fontSize: { sm: 50, xl: 15 },
                        }}
                        class="morer"
                      >
                        More info
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <Typography
                        class="xs:text-42xl xl:text-base"
                        style={{ textAlign: "left" }}
                      >
                        {a.Description}
                      </Typography>
                      <Typography
                        class="xs:text-5xl xl:text-base"
                        style={{ textAlign: "right" }}
                      >
                        Manant Tyagi
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
