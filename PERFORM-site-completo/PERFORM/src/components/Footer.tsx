import { ArrowUp, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { site } from '../data/site';
import { whatsappHref } from '../lib/contact';
export default function Footer(){
  return <footer id="privacidade" className="footer section-dark"><div className="shell"><div className="footer-top"><span>PERFORM. / PERSONAL TRAINING EXPERIENCE</span><span>09 — O PRÓXIMO PASSO</span></div>
    <h2>SUA EVOLUÇÃO<br/>COMEÇA COM<br/><em>UMA DECISÃO.</em></h2>
    <div className="footer-middle"><p>EVOLUÇÃO NÃO É ACASO.<br/>É MÉTODO.</p><div className="footer-links"><a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#metodo">Método</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></div><div className="footer-links"><a href={whatsappHref('Olá! Quero saber mais sobre os treinamentos.')} target="_blank" rel="noopener noreferrer">WhatsApp <MessageCircle size={15}/></a>{site.contact.instagram && <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">Instagram <Instagram size={15}/></a>}{site.contact.email && <a href={`mailto:${site.contact.email}`}>E-mail <ArrowUpRight size={15}/></a>}{site.contact.region&&<span>{site.contact.region}</span>}</div></div>
    <div className="footer-wordmark" aria-label="PERFORM">PERFORM<span>.</span></div>
    <div className="footer-end"><span>© {new Date().getFullYear()} PERFORM. CONCEITO EDITÁVEL.</span><a href={site.contact.privacyPolicyUrl || '#privacy-information'}>POLÍTICA DE PRIVACIDADE</a><button type="button" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}>VOLTAR AO TOPO <ArrowUp size={17}/></button></div>
    {!site.contact.privacyPolicyUrl&&<div id="privacy-information" className="privacy-information"><strong>Informações sobre privacidade</strong><p>Os dados preenchidos no formulário são utilizados no seu navegador para compor uma mensagem para o WhatsApp. Este projeto de demonstração não armazena os dados em um servidor próprio. Ao abrir o WhatsApp, aplicam-se as condições desse serviço. Antes da publicação comercial, configure uma política de privacidade adequada aos tratamentos de dados efetivamente realizados.</p></div>}
  </div></footer>;
}
