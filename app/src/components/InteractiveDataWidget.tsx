import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Activity, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const supplyChainData = [
  { month: 'Jan', stockoutRisk: 28, inventoryCost: 120, optimizedCost: 95 },
  { month: 'Feb', stockoutRisk: 24, inventoryCost: 115, optimizedCost: 92 },
  { month: 'Mar', stockoutRisk: 19, inventoryCost: 118, optimizedCost: 88 },
  { month: 'Apr', stockoutRisk: 12, inventoryCost: 105, optimizedCost: 82 },
  { month: 'May', stockoutRisk: 8,  inventoryCost: 98,  optimizedCost: 78 },
  { month: 'Jun', stockoutRisk: 3,  inventoryCost: 95,  optimizedCost: 74 },
];

const sentimentData = [
  { category: 'Positive', count: 6420, color: '#A3FFD6' },
  { category: 'Neutral', count: 2150, color: '#FFF5E4' },
  { category: 'Negative', count: 1430, color: '#FF76CE' },
];

const forecastData = [
  { week: 'W1', actual: 420, forecast: 415 },
  { week: 'W2', actual: 480, forecast: 475 },
  { week: 'W3', actual: 510, forecast: 508 },
  { week: 'W4', actual: 460, forecast: 465 },
  { week: 'W5', actual: 530, forecast: 525 },
  { week: 'W6', actual: 590, forecast: 585 },
];

export default function InteractiveDataWidget() {
  const [activeTab, setActiveTab] = useState<'supplyChain' | 'sentiment' | 'forecast'>('supplyChain');

  return (
    <div className="brutal-card p-5 bg-white relative">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b-[3px] border-black">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
          <span className="text-xs font-bold uppercase tracking-wider ml-2 text-black/80">
            Astri_Analytics_Terminal.v2
          </span>
        </div>
        
        {/* Status */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-mint border-[2px] border-black text-xs font-bold uppercase">
          <Activity className="w-3.5 h-3.5 animate-pulse text-black" />
          <span>Live Data Feed</span>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="p-2.5 bg-pink/20 border-[2px] border-black">
          <div className="text-[10px] font-bold uppercase text-black/70">Holding Cost</div>
          <div className="text-lg font-bold text-black">-18.5%</div>
        </div>
        <div className="p-2.5 bg-mint/20 border-[2px] border-black">
          <div className="text-[10px] font-bold uppercase text-black/70">NLP Accuracy</div>
          <div className="text-lg font-bold text-black">94.2%</div>
        </div>
        <div className="p-2.5 bg-sky/20 border-[2px] border-black">
          <div className="text-[10px] font-bold uppercase text-black/70">Forecast Accuracy</div>
          <div className="text-lg font-bold text-black">91.5%</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveTab('supplyChain')}
          className={`flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-black text-xs font-bold uppercase transition-all ${
            activeTab === 'supplyChain'
              ? 'bg-pink shadow-brutal-sm'
              : 'bg-white hover:bg-cream'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Inventory Optimization
        </button>

        <button
          onClick={() => setActiveTab('sentiment')}
          className={`flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-black text-xs font-bold uppercase transition-all ${
            activeTab === 'sentiment'
              ? 'bg-mint shadow-brutal-sm'
              : 'bg-white hover:bg-cream'
          }`}
        >
          <PieChart className="w-3.5 h-3.5" />
          Sentiment Dist.
        </button>

        <button
          onClick={() => setActiveTab('forecast')}
          className={`flex items-center gap-1.5 px-3 py-1.5 border-[2px] border-black text-xs font-bold uppercase transition-all ${
            activeTab === 'forecast'
              ? 'bg-sky shadow-brutal-sm'
              : 'bg-white hover:bg-cream'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Demand Forecast
        </button>
      </div>

      {/* Chart Display Container */}
      <div className="h-52 bg-slate-900 border-[2px] border-black p-3 relative rounded-none overflow-hidden">
        {activeTab === 'supplyChain' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <div className="text-[11px] font-mono text-emerald-400 mb-1 flex items-center justify-between">
              <span>SQL ETL: Dynamic EOQ vs Standard Cost</span>
              <span className="text-emerald-300 font-bold">Optimized Savings: $24.8k</span>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={supplyChainData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A3FFD6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#A3FFD6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="inventoryCost" name="Old Cost" stroke="#ef4444" fill="none" strokeWidth={2} strokeDasharray="3 3" />
                <Area type="monotone" dataKey="optimizedCost" name="Optimized Cost" stroke="#A3FFD6" fillOpacity={1} fill="url(#colorCost)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {activeTab === 'sentiment' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <div className="text-[11px] font-mono text-pink-400 mb-1 flex items-center justify-between">
              <span>IndoBERT NLP Review Volume (N=10,000)</span>
              <span className="text-pink-300 font-bold">64.2% Positive</span>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={sentimentData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <XAxis dataKey="category" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#000" strokeWidth={1} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {activeTab === 'forecast' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <div className="text-[11px] font-mono text-sky-400 mb-1 flex items-center justify-between">
              <span>Prophet Time Series Forecast vs Actual</span>
              <span className="text-sky-300 font-bold">MAPE: 2.1%</span>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={forecastData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <XAxis dataKey="week" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="actual" name="Actual Demand" stroke="#FFF5E4" fill="none" strokeWidth={2} />
                <Area type="monotone" dataKey="forecast" name="Model Forecast" stroke="#79E0EE" fill="none" strokeWidth={3} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>

      {/* Terminal footer quote */}
      <div className="mt-3 text-[11px] font-mono text-black/70 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
        <span>System Status: Models validated. Ready for enterprise data deployment.</span>
      </div>
    </div>
  );
}
