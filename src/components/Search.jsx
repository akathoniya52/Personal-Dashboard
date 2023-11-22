import React from 'react'

function Search() {
  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pb-[10rem] mt-[-15rem] z-[1] felx items-center justify-between rounded-b-[5rem]'>
        <div className="left " >
            <img src={require('../img/backgraphics.png')} alt="" srcset="" 
            className='absolute top-[22rem] left-[-47rem]'/>

            <img src={require('../img/d1.png')} alt="" srcset="" 
            className='absolute top-[26rem] w-[16rem]'/>

            <img src={require('../img/d2.png')} alt="" srcset="" 
            className='absolute top-[32.5rem]  w-[9rem] left-[7rem]'/>

            <img src={require('../img/d3.png')} alt="" srcset="" 
            className='absolute top-[33rem]  w-[9rem] left-[17rem]'/>

            <img src={require('../img/d4.png')} alt="" srcset="" 
            className='absolute top-[50rem]  w-[17rem] left-[2rem]'/>

        </div>

        <div className="right">
            <div className="flex">
                <div className="searchbar">
                    <input type="text" placeholder='Enter the keyword or URL' />
                    <div className="searchIcon">
                        <img src={require('../img/search.png')} className='w-[1.5rem]' alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Search