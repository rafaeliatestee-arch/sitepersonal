import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Method from './components/Method';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Results from './components/Results';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useMotionSystem, useReducedMotion } from './hooks/useMotion';
import { site } from './data/site';

function ScrollProgress(){
  const [progress,setProgress] = useState(0);
  useEffect(() => { const update=()=>{const span=document.documentElement.scrollHeight-window.innerHeight;setProgress(span>0?window.scrollY/span*100:0);};window.addEventListener('scroll',update,{passive:true});update();return ()=>window.removeEventListener('scroll',update);},[]);
  return <div className="scroll-progress" role="progressbar" aria-label="Progresso de leitura" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}><span style={{width:`${progress}%`}}/></div>;
}
function MobileWhatsApp(){
  return <a className="mobile-floating-cta" aria-label="Agendar avaliação" href="#contato"><span>AGENDE SUA AVALIAÇÃO</span><span>↗</span></a>;
}
export default function App(){
  const reduced = useReducedMotion();
  useMotionSystem(reduced);
  useEffect(()=>{
    document.title=`${site.brand} — ${site.tagline}`;
    const description=document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if(description)description.content='Treinamento individualizado, estratégia e acompanhamento. Uma experiência de personal training construída com método.';
  },[]);
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><ScrollProgress/><Header/><main id="conteudo"><Hero/><Manifesto/><About/><Method/><Services/><Showcase/><Results/><Differentials/><Contact/></main><Footer/><MobileWhatsApp/></>;
}
