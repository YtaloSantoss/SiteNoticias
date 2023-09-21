import "./categoryEventos.css"
import { categoryEventos } from "../../assets/data/data"
import { useEffect, useState } from "react";
//reponsividade 3d do carrosel start...........
//import { register } from "swiper/element/bundle";
//register();
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

//reponsividade 3d do carrosel end...............

export const CategoryEventos = () => {
  const [slidesPerView, setSlidesPerView] = useState(2)




  useEffect(() => {
    function handleResize() {
      switch (true) {
        case window.innerWidth < 460:
          setSlidesPerView(1);
          break;
        case window.innerWidth < 769:
          setSlidesPerView(2);
          break;
        default:
          setSlidesPerView(3);
          break;
      }
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <>
      <section className='categoryEventos'>
        <div className="title01Eventos">
          <h1 className="h1Eventos">Eventos e Programações</h1>
        </div>
        <div className='contentEventos'>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,]}
            effect=""
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
          >

            {categoryEventos.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/detaliscategoryEventos/${item.id}`} >
                  <div className='boxEventos'  >
                    <img src={item.coverEventos} alt='Slide' className="slide-itemEventos" />
                    <div className='overlayEventos'>
                      <h4>{item.categoryEventos}</h4>
                      <p>{item.titleEventos.slice(0, 54)}..</p>
                    </div>
                  </div>
                </Link >
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>
    </>
  )
}