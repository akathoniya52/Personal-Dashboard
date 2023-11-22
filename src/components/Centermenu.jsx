import React from 'react'

function Centermenu() {
    const listStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className='menu flex'>
        <ul className='flex w-[100%] justify-between'>
            <li className={listStyle}>Home</li>
            <li className={listStyle}>About</li>
            <li className={listStyle}>Preformer</li>
            <li className={listStyle}>Even Schedule</li>

        </ul>
    </div>
  )
}



export default Centermenu