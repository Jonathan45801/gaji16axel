import React,{useState} from 'react'
import { TextField } from '@mui/material'
import Gmbarbps from '../../Asset/bg_bps.jpg'
import logobps from '../../Asset/logo.png'
import Cookies  from 'js-cookies'
import Axios from 'axios'
import { toast,ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginKaryawan = () => {
  const redirect = useNavigate()
  const[userkaryawan,Setuserkaryawan] = useState({username:"",password:""})
  const userlogin = (e) =>{
    e.preventDefault()
    const username = userkaryawan.username;
    const password = userkaryawan.password;

    Axios.get('/loginkaryawan',{
    params:{
      name:username,
      password:password
    }
    }).then(function(response){
      if(response.data === "sukses")
      {
        Cookies.setItem("userkaryawan",username,{ expires:1 });
        redirect('/dashboardkaryawan')
      }
      else
      {
        toast.error("Password Salah",{
        positions:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined
      })
      }
      
    }).catch((error)=>{
      console.error("",error);
    })
  }
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gradient-to-tl from-indigo-900 to-black'>
        <div className='rounded-md flex w-[90rem] h-screen '>
          <div className='grid grid-cols-2 gap-4 place-items-center'>
            <div className='bg-emerald-300 rounded-md w-[45rem] h-screen flex justify-center items-center'>
              <div>
                  <p className='text-black text-2xl font-bold tracking-wider'>Selamat Datang Di Nabire</p>
                  <p className='text-black text-2xl font-bold tracking-wider'> BPS Kabupaten Nabire</p>
                  <img src={Gmbarbps} className='h-[20rem] w-[42rem]' alt='gambarbps'></img>
                  <div className='flex-col py-12 tracking-wider'>
                    <p className='text-center'>Bps Kabupaten Nabire (Statistics of Nabire Regency) </p>
                    <p className='text-center'>Jalan Pepera No.18 Nabire-Papua (Kantor Statistik), 98815 </p> 
                    <p className='text-center'>HP/WA: <a href='https://wa.me/6281282871245?text=Salam Hai' className='text-blue-800' target="_blank" rel="noopener noreferrer">081282871245</a> Email: <a href="mailto: bps9404@bps.go.id" className='text-blue-800' target="_blank" rel="noopener noreferrer" >bps9404@bps.go.id</a></p>
                  </div>
              </div>
              </div>
              <div className='bg-white rounded-md w-[25rem] h-[30rem] flex justify-center'>
                <form method='GET' onSubmit={userlogin} >
                  <div className='flex-col'>
                    <div>
                        <img src={logobps} className="w-[20rem]" alt='logobps'/>
                    </div>
                    <div className='flex justify-center'>
                      <TextField variant='outlined' label='Username' size='small' defaultValue={userkaryawan.username} onChange={e=>Setuserkaryawan({...userkaryawan,username:e.target.value})}/>
                    </div>
                    <div className='flex justify-center py-4'>
                      <TextField variant='outlined' label='Password' size='small' defaultValue={userkaryawan.password} onChange={e=>Setuserkaryawan({...userkaryawan,password:e.target.value})} type="password"/>
                    </div>
                    <div className='flex justify-center py-4'>
                      <button className='rounded-md bg-purple-600 w-[10rem] h-[2.5rem]' type='submit'>Login</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
          <ToastContainer/>    
        </div>
        
        
    </div>
  )
}

export default LoginKaryawan