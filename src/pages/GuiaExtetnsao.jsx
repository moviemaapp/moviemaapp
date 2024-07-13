import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
  }, [pathname]);

  return null;
};

const GuiaExtetnsao = () => {
  return (
    <>
      <ScrollToTop />
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Guia Projetos de Extensão</h2>
            <ol>
              <li>
                <Link to="/moviemaapp/">Home</Link>
              </li>
              <li>Guia Projetos de Extensão</li>
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
                INTRODUÇÃO - O Tripé:{" "}
                  <strong>ENSINO, PESQUISA e EXTENSÃO para
Escolas de Tempo Integral
</strong>
                </h3>
                <p> 
                As escolas de tempo integral apresentam uma abordagem educacional
holística que visa não apenas a formação acadêmica, mas também o
desenvolvimento integral dos alunos. Nessa perspectiva, o tripé ensino,
pesquisa e extensão se torna fundamental para a construção de um
ambiente educativo completo e integrado. Cada um desses pilares
contribui de maneira única para a formação dos estudantes, e sua
interligação oferece uma educação rica e diversificada.

                </p>

                <h3>
                  <strong>ENSINO</strong>
                </h3>
                <p>
                1.1 Fortalecimento do Currículo Acadêmico
O ensino em escolas de tempo integral vai além do currículo tradicional,
proporcionando uma gama diversificada de disciplinas e atividades. Esse
modelo permite uma maior profundidade no aprendizado, com horários
mais flexíveis para abordar temas de maneira mais aprofundada e
interativa. O ensino é planejado para desenvolver competências
acadêmicas, socioemocionais e práticas, preparando os alunos para
desafios futuros tanto na vida acadêmica quanto no mercado de trabalho.

                </p>

                      
                <p> <a className="btn-get-default" target="_blank" href="/moviemaapp/assets/docs/Guia_pratico_para_Projetos_de_Extensao_em_escolas_da_Educacao_Basica.pdf">Acessar guia Completo</a></p>
              </div>
            </div>

            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
              <img
                src="/moviemaapp/assets/docs/guia_extensao.png"
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

export default GuiaExtetnsao