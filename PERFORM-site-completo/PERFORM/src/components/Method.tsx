import { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { site } from '../data/site';
export default function Method() {
  const [active,setActive] = useState(0);
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>('.method-step')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index)); });
    }, {rootMargin: '-38% 0px -38% 0px',threshold:0});
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  },[]);
  return <section id="metodo" className="method section-light" aria-labelledby="method-title">
    <div className="shell"><div className="section-ident dark-ident"><span>03 — NOSSO MÉTODO</span><span>QUATRO ETAPAS. UM PROPÓSITO.</span></div>
      <div className="method-layout">
        <div className="method-aside">
          <span className="eyebrow black-eye js-reveal">A ESTRUTURA DA EVOLUÇÃO</span>
          <h2 id="method-title" className="section-title method-title js-reveal">UM<br/>MÉTODO<span className="accent-period">.</span><br/><em>A SUA</em><br/>EVOLUÇÃO.</h2>
          <p className="method-intro js-reveal">Um caminho claro, sem atalhos ou fórmulas prontas. Cada etapa existe para tornar a próxima mais consistente.</p>
          <div className="method-progress" aria-label={`Etapa ${active + 1} de 4`}><span className="mono">0{active+1}</span><div className="progress-track"><div style={{width: `${((active+1) / site.methods.length)*100}%`}}/></div><span className="mono">04</span></div>
          <div className="method-image"><img src={site.photos.method[active]} alt={`Imagem contextual da etapa ${site.methods[active].title.toLowerCase()}`} loading="lazy" decoding="async" key={active}/><div className="method-image-meta"><span>PERFORM / FRAME 0{active+1}</span><span>PROGRESSIVE SYSTEM</span></div></div>
        </div>
        <div className="method-steps">
          {site.methods.map((step,index) => <article data-index={index} key={step.number} className={`method-step ${active === index ? 'is-active' : ''}`}>
            <div className="method-step-top"><span className="mono">[{step.number}/04]</span><ArrowDownRight size={25} strokeWidth={1.4}/></div>
            <div><span className="step-kicker">{step.kicker}</span><h3>{step.title}</h3><p>{step.description}</p></div>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
}
