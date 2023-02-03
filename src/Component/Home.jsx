import React from 'react'
import { Davcontent} from "./Header";
import {motion} from "framer-motion"; 
import Typewriter from 'typewriter-effect';

import Time from './Time';
import me from '../Assests/practice.png'
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


function Home() {
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
      
  return (
    <>
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Apt<br /> 
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Get Certified", "Stand Out In The Crowd"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">More Info</a>
            <a href="#work">
              Training
            </a>
          </div>

          <article>
            <p>
              500
            </p>
            <span>Successfull Training</span>
          </article>
          

          <aside>
            <article>
              <p>30</p>
              <span>Learning Partners</span>
            </article>

            <article data-special>
              <p>10000</p>
              <span>People Trained</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
    
    </div>
    <Time/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default Home