import React from 'react'
import logobps from'../Asset/logobps.png'
import TentangKami from './TentangKami'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const redirectlogin = useNavigate();
    const click=()=>{
        redirectlogin('/login')
    }
  return (
    <>
    <div className='w-full h-screen bg-[#302b63]'>
        <div className='flex justify-around w-full h-[10rem] items-center'>
            <div>
                <img src={logobps}/>
            </div>
            <div>
                <button type='button' className='rounded-md w-[8rem] h-[2rem]' onClick={()=>click()}>
                   <span className='text-white text-lg tracking-wider'>Login</span>
                </button>
            </div>
        </div>
        <div className='flex justify-around w-full h-[30rem] items-center'>
            <div className='flex-col space-y-8'>
                <div className='text-white'>
                    <p className='text-4xl'>Selamat Datang di website </p>
                    <p className='text-3xl'>BPS Kabupaten Nabire</p>
                </div>
                <div className='py-6'>
                    <button type='button' className='rounded-md w-[10rem] h-[3rem] bg-[#393375] text-white text-md'><a href='#tentangkami'>Tentang Kami</a></button>
                </div>
            </div>
            <div></div>

        </div>
    </div>
    <TentangKami/>
    </>
  )
}

export default Home