import React from 'react'
import date from "../Assests/date.json"
import Hav from './Hav'
function Header() {
  return (
    <nav>
        <Davcontent></Davcontent>
    </nav>
  )
}
 export const Davcontent =()=>(

    <>
        <h2>Apt</h2>
       <Hav date ={date}/>
     
    </>
)


export default Header