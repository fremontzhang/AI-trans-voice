import React, { useState } from 'react';
import { VIDEO_SAMPLES } from '../constants';
import { PlayCircle, Globe } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'Original' | 'EN' | 'JP' | 'ES'>('Original');

  // Logic to simulate switching content based on language
  // In a real app, this would swap video URLs
  const getLabel = (lang: string) => {
    switch(lang) {
      case 'Original': return '中文原声';
      case 'EN': return 'English Dub';
      case 'JP': return '日本語吹替';
      case 'ES': return 'Español';
      default: return '';
    }
  };

  return (
    <section id="showcase" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">真实成片示例</h2>
          <p className="text-slate-400">
            同一部短剧，不同语言版本，音色一致、情绪同步、声画对齐。
          </p>
        </div>

        {/* Language Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-slate-900 rounded-lg border border-slate-800">
            {['Original', 'EN', 'JP', 'ES'].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang as any)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeLang === lang 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {getLabel(lang)}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {VIDEO_SAMPLES.map((video) => (
            <div key={video.id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              {/* Image Placeholder acting as Thumbnail */}
              <img 
                src={video.cover} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" 
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer border border-white/20">
                  <PlayCircle className="w-8 h-8 text-white fill-current" />
                </div>
                
                <h3 className="text-white font-semibold text-lg text-center drop-shadow-md">
                  {video.title}
                </h3>
                
                <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs text-indigo-300 border border-indigo-500/30">
                  <Globe className="w-3 h-3" />
                  {getLabel(activeLang)}
                </div>
              </div>

              {/* Fake Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                <div className="h-full bg-indigo-500 w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500">
           * 建议佩戴耳机体验最佳音质。支持手机端全屏播放。
        </div>
      </div>
    </section>
  );
};