import React from "react";
import date from "../Assests/date.json";

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Time = () => {
  return (
    <>
    	<div class="row ">
      <div class="col-xs-12 col-sm-12 col-md-12">
    <div className='Home3' id ="about">
     <div>
      
        <p>I’ve known Shantanu Pandey for a large part of my career in technology – over ten years. Shantanu is a born leader with exceptional technical skills and the natural art of communicating complex material in a consumable manner, helping others learn what they need quickly and, more importantly, retain the information. I’m thrilled to know that he uses his unique skill set to help others train and certify on today’s essential technologies. I’m excited to see APT Consulting expand and grow into a premier resource for training and certification.</p>
        <h3>Michelle Fleming
Managing Member, Facing Bias, LLC</h3>
     </div>

</div>
</div>
<div class="col-xs-12 col-sm-12 col-md-12">
        <div className='Home4' id	="brand">
        <div>
          <h1>brands</h1>
          <article>
            <div style={ {animationDelay:"0.3s",}}>
            <AiFillGoogleCircle/>
            <p>Goolgle</p>
            </div>
            <div style={ {animationDelay:"0.5s",}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>
            <div style={ {animationDelay:"0.7s",}}>
            <AiFillYoutube/>
            <p>Youtube</p>
            </div>
            <div style={ {animationDelay:"1s",}}>
            <AiFillInstagram/>
            <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
      </div>
      </div>
      </>
);
}

export default Time;