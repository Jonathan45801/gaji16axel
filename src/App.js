import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LoginAdmin from './component/Admin/LoginAdmin';
import Dashboardadmin from './component/Admin/Dashboardadmin';
import HomeAdmin from './component/Admin/HomeAdmin'
import LihatData from './component/Admin/LihatData';
import GajiTambahan from './component/Admin/GajiTambahan';
import GajiPotongan from './component/Admin/GajiPotongan';
import LoginKaryawan from './component/Karyawan/LoginKaryawan';
import Dashboardkaryawan from './component/Karyawan/Dashboardkaryawan';
import AbsenKaryawan from './component/Karyawan/AbsenKaryawan';
import DataDiriKaryawan from './component/Karyawan/DataDiriKaryawan';
import DataAbsenKaryawan from './component/Karyawan/DataAbsenKaryawan';
import LogAbsenKaryawan from './component/Admin/LogAbsenKaryawan';
import LaporanAbsen from './component/Admin/LaporanAbsen';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/loginadmin' element={<LoginAdmin/>}></Route>
        <Route exact path='/dashboardadmin' element={<Dashboardadmin/>}>
          <Route path='homeadmin' element={<HomeAdmin/>}></Route>
          <Route path='LihatDataAdmin' element={<LihatData/>}></Route>
          <Route path='GajiTambahan' element={<GajiTambahan/>}></Route>
          <Route path='PotGaji' element={<GajiPotongan/>}></Route>
          <Route path='Absenkary' element={<LogAbsenKaryawan/>}></Route>
          <Route path='LapAb' element={<LaporanAbsen/>}></Route>
        </Route>
        <Route path='/loginkaryawan' element={<LoginKaryawan/>}></Route>
        <Route exact path='/dashboardkaryawan' element={<Dashboardkaryawan/>}>
          <Route path='AbsenKar' element={<AbsenKaryawan/>}></Route>
          <Route path='Datadir' element={<DataDiriKaryawan/>}></Route>
          <Route path='Logabsen' element={<DataAbsenKaryawan/>}></Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
