import React,{useState,useEffect} from 'react'
import { DataGrid} from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { DatePicker,LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import { TextField } from '@mui/material'
import {FaFilePdf} from 'react-icons/fa'
import axios from 'axios'
import ModalLaporanabsen from './ModalLaporanabsen'
import {MdEdit} from 'react-icons/md'
import Swal from 'sweetalert2'
const LaporanAbsen = () => {
    const[filterbulan,Setfilterbulan] = useState(new Date())
    const[rowsabsenlap,Setrowsabsenlap] = useState([])
    const[modaleditlap,Setmodaleditlap] = useState(false)
    const[ideditlap,Setideditlap] = useState()
    
    const handleeditlap=(b)=>{
        Setmodaleditlap(true);
        Setideditlap(b);
    }
    const printlap =(b)=>{
        axios.get('/pdfslip',{
            params:{
                id:b,
                tgl:filterbulan._d
            }
            
        }).then((response)=>{
            if(response.data === "sukses")
            {
                Swal.fire("success","Silakan Download","success").then((h)=>{
                    if(h.isConfirmed)
                    {
                        axios.get('/ambilfilepdf',{
                            params:{
                                id:b
                            },
                            responseType:'blob'
                        }
                        ).then((re)=>{
                            window.open(URL.createObjectURL(re.data))
                        })
                    }
                })
            }
        })
    }
    const columnabsenkaryawan = [
        {
            field:"nama",
            headerName:"Nama",
            width:200
        },
        {
            field:"terlambat",
            headerName:"Terlambat",
            width:200
        },
        {
            field:"santun",
            headerName:"Sanitun",            
            width:300,
        },
        {
            field:"keterangan",
            headerName:"Keterangan",
            width:300,
        },
        {
            field:'action',type:'string',width:100,renderCell:(cellValue)=>{
                return (
                    
                    <div className='flex gap-x-4'>
                        <FaFilePdf size={25} className='text-teal-500' onClick={()=>printlap(cellValue.row.id)}/>
                        <MdEdit size={25} className='text-teal-700' onClick={()=>handleeditlap(cellValue.row.id)}/>
                    </div>
                );
            }
        }
    ]
    const dataabsen1bulankaryawan = ()=>{
        axios.get('/dataabsenbybulan',{
            params:{
                tanggal:filterbulan._d,
            }
        }).then((response)=>{
            console.log(response)
                Setrowsabsenlap(response.data)
        })
    }
    useEffect(()=>{
        dataabsen1bulankaryawan()
    },[filterbulan,modaleditlap])
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
                label="Filter bulan"
                value={filterbulan}
                onChange={(tgl)=> 
                    Setfilterbulan(tgl) 
                }
                renderInput={(params) => <TextField {...params} size='small' sx={{width:225}}/>}
                inputFormat="MMM-yyyy"
                views={['year','month']}
                disableMaskedInput={true}/>
            </LocalizationProvider>
        </div>
        </div>
        <div className='mt-2 px-6'>
            <Box sx={{height:400}}>
            <DataGrid
            columns={columnabsenkaryawan}
            rows={rowsabsenlap}
            experimentalFeatures = {{newEditingApi:true}}
            />
            </Box>
        </div>
        {modaleditlap && <ModalLaporanabsen open={Setmodaleditlap} idedit={ideditlap} tanggalf={filterbulan} />}
    </div>
    
</div>
  )
}

export default LaporanAbsen