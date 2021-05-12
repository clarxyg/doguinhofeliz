import React from 'react';
import { FaPaw, FaChevronRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.css';
import cardDog from '../../assets/happydog.jpg';
 
const Home: React.FC = () => {
    return(
        <main className="home-page">
        
          <header className="header"><FaPaw className="icon-dog"/>Doguinho feliz</header>
          <p>
              <img 
              className="happy-dog"
              src={cardDog} alt="Cachorro sorrindo"/>
          </p>
          
          <Link   
          className="actions"
          to="/register">
         
              <button 
              className="button-cad">
                  <strong>
                  Cadastre-se
                  </strong>
                  <span>< FaChevronRight 
                  className="button-arrow"/></span>
                  </button>
          </Link>
            <h1 className="title">ONG Paranaense <br/> Resgatando cães e formando famílias <br/> Adote, faça um doguinho feliz! </h1>
            
            </main>
    );
}

export default Home;