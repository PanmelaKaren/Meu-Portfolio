import React, { useEffect, useState } from 'react';
import "../styles/Home.css";

const Home = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/PanmelaKaren')
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <div className="home">
      <img
        src="/foto-perfil.jpeg" 
        alt="Perfil"
        className="profile-picture"
      />
      <h1>Bem-vindo(a) ao meu Portfólio</h1>
      <p>Meu nome é Panmela Karen, uma desenvolvedora apaixonada por criar experiências digitais impactantes.</p>
      <p>Graduanda no curso tecnologico de Sistemas para Internet e cursando a disciplina de frontend com o professor Márcio.</p>
        <p>Adoro transformar ideias em realidade, garantindo que cada projeto seja não apenas estético, mas também eficiente e acessível.</p>
        <p>Meu portfólio reflete meu compromisso com a qualidade, atenção aos detalhes e a busca contínua por aprendizado e inovação.</p>
        
      {githubData && (
        <div className="github-info">
          <h2>Meu GitHub</h2>
          <p>Repositórios públicos: {githubData.public_repos}</p>
          <p>Seguidores: {githubData.followers}</p>
          <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">Visitar perfil</a>
        </div>
      )}

      <a href="/game" className="button">Jogar Senha</a>
    </div>
  );
};

export default Home;

