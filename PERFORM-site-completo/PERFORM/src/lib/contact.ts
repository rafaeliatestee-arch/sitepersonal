import { site } from '../data/site';
export type LeadFormData = {
  name: string;
  whatsapp: string;
  goal: string;
  service: string;
  period: string;
  message: string;
};
export function makeLeadMessage(data: LeadFormData): string {
  return [
    'Olá! Gostaria de agendar uma avaliação com a PERFORM.',
    '',
    `Nome: ${data.name.trim()}`,
    `Meu WhatsApp: ${data.whatsapp.trim()}`,
    `Objetivo: ${data.goal}`,
    `Modalidade: ${data.service}`,
    `Melhor período: ${data.period}`,
    data.message.trim() ? `Mensagem: ${data.message.trim()}` : '',
  ].filter(Boolean).join('\n');
}
export function whatsappHref(message: string): string {
  const phone = site.contact.whatsapp.replace(/\D/g, '');
  // Sem número de destino, abre o compartilhamento no WhatsApp; nunca simula envio.
  return phone
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}
