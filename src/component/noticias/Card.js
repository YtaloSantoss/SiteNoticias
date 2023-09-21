import "./card.css"
import { blog } from "../../assets/data/data"
import { AiOutlineClockCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <section className='blog'>
      <div className="title01">
        <h1 className="h1Card">Ultimas Notícias do Mês</h1>
      </div>

      <div className='container grid3'>
        {blog.map((item) => (
          <div className='box boxItems' key={item.id}>
            {item.cover && (
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
            )}
            {item.video && (
              <div className="video">
                <video height="250" controls>
                  <source src={item.video} type="video/mp4" />
                  <source src={item.video} type="video/webm" />
                </video>
              </div>
            )}
            <div className='details'>
              <p className="p01">{item.title.slice(0, 55)}...</p>
              <p className="p02">{item.desc.slice(0, 180)}...</p>
              <Link to={`/details/${item.id}`} className='link'>
                <div className='tag'>
                  <button className="buttoncard">Mais informações</button>
                </div>
              </Link>
              <div className='date'>
                <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Card