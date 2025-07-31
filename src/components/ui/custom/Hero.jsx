import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9 text-center'>
    <h1
    className='font-extrabold text-[50px] mt-16'>
    <span className='text-green-600'>Plan the Perfect Trip with AI :</span> Just the Way You Want It</h1>
    <p className='text-xl text-gray-500 text-center'>Plan Smart. Travel Easy. Your AI-powered trip assistant for perfect vacations</p>
    <Link to={'/create-trip'}>
    <Button>Start planning now</Button>
    </Link>
    </div>
  )
}

export default Hero