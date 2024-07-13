import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import NotFound from './pages/NotFound'
import Master from './pages/components/Master'
import ProjetoDescricao from './pages/ProjetoDescricao'
import Experiencias from './pages/Experiencias'
import AtividadeProjetos from './pages/AtividadeProjetos'
import OlimpEsportes from './pages/OlimpEsportes'
import OlimpRobotica from './pages/OlimpRobotica'
import GuiaMovIEMA from './pages/GuiaMovIEMA'
import GuiaModelo from './pages/GuiaModelo'
import GuiaExtetnsao from './pages/GuiaExtetnsao'
import Jeips from './pages/Jeips'




function App() {
 
  return (
    <>
      <Routes>
        
        <Route element={<Master />}>
          <Route path='/moviemaapp/' element={<Home />} />
          <Route path='/moviemaapp/projetos/' element={<Projetos />} />
          <Route path='/moviemaapp/projeto/:project_slug/' element={<ProjetoDescricao />} />

          <Route path='/moviemaapp/experiencias/' element={<Experiencias />} />
          <Route path='/moviemaapp/atividades_projetos/' element={<AtividadeProjetos />} />

          <Route path='/moviemaapp/jeips/' element={<Jeips />} />
          <Route path='/moviemaapp/olimpiada_moviema_de_esportes/' element={<OlimpEsportes />} />
          <Route path='/moviemaapp/olimpiada_moviema_de_robotica/' element={<OlimpRobotica />} />


          <Route path='/moviemaapp/guia_moviema/' element={<GuiaMovIEMA />} />
          <Route path='/moviemaapp/guia_extensao/' element={<GuiaExtetnsao />} />
          <Route path='/moviemaapp/guia_modelo/' element={<GuiaModelo />} />

          <Route path='*' element={<NotFound />} />
          <Route path='/moviemaapp/projeto/*' element={<NotFound />} />
          
        </Route>

       
      </Routes>
    </>
  )
}

export default App
