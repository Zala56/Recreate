import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ew from "./Ew";
const Hav = (props) => {
  const { date} = props;
  const [showSubMenu, setShowSubMenu] = useState([]);
  const[set,mset]	=useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
  
    <nav>
       <div class="navbar">
      <label>
          <i class="fa fa-bars" id="click"></i>
          <i class="fa  fa-times" id="cancel"></i>
       </label>
       <div class="logo"><a href="#">Apt</a></div>
       
      <ul className='main-nav'>
        {date.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id}>
                <a href='#' className='header-nav-link'>
                  <span>{el.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
              key={el.id}
              className='header-nav-options'
            >
              <div className='header-nav-div'>
                <span>{el.name}</span>
              </div>
              <motion.ul
                variants={variants}
                animate={showSubMenu[el.id] ? "open" : "closed"}
                className='header-nav-ul'
              >
                {showSubMenu[el.id] &&
                  el.children.map((ele) => {
                    if (!ele.children) {
                      return (
                        <li key={ele.id} className='sub-menu-li'>
                          <a href={ele.url} 
                        
                            
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{ele.name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                        onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                        key={ele.id}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{ele.name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[ele.id] ? "open" : "closed"}
                          className='sub-menu-ul'
                        >
                          {showSubMenu[ele.id] &&
                            ele.children.map((elem) => {
                              return (
                                <li key={elem.id} className='grand-child-link'>
                                  <Link to='/ew'>
                                    <span>{elem.name}</span>
                                  </Link>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
      </ul>
      <div>
        <button class="btn">Create account</button>
      </div>

      </div>
     
    </nav>
  );
};

export default Hav;