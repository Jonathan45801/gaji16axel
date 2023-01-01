import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiLeftArrowCircle} from 'react-icons/bi'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import  {Sidebarmenus}  from './MenuSidebarkaryawan'
import { MenuSidebarkar } from './MenuSidebarkaryawan'
import Cookies from 'js-cookies'

const Sidebarkaryawan = ({NamaMenuKar}) => {
const coo = Cookies.getItem("userkaryawan");  
const logoutkaryawannav = useNavigate();
const[clickarrow,Setclickarrow] = useState(true)
const[Nav,SetNav] = useState();
const HandleNav=(a,b)=>{
    if(a==="Logoutkar")
        logoutkar()
    else
    {
        NamaMenuKar(a)
    }
        
    SetNav(b)
}
const logoutkar = () =>{
    logoutkaryawannav('/login')
    Cookies.removeItem("userkaryawan");
}
  return (
    <div className='flex'>
        <div className={`${clickarrow ? 'w-72':'w-20'} bg-[#302b63] p-5 pt-8 h-screen relative`}>
            <div className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white rounded-full ${!clickarrow && 'rotate-180'}`}>
                <BiLeftArrowCircle size={35} onClick={()=>Setclickarrow(!clickarrow)}/>
            </div>
            <div className='flex gap-x-4 items-center border-b-2'>
                <div className='p-2'>
                    <MdOutlinePeopleAlt size={`${!clickarrow ? '29' : '25'}`} className={`cursor-pointer  duration-500 ${clickarrow && 'rotate-[360deg]'}`}/>
                </div>
                <div>
                    <h1 className={`text-white font-medium text-xl duration-300 ${!clickarrow && 'hidden' }`}>{coo}</h1>
                </div>
            </div>
            <ul className='pt-6'>
                {MenuSidebarkar.map(menus=>{
                    return(
                    <li key={menus.id} className={`flex items-center cursor-pointer p-2 hover:bg-teal-400 rounded-md ${menus.id === Nav && 'bg-teal-400'}`} onClick={()=>HandleNav(menus.href,menus.id)}>
                        <Link to={menus.href} className="flex gap-x-4">
                        {menus.icon}
                        <span className={`${!clickarrow && 'hidden'}  text-white`}>{menus.title}</span>
                        </Link>
                    </li>
                )})}
            </ul>
        </div>
    </div>
  )
}

export default Sidebarkaryawan