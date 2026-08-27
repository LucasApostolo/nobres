import React from 'react';
import { Zap, ShieldCheck, Clock, MapPin, ArrowRight, PackageCheck } from 'lucide-react';

export const ShopeeDireta: React.FC = () => {
  const whatsappUrl = "https://wa.me/5511964402156?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20cota%C3%A7%C3%A3o%20para%20minha%20opera%C3%A7%C3%A3o%20Shopee%20Entrega%20Direta.";

  return (
    <main className="min-h-screen bg-[#070A12] text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
          <Zap className="w-4 h-4" /> Soluções para Shopee Entrega Direta em SP
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Logística Rápida e Eficiente para <span className="text-orange-500">Shopee Entrega Direta</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Cumpra rigorosamente a taxa de envio no prazo do painel Shopee. Entregas expressas no mesmo dia para toda a Grande São Paulo com rastreamento transparente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-orange-500 hover:bg-orange-400 text-white transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20"
          >
            Solicitar Tabela Shopee <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Recursos de Destaque */}
      <section className="max-w-6xl mx-auto py-12 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Vantagens de utilizar a Nobres no Shopee Direta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <PackageCheck className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sem Pontos de Inconformidade</h3>
            <p className="text-slate-400 text-sm">
              Processo de bipagem ágil e atualizações constantes para evitar atrasos pontuados pela Shopee.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Clock className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coletas Diárias Programadas</h3>
            <p className="text-slate-400 text-sm">
              Passamos diariamente no seu estoque ou loja física para retirar todos os pacotes faturados.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprovante Digital</h3>
            <p className="text-slate-400 text-sm">
              Coleta de assinatura, documento e foto da entrega anexados ao comprovante do pedido.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-5xl mx-auto mt-8 p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Aumente suas vendas na Shopee com o selo de Entrega Direta</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Atendemos e-commerces de todos os portes com planos e tabelas sob medida para seu volume.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-orange-500 hover:bg-orange-400 text-white transition-all"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
};
