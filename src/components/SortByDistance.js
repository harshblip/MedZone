import react from "react";
import "../dist/output.css";
import "../tsrc/styles.css";
import { FormControl } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import map from "../assets/images/map.png";
import mapImage from "../assets/images/map.png";
import doctor from "../assets/images/doctor.png";
import call from "../assets/images/call.png";
import covid from "../assets/images/fever(1).png";
import distance from "../assets/images/social-distancing(1).png";
import photo from "../assets/images/photo.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 66;
export default function SortByDistance({ arr, arr1 }) {

  //function to sort on the basis of distance
  arr.sort((a, b) => {
    return a.Distance - b.Distance;
  });
  return (
    <div>
      {arr &&
        arr.map((a) => (
          <div className="xl:ml-10 grid grid-cols-1 xs:-ml-32 md:-mr-24 xl:grid xl:grid-cols-1 md:grid md:grid-cols-1 gap-1 xl:px-32">
            <div className="-mt-44">
              <div className="flex flex-col">
                <div>
                  <div
                    className="absolute cardnew"
                    style={{ textAlign: "left", textColor: "black" }}
                  >
                    <div className="rounded-xl shadow-xl flex flex-col w-full card-background image image-1 codepen relative">
                      <div
                        className="flex xs:flex xs:ml-96 circular xs:justify-end xl:ml-96 mt-4"
                        // style={{ height: 70, width: 70 }}
                      >
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `rgba(62, 199, 83, ${percentage / 100})`,
                            textColor: "rgb(62, 199, 83)",
                            trailColor: "#d6d6d6",
                            // backgroundColor: '#3e98c7',
                          })}
                          className="circular"
                        />
                      </div>

                      <div className="flex text-xl font-semibold xs:-mt-36 xl:-mt-20 ml-5">
                        <img
                          src={doctor}
                          alt=""
                          height="21"
                          width="28"
                          className="mr-2 doctorimg"
                        />
                        <p className="font-montes xl:text-base text-black xs:text-5xl xs:mt-7 xl:mt-2 xs:ml-5 xl:ml-1">
                          {" "}
                          {a.DoctorName}{" "}
                        </p>
                      </div>
                      <div className="font-web flex flex-row font-semibold text-xl xs:mt-8 xl:mt-6 ml-5">
                        <div>
                          <img
                            src={covid}
                            alt=""
                            height="12"
                            width="30"
                            className="mr-2 -mt-3 covidimg"
                          />
                        </div>
                        <p className="xl:ml-1 xs:-mt-2 symps text-black xs:ml-5 xl:-mt-1 mb-2 xs:text-5xl xl:text-base">
                          {" "}
                          {arr1 && arr1.map((ar, x, cnt) => {
                            if (cnt % 4 == 0) {
                              <br />;
                            }
                            if (a.Symptoms.includes(ar)) {
                              cnt++;

                              return <span>{ar} </span>;
                            }
                          })}
                        </p>
                      </div>
                      <div className="map-responsive font-popi xs:mt-2 xl:mt-2 ml-5">
                        <div className="inline-flex justify-start items-start">
                          <img
                            src={mapImage}
                            alt=""
                            height="25"
                            width="25"
                            className="mapimg"
                          />
                          <a
                            href=" https://goo.gl/maps/UvwzYjnb2v81gBUN8"
                            className="location-button xs:text-41xl text-black xl:text-sm xs:ml-7 xl:ml-4 xs:mt-4  xl:-mt-0"
                          >
                            {" "}
                            {a.Address} <br />
                          </a>
                          <div className="xs:ml-48 xl:-ml-4 xs:flex xs:flex-row">
                            <img
                              src={call}
                              alt=""
                              height="9"
                              width="35"
                              className=" xl:ml-12 xs:-ml-44 mt-1 callimg"
                            />
                            <p className="font-web font-bold text-black xs:ml-3 xl:ml-2 xl:mt-0 xs:mt-4 xs:text-5xl xl:text-base">
                              {" "}
                              +91-{a.Contact}
                            </p>
                          </div>
                        </div>

                        <div className="-mt-1">
                          <hr
                            style={{
                              background: "gray",
                              color: "black",
                              borderColor: "gray",
                              height: "1px",
                              marginTop: "10px",
                            }}
                          />
                          <div className="mt-2 inline-flex">
                            <img
                              src={distance}
                              alt=""
                              height="25"
                              width="28"
                              className="distanceimg"
                            />
                            <p className="font-web font-bold text-black xs:text-5xl xl:mt-0 xs:mt-5 xl:text-base ml-2">
                              {" "}
                              273km &nbsp; away
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <p className="font-web text-black xl:text-base xs:text-5xl font-bold mr-10 xs:-mt-20 xl:-mt-9">
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
                        className="morer"
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
                        className="xs:text-42xl xl:text-base"
                        style={{ textAlign: "left" }}
                      >
                        {a.Description}
                      </Typography>
                      <Typography
                        className="xs:text-5xl xl:text-base"
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
