/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { clients } from './data';
import { ClientList } from './components/ClientList';
import { ClientDetail } from './components/ClientDetail';

export default function App() {
  const [selectedId, setSelectedId] = useState<string>(clients[0].id);
  const selectedClient = clients.find(c => c.id === selectedId) || null;

  return (
    <main className="min-h-[100dvh] w-full flex flex-col md:flex-row bg-zinc-50 overflow-auto md:overflow-hidden text-zinc-900 font-sans">
      <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 border-b md:border-b-0 md:border-r border-zinc-200/60 bg-zinc-50/50 md:h-[100dvh]">
        <ClientList 
          clients={clients} 
          selectedId={selectedId} 
          onSelect={(id) => {
             setSelectedId(id);
             if (window.innerWidth < 768) {
               window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
             }
          }} 
        />
      </div>
      <div className="flex-1 bg-white relative z-0 md:h-[100dvh] overflow-y-auto">
        <ClientDetail client={selectedClient} />
      </div>
    </main>
  );
}
