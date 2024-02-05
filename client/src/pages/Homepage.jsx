import React from 'react'
import {  homepageImage1 } from '../assets/index'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import TextLoop from "react-text-loop";
import HighlightText from '../components/HighlightText';

function Homepage() {
  return (
    <div className='text-white'>
      {/* <div className='flex justify-between w-full mb-16'>
        <div className='w-1/2 text-xl leading-10'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, voluptatibus facilis eaque, laboriosam ea soluta quas recusandae porro debitis voluptates rem voluptas quaerat expedita, ipsam dolore quibusdam accusamus? Nostrum obcaecati, molestias quod alias natus dolores modi adipisci eius pariatur. Voluptas, corrupti. Temporibus mollitia quo animi odio corporis excepturi voluptates cupiditate ullam asperiores eligendi ut sit alias harum corrupti laborum ipsam voluptatibus aspernatur tempore totam eveniet sapiente obcaecati placeat, nisi quidem. Dignissimos perspiciatis officiis doloremque, iure nulla sunt distinctio odit dolor consequatur natus ad. Ipsam alias commodi reprehenderit labore nostrum rerum nulla ex. Quibusdam quae accusamus totam animi. Maiores, voluptate similique!
        </div>
      <img className='w-96 h-96 rounded-full mt-10' src={homepageImage1} alt="" />
      </div> */}

     

      {/* *********************************************** */}
      

      <div className='text-xl mt-20a'>
        <div className='mx-auto flex flex-col justify-center items-center mt-10 text-3xl'>
        Welcome to <span><HighlightText text={"Community Capital"} className=" font-semibold" /></span> </div>
        {/* <div>A crowdfunding platform, where innovative ideas come to life with the support of a global community. Together, we can make a difference.
        </div> */}
      </div>

      <div className='mt-10 text-2xl flex justify-center '>
        <div>
        <span>Community Capital focus on </span>
        <TextLoop>
          <HighlightText text={"Empowering Dreams"} />
          <HighlightText text={"Funding Futures"} />
            </TextLoop>{" "}
        </div>
      </div>

      <Link to='/all-campaigns'>
        <div className="group bg-[#1dc071] mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
          <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
            <p>Become a Contributor</p>
            <FaArrowRight />
          </div>
        </div>
      </Link>

      {/* <div className='flex justify-between w-full'>
        <div className='w-1/2 text-2xl leading-10 mt-10'>
        A crowdfunding platform, <br />where innovative ideas come to life with the support of a global community. Together, we can make a difference.
        </div>
        <img className='w-60 h-60 rounded-full' src={homepageImage1} alt="" />
      </div> */}


      {/* ************************************************* */}

      <div className="flex justify-center mt-14 text-xl">
        <h2>Join Us in Building a Better Future!</h2>
      </div>
      {/* <div>
          Welcome to our crowdfunding platform, where innovative ideas come to life with the support of a global community. Together, we can make a difference.
        </div> */}

      


      <footer className='flex justify-center absolute bottom-2 left-[43%]'>
        <p>&copy; 2024 Community Capital. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Homepage