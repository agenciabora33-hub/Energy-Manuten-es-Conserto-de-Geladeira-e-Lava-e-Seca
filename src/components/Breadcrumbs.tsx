import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav
      aria-label="Navegação estrutural"
      className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full text-xs text-neutral-400 overflow-x-auto"
    >
      <ol className="flex items-center space-x-2 whitespace-nowrap">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 text-neutral-400 hover:text-[#d4af37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded px-1 py-0.5"
            aria-label="Página Inicial"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-neutral-600 flex-shrink-0" aria-hidden="true" />
              {isLast ? (
                <span className="text-[#f3e5ab] font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.url)}
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded px-1 py-0.5"
                >
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
