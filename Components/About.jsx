import React from "react";

const About = () => {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container"> 
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wos fadeInLeft">
              <img src="assets/img/about/about_img-png" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
          <div className="about__content wow fadeInRight" data-wow-dela="100ms"
          >
            <div className="sec-title mb-35">
              <h5 className="sec-title__subtitle">¿Qué es ICO Crypto</h5>
              <h2 className="sec-title__title mb-25">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae blanditiis alias in aspernatur dolorum.
              </p>
            </div>

            <ul className="about__list ul_li">
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Plataforma Descentralizada
              </li>
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Mecanismo Recompensa
              </li>
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Sabiduría colectiva
              </li>
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Protección de Participantes
              </li>
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Fases de la Colocación
              </li>
              <li>
                <img src="asset/img/icon/a_arrow.svg" alt="" />
                  Registro en Exchanges
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="about__sec-shape">
        <img src="assets/img/shape/s_shape_2.png" alt="" />
      </div>
    </section>
  );
};

export default About;
