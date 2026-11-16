import { Activity, ArrowUpRight, AudioLines, Crosshair, Focus, Layers3, RefreshCcw } from 'lucide-react';
const features = [
  {icon:Focus,title:'ATENDIMENTO INDIVIDUALIZADO',desc:'Cada escolha começa pela pessoa, não por um protocolo genérico.'},
  {icon:Layers3,title:'PLANEJAMENTO ADAPTÁVEL',desc:'Uma estrutura capaz de acompanhar fases, prioridades e rotina.'},
  {icon:Crosshair,title:'ORIENTAÇÃO TÉCNICA',desc:'Atenção aos movimentos, às progressões e à qualidade da execução.'},
  {icon:Activity,title:'ACOMPANHAMENTO CONTÍNUO',desc:'Feedback e ajustes para manter o processo bem direcionado.'},
  {icon:RefreshCcw,title:'ORGANIZAÇÃO DA ROTINA',desc:'Consistência construída com planejamento possível de seguir.'},
  {icon:AudioLines,title:'COMUNICAÇÃO DIRETA',desc:'Uma relação próxima para entender dúvidas, dificuldades e objetivos.'},
];
export default function Differentials() {
  return <section id="diferenciais" className="differentials section-dark" aria-labelledby="dif-title"><div className="shell"><div className="section-ident"><span>07 — DIFERENCIAIS</span><span>PERFORMANCE / LAB</span></div>
    <div className="dif-layout"><div className="dif-aside"><span className="eyebrow js-reveal">DIREÇÃO EM CADA DECISÃO</span><h2 id="dif-title" className="section-title dif-title js-reveal">PRECISÃO<br/>EM CADA<br/><em>ETAPA.</em></h2><p className="js-reveal">O cuidado está nos detalhes que fazem sentido para você.</p><span className="dif-graphic" aria-hidden="true"><span/><span/><span/><span/><span/></span></div>
    <div className="dif-list">{features.map((f,i)=><div className="dif-item js-reveal" key={f.title}><span className="mono">0{i+1}</span><f.icon size={23} strokeWidth={1.2}/><div><h3>{f.title}</h3><p>{f.desc}</p></div><ArrowUpRight className="dif-arrow" size={20} strokeWidth={1.5}/></div>)}</div></div>
  </div></section>;
}
