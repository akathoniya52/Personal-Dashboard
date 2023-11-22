import React from 'react'
import CenterMenu from './Centermenu';

function Header() {
    const buttonStyle = "mr-[35px]  hover:bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem]'>
        <img src={require("../img/MuzicLogo.png")} alt="" srcset="" className='logo w-[42px] h-[42px]'/>
        {/* logo */}
        <CenterMenu/>

        {/* side menu */}
        <div className="buttons">
            <button className={buttonStyle}>Sign Up</button>
            <button className={buttonStyle}>Log In</button>
        </div>
    </div>
  )
}

export default Header