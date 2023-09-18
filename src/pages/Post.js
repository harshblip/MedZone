import { useState, useRef, useEffect } from "react";
// import global css here
import "../dist/output.css";
import "../tsrc/styles.css";
import "../assets/styled.css";
import rhino from "../assets/images/forminage.png";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
//import axios from "axios";


export default function Post() {
  // changing states of form
  const [DoctorName, setName] = useState("");
  const [UserName, setName2] = useState("");
  const [Age, setAge] = useState("");
  const [Contact, setContact] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [Symptoms, setsymp] = useState([]);
  const [Address, setAddress] = useState("");
  //const [gender,setgender] = useState("")
  const [Relief, setRelief] = useState(0);
  const [Description, setDescription] = useState("");
  const sympInput = useRef(null);
  const history = useHistory();
  var Gender = "";
  let obj = {};

  // use fetch hook to post data
  const { postData, data, error } = useFetch(
    "https://frightened-colt-teddy.cyclic.app/api/doctors/post",
    "POST"
  );

  const handleSubmit = (e) => {
    //console.log(e);
    if (document.getElementById("male_hai").checked) {
      Gender = "Male";
    }
    if (document.getElementById("female_hai").checked) {
      Gender = "female";
    }

    e.preventDefault();
    let details = {
      DoctorName,
      UserName,
      Address,
      Relief,
      Contact,
      Symptoms,
      Description,
      Age,
      Gender,
    };
    obj = { ...obj, ...details };

    postData(obj);
    setTimeout(alert("Form Submitted Successfully!!"),1500);

   
  };

  // handle add function
  const handleAdd = (e) => {
    e.preventDefault();
    const naya = symptoms.trim(); // if any spaces
    if (naya && !Symptoms.includes(naya)) {
      setsymp((prevSymps) => [...prevSymps, naya]);
    }
    setSymptoms("");
    sympInput.current.focus(); // no need to click agaiin and again on input targert
  };

  // redirect to home page
  const handlegoback = () => {
    history.push("/");
  };

  return (
    <div>
      {/* form content */}
      <div className="cl h-screen">
        <div className="w-full -ml-32 flex justify-end">
          <img src={rhino} alt="" height="670" width="650" className="fixed" />
          <button
          
            className="relative  xs:invisible xl:visible bg-white xl:px-8 xl:mt-2 xl:py-2 xs:-mt-10 homebutton xs:px-7 xs:ml-10 xl:text-base xs:text-2xl xs:py-5 text-red-600 font-semibold rounded-2xl border-4 border-red-600"
            onClick={handlegoback}
          >
            {" "}
            Back{" "}
          </button>
        </div>
        <h1 className="font-popi xs:ml-24 xs:text-5xl postdecl xl:text-3xl xl:-ml-1 flex xs:justify-center xl:justify-start xl:px-48 xl:-mt-16">
          {" "}
          Post Your Experience{" "}
        </h1>
        <div className="xs:visible xl:invisible">
          <button
            className="bg-white xl:px-8 xl:mt-2 rounded-2xl xl:py-2 xs:-mt-24 homebutton xs:px-7 xs:ml-10 xl:text-base xs:text-2xl xs:py-5 text-red-600 font-semibold flex justify-start border-4 border-red-600"
            onClick={handlegoback}
          >
            {" "}
            Back{" "}
          </button>
        </div>
        {/* <div> */}
        <div id="form" className="_form -mt-14">
          <form action="#" method="POST" name="addUser" onSubmit={handleSubmit}>
            <div className="xs:mt-0 xl:-mt-5">
              <fieldset>
                <legend className="font-montes -mt-5">Doctor's Name</legend>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                  value={DoctorName}
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Patient's Name</legend>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={(e) => setName2(e.target.value)}
                  value={UserName}
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Your Age</legend>
                <input
                  type="number"
                  name="password"
                  onChange={(e) => setAge(e.target.value)}
                  value={Age}
                  placeholder="How old are you ?"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Contact Number</legend>
                <input
                  type="number"
                  name="password"
                  onChange={(e) => setContact(e.target.value)}
                  value={Contact}
                  placeholder="Phone number"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Add Symptoms</legend>
                <textarea
                  onChange={(e) => setSymptoms(e.target.value)}
                  value={symptoms}
                  ref={sympInput}
                  name="about-your"
                  placeholder="What is it bothering you ?"
                  border-color="red"
                ></textarea>
                <button
                  className="bg-red-500 mt-4 text-white px-7 py-2 font-popi foont-semibold rounded-lg"
                  onClick={handleAdd}
                >
                  Add
                </button>
                <p>
                  Symptoms:{" "}
                  {Symptoms.map((i) => (
                    <em key={i}>{i},</em>
                  ))}
                </p>
              </fieldset>

              <fieldset>
                <legend>Relief • {Relief}%</legend>
                <input
                  type="range"
                  required
                  onChange={(e) => setRelief(e.target.value)}
                  min="0"
                  max="100"
                  value={Relief}
                  className="range range-success"
                />
              </fieldset>

              <fieldset>
                <legend >GENDER</legend>
                <label className="input-check">
                  <input type="radio" name="gender" value="m" id="male_hai" />
                  <span>Male</span>
                </label>
                <label className="input-check">
                  <input type="radio" name="gender" value="f" id="female_hai" />
                  <span>Female</span>
                </label>
              </fieldset>

              <fieldset>
                <legend>Doctor's Address</legend>
                <input
                  type="text"
                  required
                  name="password"
                  onChange={(e) => setAddress(e.target.value)}
                  value={Address}
                  placeholder="Hawkins, Indiana"
                />
              </fieldset>
              <fieldset>
                <legend>Description</legend>
                <input
                  type="text"
                  required
                  name="password"
                  onChange={(e) => setDescription(e.target.value)}
                  value={Description}
                  placeholder="Hawkins, Indiana"
                />
              </fieldset>

              <button className="font-montes text-7xl sm:px-14 sm:py-4 xl:px-8 mt-4 xl:py-3 text-white rounded-lg bg-red-500  ">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
