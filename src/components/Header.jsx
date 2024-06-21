import React from "react"
import profile from "../assets/images/primary.jpg"
import QR from "../assets/images/qr_zj.jpg";

export default function Header() {
  return (
    <header>
      <img className="header--photo" src={profile} alt="" />
      <figure className="main--qr">
        <a href="https://qrco.de/bfAuDr" target="_blank"><img src={QR} alt="qr-code" /></a>
      </figure>
    </header>
  )
}