import Hero from "./Hero";
import CardJurusan from "./CardJurusan";
import CardKegiatan from "./CardKegiatan";
import jurusan1 from './../assets/PTS.jpg'
import jurusan2 from './../assets/23.jpeg'
import jurusan3 from './../assets/32.jpg'
import kegiatan1 from './../assets/basket.jpg'
import kegiatan2 from './../assets/basket.jpg'
import kegiatan3 from './../assets/basket.jpg'
import kegiatan4 from './../assets/basket.jpg'

const MainContent = () => {
  return (
    <div>
      <Hero />
      <div className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
                <h1>Jurusan Sekolah</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
                <CardJurusan image={jurusan1} jurusan= "Teknik Komputer jaringan" />
            </div>
            <div className="col-lg-4 col-12">
                <CardJurusan image={jurusan2} jurusan= "Teknik Kendaraan Bermotor" />
            </div>
            <div className="col-lg-4 col-12">
                <CardJurusan image={jurusan3} jurusan= "Akuntansi" />
            </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Kegiatan</h1>
            </div>
            <div className="col-12 my-3">
              <CardKegiatan image={kegiatan1} description= "Loremjhjfsdkjflskfjsldfjsldfsldljfshjfsko348" />
            </div>
          </div>
            <div className="col-12 my-3">
              <CardKegiatan image={kegiatan2} description= "Loremjhjfsdkjflskfjsldfjsldfsldljfshjfsko348" />
            </div>
          </div>
            <div className="col-12 my-3">
              <CardKegiatan image={kegiatan3} description= "Loremjhjfsdkjflskfjsldfjsldfsldljfshjfsko348" />
            </div>
          </div>


  )
}

export default MainContent