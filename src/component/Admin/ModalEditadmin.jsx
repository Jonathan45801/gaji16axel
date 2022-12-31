import React,{useEffect, useState} from 'react'
import {FaSave,FaUndo} from 'react-icons/fa'
import {IoCloseOutline} from 'react-icons/io5'
import { TextField } from '@mui/material'
import { DatePicker,LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Swal from 'sweetalert2'
import axios from 'axios'
import moment from 'moment/moment'
const ModalEditadmin = ({open,idedit}) => {
    const[dataedit,Setdataedit] = useState({nama:"",tempatlahir:"",tanggallahir:"",jeniskelamin:"",
    alamat:"",email:"",status:"",jabatan:"",golongan:"",bulankerja:"",jumlahgaji:0,userlogin:"",password:""})
    const komaedit = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
    const hapusbukanangkaedit = num => num.toString().replace(/[^0-9]/g, "")
    const matauangedit = e=>{
        
        Setdataedit({...dataedit,jumlahgaji:komaedit(hapusbukanangkaedit(e.target.value))})
    }
    
    const tanggallahirok = e =>{
        Setdataedit({...dataedit,tanggallahir:e})
    }
    const updatekar=()=>{
        Swal.fire({
            title:'Apakah Yakin Simpan Data ini ?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'OK'
        }).then((result)=>{
            if(result.isConfirmed){
                axios.post('/updatekaryawan',{
                    id:idedit,
                    nama:dataedit.nama,
                    tempatlahir:dataedit.tempatlahir,
                    tanggallahir1:moment(dataedit.tanggallahir._d).format("DD-MMM-YYYY"),
                    jeniskelamin:dataedit.jeniskelamin,
                    alamat:dataedit.alamat,
                    email:dataedit.email,
                    status:dataedit.status,
                    jabatan:dataedit.jabatan,
                    golongan:dataedit.golongan,
                    bulankerja:dataedit.bulankerja,
                    jumlahgaji:dataedit.jumlahgaji,
                    userlogin:dataedit.userlogin,
                    password:dataedit.password
                    
                }).then((data)=>{
                    if(data.data === "sukses")
                    {
                        Swal.fire('Success','Data sudah tersimpan','success').then(()=>{
                            open(false)
                        });
                    }
                    else
                    {
                        Swal.fire("error",data.data,"error");
                    }
                })
            }
        })
    }
    const carikar = ()=>{
        axios.get('/datakaryawan',{
            params:{
                id:idedit
            }
            
        }).then((data)=>{
                    Setdataedit({...dataedit,nama:data.data[0].nama})
                    dataedit.tempatlahir=data.data[0].tmp_lahir
                    dataedit.tanggallahir= new Date(data.data[0].tgl_lahir)
                    dataedit.jeniskelamin=data.data[0].jenis_kelamin
                    dataedit.alamat=data.data[0].alamat
                    dataedit.email=data.data[0].email
                    dataedit.status=data.data[0].status
                    dataedit.jabatan=data.data[0].jabatan
                    dataedit.golongan=data.data[0].golongan
                    dataedit.bulankerja=data.data[0].bulan_kerja
                    dataedit.jumlahgaji=data.data[0].jumlah_gaji
                    dataedit.userlogin=data.data[0].user_login
                    dataedit.password=data.data[0].password   
        })
    }
    useEffect(()=>{
      
        carikar()
    },[])
  return (
    <>
    
    <div className={`${open ? '':'hidden'} justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none cursor-default`}>
    <div className="relative p-4 w-[49rem] h-full md:h-auto overflow-y-auto">
        <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-400">
                <div className='relative left-[18rem]'>
                    <h3 className="text-xl font-bold text-gray-600 tracking-wider">
                        Edit Karyawan
                    </h3>
                </div>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                    <IoCloseOutline size={18} onClick={()=>open(false)}/>
                </button>
            </div>
            <div className="p-6 space-y-6 h-[80vh] overflow-y-auto">
                <form method='POST'>
                <div className='py-2'>
                        <div className='flex'>
                            <TextField variant='outlined' label="Nama" size='small' value={dataedit.nama} onChange={(nama1)=>Setdataedit({...dataedit,nama:nama1.target.value})} type="text" />
                        </div>
                        <div className='flex  py-2'>
                             <TextField variant='outlined' label="Tempat Lahir" size='small' value={dataedit.tempatlahir} onChange={(tempat)=>Setdataedit({...dataedit,tempatlahir:tempat.target.value})} />
                        </div>
                        <div className='py-2'>
                           {/* <TextField variant='outlined' label="tanggal lahir" type="date" value={dataedit.tanggallahir} onChange={(tgl1)=>Setdataedit({...dataedit,tanggallahir:tgl1.target.value})} InputLabelProps={{shrink:true}}/> */}
                           <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="id">
                                <DatePicker
                                label="Tanggal Lahir"
                                value={dataedit.tanggallahir}
                                onChange={(tgl)=>
                                    tanggallahirok(tgl)
                                }
                                renderInput={(params) => <TextField {...params} size='small' sx={{width:225}}/>}
                                inputFormat="DD-MMM-YYYY"
                                disableMaskedInput={true}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="jenis kelamin" size="small" value={dataedit.jeniskelamin} onChange={(jeniskelamin1)=> Setdataedit({...dataedit,jeniskelamin:jeniskelamin1.target.value}) } />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label='Alamat' multiline maxRows={4} size="small" sx={{width:225}} value={dataedit.alamat} onChange={(alamat1)=>Setdataedit({...dataedit,alamat:alamat1.target.value})}  />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Email" size="small" value={dataedit.email} onChange={(em)=>Setdataedit({...dataedit,email:em.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="status" size="small" value={dataedit.status} onChange={(sat)=>Setdataedit({...dataedit,status:sat.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Jabatan" size="small" value={dataedit.jabatan} onChange={(jab)=>Setdataedit({...dataedit,jabatan:jab.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Golongan" size="small" value={dataedit.golongan} onChange={(gol)=>Setdataedit({...dataedit,golongan:gol.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Bulan Kerja" size="small" value={dataedit.bulankerja} onChange={(bln)=>Setdataedit({...dataedit,bulankerja:bln.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Jumlah Gaji" size="small" value={dataedit.jumlahgaji} onInput={matauangedit} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="User Login" size="small" value={dataedit.userlogin} onChange={(us)=>Setdataedit({...dataedit,userlogin:us.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="password" size="small" value={dataedit.password} onChange={(pas)=>Setdataedit({...dataedit,password:pas.target.value})} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-400 ">
                <button type="button" className="text-black bg-white border border-black font-medium rounded-md text-md px-5 py-2.5 text-center flex items-center space-x-2" onClick={()=>open(false)}><FaUndo size={15}/><span>Batal</span></button>
                <button type="button" className=" bg-sky-600 hover:bg-gray-700 rounded-md border border-gray-200 text-md font-medium px-5 py-2.5 text-white flex items-center space-x-2" onClick={()=>updatekar()}><FaSave size={15}/><span>Simpan </span></button>
            </div>
        </div>
    </div>
</div>
<div className='opacity-50 fixed inset-0 bg-black'></div>
    </>
  )
}

export default ModalEditadmin