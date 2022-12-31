import React,{useEffect, useState} from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import Modaladmin from './Modaladmin'
import {MdEdit} from 'react-icons/md'
import {FaTrashAlt} from 'react-icons/fa'
import ModalEditadmin from './ModalEditadmin'
import Swal from 'sweetalert2'
import axios from 'axios'
const LihatData = () => {
    const[Modal,SetModal] = useState(false);
    const[editmodal,SetModaledit]=useState(false);
    const[idedit,Setidedit]=useState();
    const[deleterow,Setdeleterow]=useState(false);
    const[rows,Setrows] = useState([])
    const handleedit=(b)=>{
            SetModaledit(true);
            Setidedit(b);
    }
    const handledelete=(b)=>{
            SetModaledit(false);
            Setidedit(0);
            Swal.fire({
                title:'Apakah Yakin Menghapus Data ini ?',
                icon:'warning',
                showCancelButton:true,
                confirmButtonColor:'#3085d6',
                cancelButtonColor:'#d33',
                confirmButtonText:'OK'
            }).then((result)=>{
                if(result.isConfirmed){
                    axios.delete('/deletekaryawan',{
                        params:{
                            id:b
                        }
                    }).then((res)=>{
                        if(res.data === "sukses")
                        {
                            Swal.fire("success","Data Telah Dihapus","success")
                            Setdeleterow(true);
                        }
                        else
                        {
                            Swal.fire("error","Data Telah Dihapus","error")
                            Setdeleterow(false);
                        }
                    })  
                }
            })
    }
    useEffect(()=>{
        const datakaryawan = ()=>{
            axios.get('/karyawan').then((dat)=>{
                Setrows(dat.data)
                // for(let a in dat.data)
                // {
                //     if(dat.data.hasOwnProperty(a))
                //     {
                //         Setrows({...rows[a].id = dat.data[a].id})
                //         rows[a].nama = dat.data[a].nama;
                //         rows[a].tmp_lahir = dat.data[a].tmp_lahir;
                //         rows[a].tgl_lahir = moment(dat.data[a].tgl_lahir).format("DD-MMM-yyyy");
                //         rows[a].jenis_kelamin = dat.data[a].jenis_kelamin;
                //         rows[a].alamat = dat.data[a].alamat;
                //         rows[a].email = dat.data[a].email;
                //         rows[a].status = dat.data[a].status;
                //         rows[a].jabatan = dat.data[a].jabatan;
                //         rows[a].golongan = dat.data[a].golongan;
                //         rows[a].bulan_kerja = dat.data[a].bulan_kerja;
                //         rows[a].jumlah_gaji = dat.data[a].jumlah_gaji;
                //         rows[a].user_login = dat.data[a].user_login;
                //         rows[a].password = dat.data[a].password;
                //     }
                // }
            })
        }
        datakaryawan();
    },[Modal,editmodal,deleterow])
    
    const Columnadmin =[
        {
            field:'nama',headerName:'Nama',width:160,editable:true
        },
        {
            field:'tmp_lahir',headerName:'Tempat Lahir',width:200,editable:true
        },
        {
            field:'tgl_lahir',headerName:'Tanggal Lahir',width:200,editable:true
        },
        {
            field:'jenis_kelamin',headerName:'Jenis Kelamin',width:160,editable:true
        },
        {
            field:'alamat',headerName:'Alamat',width:160,editable:true
        },
        {
            field:'email',headerName:'Email',width:160,editable:true
        },
        {
            field:'status',headerName:'Status',width:160,editable:true
        },
        {
            field:'jabatan',headerName:'Jabatan',width:160,editable:true
        },
        {
            field:'golongan',headerName:'Golongan',width:160,editable:true
        },
        {
            field:'bulan_kerja',headerName:'Bulan Kerja',width:160,editable:true
        },
        {
            field:'jumlah_gaji',headerName:'Jumlah Gaji',width:160,editable:true
        },
        {
            field:'user_login',headerName:'User Login',width:160,editable:true
        },
        {
            field:'password',headerName:'Password',width:160,editable:true
        },
        {
            field:'action',type:'string',width:100,renderCell:(cellValue)=>{
                return (
                    
                    <div className='flex gap-x-4'>
                        <MdEdit size={25} className='text-teal-500' onClick={()=>handleedit(cellValue.row.id)}/>
                        <FaTrashAlt size={25} className='text-red-500' onClick={()=>handledelete(cellValue.row.id)}/>
                    </div>
                );
            }
        },
    ]
  return (
    <div className='w-full h-full flex'>
        <div className='w-full h-full'>
            <div className='flex justify-end mt-10'>
                <button className='rounded-md w-[10rem] h-[2rem] bg-teal-300 text-black tracking-wider' onClick={()=>SetModal(true)}>Tambah</button>
            </div>
            <div className='mt-2 px-6'>
                <Box sx={{height:400}}>
                <DataGrid
                columns={Columnadmin}
                rows={rows}
                components={{Toolbar:GridToolbar}}
                />
                </Box>
            </div>
            {Modal && <Modaladmin open={SetModal}/>}
            {editmodal && <ModalEditadmin open={SetModaledit} idedit={idedit}/>}
        </div>
        
    </div>
  )
}

export default LihatData