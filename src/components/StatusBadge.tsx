import { StatusType } from '../types';
import { cn } from '../utils';

export function StatusBadge({ status }: { status: StatusType }) {
  const config = {
    'stable': { label: 'Estável', icon: '●', color: 'text-zinc-400', ring: 'ring-zinc-200' },
    'warning': { label: 'Atenção', icon: '▲', color: 'text-zinc-600', ring: 'ring-zinc-300' },
    'action-required': { label: 'Ação Crítica', icon: '■', color: 'text-zinc-900', ring: 'ring-zinc-400' },
    'new': { label: 'Onboarding', icon: '◆', color: 'text-zinc-500', ring: 'ring-zinc-200' }
  };
  
  const { label, icon, color, ring } = config[status];
  
  return (
    <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.04] bg-white shadow-sm ring-1 ring-inset", ring)}>
      <span className={cn("text-[9px]", color)}>{icon}</span>
      <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-700">{label}</span>
    </div>
  );
}
