import React from 'react';
import { QrCode, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-indigo-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-indigo-500/20 shadow-2xl shadow-indigo-900/20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                添加商务微信<br />获取完整试用支持
              </h2>
              <ul className="space-y-4 text-slate-300 mb-8">
                <li className="flex items-center justify-center md:justify-start">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                  获取完整成片 Demo 演示
                </li>
                <li className="flex items-center justify-center md:justify-start">
                   <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                  了解多语言覆盖与价格方案
                </li>
                <li className="flex items-center justify-center md:justify-start">
                   <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                  对接海外发行与投放建议
                </li>
              </ul>
            </div>

            {/* Right: QR Code */}
            <div className="flex-shrink-0 text-center">
              <div className="w-48 h-48 bg-white p-2 rounded-xl mx-auto shadow-lg">
                {/* Simulated QR Code */}
                <img 
                  src="https://picsum.photos/200/200?grayscale" 
                  alt="Business WeChat QR" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-indigo-200 opacity-80">
                扫一扫 / 长按识别二维码
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};