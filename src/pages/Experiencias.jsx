import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
    }, [pathname]);
  
    return null;
  };

const experiencias = () => {
    return (
        <>
          <ScrollToTop />
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <div className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Experiências</h2>
                <ol>
                  <li>
                    <Link to="/moviemaapp/">Home</Link>
                  </li>
                  <li>Experiências</li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- End Breadcrumbs --> */}
    
          {/* <!-- ======= PROJETOS Section ======= --> */}
          <section id="" className="faq" style={{ paddingTop: '20px' }}>
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                  <div className="content px-xl-5">
                    <h3>
                      1ª Olimpíada MOVIEMA de Esportes
                    </h3>
                    <p>
                    O esporte e a produção científica
                    </p>
    
                    <p></p>
                  </div>
                </div>
    
                <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
                  <img
                    src="/moviemaapp/assets/img/experiencias/esportes/1_moviema_esportes.jpeg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="row gy-4 mt-2">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-2">
                  <div className="content px-xl-5">
                    <h3>
                      1ª Olimpíada MOVIEMA e Esportes
                    </h3>
                    <p>
                    A Comissão Organizadora do Moviema, neste ato representada pelo Coordenador Geral, Prof. Jonhatan Camilo, torna público o Regulamento para fins de realizar a inscrição de equipes, convida a todos os estudantes dos ensinos fundamental, médio, técnico e superior das instituições de ensino públicas e privadas, a participarem da 1ª Olimpíada Moviema de Robótica a ser realizado nos dias 23/24 de julho de 2024, no Golden Shopping, localizado na Av. dos Holandeses, 200 - Calhau I, São Luís/Ma, em conformidade com as condições e exigências estabelecidas para a organização.
                    </p>
    
                    <p>
                    <a href="https://olimpiada-moviema-robotica.vercel.app/" target="_blank">Inscrição Olimpiada de Robótica MOVIEMA</a>
                    </p>
                  </div>
                </div>
    
                <div className="col-lg-5 align-items-stretch order-1 order-lg-1 img">
                  <img
                    src="/moviemaapp/assets/img/experiencias/robotica/1_moviema_robotica.jpeg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
    
              {/* <!-- post list item --> */}
    
      
              {/* <!-- End post list item --> */}
            </div>
          </section>
          {/* <!-- End PROJETOS Section --> */}
        </>
      );
}

export default experiencias