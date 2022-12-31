import React,{useState} from 'react'
import {FaSave,FaUndo} from 'react-icons/fa'
import {IoCloseOutline} from 'react-icons/io5'
import { TextField } from '@mui/material'
import { DatePicker,LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import axios from 'axios'
import Swal from 'sweetalert2'
import moment from 'moment/moment'
const Modaladmin = ({open}) => {
    const[tambahdata,SetTambahdata] = useState({nama:"",tempatlahir:"",tanggallahir:null,jeniskelamin:"",
    alamat:"",email:"",status:"",jabatan:"",golongan:"",bulankerja:"",jumlahgaji:0,userlogin:"",password:""})
    const koma = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
    const hapusbukanangka = num => num.toString().replace(/[^0-9]/g, "")
    const matauang = e=>{
        
        SetTambahdata({...tambahdata,jumlahgaji:koma(hapusbukanangka(e.target.value))})
    }
    const insertkar=()=>{
        Swal.fire({
            title:'Apakah Yakin Simpan Data ini ?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'OK'
        }).then((result)=>{
            if(result.isConfirmed){
                axios.post('/insertkaryawan',{
                    nama:tambahdata.nama,
                    tempatlahir:tambahdata.tempatlahir,
                    tanggallahir:moment(tambahdata.tanggallahir).format("DD-MMM-YYYY"),
                    jeniskelamin:tambahdata.jeniskelamin,
                    alamat:tambahdata.alamat,
                    email:tambahdata.email,
                    status:tambahdata.status,
                    jabatan:tambahdata.jabatan,
                    golongan:tambahdata.golongan,
                    bulankerja:tambahdata.bulankerja,
                    jumlahgaji:tambahdata.jumlahgaji,
                    userlogin:tambahdata.userlogin,
                    password:tambahdata.password
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
  return (
    <>
    <div className={`${open ? '':'hidden'} justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none cursor-default`}>
    <div className="relative p-4 w-[49rem] h-full md:h-auto overflow-y-auto">
        <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-400">
                <div className='relative left-[18rem]'>
                    <h3 className="text-xl font-bold text-gray-600 tracking-wider">
                        Tambah Karyawan
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
                            <TextField variant='outlined' label="Nama" size='small' value={tambahdata.nama} onChange={(nama1)=>SetTambahdata({...tambahdata,nama:nama1.target.value})} type="text" />
                        </div>
                        <div className='flex  py-2'>
                             <TextField variant='outlined' label="Tempat Lahir" size='small' value={tambahdata.tempatlahir} onChange={(tempat)=>SetTambahdata({...tambahdata,tempatlahir:tempat.target.value})} />
                        </div>
                        <div className='py-2'>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                label="Tanggal Lahir"
                                value={tambahdata.tanggallahir}
                                onChange={(tgl)=> 
                                    SetTambahdata({...tambahdata,tanggallahir:tgl}) 
                                }
                                renderInput={(params) => <TextField {...params} size='small' sx={{width:225}}/>}
                                inputFormat="DD-MMM-yyyy"
                                disableMaskedInput={true}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="jenis kelamin" size="small" value={tambahdata.jeniskelamin} onChange={(jeniskelamin1)=> SetTambahdata({...tambahdata,jeniskelamin:jeniskelamin1.target.value}) } />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label='Alamat' multiline maxRows={4} size="small" sx={{width:225}} value={tambahdata.alamat} onChange={(alamat1)=>SetTambahdata({...tambahdata,alamat:alamat1.target.value})}  />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Email" size="small" value={tambahdata.email} onChange={(em)=>SetTambahdata({...tambahdata,email:em.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="status" size="small" value={tambahdata.status} onChange={(sat)=>SetTambahdata({...tambahdata,status:sat.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Jabatan" size="small" value={tambahdata.jabatan} onChange={(jab)=>SetTambahdata({...tambahdata,jabatan:jab.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Golongan" size="small" value={tambahdata.golongan} onChange={(gol)=>SetTambahdata({...tambahdata,golongan:gol.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Bulan Kerja" size="small" value={tambahdata.bulankerja} onChange={(bln)=>SetTambahdata({...tambahdata,bulankerja:bln.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="Jumlah Gaji" size="small" value={tambahdata.jumlahgaji} onInput={matauang} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="User Login" size="small" value={tambahdata.userlogin} onChange={(us)=>SetTambahdata({...tambahdata,userlogin:us.target.value})} />
                        </div>
                        <div className='py-2'>
                            <TextField variant='outlined' label="password" size="small" value={tambahdata.password} onChange={(pas)=>SetTambahdata({...tambahdata,password:pas.target.value})} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-400 ">
                <button type="button" className="text-black bg-white border border-black font-medium rounded-md text-md px-5 py-2.5 text-center flex space-x-2 items-center" onClick={()=>open(false)}>
                <FaUndo size={15}/>
                <span>Batal</span></button>
                <button type="button" className=" bg-sky-600 hover:bg-gray-700 rounded-md border border-gray-200 text-md font-medium px-5 py-2.5 text-white flex items-center space-x-2" onClick={()=>insertkar()}>
                    <FaSave size={15}/><span>Simpan</span> 
                </button>
            </div>
        </div>
    </div>
</div>
<div className='opacity-50 fixed inset-0 bg-black'></div>
    </>
  )
}

export default Modaladmin