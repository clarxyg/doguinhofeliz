import React, { useState } from 'react';
import './styles.css';
import { FaChevronLeft } from 'react-icons/fa';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
const [markMapPosition, setMarkMapPosition] = useState<[number, number]>([0, 0]);

    function handleMapClick(event: LeafletMouseEvent): void {
        setMarkMapPosition([
            event.latlng.lat,
            event.latlng.lng
        ]);
    }


    return(
      <div id="register">
      <div className="content">
          <header className="homeback">
           <Link to="/"><FaChevronLeft className="iconLeft" />
           <p className="callback">Home</p>
           </Link> 
          </header>

          <form>
              <h1>Cadastro <br /> do candidato(a)</h1>

              <fieldset>
                  <legend>
                      <h2>Dados</h2>
                  </legend>

                  <div className="field">
                      <label htmlFor="name">Nome completo</label>
                      <input
                          placeholder="Digite o seu nome completo" 
                          type="text"
                          name="name"
                          id="name"
                          required
                      />
                  </div>
                  <div className="field-group">
                      <div className="field">
                          <label htmlFor="email">E-mail</label>
                          <input 
                              placeholder="Digite o seu e-mail"
                              type="email"
                              name="email"
                              id="email"
                              required
                            
                          />
                      </div>
                      <div className="field">
                          <label htmlFor="whatsapp">Whatsapp</label>
                          <input 
                              placeholder="+55 41 991111111"
                              type="text"
                              name="whatsapp"
                              id="whatsapp"
                              required
                              
                          />
                      </div>
                  </div>
              </fieldset>

              <fieldset>
                  <legend>
                  <h2>Endereço</h2>
                      <span>Marque o endereço no mapa</span>
                  </legend>
                  <Map 
                  onClick={handleMapClick}
                  center={[-25.5205, -48.50952531]} 
                  zoom={14}>
                    <TileLayer  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={markMapPosition}/>
                  </Map>
                   
                  <div className="field-group">
                      <div className="field">
                          <label htmlFor="city">Cidade</label>
                          <input 
                              placeholder="Digite o nome da sua cidade"
                              type="text"
                              name="city"
                              id="city"
                              required
                             
                          />
                      </div>
                      <div className="field">
                          <label htmlFor="uf">Estado</label>
                          <input 
                              placeholder="Digite o nome do seu estado"
                              type="text"
                              name="uf"
                              id="uf"
                              required
                            
                          />
                      </div>
                  </div>
              </fieldset>
              <fieldset>
                         <label htmlFor="uf">Que coisas fazem um doguinho feliz?</label>
                          <textarea
                              placeholder="Digite coisas que deixarão o doguinho feliz 🐶"
                              className="items-grid"
                              name="uf"
                              id="uf"
                              required
                            
                          />
              </fieldset>

              <button type="submit">
                  Candidatura
              </button>
          </form>
      </div>
  </div>
       
    );
}

export default Register;