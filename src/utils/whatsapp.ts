export const DEFAULT_WHATSAPP_PHONE = '5511980224789'; // Format for SP region

export interface QuoteParams {
  storeName?: string;
  marketplace?: string;
  neighborhood?: string;
  dailyPackages?: string | number;
  contactName?: string;
  message?: string;
}

export function buildWhatsAppLink(params?: QuoteParams): string {
  const phone = '5511980224789'; // Número de atendimento Nobres Entregas
  
  if (!params || Object.keys(params).length === 0) {
    const text = encodeURIComponent(
      'Olá! Gostaria de cotar envios flex e coletas no mesmo dia para minha loja com a Nobres Entregas Flex.'
    );
    return `https://wa.me/${phone}?text=${text}`;
  }

  let text = 'Olá equipe Nobres Entregas Flex! 🚚✨\n\n';
  text += 'Gostaria de agendar uma coleta e cotar a operação para minha loja:\n';
  
  if (params.contactName) text += `• Responsável: ${params.contactName}\n`;
  if (params.storeName) text += `• Nome da Loja: ${params.storeName}\n`;
  if (params.marketplace) text += `• Canal Principal: ${params.marketplace}\n`;
  if (params.neighborhood) text += `• Bairro/Região de Coleta: ${params.neighborhood}\n`;
  if (params.dailyPackages) text += `• Média Diária de Pacotes: ${params.dailyPackages} envios/dia\n`;
  if (params.message) text += `\nObservações: ${params.message}\n`;

  text += '\nAguardo retorno para alinharmos os horários de coleta!';

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
