import {FaSignInAlt} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
export const MenuSidebarkar = [
    {
        id:0,
        icon:<FaSignInAlt size={20}/>,
        title:"Absen",
        href:"AbsenKar"
    },
    {
        id:1,
        icon:<BsFillPersonLinesFill size={20}/>,
        title:"Log Absen",
        href:"Logabsen"
    },
    {
        id:2,
        icon:<BsFillPersonLinesFill size={20}/>,
        title:"Data Diri",
        href:"Datadir"
    },
    {
        id:3,
        icon:<BiLogOut size={20}/>,
        title:"Logout",
        href:"Logoutkar"
    }
    
]