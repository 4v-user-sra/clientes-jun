import { ClientData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, AlertTriangle, Target, Lightbulb } from 'lucide-react';

export function ClientDetail({ client }: { client: ClientData | null }) {
  if (!client) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white min-h-[100dvh]">
        <div className="w-16 h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4">
          <Activity className="w-6 h-6 text-zinc-300" strokeWidth={1.5} />
        </div>
        <p className="text-zinc-400 text-sm">Selecione um cliente para visualizar os detalhes</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ease: [0.32, 0.72, 0, 1], duration: 0.5 } }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={client.id}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={container}
        className="w-full p-6 md:p-12 lg:p-16 min-h-[100dvh] flex flex-col"
      >
        <div className="max-w-3xl xl:max-w-4xl mx-auto w-full space-y-12 pb-16">
          <motion.div variants={item} className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-zinc-900 leading-[1.1]">
              {client.name}
            </h2>
          </motion.div>

          {client.metrics.length > 0 && (
            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {client.metrics.map((metric, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-zinc-50/80 ring-1 ring-zinc-200/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-3 relative z-10">{metric.label}</p>
                  <p className="text-2xl md:text-3xl font-mono tracking-tighter text-zinc-900 relative z-10">{metric.value}</p>
                </div>
              ))}
            </motion.div>
          )}

          <div className="grid grid-cols-1 gap-12">
            <motion.div variants={item} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-zinc-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
                  Situação Atual
                </h3>
              </div>
              <p className="text-[1.05rem] md:text-lg text-zinc-600 leading-[1.8] max-w-[65ch]">
                {client.currentSituation}
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-rose-100/50 pb-3">
                <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-xs font-bold text-rose-900 uppercase tracking-widest">
                  Pontos de Atenção
                </h3>
              </div>
              <ul className="space-y-4 pt-2">
                {client.attentionPoints.length === 0 ? (
                  <li className="text-zinc-400 text-sm italic">Nenhum ponto de atenção emergencial.</li>
                ) : (
                  client.attentionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-700 bg-rose-50/40 p-4 rounded-2xl ring-1 ring-rose-100">
                      <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span className="leading-[1.7] text-sm md:text-[0.95rem]">{pt}</span>
                    </li>
                  ))
                )}
              </ul>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-200/50 pb-3">
                <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
                  Plano de Ação
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-2">
                {client.actionPlan.map((action, i) => (
                  <div key={i} className="p-6 rounded-[2rem] bg-white ring-1 ring-zinc-200 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.03)] hover:-translate-y-[2px] transition-transform duration-500 ease-out">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 mb-3 block tracking-widest">AÇÃO 0{i + 1}</span>
                    <p className="text-[0.95rem] md:text-base text-zinc-800 leading-[1.7]">{action}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {client.observations && (
              <motion.div variants={item} className="space-y-4 pt-8 border-t border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
                    Observações Extras
                  </h3>
                </div>
                <p className="text-[0.95rem] text-zinc-600 leading-relaxed italic max-w-[65ch] bg-zinc-50 p-6 rounded-2xl">
                  "{client.observations}"
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
