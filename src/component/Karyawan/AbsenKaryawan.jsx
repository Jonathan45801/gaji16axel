import React,{useState,useEffect} from 'react'
import Momen from 'moment'
import {FiClock} from 'react-icons/fi'
import {FaSignInAlt} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import axios from 'axios'
import Swal from 'sweetalert2'
import Cookies from 'js-cookies'
const AbsenKaryawan = () => {
  const coo = Cookies.getItem("userkaryawan");
  const[Todaykar1,SetTodaykar1] = useState(new Date())
  function todaykarfunc(){
    SetTodaykar1(new Date())
  }
  const clickabsen = ()=>{
    axios.post('/absenmasuk',{
      params:{
        user:coo
      }
    }).then((response)=>{ 
      if(response.data === "sukses")
      {
        Swal.fire("success",`Selamat Datang ${coo}`,"success")
      }
      else if(response.data === "sudah")
      {
        Swal.fire("error",`Absen cuman bisa 1x`,"error")
      }
      else
      {
        Swal.fire("error",``,"error")
      }
      
    })
  }
  const clickabsenkeluar = ()=>{
    axios.post('/absenkeluar',{
      params:{
        user:coo
      }
    }).then((response)=>{ 
      if(response.data === "sukses")
      {
        Swal.fire("success",`Hati - hati di jalan ${coo}`,"success")
      }
      else
      {
        Swal.fire("error",``,"error")
      }
      
    })
  }
  useEffect(()=>{
    const intervaljam = setInterval(todaykarfunc,1000);
    return function cleanup() {
      clearInterval(intervaljam);
    };
  },[])
  return (
    <div className='w-full h-full flex'>
      <div className='w-full h-full'>
        <div className='flex justify-around items-center'>
          <div className='w-[20rem] h-[10rem] bg-teal-400'>
            <div className='border-b-2 border-black h-[2rem] flex justify-center items-center'>
              <p className='font-bold text-md tracking-wider'>Jam Sekarang</p>
            </div>
            <div className='flex justify-end items-center h-[6rem] '>
              <p className='text-2xl font-bold tracking-wider'>{Momen(Todaykar1).format("HH:mm:ss")}</p>
            </div>
            <div className='flex justify-end items-end border-t-2 border-black '>
              <FiClock size={25}/>
            </div>
          </div>
          <div>
            <div className='flex-col'>
              <div>
              <button className='w-[10rem] h-[2.5rem] bg-cyan-400 flex justify-center items-center space-x-2 rounded-md' onClick={()=>clickabsen()}> 
                <FaSignInAlt size={15}/>
              <span>Absen</span></button>
              </div>
              <div className='py-2'>
                <button className='w-[10rem] h-[2.5rem] bg-red-500 flex justify-center items-center space-x-2 rounded-md' onClick={()=>clickabsenkeluar()}> 
                  <BiLogOut size={15}/>
                <span>Keluar</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbsenKaryawan