import { ClientData } from '../types';
import { cn } from '../utils';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface Props {
  clients: ClientData[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ClientList({ clients, selectedId, onSelect }: Props) {
  return (
    <div className="flex flex-col h-full bg-zinc-50/50">
      <div className="p-8 pb-6 sticky top-0 bg-zinc-50/90 backdrop-blur-md z-20 border-b border-zinc-200/50">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tighter text-zinc-900 mb-1">
          Portfólio Ativo
        </h1>
        <p className="text-[0.85rem] font-medium text-zinc-500">
          Acompanhamento estratégico de clientes
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {clients.map((client, index) => {
          const isSelected = client.id === selectedId;
          return (
            <motion.button
              key={client.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
              onClick={() => onSelect(client.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-[1.5rem] text-left transition-all duration-300 relative group",
                isSelected ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-zinc-200" : "hover:bg-zinc-100/50 border border-transparent"
              )}
            >
              <div className="space-y-4 relative z-10 w-full">
                <span className={cn(
                  "block text-[1.1rem] font-medium tracking-tight transition-colors",
                  isSelected ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-900"
                )}>
                  {client.name}
                </span>
                <div className="flex items-center justify-end">
                  
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500",
                    isSelected ? "opacity-100 translate-x-0 bg-zinc-100" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-transparent"
                  )}>
                    <ChevronRight className={cn("w-3.5 h-3.5", isSelected ? "text-zinc-900" : "text-zinc-400")} strokeWidth={2} />
                  </div>
                </div>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 rounded-[1.5rem] bg-white ring-1 ring-black/5 pointer-events-none"
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  );
}
