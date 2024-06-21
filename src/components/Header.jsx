import React from "react"

export default function Header() {
  return (
    <header>
      <img className="header--photo" src="./src/assets/images/primary.jpg" alt="" />
      <figure className="main--qr">
        <a href="https://qrco.de/bfAuDr" target="_blank"><img src="./src/assets/images/qr_zj.jpg" alt="qr-code" /></a>
      </figure>
    </header>
  )
}