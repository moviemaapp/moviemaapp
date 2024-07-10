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
                      O ano de 2023 consagrou o Moviema como um{" "}
                      <strong>Projeto de Extensão</strong>
                    </h3>
                    <p>
                      Passou a atender também os familiares dos estudantes e a
                      comunidade do entorno da escola. Em 15 meses de atividades, o
                      Projeto cresceu, as parcerias aumentaram, assim como a
                      clientela. Festejamos o atendimento de 398 inscritos e
                      atuantes em 20 atividades.
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
    
              {/* <!-- post list item --> */}
    
      
              {/* <!-- End post list item --> */}
            </div>
          </section>
          {/* <!-- End PROJETOS Section --> */}
        </>
      );
}

export default experiencias