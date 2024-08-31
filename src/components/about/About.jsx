import React from "react"
import Back from "../common/Back"
import img from "../images/about.jpg"
import "./about.css"


const About = () => {
  return (
    
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
