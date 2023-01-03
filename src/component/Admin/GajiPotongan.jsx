import React,{useState,useEffect} from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import {MdEdit} from 'react-icons/md'
import axios from 'axios'
import ModalGajiPot from './ModalGaji/ModalGajiPot'
import ModalGajiPotEdit from './ModalGaji/ModalGajiPotEdit'
const GajiPotongan = () => {
  const[tambahpot,Settambahpot] = useState(false)
  const[rowspot,Setrowspot] = useState([])
  const[editpot,SetEditPot] = useState(false)
  const[ideditpot,Setideditpot]=useState();
  const handleeditgajipot=(a)=>
  {
    SetEditPot(true);
    Setideditpot(a);
  }
  const kolomgajipot=[
    {
      field:'jabatan',
      headerName:'Jabatan',
      width:300,
      editable:true
    },
    {
      field:'gajiterlambat',
      headerName:'Gaji Terlambat',
      width:300,
      editable:true
    },
    {
      field:'Action',type:"string",width:100,renderCell:(cellValue)=>{
        return (
            <div className='flex gap-x-4'>
                <MdEdit size={25} className='text-teal-500' onClick={()=>handleeditgajipot(cellValue.row.id)}/>
            </div>
        );
      }
    }
  ]
  useEffect(()=>{
    const dataterlambat = ()=>{
      axios.get('/datagaji').then((da)=>{
        Setrowspot(da.data)
      })
    }
    dataterlambat()
  },[tambahpot,editpot])
  return (
    <div className='w-full h-full flex'>
      <div className='w-full h-full'>
      <div className='flex justify-end mt-10'>
          <button className='rounded-md w-[10rem] h-[2rem] bg-teal-300 text-black tracking-wider' onClick={()=>Settambahpot(true)}>Tambah</button>
        </div>
        <div className='mt-2 px-6'>
              <Box sx={{height:350}}>
                <DataGrid
                columns={kolomgajipot}
                rows={rowspot}
                components={{Toolbar:GridToolbar}}
                />
              </Box>
        </div>
      </div>
      {tambahpot && <ModalGajiPot open={Settambahpot} /> }
      {editpot && <ModalGajiPotEdit open={SetEditPot} idedit={ideditpot}/>}
    </div>
  )
}

export default GajiPotongan