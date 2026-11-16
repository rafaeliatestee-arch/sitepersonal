import { site } from '../data/site';
export default function Showcase() {
  return <section id="showcase" className="showcase" aria-labelledby="showcase-title">
    <div className="showcase-photo js-parallax" role="img" aria-label="Ambiente de preparação física" style={{backgroundImage:`url(${site.photos.showcase})`}} />
    <div className="showcase-overlay"/>
    <div className="showcase-top shell"><span>05 — A JORNADA</span><span>DISCIPLINA EM MOVIMENTO</span></div>
    <div className="showcase-title shell"><span className="showcase-small">É NO DIA A DIA QUE TUDO ACONTECE.</span><h2 id="showcase-title">O PROCESSO<br/><em>MUDA</em> TUDO<span className="accent-period">.</span></h2></div>
    <div className="showcase-bottom shell"><span>PERFORM. / KEEP BUILDING</span><span>SEM ATALHOS. COM DIREÇÃO.</span></div>
  </section>;
}
