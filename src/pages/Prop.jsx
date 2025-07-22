import React from 'react'
import Buttons from './Buttons'

const Prop = () => {
  const alat = ()=>{
    alert('I dey on work')
  }
  return (
    <div className='bg-blue-400 h-screen w-full content-center items-center justify-items-center'>
      <div className='bg-cyan-200 flex gap-5 justify-center p-50 rounded-4xl border-2 border-blue-950'>
        <Buttons title='Check' color='bg-green-500 text-white px-4 py-2 rounded' click={alat}/>
        <Buttons title='Login' color={'bg-sky-400 text-white rounded px-4 py-2'} click={alat}/>
        <Buttons title='Signup' color='bg-indigo-500 text-white rounded px-4 py-2' click={alat}/>
        <Buttons title='Submit' color='bg-pink-600 text-black rounded px-4 py-2' click={alat}/>
      </div>
    </div>
  );
};

export default Prop