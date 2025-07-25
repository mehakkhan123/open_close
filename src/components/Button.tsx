"use client"
import React, { useState } from 'react'

export default function Button() {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='flex items-center bg-gray-100 justify-center p-4 h-screen box-border'>
        <div className='flex flex-col items-center w-full max-w-md gap-3 bg-white p-5 rounded-md shadow-md'>
            <h1 className='text-2xl font-bold text-gray-800 text-center'>Collapsible Content Example</h1>
        <button onClick={()=>{
            setIsOpen(!isOpen)
        }} className='bg-blue-700 w-full text-white p-2 font-semibold rounded-md cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out border-2 border-blue-400'>{
            isOpen?"Close":"Open"
        }</button>
        {
            isOpen && (
                <div className='flex flex-col items-center gap-3 rounded-md w-full bg-gray-100 p-3 shadow-inner border border-blue-300 '>
                    <h2 className='text-xl font-semibold text-blue-800'>Welcome to the Open Section!</h2>
                    <p className='text-gray-600 '>
                        This content is conditionally rendered. It appears when the &quot;Open&quot; button is clicked and disappears when the &quot;close&quot; button is clicked. The &apos;useState&apos; hook makes it easy to manage this dynamic behaviour.
                    </p>
                </div>
            )
        }
        </div>
    </div>
  )
}
