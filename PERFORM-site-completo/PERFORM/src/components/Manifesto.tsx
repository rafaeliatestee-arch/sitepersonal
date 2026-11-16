import { ArrowDownRight } from 'lucide-react';
export default function Manifesto() {
  return <section id="filosofia" className="manifesto section-light" aria-labelledby="manifesto-title">
    <div className="shell">
      <div className="section-ident dark-ident"><span>01 — FILOSOFIA</span><span>MENOS PROMESSAS. MAIS PROCESSO.</span></div>
      <div className="manifesto-body">
        <div className="manifesto-heading" id="manifesto-title">
          <div className="line-clip"><p className="js-line muted">NÃO É APENAS</p></div>
          <div className="line-clip"><p className="js-line muted">SOBRE TREINAR<span className="solid-period">.</span></p></div>
          <div className="line-clip"><p className="js-line">É SOBRE <span className="italic-outline">EVOLUIR</span></p></div>
          <div className="line-clip"><p className="js-line">COM DIREÇÃO<span className="accent-period">.</span></p></div>
        </div>
        <div className="manifesto-bottom js-reveal"><div className="manifesto-mark"><ArrowDownRight size={76} strokeWidth={1.05} /></div><div><span className="mono mini-label">A NOSSA VISÃO</span><p>Treinar é parte da jornada. O que gera transformação sustentável é saber por que, como e para onde evoluir. Nada de fórmulas prontas: estratégia, acompanhamento e consistência.</p></div></div>
      </div>
    </div>
  </section>;
}
