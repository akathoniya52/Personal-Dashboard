import React from 'react'

function Donwload() {
    const donwloadimageStyle = "mr-[2rem] border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]";
  return (
    <div className='donwload'>
        <div className="donwload_images flex">
            <img src={require("../img/App Store.png")} alt="" srcset="" className={donwloadimageStyle}/>
            <img src={require("../img/Google Play.png")} alt="" srcset="" className={donwloadimageStyle}/>
    
        </div>
        
            
    </div>
  )
}

export default Donwload