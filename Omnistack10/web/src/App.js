import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

//Componente: bloco isolado de HTML, CSS  e JS, o qual não interfere no restante da aplicação
//Propriedadade: Atributos de componenete - Informação que um componente pai passa para o componente filho 
//Estado: informações mantidas pelo componentes (imutabilidade)

function App() {
  
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrat</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário GitHub</label>
            <input name="github_username" id="github_username"  required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"  required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"  required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"  required />
           </div>
          </div>
          <button type="submit">Salvar</button>
       </form>
    </aside>


      <main>

      </main>

    </div>
    
  )
}

export default App;
