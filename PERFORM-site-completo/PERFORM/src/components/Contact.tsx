import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { site } from '../data/site';
import { makeLeadMessage, whatsappHref, type LeadFormData } from '../lib/contact';

const goals = ['Ganhar força e condicionamento', 'Melhorar a qualidade de vida', 'Desenvolver mobilidade', 'Retomar uma rotina de treinos', 'Outro objetivo'];
const periods = ['Manhã', 'Tarde', 'Noite', 'Horário flexível'];

export default function Contact() {
  const [generated,setGenerated] = useState('');
  const [accepted,setAccepted] = useState(false);
  const [error,setError] = useState('');
  const [waOpened,setWaOpened] = useState(false);
  function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!accepted) { setError('Confirme o consentimento para continuar.');return; }
    const data = Object.fromEntries(new FormData(form).entries()) as LeadFormData;
    const digits = data.whatsapp.replace(/\D/g,'');
    if (digits.length < 10 || digits.length > 15) { setError('Informe um número de WhatsApp com DDD válido.'); return; }
    setError('');setWaOpened(false);
    const msg = makeLeadMessage(data);
    setGenerated(msg);
    const url = whatsappHref(msg);
    window.open(url,'_blank','noopener,noreferrer');
    setWaOpened(true);
  }
  return <section id="contato" className="contact section-light" aria-labelledby="contact-title"><div className="shell"><div className="section-ident dark-ident"><span>08 — VAMOS CONVERSAR</span><span>A SUA JORNADA COMEÇA AQUI</span></div>
    <div className="contact-layout"><div className="contact-intro"><span className="eyebrow black-eye js-reveal"><span className="signal-dot"/> OPEN FOR YOUR NEXT LEVEL</span><h2 id="contact-title" className="section-title contact-title js-reveal">O PRIMEIRO<br/>PASSO É<br/><em>UMA CONVERSA</em><span className="accent-period">.</span></h2><p className="js-reveal">Conte sobre seus objetivos. O próximo passo pode começar com uma simples conversa — sem promessas fáceis, com direcionamento real.</p><div className="contact-notes js-reveal"><div><span className="contact-note-index">01</span> CONTE SEU OBJETIVO</div><div><span className="contact-note-index">02</span> ESCOLHA SUA MODALIDADE</div><div><span className="contact-note-index">03</span> INICIE A CONVERSA</div></div></div>
    <div className="contact-panel js-reveal"><div className="contact-panel-top"><span>SOLICITAÇÃO DE AVALIAÇÃO</span><span>FORM / 001</span></div>
      <form onSubmit={submit} noValidate={false}>
        <div className="field-row"><label>SEU NOME <input name="name" type="text" autoComplete="name" minLength={2} maxLength={90} placeholder="Como podemos chamar você?" required/></label><label>WHATSAPP <input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" maxLength={22} required/></label></div>
        <label>QUAL É SEU PRINCIPAL OBJETIVO?<select name="goal" defaultValue="" required><option value="" disabled>Selecione seu objetivo</option>{goals.map(g=><option key={g}>{g}</option>)}</select></label>
        <div className="field-row"><label>MODALIDADE DE INTERESSE<select id="service-select" name="service" defaultValue="" required><option value="" disabled>Escolha a modalidade</option>{site.services.map(s=><option key={s.number} value={s.title}>{s.title}</option>)}</select></label><label>MELHOR PERÍODO<select name="period" defaultValue="" required><option value="" disabled>Selecione um período</option>{periods.map(p=><option key={p}>{p}</option>)}</select></label></div>
        <label>MENSAGEM (OPCIONAL)<textarea name="message" rows={3} maxLength={650} placeholder="Tem algo que gostaria de compartilhar?"/></label>
        <label className="consent"><input type="checkbox" required checked={accepted} onChange={(e)=>{setAccepted(e.target.checked);setError('');}}/><span className="consent-box" aria-hidden="true">{accepted&&<Check size={13}/>}</span><span>Concordo em compartilhar estes dados para iniciar a conversa de atendimento pelo WhatsApp. <a href="#privacidade">Saiba mais sobre privacidade</a>.</span></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="btn btn-black form-submit">QUERO AGENDAR MINHA AVALIAÇÃO <ArrowUpRight size={20}/></button>
        <p className="form-footnote">O botão abre o WhatsApp com sua mensagem pronta. Nenhum agendamento é confirmado automaticamente.</p>
      </form>
      {waOpened && generated && <div className="form-ready" role="status"><Check size={17}/><div><strong>Mensagem preparada!</strong><p>Confirme o destinatário e envie no WhatsApp para concluir o contato.</p><a href={whatsappHref(generated)} target="_blank" rel="noopener noreferrer">Abrir novamente <ExternalLink size={13}/></a></div></div>}
    </div></div>
    <a className="contact-bottom-link" href={whatsappHref('Olá! Gostaria de saber mais sobre os treinamentos da PERFORM.')} target="_blank" rel="noopener noreferrer">PREFERE FALAR DIRETAMENTE PELO WHATSAPP? <ArrowRight size={20}/></a>
  </div></section>;
}
