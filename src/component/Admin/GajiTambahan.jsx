import React,{useState,useEffect} from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import {MdEdit} from 'react-icons/md'
import ModalGajiTambahan from './ModalGaji/ModalGajiTambahan'
import ModalGajiTambahanEdit from './ModalGaji/ModalGajiTambahanEdit'
import axios from 'axios'
const GajiTambahan = () => {
  const[ModalTambahtam,SetModalTambahtam] = useState(false)
  const[editmodaltam,SetModaledittam]=useState(false);
  const[idedittam,Setidedittam]=useState();
  const[rows,SetRows] = useState([])
  const handleedittam=(b)=>{
    SetModaledittam(true);
    Setidedittam(b);
}
  const columnsgaji=[
      {
          field:'jabatan',headerName:'Jenis',width:300,editable:true
      },
      {
          field:'gajitam',headerName:'Nominal',width:300,editable:true
      },
      {
          field:'Action',type:"string",width:100,renderCell:(cellValue)=>{
            return (
                <div className='flex gap-x-4'>
                    <MdEdit size={25} className='text-teal-500' onClick={()=>handleedittam(cellValue.row.id)}/>
                </div>
            );
          }
      },
  ]
  useEffect(()=>{
    const valuetable =()=>{
      axios.get('/datatambahan').then((data)=>{
        SetRows(data.data)
      })
    }
    valuetable()
  },[ModalTambahtam,editmodaltam])
  return (
    <div className='w-full h-full flex'>
      <div className='w-full h-full'>
        <div className='flex justify-end mt-10'>
          <button className='rounded-md w-[10rem] h-[2rem] bg-teal-300 text-black tracking-wider' onClick={()=>SetModalTambahtam(true)}>Tambah</button>
        </div>
        <div className='mt-2 px-6'>
              <Box sx={{height:350}}>
                <DataGrid
                columns={columnsgaji}
                rows={rows}
                components={{Toolbar:GridToolbar}}
                />
              </Box>
        </div>
      </div>
      {ModalTambahtam && <ModalGajiTambahan open={SetModalTambahtam}/>}
      {editmodaltam && <ModalGajiTambahanEdit open={SetModaledittam} ideditgaji={idedittam}/>}
    </div>
  )
}

export default GajiTambahan