-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jan 2023 pada 00.07
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_gaji17`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_absen`
--

CREATE TABLE `tb_absen` (
  `id` int(11) NOT NULL,
  `id_karyawan` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `jam_masuk` varchar(100) NOT NULL,
  `jam_pulang` varchar(100) NOT NULL,
  `terlambat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_absen`
--

INSERT INTO `tb_absen` (`id`, `id_karyawan`, `tanggal`, `jam_masuk`, `jam_pulang`, `terlambat`) VALUES
(3, 2, '2022-12-31', '11:13', '11:53', '1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_admin`
--

CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_admin`
--

INSERT INTO `tb_admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'DMHjg5+Q2eTjkntusWQRhFY6sLW7dUlb7poBJtxvjW8=');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_karyawan`
--

CREATE TABLE `tb_karyawan` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tmp_lahir` varchar(100) NOT NULL,
  `tgl_lahir` varchar(100) NOT NULL,
  `jenis_kelamin` varchar(100) NOT NULL,
  `alamat` longtext NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `golongan` varchar(100) NOT NULL,
  `bulan_kerja` varchar(100) NOT NULL,
  `jumlah_gaji` decimal(65,0) NOT NULL,
  `user_login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tgl_buat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_karyawan`
--

INSERT INTO `tb_karyawan` (`id`, `nama`, `tmp_lahir`, `tgl_lahir`, `jenis_kelamin`, `alamat`, `email`, `status`, `jabatan`, `golongan`, `bulan_kerja`, `jumlah_gaji`, `user_login`, `password`, `tgl_buat`) VALUES
(1, 'jo', 'jakarta', '22-Dec-2022', 'laki-laki', 'jln.jalan-jalan', 'jo@email.com', 'lajang', 'spv', '1', '12', '1000000', 'testj', 'test', '2022-12-25'),
(2, 'testdata1', 'test', '26-Dec-2020', 'test', 'test', 'test@test', 'test', 'test', 'test', '0', '1200002', 'test', 'test', '2022-12-25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_laporan`
--

CREATE TABLE `tb_laporan` (
  `id` int(11) NOT NULL,
  `id_karyawan` int(11) NOT NULL,
  `nama_karyawan` varchar(100) NOT NULL,
  `bulan` varchar(100) NOT NULL,
  `terlambat` int(11) NOT NULL,
  `santun` varchar(100) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `cetak` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_laporan`
--

INSERT INTO `tb_laporan` (`id`, `id_karyawan`, `nama_karyawan`, `bulan`, `terlambat`, `santun`, `keterangan`, `cetak`) VALUES
(1, 2, '', '12-2022', 0, 'Test1', 'Test2', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_tambahan`
--

CREATE TABLE `tb_tambahan` (
  `id` int(11) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `gajitam` decimal(65,0) NOT NULL,
  `keterangan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_tambahan`
--

INSERT INTO `tb_tambahan` (`id`, `jabatan`, `gajitam`, `keterangan`) VALUES
(1, 'Test', '1000000', 'makan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_terlambat`
--

CREATE TABLE `tb_terlambat` (
  `id` int(11) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `gajiterlambat` decimal(65,0) NOT NULL,
  `bulan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `tb_terlambat`
--

INSERT INTO `tb_terlambat` (`id`, `jabatan`, `gajiterlambat`, `bulan`) VALUES
(1, 'test', '1000000', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_absen`
--
ALTER TABLE `tb_absen`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_karyawan`
--
ALTER TABLE `tb_karyawan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_laporan`
--
ALTER TABLE `tb_laporan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_tambahan`
--
ALTER TABLE `tb_tambahan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_terlambat`
--
ALTER TABLE `tb_terlambat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_absen`
--
ALTER TABLE `tb_absen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tb_admin`
--
ALTER TABLE `tb_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_karyawan`
--
ALTER TABLE `tb_karyawan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tb_laporan`
--
ALTER TABLE `tb_laporan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_tambahan`
--
ALTER TABLE `tb_tambahan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_terlambat`
--
ALTER TABLE `tb_terlambat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
