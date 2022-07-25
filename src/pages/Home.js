import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/home.css"

const Home = () => {
  return (
    <div className='home'>
    <div className='about'>
      <h2>Hi, my name is Liubov</h2>
      <div className='prompt'>
        <p>Some words about me</p>
        <LinkedInIcon/>
        <GitHubIcon/>
      </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>here are skills</span>
        </li>
        <li className='item'>
          <h2>Front-End</h2>
          <span>here are skills</span>
        </li>
        <li className='item'>
          <h2>Front-End</h2>
          <span>here are skills</span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home