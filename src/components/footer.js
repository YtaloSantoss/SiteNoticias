import React from "react"
//import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./footer.css"

export const Footer = () => {
  return (
    <>
      <footer className='conteinerfooter1'>
        <div className='containerfooter'>
          <p className="pfooter">@2023 | Direitos Autorais PROPRIÁ ACONTECE - Todos os Direitos Reservados | Site Desenvolvido por Ytalo Mateus</p>
          <div className='socialfooter'>
            <a href="https://www.facebook.com/groups/882315565186750" target="_blank"> <BsFacebook className='iconfooter' /></a>
            <a href="https://www.instagram.com/propriaaconteceofc" target="_blank"> <RiInstagramFill className='iconfooter' /></a>


          </div>
        </div>
        <a href="#menu" > <img src="./seta-para-cima.png" className="cetacima" alt="" /></a>

      </footer>
    </>
  )
}