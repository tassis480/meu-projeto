import "./App.css";

function Home() {
  return (
    <section className="hero card">
      <p className="eyebrow">PORTFÓLIO • EM CONSTRUÇÃO</p>
      <h1>Olá, eu sou <span>Tassis Eliazaf </span>.</h1>
      <p className="lead">Sou estudante de Técnico em Desenvolvimento de Sistemas e tenho interesse em Programação.</p>
      <p>Este é o espaço onde vou compartilhar um pouco sobre mim e meus projetos. Fique à vontade para conhecer meu trabalho!</p>
      <div className="hero-tag">Aprendendo e criando, um projeto de cada vez ✦</div>
    </section>
  );
}

function Sobre() {
  return (
    <section className="card page-card">
      <p className="eyebrow">UM POUCO SOBRE MIM</p>
      <h1>Sobre <span>mim</span></h1>
      <p>Meu nome é Tassis Eliazaf, sou estudante de Técnico em Desenvolvimento de Sistemas e moro no Centro de Palhoça .</p>

      <div className="info-grid">
        <div className="info-block">
          <h2>Áreas de interesse</h2>
          <p>Desenvolvimento web, design, tecnologia, Front end, Back end</p>
        </div>
        <div className="info-block">
          <h2>Já conheço</h2>
          <p>HTML, CSS, JavaScript</p>
        </div>
        <div className="info-block">
          <h2>Quero aprender</h2>
          <p>React, acessibilidade, outras tecnologias</p>
        </div>
      </div>
    </section>
  );
}

const projetos = [
  {
    nome: "Projeto de estudos",
    descricao: "Uma página para praticar estruturação de conteúdo e estilos.",
    tecnologias: "HTML · CSS",
  },
  {
    nome: "Lista de tarefas",
    descricao: "Uma aplicação para organizar tarefas do dia a dia.",
    tecnologias: "JavaScript · React",
  },
  {
    nome: "Projeto pessoal",
    descricao: "Uma ideia que quero desenvolver.",
    tecnologias: "Tecnologias a definir",
  },
];

function Projetos() {
  return (
    <section className="page-card">
      <p className="eyebrow">O QUE ESTOU CRIANDO</p>
      <h1>Meus <span>projetos</span></h1>
      <p className="section-intro">Alguns projetos que já fiz ou quero desenvolver.</p>

      <div className="project-grid">
        {projetos.map((projeto, index) => (
          <article className="project-card" key={projeto.nome}>
            <span className="project-number">0{index + 1}</span>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <span className="technology">{projeto.tecnologias}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section className="card page-card contact-card">
      <p className="eyebrow">VAMOS CONVERSAR?</p>
      <h1>Entre em <span>contato</span></h1>
      <p>Você pode me encontrar por aqui:</p>

      <ul className="contact-list">
        <li><strong>E-mail</strong><span>[ ]</span></li>
        <li><strong>GitHub</strong><span>[https://github.com/tassis480]</span></li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Portfólio — início">
          SN<span>.</span>
        </a>
        <span className="header-note">MEU PORTFÓLIO</span>
      </header>

      <main id="inicio">
        <Home />
      </main>

      <footer className="site-footer">
        Feito com curiosidade e vontade de aprender.
      </footer>
    </div>
  );
}

export default App;