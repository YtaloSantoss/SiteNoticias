import "./carousel.css"
import { category } from "../../assets/data/data"
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

export const Category = () => {
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
      <section className='category'>
        <div className="title01">
          <h1 className="h1Category">Principais Notícias</h1>
        </div>
        <div className='content'>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,]}
            effect=""
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
          >

            {category.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/detaliscategory/${item.id}`} >
                  <div className='box'  >
                    <img src={item.cover} alt='Slide' className="slide-item" />
                    <div className='overlay'>
                      <h4>{item.category}</h4>
                      <p>{item.title.slice(0, 54)}..</p>
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