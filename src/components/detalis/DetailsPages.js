import { useState } from "react"
import "./details.css"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [id])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div >
            <p className="p01">{blogs.title}</p>
          </div>
          <div className="data01">
            <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{blogs.date}</label>
          </div>
          <div className='containerDetls '>
            {blogs.coverdetls && (
              <div className='img01'>
                <img src={blogs.coverdetls} alt='' />
              </div>
            )}
            {blogs.videodetls && (
              <div className="video01 ">
                <video controls  >
                  <source src={blogs.videodetls} type="video/mp4" />
                  <source src={blogs.videodetls} type="video/webm" />
                </video>
              </div>
            )}

          </div>

          <div className='text '>
            <p className="p02">{blogs.desc}</p>
          </div>

          <div className='containerDetls '>
            {blogs.coverdetls2 && (
              <div className='img01'>
                <img src={blogs.coverdetls2} alt='' />
              </div>
            )}
            {blogs.videodetls2 && (
              <div className="video01 ">
                <video controls  >
                  <source src={blogs.videodetls2} type="video/mp4" />
                  <source src={blogs.videodetls2} type="video/webm" />
                </video>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  )
}