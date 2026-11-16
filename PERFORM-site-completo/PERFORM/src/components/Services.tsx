import { useState } from 'react';
import { ArrowUpRight, ArrowRight, X } from 'lucide-react';
import { site } from '../data/site';
export default function Services() {
  const [expanded,setExpanded] = useState<number | null>(null);
  return <section id="servicos" className="services section-dark" aria-labelledby="services-title">
    <div className="shell"><div className="section-ident"><span>04 — SERVIÇOS</span><span>TREINAMENTO FEITO PARA VOCÊ</span></div>
      <div className="section-topline"><h2 id="services-title" className="section-title services-title js-reveal">SEU OBJETIVO<span className="volt-comma">.</span><br/><em>UM PLANO À ALTURA.</em></h2><p className="js-reveal">Diferentes caminhos. O mesmo compromisso com uma experiência direcionada e individual.</p></div>
      <div className="service-cards">
        {site.services.map((service,index) => <button type="button" aria-controls="service-details" aria-expanded={expanded === index} onClick={() => setExpanded(expanded === index ? null : index)} key={service.number} className={`service-card service-card-${index+1} js-reveal`}>
          <img src={site.photos.services[index]} alt={`Treinamento físico associado a ${service.title.toLowerCase()}`} loading="lazy" decoding="async"/>
          <span className="service-shade"/><span className="service-number">{service.number} / 03</span><span className="service-eyebrow">{service.eyebrow}</span>
          <span className="service-card-bottom"><span><strong>{service.title}</strong><small>{service.summary}</small></span><span className="service-arrow"><ArrowUpRight size={26} strokeWidth={1.5}/></span></span>
        </button>)}
      </div>
      {expanded !== null && <div id="service-details" className="service-detail" role="region" aria-live="polite" aria-label={`Detalhes de ${site.services[expanded].title}`}>
        <div><span className="eyebrow">MODALIDADE SELECIONADA / {site.services[expanded].number}</span><h3>{site.services[expanded].title}</h3></div>
        <div><ul>{site.services[expanded].details.map(d => <li key={d}><ArrowRight size={16}/>{d}</li>)}</ul><a className="btn btn-volt" href="#contato" onClick={() => {const input = document.getElementById('service-select') as HTMLSelectElement|null; if(input){input.value=site.services[expanded].title;input.dispatchEvent(new Event('change',{bubbles:true}));}}}>{site.services[expanded].cta} <ArrowUpRight size={18}/></a></div>
        <button className="detail-close" aria-label="Fechar detalhes" type="button" onClick={() => setExpanded(null)}><X size={20}/></button>
      </div>}
      <div className="services-footer js-reveal"><span>UM COMPROMISSO COM A SUA INDIVIDUALIDADE.</span><span>EXPLORE AS MODALIDADES <ArrowRight size={17}/></span></div>
    </div>
  </section>;
}
