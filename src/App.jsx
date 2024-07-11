import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import NotFound from './pages/NotFound'
import Master from './pages/components/Master'
import ProjetoDescricao from './pages/ProjetoDescricao'
import Experiencias from './pages/Experiencias'
import AtividadeProjetos from './pages/AtividadeProjetos'

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

          <Route path='*' element={<NotFound />} />
          <Route path='/moviemaapp/projeto/*' element={<NotFound />} />
          
        </Route>

       
      </Routes>
    </>
  )
}

export default App
