import React from "react";

export default function Main() {
  return (
    <main>

      <h1 className="main--name">Zee Jay</h1>
      <p className="main--position">Frontend Developer</p>
      <p className="main--website">zee.jay@yp.com</p>

      <div className="main--buttons">
        <a href="mailto:zj.bulawan@gmail.com" className="email">Email</a>
        <a href="https://www.linkedin.com/in/zouave-jul-bulawan-5b91a3135/" className="linkedin">LinkedIn</a>
      </div>

      <section>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep myself sane, and I'm always looking for new things to learn.</p>
      </section>
      <section>
        <h3>Interests</h3>
        <p>Food expert. Sleep Sometimes. Eat Sometimes. Drink Always.</p>
      </section>
    </main>
  )
}