'use client'
import './globals.css'
import React from 'react'
import axios from 'axios'

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const handleSubmit = async () => {
    setSubmitted(true)
    if(email.includes('@') && email.includes('.') && email.length > 3)
    axios.post('https://gyg.grabyourservices.com:4004/api/newsletter/emails/new', email, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    await sleep(3000)
    setSubmitted(false)
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-transBlack flex-col font-mainFont">
      <div className="flex justify-center items-center flex-col">
        <div className={`w-7/12 lg:w-11/12 fixed transition duration-500 top-5 rounded-full p-4 bg-gradient-to-r from-red-500 to-yellow flex justify-center items-center ${submitted ? 'translate-y-100 scale-100' : 'translate-y-[-200%] scale-90'}`}>
          <p className='text-center w-full lg:font-bold'>We will inform of you of upcoming updates. Thank you.</p>
        </div>
        <h1 className="text-2xl text-red-500 font-light w-full text-start lg:text-center">Coming June <span className="text-red-500">2025.</span></h1>
        <div className="bg-gradient-to-r pb-4 transition duration-500 hover:cursor-pointer hover:opacity-75 from-red-500 to-yellow text-transparent bg-clip-text" onClick={()=>{window.open('https://grabyourservices.com')}}>
          <h1 className="text-8xl lg:text-4xl lg:mx-8 font-bold mt-2">Grab Your Gigs.</h1>
        </div>
        <div className="bg-gradient-to-r pb-8 transition duration-500 hover:cursor-pointer hover:opacity-75 from-red-500 to-yellow text-transparent bg-clip-text w-full" onClick={()=>{window.open('https://grabyourservices.com')}}>
          <h1 className="text-xl mt-2 text-end lg:text-center"><span className='font-bold'>Zero Fees, Zero Interference.</span></h1>
        </div>
        <div className={`flex lg:hidden justify-end mt-0 items-center flex-row w-full transition duration-500 ${submitted ? 'cursor-not-allowed pointer-events-one opacity-50' : ''}`}>
          <input onChange={(e)=>{setEmail(e.target.value)}} className="w-full rounded-full mr-0 p-4 bg-gradient-to-r from-red-500 to-yellow placeholder-black font-bold transition duration-500 hover:opacity-75 pr-72 lg:pr-56 active:opacity-50 hover:cursor-pointer focus:outline-none focus:opacity-100 focus:cursor-text" placeholder="E-Mail"/>
          <button onClick={handleSubmit} className="w-64 lg:w-1/2 text-sm absolute m-2 font-bold p-3 bg-transparent border-[1px] rounded-full border-black transition duration-500 hover:opacity-75 cursor-pointer active:scale-90">Join The Waitlist</button>
        </div>
        <div className="lgo:hidden flex justify-center mt-0 items-center flex-col w-full">
          <input onChange={(e)=>{setEmail(e.target.value)}} className={`w-full mr-0 p-3 bg-gradient-to-r from-red-500 to-yellow placeholder-black border-4 font-bold border-black transition duration-500 hover:opacity-75 active:opacity-50 hover:cursor-pointer focus:outline-none focus:opacity-100 focus:cursor-text rounded-full ${submitted ? 'cursor-not-allowed pointer-events-one opacity-50' : ''}`} placeholder="E-Mail"/>
          <button onClick={handleSubmit} className={`w-full ml-0 font-bold p-3 bg-gradient-to-r from-red-500 to-yellow border-4 border-black transition duration-500 hover:opacity-75 cursor-pointer rounded-full active:scale-90 ${submitted ? 'cursor-not-allowed pointer-events-one opacity-50' : ''}`}>Join The Waitlist</button>
        </div>
      </div>
    </div>
  );
}