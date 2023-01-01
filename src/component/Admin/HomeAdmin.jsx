import React,{useState,useEffect} from 'react'
import {MdOutlinePeople} from 'react-icons/md'
import {AiOutlineClockCircle} from 'react-icons/ai'
import Momen from 'moment'
import axios from 'axios'
const HomeAdmin = () => {
  const[jumlahkaryawan,Setjumlahkaryawan] = useState(0);
  const[Today,SetToday] = useState(new Date())
  function todayadminfunc(){
    SetToday(new Date())
  }
  const datakaryawan = ()=>{
    axios.get('/totalkaryawan').then((res)=>{
      console.log(res)
      Setjumlahkaryawan(res.data[0].total)
    })
  }
  useEffect(()=>{
     setInterval(todayadminfunc, 1000);
     datakaryawan()
  },[])
  return (
    <div className='w-full h-full flex'>
      <div className='rounded-md w-[20rem] h-[11rem] ml-6 mt-2 bg-blue-500'>
        <div className='flex-col gap-y-8 '>
          <div className='border-b-2 border-black flex justify-between'>
            <h1 className='text-white text-2xl tracking-wider pl-2'>Total Karyawan</h1>
            <MdOutlinePeople size={30} className='text-white'/>
          </div>
          <div className='pt-10 pr-2'>
            <h1 className='text-right text-2xl text-white'>{jumlahkaryawan}</h1>
          </div>
          <div className='pt-5 pr-2'>
            <h1 className='text-right text-2xl text-white'>Orang</h1>
          </div>
        </div>
      </div>
      <div className='rounded-md w-[20rem] h-[11rem] ml-6 mt-2 bg-teal-500'>
        <div className='flex-col gap-y-8'>
          <div className='border-b-2 border-black flex justify-between'>
            <h1 className='text-white text-2xl tracking-wider pl-2'> Waktu</h1>
            <AiOutlineClockCircle size={30} className='text-white'/>
          </div>
          <div className='pt-10 pr-2'>
            <h1 className='text-right text-2xl text-white'>{Momen(Today).format("HH:mm:ss")}</h1>
          </div>
          <div className='pt-5 pr-2'>
            <h1 className='text-right text-2xl text-white'>Waktu</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin