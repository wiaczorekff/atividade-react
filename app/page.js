"use client"
import Link from "next/link";
import './css/meucss.css';
import css from "styled-jsx/css";

export default function Home() {
  return (
    <body>
      <header>
    <img src="/logo40.webp" alt="Logo Posto 40" className="logo-image" />
      <h1 className="logo">POSTO 40</h1>
        <nav>
        <a className="NavBar" href="#">Home</a>
        <a className="NavBar" href="/usuarios">Usuários</a>
        <a className="NavBar" href="#">login</a>
        <Link className="NavBarcadastra-se" href="/cadastro">Cadastre-se</Link>
      </nav>
    </header>


      <main>
        <div className="conteiner">
          <div className="quadroimage">
            <img className="local" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0WESAonZgUjGTVVSx3BoycogZ1cLXJUGXw&s" alt="Imagem do Posto" width="500"/>
          </div>
          <div className="quadrodetexto">
            <h2>AP 40</h2>
            <p className="textodescricao">Auto posto 40, primeiro posto com autoatendimento. "Sonegamos o máximo de impostos para te vender uma gasolina boa e barata." Todo o ambiente do posto é automatizado e estruturado para receber você.</p>
          </div>
        </div>
        
        <div className="conteiner inverted">
          <div className="quadrodetexto">
            <h2>Atendimento 24 Horas</h2>
            <p className="textodescricao">O Posto 40 oferece atendimento 24 horas por dia, garantindo que você sempre encontre combustível e conveniência à sua disposição. Nosso posto foi projetado para atender todas as suas necessidades, a qualquer hora.</p>
          </div>
          <div className="quadroimage">
            <img className="local" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiR1ma3pTz84IE6SEa9xKpup4sa1u3QmS-3ZXp0TGO8XdFznS6wr0y4mYkh25qEvvWq7I&usqp=CAU" alt="Posto 24 Horas" width="500"/>
          </div>
        </div>

        {/* Novo bloco com imagem à esquerda e texto à direita */}
        <div className="conteiner">
          <div className="quadroimage">
            <img className="local" src="https://www.xpert.com.br/wp-content/uploads/2019/04/automatizar-posto-de-gasolina.jpg" alt="Automação do Posto" width="500"/>
          </div>
          <div className="quadrodetexto">
            <h2>Automação Completa</h2>
            <p className="textodescricao">Nosso sistema de automação oferece uma experiência moderna e eficiente, com recursos que facilitam o pagamento e melhoram a segurança. Venha conhecer o que há de mais inovador no mercado de combustíveis.</p>
          </div>
        </div>
      </main>
      <footer>
        <div className="footerSection">
          <h2>POSTO 40</h2>
          <p>Conveniência com autopay</p>
          <p>Combustíveis de primeira qualidade</p>
        </div>
        <div className="footerSection">
          <h3>Contato:</h3>
          <ul>
            <li>Whatsapp: (11) 96969-6969</li>
            <li>Instagram: @Posto40BR</li>
            <li>Email: contato-posto40@gmail.com</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Localização:</h3>
          <p>Rod. dos Bandeirantes, 85497, Vila Fiatlux</p>
          <img src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2d3f30b2-74a7-4aec-8ef7-67de4fff5318/2022/08/22/e5750483-e646-4b3b-9c11-f1b62b8466ae/2636f0c5-1324-4177-b212-e9f7fc5850ee.png" alt="Localização" width="200"/>
        </div>
      </footer>
    </body>
  );
}
