import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

//Componente: bloco isolado de HTML, CSS  e JS, o qual não interfere no restante da aplicação
//Propriedadade: Atributos de componenete - Informação que um componente pai passa para o componente filho 
//Estado: informações mantidas pelo componentes (imutabilidade)

function App() {
  
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
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
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5742201?s=460&v=4" alt="Ariane Mateus"/>
              <div className="user-info">
                <strong>Ariane Mateus</strong>
                <span>Noje.Js, ReactJS</span>
              </div>
            </header>
            <p>Developer and Data Science enthusiast.</p>
            <a href="https://github.com/ariane92">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5742201?s=460&v=4" alt="Ariane Mateus"/>
              <div className="user-info">
                <strong>Ariane Mateus</strong>
                <span>Noje.Js, ReactJS</span>
              </div>
            </header>
            <p>Developer and Data Science enthusiast.</p>
            <a href="https://github.com/ariane92">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5742201?s=460&v=4" alt="Ariane Mateus"/>
              <div className="user-info">
                <strong>Ariane Mateus</strong>
                <span>Noje.Js, ReactJS</span>
              </div>
            </header>
            <p>Developer and Data Science enthusiast.</p>
            <a href="https://github.com/ariane92">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/5742201?s=460&v=4" alt="Ariane Mateus"/>
              <div className="user-info">
                <strong>Ariane Mateus</strong>
                <span>Noje.Js, ReactJS</span>
              </div>
            </header>
            <p>Developer and Data Science enthusiast.</p>
            <a href="https://github.com/ariane92">Acessar perfil no GitHub</a>
          </li>

        </ul>
      </main>

    </div>
    
  )
}

export default App;
