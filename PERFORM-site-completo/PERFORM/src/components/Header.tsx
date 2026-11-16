import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../data/site';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Método' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', update, { passive: true });
    update();
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
    links.forEach(({href}) => { const element = document.getElementById(href.slice(1)); if (element) observer.observe(element); });
    return () => { window.removeEventListener('scroll', update); observer.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner shell">
        <a href="#inicio" className="brand" aria-label="PERFORM — voltar ao início">{site.brand}<i aria-hidden="true" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(link => <a key={link.href} href={link.href} className={active === link.href.slice(1) ? 'active' : ''} aria-current={active === link.href.slice(1) ? 'location' : undefined}>{link.label}</a>)}
        </nav>
        <a href="#contato" className="header-cta">AGENDAR AVALIAÇÃO <ArrowUpRight size={16} strokeWidth={1.75} /></a>
        <button className="mobile-menu-trigger" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={26}/> : <Menu size={26}/>}</button>
      </div>
    </header>
    <AnimatePresence>
      {menuOpen && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Menu móvel" initial={{opacity:0, y:-18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.28}}>
        <p className="eyebrow">MENU / NAVEGAÇÃO</p>
        {links.map((link,i) => <motion.a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} initial={{x:-18,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.035}}><span className="mono">0{i+1}</span>{link.label}<ArrowUpRight size={22}/></motion.a>)}
        <p className="mobile-nav-bottom">EVOLUÇÃO NÃO É ACASO. É MÉTODO.</p>
      </motion.nav>}
    </AnimatePresence>
  </>;
}
