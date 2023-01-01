import React,{useState,useEffect} from 'react'
import Sidebarkaryawan from './SidebarKaryawan';
import Cookies from 'js-cookies'
import AbsenKaryawan from './AbsenKaryawan';
import DataDiriKaryawan from './DataDiriKaryawan';
import DataAbsenKaryawan from './DataAbsenKaryawan';
import {useNavigate} from 'react-router-dom'
const Dashboardkaryawan = () => {
  const coo = Cookies.getItem("userkaryawan");
  const lemparlogin = useNavigate();
  const[NamaMenuKar,SetNamaMenuKar] = useState();
  function changemenukar(){
    if(NamaMenuKar === "AbsenKar")
      return <AbsenKaryawan/>
    else if(NamaMenuKar === "Datadir")
      return <DataDiriKaryawan/>
    else if(NamaMenuKar === "Logabsen")
      return <DataAbsenKaryawan/>
      
  }
  const checkcookie = ()=>{
    if(coo === null)
    {
      lemparlogin('/login')
    }
    else
    {
      console.log("aaaa")
    }
  }
useEffect(()=>{
  checkcookie()
},[])
  
  return (
    <div>
       <div className='w-full h-screen flex'>
        <div >
            <Sidebarkaryawan NamaMenuKar={SetNamaMenuKar}/>
        </div>
        <div className='w-full h-full relative p-4 m-0'>
          {NamaMenuKar === undefined ? (<div className='w-full h-full flex justify-center mt-10'><h1 className='text-2xl tracking-wider'>Selamat Datang {coo}</h1></div>):(changemenukar())}
        </div> 
    </div>
    </div>
  )
}

export default Dashboardkaryawan