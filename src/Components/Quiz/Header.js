import React, { useState } from 'react'
import '../../assests/styles/quiz.scss'
import logo from '../../assests/logo.png'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const [popupMenu,setPopupMenu] = useState(false)
  
  function toggleMenu() {
    var menu = document.getElementById("popupMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  const startTimer = useSelector(state=>state.quiz.startTimer)

  console.log(startTimer,"startTimer");

  return (
    <div className='main_header'>
      <div className='img_div'>

        <img src={logo} className='img_class' />
        <h3 className='h3_font'>Quiz App</h3>

      </div>
      {/* <div className='header_div2'>
      </div> */}
      <div className='header_div3'>
        {
          startTimer == true ?
          

            <Timer />
            :
            <></>
        }

        <div className='dispay_mob handburgur_style' onClick={()=>toggleMenu()}>
          <i class="fa fa-bars"></i>
          {/* <i class="fa fa-bars" className=''></i> */}
        </div>
        
        <div className="popup-menu" id="popupMenu">
        {/* {
          popupMenu &&  */}
          <ul>
            <li><h3 onClick={() => navigate('/')}>Quiz</h3></li>
            <li><h3 onClick={() => navigate('/leaderboard')}>Leaderboard</h3></li>
            {/* <li><h3 onClick={() => navigate('/login')}>Menu Item 3</h3></li> */}
          </ul>
        {/* } */}
          
        </div>

        <h3 className='h3_font header_bar' onClick={() => navigate('/')}>Quiz</h3>
        <h3 className='h3_font header_bar' onClick={() => navigate('/leaderboard')}>Leaderboard</h3>
        {/* <h3 className='h3_font header_bar' onClick={() => navigate('/login')}>Log In</h3> */}
      </div>

    </div>
  )
}

export default Header