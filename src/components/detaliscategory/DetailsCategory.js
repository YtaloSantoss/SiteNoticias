import { useState } from "react"
import "./detailscategory.css"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { category } from "../../assets/data/data"

export const DetailsCategory = () => {
  const { id } = useParams()
  const [categorys, setCategory] = useState(null)

  useEffect(() => {
    let categorys = category.find((categorys) => categorys.id === parseInt(id))
    if (categorys) {
      setCategory(categorys)
    }
  }, [id])

  return (
    <>
      {categorys ? (
        <section className='singlePage'>
          <div className="title01">
            <h1 className="h1CategoryDetails">Principais Notícias</h1>
          </div>
          <div >
            <p className="p001">{categorys.category}</p>
            <p className="p01">{categorys.title}</p>
          </div>
          <div className="data01">
            <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{categorys.data}</label>
          </div>
          <div className='containerDetls '>
            {categorys.covercategory && (
              <div className='img01'>
                <img src={categorys.covercategory} alt='' />
              </div>
            )}
            {categorys.videocategory && (
              <div className="video01 ">
                <video controls  >
                  <source src={categorys.videocategory} type="video/mp4" />
                  <source src={categorys.videocategory} type="video/webm" />
                </video>
              </div>
            )}

          </div>

          <div className='text '>
            <p className="p02">{categorys.desccategory}</p>
          </div>

          <div className='containerDetls '>
            {categorys.covercategory2 && (
              <div className='img01'>
                <img src={categorys.covercategory2} alt='' />
              </div>
            )}
            {categorys.videocategory2 && (
              <div className="video01 ">
                <video controls  >
                  <source src={categorys.videocategory2} type="video/mp4" />
                  <source src={categorys.videocategory2} type="video/webm" />
                </video>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  )
}