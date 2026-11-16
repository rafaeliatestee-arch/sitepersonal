import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { site } from '../data/site';
export default function About() {
  const credentials = [
    {key:'FORMAÇÃO',value:site.trainer.education || 'Informação a preencher'},
    {key:'REGISTRO PROFISSIONAL',value:site.trainer.registration || 'Informação a preencher'},
    {key:'EXPERIÊNCIA',value:site.trainer.experience || 'Informação a preencher'},
  ];
  return <section id="sobre" className="about section-dark" aria-labelledby="about-title">
    <div className="shell">
      <div className="section-ident"><span>02 — SOBRE O TREINADOR</span><span>O PROFISSIONAL POR TRÁS DO MÉTODO</span></div>
      <div className="about-grid">
        <div className="about-visual js-reveal">
          <div className="about-image-clip"><img className="js-parallax" src={site.photos.about} alt="Referência visual de treinamento físico, substituível pela fotografia do profissional" loading="lazy" decoding="async"/></div>
          <div className="about-image-caption"><span>PERFORM / TRAINING DIVISION</span><span>FIG. 001</span></div>
          <span className="about-image-plus">+</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow js-reveal"><span className="signal-dot" /> PERSONAL TRAINER / COACH</span>
          <h2 id="about-title" className="section-title about-title js-reveal">CIÊNCIA<span className="volt-comma">,</span><br/>DISCIPLINA<br/>E ATENÇÃO<br/><em>INDIVIDUAL.</em></h2>
          <p className="about-name js-reveal">{site.trainer.name}</p>
          <p className="about-description js-reveal">{site.trainer.bio}</p>
          <div className="credentials js-reveal">
            {credentials.map(row => <div key={row.key} className="credential-row"><span>{row.key}</span><strong className={row.value === 'Informação a preencher' ? 'placeholder-text' : ''}>{row.value}</strong></div>)}
          </div>
          <div className="specialties js-reveal"><span className="mono mini-label">ÁREAS DE ATUAÇÃO</span><div>{site.trainer.specialties.map(s => <span key={s}>{s}</span>)}</div></div>
          <a href="#contato" className="text-link js-reveal">CONHEÇA SEU PRÓXIMO PASSO <MoveUpRight size={19}/></a>
        </div>
      </div>
    </div>
    <div className="about-bottom-stripe"><span>EVOLUÇÃO / DIREÇÃO / CONSISTÊNCIA</span><ArrowUpRight size={21}/></div>
  </section>;
}
