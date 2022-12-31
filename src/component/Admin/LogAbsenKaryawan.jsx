import React,{useState,useEffect} from 'react'
import { DataGrid} from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { DatePicker,LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import { TextField } from '@mui/material'
import axios from 'axios'
const LogAbsenKaryawan = () => {
    const[tanggalfilterad,Settanggalfiterad]=useState(new Date())
    const[rowsabsenad,Setrowsabsenad] = useState([])
    const columnabsenkaryawan = [
        {
            field:"tanggal",
            headerName:"Tanggal",
            width:200,
            editable:true
        },
        {
            field:"nama",
            headerName:"Nama Karyawan",
            width:200,
            editable:true
        },
        {
            field:"jam_masuk",
            headerName:"Jam Masuk",
            width:300,
            editable:true
        },
        {
            field:"jam_pulang",
            headerName:"Jam Pulang",
            width:300,
            editable:true
        },
        {
            field:"terlambat",
            headerName:"Status",
            width:300,
            editable:true
        }
    ]
    const dataabsenad = ()=>{
        axios.get('/dataabsensemua',{
            params:{
                tanggal:tanggalfilterad._d,
            }
        }).then((response)=>{
            Setrowsabsenad(response.data)
        })
    }
    useEffect(()=>{
        dataabsenad()
    },[tanggalfilterad])
  return (
    <div className='w-full h-full flex'>
    <div className='w-full h-full'>
        <div className='flex mt-10 justify-between'>
            <div className='flex px-5'>
                <p className='font-bold text-2xl tracking-wider'>Log Absen</p>
            </div>
        <div >
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                label="Filter Tanggal"
                value={tanggalfilterad}
                onChange={(tgl)=> 
                    Settanggalfiterad(tgl) 
                }
                renderInput={(params) => <TextField {...params} size='small' sx={{width:225}}/>}
                inputFormat="DD-MMM-yyyy"
                disableMaskedInput={true}/>
            </LocalizationProvider>
        </div>
        </div>
        <div className='mt-2 px-6'>
            <Box sx={{height:400}}>
            <DataGrid
            columns={columnabsenkaryawan}
            rows={rowsabsenad}
            />
            </Box>
        </div>
    </div>
    
</div>
  )
}

export default LogAbsenKaryawan