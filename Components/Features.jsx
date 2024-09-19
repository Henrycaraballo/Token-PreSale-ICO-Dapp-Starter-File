import React from "react";

const Features = () => {
  return (
    <section className="features pos-rel pb-150 mb-0-pb">
      <div className="container">
        <div className="sec-title tex-center mb-95">
          <h5 className="sec-title__subtitle">¿POR QUÉ PARTICIPAR?</h5>
          <h2 className="sec-title__title mb-25">¿Por qué elegir nuestro token?</h2>
        </div>

        <div className="feature__wrap pos-rel ul_li_between">
          <div className="feature__items text-center">
            <div className="icon">
              <img src="assets/img/icon/f_01.svg" alt="" />
            </div>

            <h4>
              Amplia <br /> usabilidad
            </h4>
          </div>
          <div className="feature__items text-center">
            <div className="icon">
              <img src="assets/img/icon/f_02.svg" alt="" />
            </div>

            <h4>
              Oportunidad <br /> Empresarial
            </h4>
          </div>
          <div className="feature__items text-center">
            <div className="icon">
              <img src="assets/img/icon/f_03.svg" alt="" />
            </div>

            <h4>
              Beneficios <br /> Recurrentes
            </h4>
          </div>
          <div className="feature__items text-center">
            <div className="icon">
              <img src="assets/img/icon/f_04.svg" alt="" />
            </div>

            <h4>
              Valores <br /> Seguros
            </h4>
          </div>

          <div className="features__line-shape">
            <img src="assets/img/shape/f_shape.png" alt="" />
          </div>
        </div>
      </div>

      <div className="features_sec-shape">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
    </section>
  ); 
};

export default Features;
