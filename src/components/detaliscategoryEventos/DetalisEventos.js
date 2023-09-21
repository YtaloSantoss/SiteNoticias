import { useState } from "react"
import "./detailscategoryEventos.css"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { categoryEventos } from "../../assets/data/data"

export const DetailsEventos = () => {
  const { id } = useParams()
  const [categorys, setCategory] = useState(null)

  useEffect(() => {
    let categorys = categoryEventos.find((categorys) => categorys.id === parseInt(id))
    if (categorys) {
      setCategory(categorys)
    }
  }, [id])

  return (
    <>

      {categorys ? (
        <section className='singlePageEventos'>
          <div className="title01Eventos">
            <h1 className="h1EventosDetalis">Eventos e Programações</h1>
          </div>

          <div >
            <p className="p001Eventos">{categorys.categoryEventos}</p>
            <p className="p01Eventos">{categorys.titleEventos}</p>
          </div>
          <div className="data01Eventos">
            <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{categorys.dataEventos}</label>
          </div>
          <div className='containerDetlsEventos '>
            {categorys.covercategoryEventos && (
              <div className='img01Eventos'>
                <img src={categorys.covercategoryEventos} alt='' />
              </div>
            )}
            {categorys.videocategoryEventos && (
              <div className="video01Eventos ">
                <video controls  >
                  <source src={categorys.videocategoryEventos} type="video/mp4" />
                  <source src={categorys.videocategoryEventos} type="video/webm" />
                </video>
              </div>
            )}

          </div>

          <div className='textEventos '>
            <p className="p02Eventos">{categorys.desccategoryEventos}</p>
          </div>

          <div className='containerDetlsEventos '>
            {categorys.covercategory2Eventos && (
              <div className='img01Eventos'>
                <img src={categorys.covercategory2Eventos} alt='' />
              </div>
            )}
            {categorys.videocategory2Eventos && (
              <div className="video01Eventos ">
                <video controls  >
                  <source src={categorys.videocategory2Eventos} type="video/mp4" />
                  <source src={categorys.videocategory2Eventos} type="video/webm" />
                </video>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  )
}