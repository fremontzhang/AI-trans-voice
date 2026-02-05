import React, { useState } from 'react';
import { PRODUCT_MODULES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProductModules: React.FC = () => {
  const [activeModule, setActiveModule] = useState(PRODUCT_MODULES[0]);

  return (
    <section id="modules" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">全链路功能模块</h2>
          <p className="text-slate-400">
            从素材上传到收益结算，北斗智影提供端到端的短剧出海基础设施。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Navigation (Left) */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {PRODUCT_MODULES.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border group ${
                  activeModule.id === module.id
                    ? 'bg-gradient-to-r from-indigo-900/50 to-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-800/30 border-transparent hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-2 rounded-lg ${
                    activeModule.id === module.id ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'
                  }`}>
                    {React.cloneElement(module.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h3 className={`font-semibold text-lg ${
                    activeModule.id === module.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {module.title}
                  </h3>
                </div>
                <p className={`text-sm pl-[52px] ${
                  activeModule.id === module.id ? 'text-indigo-200' : 'text-slate-500'
                }`}>
                  {module.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Visualization (Right) */}
          <div className="lg:w-2/3">
            <div className="relative h-full min-h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 p-8 flex flex-col justify-between overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] -z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                      {React.cloneElement(activeModule.icon as React.ReactElement, { size: 32 })}
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                     <p className="text-indigo-400">{activeModule.subtitle}</p>
                   </div>
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {activeModule.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeModule.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated UI Preview Box */}
              <div className="mt-12 relative rounded-t-xl bg-slate-950 border-t border-x border-slate-800 p-4 shadow-2xl translate-y-2 opacity-90">
                 <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="h-2 w-32 bg-slate-800 rounded-full ml-4"></div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex gap-4">
                       <div className="w-1/4 h-24 bg-slate-900 rounded-lg animate-pulse"></div>
                       <div className="w-3/4 space-y-2">
                          <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                          <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                          <div className="h-8 w-24 bg-indigo-900/30 rounded mt-4"></div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative Overlay for interaction hint */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent flex items-end justify-center pb-4">
                    <span className="text-xs font-mono text-indigo-300 flex items-center bg-black/50 px-3 py-1 rounded-full border border-indigo-500/20">
                       System Preview <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};