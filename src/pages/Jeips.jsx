import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0); // Rolagem para o topo ao mudar de rota
    }, [pathname]);
  
    return null;
  };

const Jeips = () => {
    return (
        <>
          <ScrollToTop />
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <div className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Segunda edição do JEIPS</h2>
                <ol>
                  <li>
                    <Link to="/moviemaapp/">Home</Link>
                  </li>
                  <li>Segunda edição do JEIPS</li>
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
                    Segunda edição do JEIPS
                    </h3>
                    <p>
                    A segunda edição do JEIPS celebrou todo o trabalho e engajamento da equipe Moviema, prestigiado por toda a Rede IEMA e seus colaboradores, que se uniram a nós e a outras diversificadas Instituições para o atendimento das comunidades, em serviços como: a Exposição de Arte do NACI; o PROCON emitindo carteiras do SUS e de trabalho; a CAEMA negociando dívidas; serviços odontológicos e testes rápidos pelo SES; revitalização facial e maquiagem pelo CEST; limpeza de pele, tranças, penteados pela Marykay e pelo IP Gonçalves Dias, que também fez serviços de massagem e aferição de glicemia e ainda acolhimento psicológico pela UNINASSAU.</p><p>Os serviços somaram 414 atendimentos. Foram ofertados 717 almoços. A culminância do JEIPS, que veio se desenvolvendo e se desdobrando em atividades ao longo da semana, premiou as equipes nas 3 categorias (ouro, prata e bronze) valorizando nossos estudantes e o incentivo ao esporte, em jogos como: Futsal, Basquete, Voleibol, Natação, Queimado, Handebol, Atletismo, Arco e Flecha, Tênis de mesa, Xadrez, Passa ou Repassa, Soletrando e Jogos eletrônicos. As equipes foram gloriosas em suas representatividades, a nossa fauna foi exaltada, representada com o lobo guará, tubarão tigre, arara azul e onça pintada. Percebemos que somos grandes e potentes quando unimos forças para mostrarmos nossas habilidades. Uma das provas foi a de arrecadação de alimentos, que somou mais de uma tonelada para a formação de 92 cestas básicas a serem distribuídas à instituições de caridade.</p><p>Foi uma ação bastante exitosa, onde cada modalidade do Moviema se fez presente, entre apresentações artísticas, esportivas e de produção e logística. Agradeço imensamente o apoio e empenho de todos os nossos professores e colaboradores que somaram nas ofertas das atividades e acolhimento dos visitantes.
                    </p>
                  </div>
                </div>
    
                <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
                    <img
                        src="/moviemaapp/assets/img/projetos/card_projeto_moviema_1.jpg"
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

export default Jeips