import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import { site } from '../data/site';
export default function Results() {
  const results = site.testimonials.filter(t => t.authorized && t.text.trim() && t.name.trim());
  const [active, setActive] = useState(0);
  const n = results.length;
  return <section id="resultados" className="results section-light" aria-labelledby="results-title">
    <div className="shell"><div className="section-ident dark-ident"><span>06 — RESULTADOS</span><span>HISTÓRIAS REAIS, SEM ATALHOS</span></div>
      <div className="results-layout"><div><h2 id="results-title" className="section-title results-title js-reveal">RESULTADOS<br/><em>TÊM HISTÓRIAS.</em></h2><p className="result-sub js-reveal">A evolução não cabe em uma fórmula. Cada trajetória começa com uma realidade e é construída no próprio ritmo.</p><a className="text-link dark-link js-reveal" href="#contato">ESCREVA SUA HISTÓRIA <ArrowUpRight size={19}/></a></div>
        {n > 0 ? <div className="testimonial js-reveal" aria-roledescription="carrossel de depoimentos" tabIndex={0} onKeyDown={(e)=>{if(e.key==='ArrowRight')setActive((active+1)%n);if(e.key==='ArrowLeft')setActive((active-1+n)%n)}} onTouchStart={(e)=>{e.currentTarget.dataset.startX=String(e.touches[0].clientX)}} onTouchEnd={(e)=>{const dx=e.changedTouches[0].clientX-Number(e.currentTarget.dataset.startX||0);if(Math.abs(dx)>45)setActive(i=>(i+(dx<0?1:n-1))%n)}}>
          <Quote size={36} strokeWidth={1.1}/><blockquote>“{results[active].text}”</blockquote><div className="testimonial-author"><strong>{results[active].name}</strong><span>{results[active].context}</span></div><div className="testimonial-controls"><span className="mono">{String(active+1).padStart(2,'0')} / {String(n).padStart(2,'0')}</span><div><button type="button" aria-label="Depoimento anterior" onClick={()=>setActive(i=>(i-1+n)%n)}><ArrowLeft/></button><button type="button" aria-label="Próximo depoimento" onClick={()=>setActive(i=>(i+1)%n)}><ArrowRight/></button></div></div>
        </div> : <div className="results-editorial js-reveal"><span className="result-large-number">↗</span><span className="mono">O VALOR DO PROCESSO / 006</span><p>Não se trata de buscar a transformação de outra pessoa. Trata-se de construir a sua.</p><span className="results-editorial-bottom">AVALIAÇÃO • ESTRATÉGIA • ACOMPANHAMENTO</span></div>}
      </div>
    </div>
  </section>;
}
