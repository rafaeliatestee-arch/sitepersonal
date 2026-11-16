import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function useMotionSystem(reduced: boolean) {
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.92 });
    const handleScroll = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', handleScroll);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo('.hero-photo', { autoAlpha: .65, clipPath: 'inset(5% 0 0 0)' }, { autoAlpha: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.35 })
        .from('.hero-kicker', { autoAlpha: 0, y: 16, duration: .65 }, .13)
        .from('.hero-line', { autoAlpha: 0, y: 38, stagger: .13, duration: .9 }, .23)
        .from('.hero-underhead', { autoAlpha: 0, y: 20, duration: .65 }, .65)
        .from('.hero-bottom', { autoAlpha: 0, y: 10, duration: .55 }, .85);
      gsap.utils.toArray<HTMLElement>('.js-reveal').forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 35 }, {
          autoAlpha: 1, y: 0, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 89%', once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>('.js-line').forEach((el) => {
        gsap.fromTo(el, { yPercent: 102 }, {
          yPercent: 0, duration: 1.05, ease: 'power3.out',
          scrollTrigger: { trigger: el.closest('.line-clip') || el, start: 'top 90%', once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((el) => {
        gsap.fromTo(el, { yPercent: -9, scale: 1.06 }, {
          yPercent: 9, scale: 1.06, ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.25 },
        });
      });
      gsap.fromTo('.hero-photo', { scale: 1.09 }, {
        scale: 1.19, ease: 'none', scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: 1.2 },
      });
      gsap.fromTo('.hero-text', { y: 0, autoAlpha: 1 }, {
        y: -90, autoAlpha: 0.55, ease: 'none', scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: 1.1 },
      });
      gsap.fromTo('.showcase-title', { y: 85 }, {
        y: -65, ease: 'none', scrollTrigger: { trigger: '#showcase', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      });
    });
    ScrollTrigger.refresh();
    return () => { ctx.revert(); lenis.off('scroll', handleScroll); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [reduced]);
}
