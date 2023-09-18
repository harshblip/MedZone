import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
    return (
        <div class="social-container xs:flex xs:flex-row xs:py-18 xs:-mt-20 xs:px-14 xl:py-0 xl:px-0 flex justify-start xl:mt-14 xs:ml-8 xl:mr-1 xl:-ml-20 xs:space-x-20 xl:space-x-10">
            {/* <h3 class = "font-popi font-2xl mt-8">Follow us on our Socials</h3> */}
           <div class = "faicons"><FontAwesomeIcon icon={faGithub} size = "lg"   /></div>
           <div  class = "faicons"> <FontAwesomeIcon icon={faFacebook} size="lg" /></div>
            <div  class = "faicons"><FontAwesomeIcon icon={faTwitter} size="lg" /></div>
            <div  class = "faicons"><FontAwesomeIcon icon={faInstagram} size="lg" /></div>
            <div  class = "faicons"><div class = "xs:enabled xl:invisible"> <FontAwesomeIcon icon={faGooglePlay} size="lg" /> </div>
            </div>
        </div>
    );
}