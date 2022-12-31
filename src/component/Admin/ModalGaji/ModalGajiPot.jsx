import React,{useState} from 'react'
import { TextField } from '@mui/material'
import {FaSave,FaUndo} from 'react-icons/fa'
import {IoCloseOutline} from 'react-icons/io5'
import axios from 'axios'
import Swal from 'sweetalert2'
const ModalGajiPot = ({open}) => {
    const[tambahdatagajipot,Settambahdatagajipot] = useState({jabatan:"",gajiterlambat:"",bulan:""})
    const koma = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
    const hapusbukanangka = num => num.toString().replace(/[^0-9]/g, "")
    const matauanggajipottam = e=>{
        Settambahdatagajipot({...tambahdatagajipot,gajiterlambat:koma(hapusbukanangka(e.target.value))})
    }
    const inserttambahpot=()=>{
        Swal.fire({
            title:"Apakah Anda Yakin Menyimpan data ini?",
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'OK'

        }).then((is)=>{
            if(is.isConfirmed)
            {
                axios.post('/tambahpot',{
                    jabatan:tambahdatagajipot.jabatan,
                    gaji:tambahdatagajipot.gajiterlambat,
                    bulan:tambahdatagajipot.bulan
                }).then((res)=>{
                    if(res.data === "sukses")
                    {
                        Swal.fire('success',"Data Berhasil Tersimpan",'success')
                        open(false)
                    }
                    else
                    {
                        Swal.fire('error',"Data Berhasil Tersimpan",'error')
                    }
                })
            }
        })
        
    }
  return (
    <>
    <div className={`${open ? '':'hidden'} justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none cursor-default`}>
    <div className="relative p-4 w-[49rem] h-full md:h-auto overflow-y-hidden">
        <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-400">
                <div className='relative left-[18rem]'>
                    <h3 className="text-xl font-bold text-gray-600 tracking-wider">
                        Tambah Gaji Potongan
                    </h3>
                </div>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                    <IoCloseOutline size={18} onClick={()=>open(false)}/>
                </button>
            </div>
            <div className="p-6 space-y-6 h-auto overflow-y-auto">
                <form method='POST'>
                    <div className='py-2'>
                        <div className='flex'>
                            <TextField variant='outlined' label="Jabatan" size='small' value={tambahdatagajipot.jabatan} onChange={(jab)=>Settambahdatagajipot({...tambahdatagajipot,jabatan:jab.target.value})} type="text" />
                        </div>
                        <div className='flex  py-2'>
                             <TextField variant='outlined' label="Gaji Jabatan" size='small' onInput={matauanggajipottam} value={tambahdatagajipot.gajiterlambat} />
                        </div>
                        <div className='flex  py-2'>
                             <TextField variant='outlined' label="Bulan Terlambat" size='small' value={tambahdatagajipot.bulan} onChange={(jab)=>Settambahdatagajipot({...tambahdatagajipot,bulan:jab.target.value})} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-400 ">
                <button type="button" className="text-black bg-white border border-black font-medium rounded-md text-md px-5 py-2.5 text-center flex space-x-2 items-center" onClick={()=>open(false)}>
                <FaUndo size={15}/>
                <span>Batal</span></button>
                <button type="button" className=" bg-sky-600 hover:bg-gray-700 rounded-md border border-gray-200 text-md font-medium px-5 py-2.5 text-white flex items-center space-x-2" onClick={()=>inserttambahpot()}>
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

export default ModalGajiPot