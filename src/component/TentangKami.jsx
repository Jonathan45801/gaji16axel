
import React,{useState} from 'react'
import { tentang } from './MenuTentangkami'
import { tableorga } from './Tableinstrustur'
import fotoorganisasi from '../Asset/foto-organisasi.jpg'
import logo from '../Asset/logo.png'
const TentangKami = () => {
    const[values,Setvalue] = useState(0)
  return (
    <div className='w-full h-screen bg-[#302b63]' id='tentangkami'>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='grid grid-cols-2 gap-4 place-items-center'>
                <div className='flex item-start bg-white'>
                    <ul className='flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4'id="tabs-tabVertical" data-tabs-toggle='#myTabContent' role='tablist'>
                        {tentang.map(menus =>{
                            return (
                            <li key={menus.id} className='flex-grow text-center text-black' role='presentation' onClick={()=>Setvalue(menus.id)}>
                                <a href={menus.idmenus} className={`text-start
                                    block
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    border-x-0 border-t-0 border-b-2 border-transparent
                                    px-6
                                    py-3
                                    my-2
                                    hover:border-transparent hover:bg-gray-100
                                    focus:border-transparent ${menus.id === 0 ? "active": ""}`} id={`tabs-${menus.idmenucontro}`} data-tabs-target={menus.idmenus} role='tab' >{menus.title}</a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div id='myTabContent' className='bg-white'>
                    {values === 0 && <div className='p-4 rounded-lg block w-[50rem] h-[80vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                        <p className='text-black text-md font-bold'>informasi Umum</p>
                        <p className='tracking-wider'>Badan Pusat Statistik adalah Lembaga Pemerintah Non-Departemen yang bertanggung jawab langsung kepada Presiden. Sebelumnya, BPS merupakan Biro Pusat Statistik, yang dibentuk berdasarkan UU Nomor 6 Tahun 1960 tentang Sensus dan UU Nomer 7 Tahun 1960 tentang Statistik. Sebagai pengganti kedua UU tersebut ditetapkan UU Nomor 16 Tahun 1997 tentang Statistik. Berdasarkan UU ini yang ditindaklanjuti dengan peraturan perundangan dibawahnya, secara formal nama Biro Pusat Statistik diganti menjadi Badan Pusat Statistik.</p>
                        <br/>
                        <p>Materi yang merupakan muatan baru dalam UU Nomor 16 Tahun 1997, antara lain 
                        <ol className='list-disc px-6 mx-5'>
                            <li>Jenis statistik berdasarkan tujuan pemanfaatannya terdiri atas statistik dasar yang sepenuhnya diselenggarakan oleh BPS, statistik sektoral yang dilaksanakan oleh instansi Pemerintah secara mandiri atau bersama dengan BPS, serta statistik khusus yang diselenggarakan oleh lembaga, organisasi, perorangan, dan atau unsur masyarakat lainnya secara mandiri atau bersama dengan BPS.</li>
                            <li>Hasil statistik yang diselenggarakan oleh BPS diumumkan dalam Berita Resmi Statistik (BRS) secara teratur dan transparan agar masyarakat dengan mudah mengetahui dan atau mendapatkan data yang diperlukan.</li>
                            <li>Sistem Statistik Nasional yang andal, efektif, dan efisien</li>
                            <li>Dibentuknya Forum Masyarakat Statistik sebagai wadah untuk menampung aspirasi masyarakat statistik, yang bertugas memberikan saran dan pertimbangan kepada BPS.</li>
                        </ol>
                        </p>
                        <br/>
                        <p className='tracking-wider'>Berdasarkan undang-undang yang telah disebutkan di atas, peranan yang harus dijalankan oleh BPS adalah sebagai berikut :  </p>
                        <ol className='list-disc px-6 mx-5'>
                            <li>Menyediakan kebutuhan data bagi pemerintah dan masyarakat. Data ini didapatkan dari sensus atau survey yang dilakukan sendiri dan juga dari departemen atau lembaga pemerintahan lainnya sebagai data sekunder</li>
                            <li>Membantu kegiatan statistik di departemen, lembaga pemerintah atau institusi lainnya, dalam membangun sistem perstatistikan nasional.</li>
                            <li>Mengembangkan dan mempromosikan standar teknik dan metodologi statistik, dan menyediakan pelayanan pada bidang pendidikan dan pelatihan statistik.</li>
                            <li>Membangun kerjasama dengan institusi internasional dan negara lain untuk kepentingan perkembangan statistik Indonesia</li>
                        </ol>
                        </div>
                       

                    </div>}
                    {values === 1 && <div className='p-4 rounded-lg block w-[50rem] h-[80vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                            <p className='text-black text-md font-bold'>Visi</p>
                            <p className='tracking-wider'>Dengan mempertimbangkan capaian kinerja, memperhatikan aspirasi masyarakat, potensi dan permasalahan, serta mewujudkan Visi Presiden dan Wakil Presiden maka visi Badan Pusat Statistik untuk tahun 2020-2024 adalah:</p>
                            <p className='font-bold text-lg text-center'>"Penyedia Data Statistik Berkualitas untuk Indonesia Maju"</p>
                            <p className='font-bold text-lg text-center'>("Provider of Qualified Statistical Data for Advanced Indonesia")</p>
                            <p className='tracking-wider'>Dalam visi yang baru tersebut berarti bahwa BPS berperan dalam penyediaan data statistik nasional maupun internasional, untuk menghasilkan statistik yang mempunyai kebenaran akurat dan menggambarkan keadaan yang sebenarnya, dalam rangka mendukung Indonesia Maju.</p>
                            <br/>
                            <p className='tracking-wider'>Dengan visi baru ini, eksistensi BPS sebagai penyedia data dan informasi statistik menjadi semakin penting, karena memegang peran dan pengaruh sentral dalam penyediaan statistik berkualitas tidak hanya di Indonesia, melainkan juga di tingkat dunia. Dengan visi tersebut juga, semakin menguatkan peran BPS sebagai pembina data statistik.</p>
                            <br/>
                            <p className='text-black text-md font-bold'>Misi</p>
                            <p className='tracking-wider'>Misi BPS dirumuskan dengan memperhatikan fungsi dan kewenangan BPS, visi BPS serta melaksanakan Misi Presiden dan Wakil Presiden yang Ke-1 (Peningkatan Kualitas Manusia Indonesia), Ke-2 (Struktur Ekonomi yang Produktif, Mandiri, dan Berdaya Saing) dan yang Ke-3 Pembangunan yang Merata dan Berkeadilan, dengan uraian sebagai berikut:
                            <ol className='list-decimal px-6 mx-5'>
                                <li>Menyediakan statistik berkualitas yang berstandar nasional dan internasional</li>
                                <li>Membina K/L/D/I melalui Sistem Statistik Nasional yang berkesinambungan</li>
                                <li>Mewujudkan pelayanan prima di bidang statistik untuk terwujudnya Sistem Statistik Nasional</li>
                                <li>Membangun SDM yang unggul dan adaptif berlandaskan nilai profesionalisme, integritas dan amanah</li>
                            </ol>
                            </p>
                            <br/>
                            <p className='text-black text-md font-bold '>Nilai-Nilai Inti</p>
                            <p className='tracking-wider'>Core values (nilai–nilai inti) BPS merupakan pondasi yang kokoh untuk membangun jati diri dan penuntun perilaku setiap insan BPS dalam melaksanakan tugas.<br/>Nilai-nilai Inti BPS terdiri dari:</p>
                            <p className='tracking-wider font-bold text-lg'>1. PROFESIONAL</p>
                            <ol className='list-[lower-alpha] px-6 mx-5'>
                                <li>Kompeten <p>Mempunyai keahlian dalam bidang tugas yang diemban</p></li>
                                <li>Efektif <p>Memberikan hasil maksimal</p></li>
                                <li>Efisien <p>Mengerjakan setiap tugas secara produktif, dengan sumber daya minimal</p></li>
                                <li>Inovatif <p>Selalu melaukan permbaruan dan/atau penyempurnaan melalui proses pembelajaran diri secara terus menerus</p></li>
                                <li>Sistemik <p>Meyakini bahwa setiap pekerjaan mempunyai tata urutan proses perkerjaan yang satu menjadi bagian tidak terpisahkan dari  pekerjaan yang lain.</p></li>
                            </ol>
                            <p className='tracking-wider font-bold text-lg'>2. INTEGRITAS</p>
                            <ol className='list-[lower-alpha] px-6 mx-5'>
                                <li>Dedikasi <p>Memiliki pengabdian yang tinggi terhadap profesi yang diemban dan institusi</p></li>
                                <li>Disiplin <p>Melaksanakan pekerjaan sesuai dengan ketentuan yang telah ditetapkan</p></li>
                                <li>Konsisten <p>Satunya kata dengan perbuatan</p></li>
                                <li>Terbuka <p>Menghargai ide, saran, pendapat, masukan, dan kritik dari berbagai pihak</p></li>
                                <li>Akuntabel <p>Bertanggung jawab dan setiap langkahnya terukur</p></li>
                            </ol>
                            <p className='tracking-wider font-bold text-lg'>3. Amanah</p>
                            <ol className='list-[lower-alpha] px-6 mx-5'>
                                <li>Terpercaya <p>Melaksanakan pekerjaan sesuai dengan ketentuan, yang tidak hanya didasarkan pada logika tetapi juga sekaligus menyentuh dimensi mental spiritual</p></li>
                                <li>Jujur <p>Melaksanakan semua pekerjaan dengan tidak menyimpang dari prinsip moralitas</p></li>
                                <li>Tulus <p>Melaksanakan tugas tanpa pamrih, menghindari konflik kepentingan (pribadi, kelompok, dan golongan), serta mendedikasikan semua tugas untuk perlindungan kehidupan manusia, sebagai amal ibadah atau perbuatan untuk Tuhan Yang Maha Esa</p></li>
                                <li>Adil <p>Menempatkan sesuatu secara berkeadilan dan memberikan haknya</p></li>
                            </ol>
                        </div>
                    </div>}
                    {values === 2 && <div className='p-4 rounded-lg block w-[50rem] h-[70vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                        <p className='text-black text-md font-bold'>Struktur Organisasi BPS Kabupaten Nabire</p>
                        <p className='tracking-wider'>Sehubungan dengan adanya kebijakan penyederhanaan birokrasi guna mewujudkan organisasi yang lebih proporsional, efektif dan efisien, maka Badan Pusat Statistik kembali melakukan penataan organisasi dan tata kerja baik pusat, provinsi maupun kabupaten/kota.</p>
                        <br/>
                        <p>Badan Pusat Statistik menuangkan hasil penyederhanaan birokrasi ini dalam Peraturan Badan Pusat Statistik Nomor 8 Tahun 2020 Tentang Organisasi dan Tata Kerja Badan Pusat Statistik Provinsi dan Badan Pusat Statistik Kabupaten/Kota.</p>
                        <br/>
                        <img src={fotoorganisasi} className='w-full' alt='foto-organisasi'></img>
                        <p className='text-black font-bold text-md'>Deskripsi</p>
                        <p className='tracking-wider'>BPS Kabupaten Nabire dipimpin oleh seorang Kepala yang mempunyai tugas memimpin BPS Kabupaten sesuai dengan ketentuan peraturan perundang-undangan yang berlaku; menyiapkan kebijakan Kabupaten dan kebijakan umum sesuai dengan tugas BPS; menetapkan kebijakan teknis pelaksanaan tugas BPS Kabupaten yang menjadi tanggung jawabnya; serta membina dan melaksanakan kerja sama dengan instansi dan organisasi lain. Kepala dibantu oleh seorang Kepala Bagian Umum yang mempunyai tugas mengkoordinasikan perencanaan, pembinaan, pengendalian administrasi, dan sumber daya di lingkungan BPS Kabupaten Nabire</p>
                        <p className='tracking-wider'>Tenaga Fungsional BPS Kabupaten Nabire terdiri dari tenaga fungsional yang bekerja di BPS Kabupaten Nabire. BPS Kabupaten Nabire adalah instansi vertikal BPS yang berada di bawah dan bertanggung jawab kepada Kepala BPS Provinsi Papua.</p>
                        <p className='tracking-wider'>Berikut Daftar Nama Pegawai dan Jabatan Satker BPS Kabupaten Nabire</p>
                        <table className='border text-center border-black'>
                            <thead className='border-b border-black'>
                                <tr>
                                    <th className='text-md font-medium text-gray-900 px-6 py-4 border-r border-black'>No</th>
                                    <th className='text-md font-medium text-gray-900 px-6 py-4'>Nama Lengkap</th>
                                    <th className='text-md font-medium text-gray-900 px-6 py-4'>Jabatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableorga.map((data)=>{
                                    return(
                                    <tr key={data.id}>
			                            <td className='text-md font-medium text-gray-900 px-6 border-r border-black border-b'>{data.td1}</td>
			                            <td className='text-md font-medium text-gray-900 px-6 border-r border-black border-b'>{data.td2}</td>
			                            <td className='text-md font-medium text-gray-900 px-6 border-r border-black border-b'>{data.td3}</td>
		                            </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                        </div>
                    </div>}
                    {values === 3 && <div className='p-4 rounded-lg block w-[50rem] h-[70vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                        <p className='text-md tracking-wider'>Tugas, fungsi dan kewenangan BPS telah ditetapkan berdasarkan Peraturan Presiden Nomor 86 Tahun 2007 tentang Badan Pusat Statistik dan Peraturan Kepala Badan Pusat Statistik Nomor 7 Tahun 2008 tentang Organisasi dan Tata Kerja Badan Pusat Statistik.</p>
                        <br/>
                        <p className='text-md font-bold'>1. Tugas</p>
                        <p className='tracking-wider'>Melaksanakan tugas pemerintahan dibidang statistik sesuai peraturan perundang-undangan.</p>
                        <br/>
                        <p className='text-md font-bold'>2. Fungsi</p>
                        <ol className='list-[lower-alpha] px-6 mx-5'>
                            <li>Pengkajian, penyusunan dan perumusan kebijakan dibidang statistik;</li>
                            <li>Pengkoordinasian kegiatan statistik nasional dan regional;</li>
                            <li>Penetapan dan penyelenggaraan statistik dasar</li>
                            <li> Penetapan sistem statistik nasional;</li>
                            <li>Pembinaan dan fasilitasi terhadap kegiatan instansi pemerintah dibidang kegiatan statistik; dan</li>
                            <li>Penyelenggaraan pembinaan dan pelayanan administrasi umum dibidang perencanaan umum, ketatausahaan, organisasi dan tatalaksana, kepegawaian, keuangan, kearsipan, kehumasan, hukum, perlengkapan dan rumah tangga.</li>
                        </ol>
                        <p className='text-md font-bold'>3. Kewenangan</p>
                        <ol className='list-[lower-alpha] px-6 mx-5'>
                            <li>Penyusunan rencana nasional secara makro di bidangnya</li>
                            <li>Perumusan kebijakan di bidangnya untuk mendukung pembangunan secara makro;</li>
                            <li>Penetapan sistem informasi di bidangnya;</li>
                            <li> Penetapan dan penyelenggaraan statistik nasional;</li>
                            <li>Kewenangan lain sesuai dengan ketentuan peraturan perundang-undangan yang berlaku, yaitu;</li>
                            <li>
                                <ol className='list-[upper-roman]'>
                                    <li>Perumusan dan pelaksanaan kebijakan tertentu di bidang kegiatan statistik;</li>
                                    <li>Penyusun pedoman penyelenggaraan survei statistik sektoral.</li>
                                </ol>
                            </li>
                        </ol>
                        </div>
                    </div>}
                    {values === 4 && <div className='p-4 rounded-lg block w-[50rem] h-[70vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                            <p className='tracking-wider'>Tahap pengolahan data sangat menentukan seberapa jauh tingkat keakuratan dan ketepatan data statistik yang dihasilkan. BPS merupakan instansi perintis dalam penggunaan komputer karena telah memulai menggunakannya sejak sekitar 1960. Sebelum menggunakan komputer, BPS menggunakan kalkulator dan alat hitung sipoa dalam mengolah data.</p>
                            <br/>
                            <p className='tracking-wider'>Teknologi komputer yang diterapkan di BPS selalu disesuaikan dengan perkembangan teknologi informasi dan juga mengacu kepada kebutuhan. Personal komputer yang secara umum lebih murah dan efisien telah dicoba digunakan untuk menggantikan mainframe. Sejak 1980-an, personal komputer telah digunakan di seluruh kantor BPS provinsi, diikuti dengan penggunaan komputer di seluruh BPS kabupaten dan kota sejak 1992.</p>
                            <br/>
                            <p className='tracking-wider'>Dengan menggunakan personal komputer, kantor statistik di daerah dapat segera memproses pengolahan data, yang merupakan rangkaian kegiatan yang dimulai dari pengumpulan data, kemudian memasukkan data mentah ke dalam komputer dan selanjutnya data tersebut dikirim ke BPS pusat untuk diolah menjadi data nasional.</p>
                            <br/>
                            <p className='tracking-wider'>Pengolahan data menggunakan personal komputer telah lama menjadi contoh pengolahan yang diterapkan oleh direktorat teknis di BPS pusat, terutama jika direktorat tersebut harus mempublikasikan hasil yang diperoleh dari survei yang diselenggarakan.</p>
                            <br/>
                            <p className='tracking-wider'>Pengolahan data Sensus Penduduk tahun 2000 telah menggunakan mesin scanner, tujuannya untuk mempercepat kegiatan pengolahan data. Efek positif dari penggunaan komputer oleh direktorat teknis yaitu selain lebih cepat, juga dapat memotivasi pegawai yang terlibat turut bertanggung jawab untuk menghasilkan sebanyak mungkin data statistik dan indikator secara tepat waktu dan akurat dibanding sebelumnya. Selain itu, penggunaan computer sangat mendukung BPS dalam menghasilkan berbagai data statistik dan indikator-indikator yang rumit seperti kemiskinan, Input-Output (I-O) table, Social Accounting Matrix (SAM), dan berbagai macam indeks komposit dalam waktu yang relatif singkat.</p>
                            <br/>
                            <p className='tracking-wider'>Pada 1993, BPS mulai mengembangkan sebuah sistem informasi statistik secara geografis khususnya untuk pengolahan data wilayah sampai unit administrasi yang terkecil yang telah mulai dibuat secara manual sejak 1970. Data wilayah ini dibuat khususnya untuk menyajikan karakteristik daerah yang menonjol yang diperlukan oleh para perumus kebijakan dalam perencanaan pembangunan.</p>
                            <br/>
                            <p className='tracking-wider'>Dalam mengolah data, BPS juga telah mengembangkan berbagai program aplikasi untuk data entry, editing, validasi, tabulasi dan analisis dengan menggunakan berbagai macam bahasa dan paket komputer. BPS bertanggung jawab untuk mengembangkan berbagai perangkat lunak komputer serta mentransfer pengetahuan dan keahliannya kepada staf BPS daerah.</p>
                            <br/>
                            <p className='tracking-wider'>Pembangunan infrastruktur teknologi informasi di BPS didasarkan pada tujuan yang ingin dicapai yaitu mengikuti perkembangan permintaan dan kebutuhan dalam pengolahan data statistik; melakukan pembaharuan/inovasi dalam hal metode kerja yang lebih baik serta memberikan kemudahan kepada publik dalam mendapatkan informasi statistik.</p>
                        </div>
                    </div>}
                    {values === 5 && <div className='p-4 rounded-lg block w-[50rem] h-[70vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                            <p className='tracking-wider'>Kegiatan statistik di Indonesia sudah dilaksanakan sejak masa Pemerintahan Hindia Belanda oleh suatu lembaga yang didirikan oleh Direktur Pertanian, Kerajinan, dan Perdagangan (Directeur Van Landbouw Nijverheld en Handel) di Bogor. Pada Februari 1920 Lembaga tersebut bertugas mengolah dan mempublikasikan data statistik. Pada 24 September 1924, kegiatan statistik pindah ke Jakarta dengan nama Centraal Kantoor Voor De Statistiek (CKS) dan melaksanakan Sensus Penduduk pertama di Indonesia pada tahun 1930. Pada masa Pemerintahan Jepang di Indonesia pada tahun 1942-1945, CKS berubah nama menjadi Shomubu Chosasitsu Gunseikanbu dengan kegiatan memenuhi kebutuhan perang/militer.</p>
                            <br/>
                            <p className='tracking-wider'>Setelah Kemerdekaan Republik Indonesia (RI) diproklamasikan pada tanggal 17 Agustus 1945, lembaga tersebut dinasionalisasikan dengan nama Kantor Penyelidikan Perangkaan Umum Republik Indonesia (KAPPURI) dan dipimpin oleh Mr. Abdul Karim Pringgodigdo. Setelah adanya Surat Edaran Kementerian Kemakmuran tanggal 12 Juni 1950 Nomor 219/S.C., lembaga KAPPURI dan CKS dilebur menjadi Kantor Pusat Statistik (KPS) dibawah tanggung jawab Menteri Kemakmuran.</p>
                            <br/>
                            <p className='tracking-wider'>Berdasarkan Surat Keputusan Menteri Perekonomian Nomor P/44, KPS bertanggungjawab kepada Menteri Perekonomian. Selanjutnya, melalui SK Menteri Perekonomian tanggal 24 Desember 1953 Nomor IB.099/M kegiatan KPS dibagi dalam dua bagian yaitu Afdeling A (Bagian Riset) dan Afdeling B (Bagian penyelenggaraan dan Tata Usaha). Berdasarkan Keppres X nomor 172 tanggal 1 Juni 1957, KPS berubah menjadi Biro Pusat Statistik dan bertanggungjawab langsung kepada Perdana Menteri.</p>
                            <br/>
                            <p className='tracking-wider'>Sesuai dengan UU No.6/1960 tentang Sensus, BPS menyelenggarakan Sensus Penduduk serentak di pada tahun 1961. Sensus Penduduk tersebut merupakan Sensus Penduduk pertama setelah Indonesia merdeka. Sensus Penduduk di tingkat provinsi dilaksanakan oleh Kantor Gubernur, dan di tingkat Kabupaten/Kotamadya dilaksanakan oleh kantor Bupati/Walikota, sedangkan pada tingkat Kecamatan dibentuk bagian yang melaksanakan Sensus Penduduk. Selanjutnya Penyelenggara Sensus di Kantor Gubernur dan Kantor Bupati/Walikota ditetapkan menjadi Kantor Sensus dan Statistik Daerah berdasarkan Keputusan Presidium Kabinet Nomor Aa/C/9 Tahun 1965.</p>
                            <br/>
                            <p className='tracking-wider'>Berdasarkan Peraturan Pemerintah No.16/1968 yang mengatur tentang Organisasi dan Tata Kerja BPS di Pusat dan Daerah serta perubahannya menjadi PP No.6/1980, menyebutkan bahwa perwakilan BPS di daerah adalah Kantor Satistik Provinsi dan Kantor Statistik Kabupaten atau Kotamadya. Tentang Organisasi BPS ditetapkan kembali pada PP No. 2 Tahun 1992 yang disahkan pada 9 Januari 1992. Selanjutnya, Kedudukan, Fungsi, Tugas, Susunan Organisasi, dan Tata Kerja BPS diatur dengan Keputusan Presiden Nomor 6 Tahun 1992.</p>
                            <br/>
                            <p className='tracking-wider'>Pada tanggal 26 September 1997 ditetapkan UU Nomor 16 Tahun 1997 tentang Statistik, dimana Biro Pusat Statistik diubah namanya menjadi “Badan Pusat Statistik”, dan sekaligus menetapkan tanggal tersebut sebagai ”Hari Statistik”. Pada Keputusan Presiden No.86 Tahun 1998 tentang Badan Pusat Statistik, menetapkan bahwa perwakilan BPS di daerah merupakan Instansi Vertikal dengan nama BPS Provinsi, BPS Kabupaten, dan BPS Kotamadya. Serta pada tanggal 26 Mei 1999, ditetapkan PP Nomor 51 tahun 1999 tentang Penyelenggaraan Statistik di Indonesia.</p>
                        </div>
                    </div>}
                    {values === 6 && <div className='p-4 rounded-lg block w-[50rem] h-[70vh] overflow-y-auto' id='inforumum' role='tabpanel' aria-labelledby='tab-inforumum'>
                        <div className='flex-col font-medium'>
                            <img src={logo} alt='logo' className='w-[15rem]'></img>
                            <p className='tracking-wider'>Logo pada Badan Pusat Statistik memiliki warna biru, hijau dan orange dan disetiap warna memiliki arti khusus, yaitu :</p>
                            <br/>
                            <p className='font-bold text-md'>Biru</p>
                            <p className='tracking-wider'>Melambangkan kegiatan sensus penduduk yang dilakukan sepuluh tahun sekali pada setiap tahun yang berakhiran angka 0 (nol).</p>
                            <br/>
                            <p className='font-bold text-md'>Hijau</p>
                            <p className='tracking-wider'>Melambangkan kegiatan sensus pertanian yang dilakukan sepuluh tahun sekali pada setiap tahun yang berakhiran angka 3 (tiga).</p>
                            <br/>
                            <p className='font-bold text-md'>Orange</p>
                            <p className='tracking-wider'>Melambangkan kegiatan sensus ekonomi yang dilakukan sepuluh tahun sekali pada setiap tahun yang berakhiran angka 6 (enam).</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TentangKami