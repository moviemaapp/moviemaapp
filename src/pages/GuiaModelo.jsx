import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
  }, [pathname]);

  return null;
};

const GuiaModelo = () => {
  return (
    <>
      <ScrollToTop />
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Modelo de Projeto</h2>
            <ol>
              <li>
                <Link to="/moviemaapp/">Home</Link>
              </li>
              <li>Modelo de Projeto</li>
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
                  <strong>Contexto</strong>
                </h3>
                <p> 
                  A escola XYZ identificou a necessidade de promover atividades físicas regulares e integradas ao
                  currículo, além de incentivar a prática de esportes como ferramenta para o desenvolvimento de
                  habilidades sociais e emocionais entre seus alunos e a comunidade local.
                </p>

                <h3>
                  <strong>Objetivos</strong>
                </h3>
                <p>
                <ul>
                  <li>Geral: Promover a prática de esportes como ferramenta para o desenvolvimento integral dos
                  alunos.</li>
                  <li>Específicos:</li>
                  <li>Melhorar a saúde física e mental dos alunos.</li>
                  <li>Desenvolver habilidades sociais, como trabalho em equipe e liderança.</li>
                  <li>Envolver a comunidade escolar e local nas atividades esportivas.</li>
                </ul>

                </p>

                      
                <p> <a className="btn-get-default" target="_blank" href="/moviemaapp/assets/docs/Projeto_exemplo_para_Extensao_na_Educacao_Basica.pdf">Acessar guia Completo</a></p>
              </div>
            </div>

            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
              <img
                src="/moviemaapp/assets/docs/guia_modelo.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          {/* <!-- post list item --> */}

          <div className="col-lg-12 mt-5">
            <div className="row gy-4 posts-list">
             
             
            </div>
          </div>
          {/* <!-- End post list item --> */}
        </div>
      </section>
      {/* <!-- End PROJETOS Section --> */}
    </>
  );
}

export default GuiaModelo