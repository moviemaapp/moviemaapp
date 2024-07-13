import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
  }, [pathname]);

  return null;
};

const guiaMovIEMA = () => {
  return (
    <>
      <ScrollToTop />
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Projeto MovIEMA</h2>
            <ol>
              <li>
                <Link to="/moviemaapp/">Home</Link>
              </li>
              <li>Projeto MovIEMA</li>
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
                Projeto{" "}
                  <strong>Moviema</strong>
                </h3>
                <p>
                                Iniciou suas atividades em setembro de 2022, atendendo
                aos estudantes matriculados na escola, após as 17h, como uma experiência
                necessária, pós-pandemia causada pelo vírus Covid-19 e o seu impacto social. Alguns
                meses de funcionamento depois, o Projeto abriu espaço para o atendimento aos pais
                e ainda à comunidade do Centro e entorno da escola.
                </p>
                <p>
                                O Projeto foi estruturado com uma essência acolhedora e formativa, visando
                contribuir para fortalecer o protagonismo juvenil, que já tem esta vivência através dos
                Itinerários Formativos (disciplinas eletivas, projetos, oficinas, núcleos de estudo),
                entre outras atividades, que os estudantes já têm no Ensino Médio.
                </p>

                <p>O Moviema desenvolve ações envolvendo a Robótica, o empreendedorismo,
                      ensino de línguas, formação de times em diferentes modalidades esportivas, de lutas,
                      atividades nas quatro linguagens artísticas (dança, artes visuais, teatro e música).
                      </p>
                      <p>
                      Entendemos que estas, são atividades importantes para a formação integral
                      do ser humano, trazendo uma gama de ações pedagogicamente estruturadas que
                      permitem a aplicabilidade de temas que envolvem os preceitos técnicos, filosóficos e
                      terapêuticos do esporte, da cultura e da tecnologia.
                      </p>
                      <p>
                      Temos o prazer de fomentar em todas as atividades, a valorização das
                      expressões regionais e locais de forma a promover o desenvolvimento cultural, físico,
                      e mental de todos os envolvidos
                      </p>
                      
                <p> <a className="btn-get-default" target="_blank" href="/moviemaapp/assets/docs/PROJETO_MOVIEMA_2024.pdf">Acessar guia Completo</a></p>
              </div>
            </div>

            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
              <img
                src="/moviemaapp/assets/docs/guia_moviema.png"
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

export default guiaMovIEMA