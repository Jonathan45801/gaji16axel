import React, { useState,useEffect } from 'react'
import Cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import HomeAdmin from './HomeAdmin'
import LihatData from './LihatData'
import GajiTambahan from './GajiTambahan'
import GajiPotongan from './GajiPotongan'
import LogAbsenKaryawan from './LogAbsenKaryawan'
import LaporanAbsen from './LaporanAbsen'
const Dashboardadmin = () => {
  const lemparloginadmin = useNavigate()
  const coo = Cookies.getItem("useradmin");
 const[NamaMenu,SetNamaMenu] = useState();
 function changemenu()
 {
    if(NamaMenu === "HomeAdmin")
      return <HomeAdmin/>
    else if(NamaMenu === "LihatDataAdmin")
      return <LihatData/>
    else if(NamaMenu === "GajiTambahan")
      return <GajiTambahan/>
    else if(NamaMenu === "PotGaji")
      return <GajiPotongan/>
    else if(NamaMenu === "Absenkary")
      return <LogAbsenKaryawan/>
    else if(NamaMenu === "LapAb")
      return  <LaporanAbsen/>
 }
 const checkcookie = ()=>{
  if(coo === null)
  {
    lemparloginadmin('/login')
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
    <div className='w-full h-screen flex'>
        <div >
            <Sidebar NamaMenu={SetNamaMenu}/>
        </div>
        <div className='w-full h-full relative p-4 m-0'>
          {NamaMenu === undefined ? (<div className='w-full h-full flex justify-center mt-10'><h1 className='text-2xl tracking-wider'>Selamat Datang Admin</h1></div>):(changemenu())}
        </div> 
    </div>
  )
}

export default Dashboardadmin