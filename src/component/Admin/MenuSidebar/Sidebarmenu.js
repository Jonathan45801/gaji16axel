import { FaHome, FaList,FaMoneyBillWave} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export const Sidebarmenus =[
    {     
        id:0,   
        icon:<FaHome size={20}/>,
        title:"Home",
        href:"HomeAdmin"
    },
    {
        id:1,
        icon:<FaList size={20}/>,
        title:"Lihat Data",
        href:"LihatDataAdmin"
    },
    {
        id:2,
        icon:<FaMoneyBillWave size={20}/>,
        title:"Gaji Tambahan",
        href:"GajiTambahan"
    },
    {
        id:3,
        icon:<FaMoneyBillWave size={20}/>,
        title:"Potongan Gaji",
        href:"PotGaji"
    },
    {
        id:4,
        icon:<BsFillPersonLinesFill size={20}/>,
        title:"Absen Karyawan",
        href:"Absenkary"
    },
    {
        id:5,
        icon:<BsFillPersonLinesFill size={20}/>,
        title:"Laporan Absen",
        href:"LapAb"
    },
    {
        id:6,
        icon:<BiLogOut size={20}/>,
        title:"Log Out",
        href:"LogOutadmin"
    }
]