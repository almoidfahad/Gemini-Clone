import React, { useContext } from 'react'
import { FaCode, FaCompass, FaLightbulb, FaMicrophone, FaUserCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from '../context/Context';



export const MainContent = () => {

  const{
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,

    onSent,
  } = useContext(Context);


  return (
    <div className="flex-1 min-h-screen pd-[15vh] relative">
        <div className="flex items-center justify-between text-xl p-5 text-slate-700">
            <p>Gemini</p>

            <FaUserCircle />
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
            <p>
              <span className="bg-gradient-to-r from-[#5c94f5] to-[#ff5546] bg-clip-text text-transparent">Hello, Fahad.</span>
            </p>
            <p className="text-slate-400">How can I help you today?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
           
            <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
              <p className="text-slate-700 text-lg">
                Suggeset top 10 Islamic Content. </p>

                <FaCompass className="text-4xl p-1 absolute bottom-2 right-2"/>
            </div>
            <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
              <p className="text-slate-700 text-lg">
                What is Loop in C++?</p>

                <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2"/>
            </div>

            <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
              <p className="text-slate-700 text-lg">
                How does work "react"? </p>

                <FaMessage className="text-4xl p-1 absolute bottom-2 right-2"/>
            </div>

            <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
              <p className="text-slate-700 text-lg">
              Benefits of competitive programming. </p>

                <FaCode className="text-4xl p-1 absolute bottom-2 right-2"/>

            </div>

          </div>
{/* //=============================================input-text============================ */}

          <div className="absolute bottom-0 w-full max-w-[900px] p-5 mx-auto mt-5">
            <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
              <input 
              type="text" 
              placeholder="Enter a prompt here..." 
              className="flex-1 bg-transparent border-none outline-none " 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />

              <div className="flex gap-4 items-center">

              <MdAddPhotoAlternate className="text-2xl cursor-pointer"/>
              <FaMicrophone className="text-2xl cursor-pointer"/>
              <IoMdSend 
                onClick={() => onSent(input)} 
                className="text-2xl cursor-pointer"
              />



              </div>

            </div>

            <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">Gemini may display inaccurate info, including about people, so double-check its responses.</p>
          </div>
        </div>
    </div>
  )
}
export default MainContent