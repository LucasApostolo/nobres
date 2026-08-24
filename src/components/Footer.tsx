import React from 'react';
import { Truck, MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A12] border-t border-white/5 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00e7fe] to-[#008ef4] p-[1px] shadow-[0_0_20px_rgba(0,231,254,0.3)]">
                <div className="w-full h-full bg-[#070A12] rounded-[15px] flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#00e7fe]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-extrabold tracking-tight text-white">NOBRES</span>
                  <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00e7fe] to-[#008ef4] tracking-tight">ENTREGAS</span>
                  <span className="text-[10px] uppercase font-black tracking-widest px-1.5 py-0.5 rounded-full bg-[#00e7fe]/15 text-[#00e7fe] border border-[#00e7fe]/30">FLEX</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Logística Same Day • São Paulo</span>
              </div>
            </a>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Operação logística especializada em entregas no mesmo dia e envios Flex para Mercado Livre, Shopee, Amazon e Magalu. Pontualidade máxima, proteção de reputação verde e suporte humanizado em tempo real.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#10B981] flex items-center gap-1.5 text-[11px] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Empresa Certificada Flex</span>
              </div>
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#00e7fe] flex items-center gap-1.5 text-[11px] font-semibold">
                <Truck className="w-4 h-4" />
                <span>SLA 99.4%</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[#00e7fe] transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-[#00e7fe] transition-colors">Soluções Flex</a></li>
              <li><a href="#comparativo" className="hover:text-[#00e7fe] transition-colors">Comparativo de Transportadoras</a></li>
              <li><a href="#simulador" className="hover:text-[#00e7fe] transition-colors">Simulador de Volume</a></li>
              <li><a href="#cobertura" className="hover:text-[#00e7fe] transition-colors">Cobertura em SP e ABC</a></li>
              <li><a href="#depoimentos" className="hover:text-[#00e7fe] transition-colors">Depoimentos de Sellers</a></li>
              <li><a href="#faq" className="hover:text-[#00e7fe] transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 4: Marketplaces & Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soluções Atendidas</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-300">Mercado Envios Flex SP</span></li>
              <li><span className="text-slate-300">Shopee Direta & Flex</span></li>
              <li><span className="text-slate-300">Amazon Prime Same Day</span></li>
              <li><span className="text-slate-300">Magalu Entregas Hoje</span></li>
              <li><span className="text-slate-300">Coleta Dedicada em Estoque</span></li>
              <li><span className="text-slate-300">Entregas Express VIP</span></li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento & Hub SP</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00e7fe] shrink-0 mt-0.5" />
                <span>Hub Central: Av. do Estado, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00e7fe] shrink-0" />
                <span>Seg a Sáb: 07h00 às 22h00</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00e7fe] shrink-0" />
                <span>(11) 99999-8888</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00e7fe] shrink-0" />
                <span>operacional@nobresentregas.com.br</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#00e7fe]/10 text-xs font-semibold text-[#00e7fe] border border-[#00e7fe]/30 hover:border-[#00e7fe]/50 transition-all shadow-[0_0_15px_rgba(0,231,254,0.1)]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Plantão Operacional</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            <p>© {new Date().getFullYear()} Nobres Entregas Flex Logística Ltda. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-600 mt-0.5">CNPJ: 00.000.000/0001-00 • Especialista em Logística Same Day SP</p>
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidade & Termos</span>
            <span>SLA Garantido</span>
            <span>São Paulo - Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
