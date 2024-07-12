import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
    }, [pathname]);
  
    return null;
  };

const OlimpEsportes = () => {
    return (
        <>
          <ScrollToTop />
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <div className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Olimpíada MovIEMA de Esportes</h2>
                <ol>
                  <li>
                    <Link to="/moviemaapp/">Home</Link>
                  </li>
                  <li>Olimpíada MovIEMA de Esportes</li>
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
    
              <div className="col-lg-12 mt-5">
                <div className="row gy-4 posts-list">     
                </div>
              </div>
          
            </div>
          </section>
        </>
      );
}

export default OlimpEsportes