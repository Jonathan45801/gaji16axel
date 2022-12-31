import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookies'
import moment from 'moment/moment'
const DataDiriKaryawan = () => {
  const coo = Cookies.getItem("userkaryawan")
  const[datakaryawan,Setdatakaryawan] = useState({nama:"",tmp_lahir:"",tgl_lahir:"",jenis_kelamin:"",alamat:"",email:"",jabatan:"",status:"",gaji_pokok:"",tangglkerja:""})
  const loaddatakaryawan = () =>{
    axios.get('/datadirikaryawan',{
      params:{
        user: coo
      }
    }).then((pon)=>{
      Setdatakaryawan({...datakaryawan,nama:pon.data[0].nama})
      datakaryawan.tmp_lahir=pon.data[0].tmp_lahir
      datakaryawan.tgl_lahir =pon.data[0].tgl_lahir
      datakaryawan.jenis_kelamin = pon.data[0].jenis_kelamin
      datakaryawan.alamat = pon.data[0].alamat
      datakaryawan.email = pon.data[0].email
      datakaryawan.jabatan=pon.data[0].jabatan
      datakaryawan.status=pon.data[0].status
      datakaryawan.gaji_pokok=pon.data[0].jumlah_gaji
      datakaryawan.tangglkerja=pon.data[0].tgl_buat
    })
  }
  useEffect(()=>{
    loaddatakaryawan()
  },[])
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex-col'>
          <div>
            <p className='text-2xl font-bold tracking-wider'>Data Diri</p>
          </div>
          <div className='py-2'>
            <table className='border text-center border-black'>
              <thead className='border-b border-black'>
              <tr>
                <th className='text-lg font-medium text-gray-900 px-6 py-4 border-r border-black'>ID</th>
                <th className='text-lg font-medium text-gray-900 px-6 py-4'>Kunci</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Nama</td>
                  <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.nama}</td>
                </tr>
                <tr>
                  <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Alamat</td>
                  <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.alamat}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Tempat Lahir</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.tmp_lahir}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Tanggal Lahir</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.tgl_lahir}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Jenis Kelamin</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.jenis_kelamin}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Email</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.email}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Jabatan</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.jabatan}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Status</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.status}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Gaji Pokok</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.gaji_pokok}</td>
                </tr>
                <tr>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>Tanggal Kerja</td>
                <td className='text-lg font-medium text-gray-900 px-6 border-r border-black border-b'>{datakaryawan.tangglkerja}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DataDiriKaryawan