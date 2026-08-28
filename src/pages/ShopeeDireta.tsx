import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  HelpCircle,
  PackageCheck
} from 'lucide-react';

export const ShopeeDireta: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vendedores' | 'operacao'>('vendedores');

  useEffect(() => {
    document.title = "Shopee Entrega Direta SP | Coletas e Entregas Same Day - Nobres Entregas Flex";
  }, []);

  const handleWhatsAppRedirect = (assunto?: string) => {
    const text = assunto 
      ? `Olá! Gostaria de saber mais sobre a coleta da Nobres Entregas para Shopee Entrega Direta: ${assunto}`
      : `Olá! Preciso de uma cotação para coletas diárias da Shopee Entrega Direta em SP.`;
    window.open(`https://wa.me/5511980224789?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-[#00e7fe] transition-colors">
            Início
          </Link>
          <span>/</span>
          <span className="text-slate-200">Shopee Entrega Direta</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-6">
            <Zap className="w-4 h-4" /> Soluções para Shopee Entrega Direta em SP
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Logística Rápida para <span className="text-orange-500">Shopee Entrega Direta</span>
          </h1>
          <p className="mt-5 text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Cumpra rigorosamente a taxa de envio no prazo do painel Shopee. Entregas no mesmo dia para toda a Grande São Paulo com rastreamento e bipagem garantidos.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppRedirect('Solicitar Tabela e Coleta Shopee')}
              className="px-8 py-4 bg-orange-500 text-slate-950 font-extrabold text-sm rounded-xl hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              Solicitar Tabela Shopee <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleWhatsAppRedirect('Dúvidas de Coleta')}
              className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-200 font-bold text-sm rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> Falar com Operacional
            </button>
          </div>
        </div>

        {/* Destaques / Vantagens da Operação Nobres Entregas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sem Pontos de Inconformidade</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Bipagem ágil dos pacotes e atualizações de status para evitar atrasos que geram punições no painel do vendedor Shopee.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Coletas Diárias às 10:00 AM</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Passamos diariamente no seu estoque ou loja física para retirar os pacotes faturados e dar saída imediata para a rota.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Comprovante Digital em Tempo Real</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Coleta de assinatura, documento e foto da entrega anexados imediatamente ao comprovante final do pedido.
            </p>
          </div>
        </div>

        {/* Bloco Explicativo da Operação Shopee */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Como Funciona a Entrega Direta da Shopee com a Nobres Entregas Flex
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              Desenvolvemos um fluxo de trabalho ajustado às exigências do algoritmo de entregas locais da Shopee para você manter nota máxima de vendedor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800/80 p-5 rounded-2xl">
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md mb-3 inline-block">Etapa 01</span>
              <h4 className="font-bold text-white text-sm mb-1">Venda e Faturamento</h4>
              <p className="text-xs text-slate-400">Você realiza a venda no painel Shopee e fatura a etiqueta até o horário limite.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-5 rounded-2xl">
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md mb-3 inline-block">Etapa 02</span>
              <h4 className="font-bold text-white text-sm mb-1">Coleta Antecipada</h4>
              <p className="text-xs text-slate-400">Nossa equipe passa em sua loja às 10h da manhã e faz a conferência dos volumes.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-5 rounded-2xl">
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md mb-3 inline-block">Etapa 03</span>
              <h4 className="font-bold text-white text-sm mb-1">Bipagem e Roteirização</h4>
              <p className="text-xs text-slate-400">Os pedidos são bipados e divididos por zonas otimizadas (SP, ABC e Guarulhos).</p>
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-5 rounded-2xl">
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md mb-3 inline-block">Etapa 04</span>
              <h4 className="font-bold text-white text-sm mb-1">Entrega Concluída</h4>
              <p className="text-xs text-slate-400">Entrega no mesmo dia até às 21h com foto e confirmação digital enviada ao painel.</p>
            </div>
          </div>
        </div>

        {/* TOPIC CLUSTER: Seção de Subpáginas e Recursos Relevantes */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Guia Completo e Recursos da Shopee Entrega Direta
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Explore conteúdos detalhados para entender regras, coberturas e métricas do canal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Regiões Atendidas */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all group">
              <div>
                <MapPin className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-400 transition-colors">
                  Regiões e CEPs Atendidos
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Consulte os bairros de São Paulo, ABC Paulista e Guarulhos com rotas ativas de coleta diária da Shopee.
                </p>
              </div>
              <Link 
                to="/mercado-livre-envios-flex/regioes-atendidas" 
                className="text-xs font-bold text-orange-400 flex items-center gap-1 hover:gap-2 transition-all"
              >
                Ver Cobertura Completa <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Quanto Custa */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all group">
              <div>
                <DollarSign className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-400 transition-colors">
                  Tabela de Custos e Repasses
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Entenda como funcionam os valores por faixa de distância e os custos de coleta dedicada para e-commerce.
                </p>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect('Tabela de Custos Shopee')}
                className="text-xs font-bold text-orange-400 flex items-center gap-1 hover:gap-2 transition-all text-left"
              >
                Solicitar Tabela no WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Boas Práticas e Métricas */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all group">
              <div>
                <TrendingUp className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-400 transition-colors">
                  Aumente suas Vendas na Shopee
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Oferecer entrega no mesmo dia ativa o selo de Entrega Rápida, aumentando drasticamente a conversão do anúncio.
                </p>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect('Dicas para vender mais na Shopee')}
                className="text-xs font-bold text-orange-400 flex items-center gap-1 hover:gap-2 transition-all text-left"
              >
                Falar com Especialista <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ative o Shopee Entrega Direta com a Nobres Entregas Flex
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Coletamos na sua porta às 10h da manhã e garantimos 98,7% de taxa de conclusão de entregas no mesmo dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppRedirect('Agendar Primeira Coleta Shopee')}
              className="px-8 py-4 bg-orange-500 text-slate-950 font-extrabold text-sm rounded-xl hover:bg-orange-400 transition-all flex items-center justify-center gap-2"
            >
              Agendar Primeira Coleta <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleWhatsAppRedirect('Dúvidas Gerais Shopee')}
              className="px-8 py-4 bg-slate-950 border border-slate-800 text-white font-bold text-sm rounded-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Direto
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
