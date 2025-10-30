import React from 'react'
import erewhon_stamp_popup from '../assets/erewhon_stamp_popup.jpeg'

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div className="bg-white w-[90%] max-w-3xl overflow-hidden">

    <div className="flex flex-col md:flex-row">
      
     {/* image */}
      <div className="md:w-1/2 w-full">
        <img
          src={erewhon_stamp_popup}
          alt="sign up for our emails"
          className="w-full h-full object-cover"
        />
      </div>

      {/* text */}
      <div className="md:w-1/2 w-full p-6 my-[10%] px-[5%] flex flex-col gap-4">
        <h2 className="text-[14px] text-center font-light">STRAWBERRY GLAZE SKIN SMOOTHIE KIT RESTOCK</h2>
        <p className="text-gray-600 text-[20px] text-center "> BE FIRST IN LINE</p>
        <input type="email" placeholder="Enter Email" className="border border-black p-2 rounded w-full text-center text-[12px] "/>
        <button className="bg-[#212121] text-white py-2 rounded"> Next Step</button>
        <p className="text-[10px] font-extralight text-center italic ">We respect your privacy. By entering your email, you agree to receive product updates and marketing emails.</p>
      </div>

    </div>

  </div>
</div>

  )
}

export default Modal