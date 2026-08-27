import React from 'react';
import { ShieldCheck, Clock, MapPin, CheckCircle, ArrowRight, Truck, Award } from 'lucide-react';

export const MercadoLivreFlex: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511964402156?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20cota%C3%A7%C3%A3o%20para%20minha%20opera%C3%A7%C3%A3o%20Mercado%20Livre%20Flex.";

  return (
    <main className="min-h-screen bg-[#070A12] text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
          <Award className="w-4 h-4" /> Especialistas em Mercado Livre Flex SP
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Entregas <span className="text-amber-400">Mercado Livre Flex</span> em São Paulo com Reputação Verde
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Garanta SLA de 99,4% e mantenha seu indicador de entregas no prazo sempre perfeito. Coleta agilizada na Zona Norte, Centro, Sul, Leste e Oeste de SP, Guarulhos e ABC.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            Cotar Operação Flex Agora <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Diferenciais Operacionais */}
      <section className="max-w-6xl mx-auto py-12 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Por que a Nobres Entregas é o parceiro ideal para seu Flex?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Clock className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prazos de Corte Estendidos</h3>
            <p className="text-slate-400 text-sm">
              Atendemos coletas matutinas com envio garantido no mesmo dia até às 22h, permitindo maior volume de vendas diárias na sua loja.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rastreio e Baixas em Tempo Real</h3>
            <p className="text-slate-400 text-sm">
              Sua etiqueta é bipada na coleta e no ato da entrega com confirmação imediata no aplicativo parceiro.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Truck className="w-10 h-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frota Dedicada e Treinada</h3>
            <p className="text-slate-400 text-sm">
              Entregadores experientes na rotina do Meli, preparados para resolver ausências com tratativas diretas.
            </p>
          </div>
        </div>
      </section>

      {/* Regiões de Cobertura Flex */}
      <section className="max-w-6xl mx-auto py-12 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Zonas de Atendimento Mercado Livre Flex
        </h2>
        <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
          Atendemos todas as faixas de CEP configuráveis no painel do seu Mercado Livre.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300 bg-slate-900/40 rounded-xl overflow-hidden border border-slate-800">
            <thead className="bg-slate-800/80 text-amber-400 uppercase text-xs">
              <tr>
                <th className="py-4 px-6">Região</th>
                <th className="py-4 px-6">Cidades / Zonas Incluídas</th>
                <th className="py-4 px-6">Garantia SLA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="py-4 px-6 font-semibold">Capital SP</td>
                <td className="py-4 px-6">Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro</td>
                <td className="py-4 px-6 text-emerald-400 font-medium">100% No Mesmo Dia</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold">Grande SP</td>
                <td className="py-4 px-6">Guarulhos, Osasco, Barueri, Carapicuíba, Taboão da Serra</td>
                <td className="py-4 px-6 text-emerald-400 font-medium">100% No Mesmo Dia</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold">ABC Paulista</td>
                <td className="py-4 px-6">Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema</td>
                <td className="py-4 px-6 text-emerald-400 font-medium">100% No Mesmo Dia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Mercado Livre Flex */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Perguntas Frequentes sobre Logística Flex
        </h2>
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="font-semibold text-lg text-white mb-2">Qual é o horário limite de coleta na minha empresa?</h3>
            <p className="text-slate-400 text-sm">
              Combinamos o horário ideal de acordo com seu volume de vendas e localização. Nosso horário padrão de coleta matutina ocorre a partir das 10h.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800">
            <h3 className="font-semibold text-lg text-white mb-2">Como funcionam as reentradas e tentativas não entregues?</h3>
            <p className="text-slate-400 text-sm">
              Realizamos tratativa em tempo real. Se o destinatário estiver ausente, tentamos contato com o seller para autorizar entrega a vizinhos ou reagendamento sem prejuízo de reputação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-5xl mx-auto mt-8 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pronto para elevar o nível da sua operação Flex?</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Fale diretamente com nossa equipe de operações no WhatsApp e solicite uma tabela personalizada.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all"
        >
          Falar com Especialista Meli Flex
        </a>
      </section>
    </main>
  );
};
