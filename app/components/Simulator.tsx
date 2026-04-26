"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ReferenceLine, ResponsiveContainer,
  BarChart, Bar, Cell, LineChart, Line, Label
} from "recharts";
import { Beaker, Calculator, Activity, Users, GripHorizontal, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Custom Components ---
const InfoBox = ({ children, title = "ℹ️ Más información" }: { children: React.ReactNode, title?: string }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded-r-md shadow-sm transition-all duration-300">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center text-blue-800 font-bold mb-2 focus:outline-none"
      >
        {title}
        <motion.span 
          animate={{ rotate: open ? 0 : -90 }} 
          transition={{ duration: 0.2 }}
          className="ml-2 text-xs"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-slate-700 text-sm leading-relaxed mt-2 text-justify pb-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Módulo 1: Ley de Fick ---
const ModuloFick = () => {
  const [lambda, setLambda] = useState(40);
  
  const data = useMemo(() => {
    const arr = [];
    for (let r = 0; r <= 150; r += 5) {
      arr.push({ r, conf: Math.exp(-r / lambda) * 100 });
    }
    return arr;
  }, [lambda]);

  const val50 = (Math.exp(-50 / lambda) * 100).toFixed(1);
  const val75 = (Math.exp(-75 / lambda) * 100).toFixed(1);
  const val100 = (Math.exp(-100 / lambda) * 100).toFixed(1);

  return (
    <div >
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Beaker className="text-blue-500" /> La Ley de Fick — Cómo Viaja la Toxina
        </h2>
        
        <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Longitud de penetración λ (µm): <span className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-2">{lambda} µm</span>
          </label>
          <input 
            type="range" min="20" max="100" step="1" value={lambda} 
            onChange={e => setLambda(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="w-full overflow-x-auto mb-8 pb-4">
          <div className="h-[300px] min-w-[700px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorConf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="r" type="number" domain={[0, 150]} tick={{ fill: '#64748b' }}>
                <Label value="Distancia desde la célula fuente (µm)" offset={-10} position="insideBottom" fill="#64748b" fontSize={14} />
              </XAxis>
              <YAxis tick={{ fill: '#64748b' }}>
                <Label value="Concentración de DXd (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#64748b" fontSize={14} />
              </YAxis>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <RechartsTooltip formatter={(val: any) => [`${Number(val).toFixed(1)}%`, 'Concentración']} labelFormatter={val => `${val} µm`} />
              <Area type="monotone" dataKey="conf" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorConf)" />
              <ReferenceLine x={50} stroke="#94a3b8" strokeDasharray="3 3">
                <Label value={`${val50}%`} position="top" fill="#64748b" fontSize={12} />
              </ReferenceLine>
              <ReferenceLine x={75} stroke="#94a3b8" strokeDasharray="3 3">
                <Label value={`${val75}%`} position="top" fill="#64748b" fontSize={12} />
              </ReferenceLine>
              <ReferenceLine x={100} stroke="#94a3b8" strokeDasharray="3 3">
                <Label value={`${val100}%`} position="top" fill="#64748b" fontSize={12} />
              </ReferenceLine>
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
          <table className="w-full text-left text-sm table-auto border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-3 border-b border-slate-200">Distancia</th>
                <th className="p-3 border-b border-slate-200">Peso de difusión e^(-r/λ)</th>
                <th className="p-3 border-b border-slate-200">Interpretación</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-50">
                <td className="p-3 font-mono">50 µm</td>
                <td className="p-3 font-mono font-semibold text-blue-600">{val50}%</td>
                <td className="p-3">Vecinas inmediatas (1ª capa celular)</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="p-3 font-mono">75 µm</td>
                <td className="p-3 font-mono font-semibold text-blue-600">{val75}%</td>
                <td className="p-3">2ª capa celular</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">100 µm</td>
                <td className="p-3 font-mono font-semibold text-blue-600">{val100}%</td>
                <td className="p-3">Límite de alcance efectivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <InfoBox>
        La toxina DXd se libera dentro de una célula HER2+ y difunde hacia las vecinas a través del espacio intersticial. Como cualquier molécula que se dispersa en un medio, su concentración cae exponencialmente con la distancia — esto es la Ley de Fick. El parámetro λ (longitud de penetración) depende de las propiedades fisicoquímicas del payload: el DXd es altamente lipofílico, lo que le da alta permeabilidad de membrana pero también genera un &apos;efecto sumidero&apos; — las primeras células que encuentra lo absorben rápidamente, reduciendo la concentración disponible para las más lejanas (Khera et al., 2022). Estudios experimentales sitúan la penetración efectiva del DXd en 2-5 capas celulares, equivalente a 30-80 µm.
      </InfoBox>
    </div>
  );
};

// --- Módulo 2: Calculadora ISTB ---
const ModuloISTB = () => {
  const [params, setParams] = useState({ lambda: 40, ec50: 5, k: 0.5, scale: 2.5 });
  const [grid, setGrid] = useState({
    p3: [1, 2, 3], // 50, 75, 100
    p2: [1, 2, 3],
    p1: [1, 2, 3]
  });
  const [shareText, setShareText] = useState("Compartir");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const l = sp.get('lambda');
      const e = sp.get('ec50');
      const k = sp.get('k');
      const s = sp.get('scale');
      if (l || e || k || s) {
        setParams(prev => ({
          lambda: l ? parseFloat(l) : prev.lambda,
          ec50: e ? parseFloat(e) : prev.ec50,
          k: k ? parseFloat(k) : prev.k,
          scale: s ? parseFloat(s) : prev.scale
        }));
      }
    }
  }, []);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lambda', params.lambda.toString());
      url.searchParams.set('ec50', params.ec50.toString());
      url.searchParams.set('k', params.k.toString());
      url.searchParams.set('scale', params.scale.toString());
      navigator.clipboard.writeText(url.toString());
      setShareText("¡Copiado!");
      setTimeout(() => setShareText("Compartir"), 2000);
    }
  };

  const updateGrid = (row: 'p3'|'p2'|'p1', idx: number, val: number) => {
    const newGrid = { ...grid };
    newGrid[row][idx] = isNaN(val) ? 0 : val;
    setGrid(newGrid);
  };

  const getW = (dist: number) => Math.exp(-dist / params.lambda);
  
  const S3 = (grid.p3[0]*getW(50) + grid.p3[1]*getW(75) + grid.p3[2]*getW(100)) * 25;
  const S2 = (grid.p2[0]*getW(50) + grid.p2[1]*getW(75) + grid.p2[2]*getW(100)) * 5;
  const S1 = (grid.p1[0]*getW(50) + grid.p1[1]*getW(75) + grid.p1[2]*getW(100)) * 1;
  const Stotal = S3 + S2 + S1;
  const istb = Math.log(1 + Stotal) * params.scale;
  const pMuerte = 1 / (1 + Math.exp(-params.k * (istb - params.ec50))) * 100;

  const getCategory = (v: number) => {
    if (v < 2) return { text: "SUPERVIVENCIA", color: "text-green-600", bg: "bg-green-500" };
    if (v < 5) return { text: "RESCATE DÉBIL", color: "text-yellow-600", bg: "bg-yellow-500" };
    if (v < 10) return { text: "RESCATE MODERADO", color: "text-orange-600", bg: "bg-orange-500" };
    return { text: "SATURACIÓN LETAL", color: "text-red-600", bg: "bg-red-500" };
  };

  const cat = getCategory(istb);

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calculator className="text-blue-500" /> Parámetros Globales
          </h2>
          <button 
            onClick={handleShare}
            className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm"
          >
            <Share2 size={16} />
            {shareText}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">λ ({params.lambda} µm)</label>
            <input type="range" min="20" max="100" value={params.lambda} onChange={e=>setParams({...params, lambda: +e.target.value})} className="w-full accent-blue-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">EC50 ({params.ec50})</label>
            <input type="range" min="2" max="10" step="0.5" value={params.ec50} onChange={e=>setParams({...params, ec50: +e.target.value})} className="w-full accent-blue-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">k ({params.k})</label>
            <input type="range" min="0.1" max="1.5" step="0.1" value={params.k} onChange={e=>setParams({...params, k: +e.target.value})} className="w-full accent-blue-600" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Escala ({params.scale})</label>
            <input type="range" min="1" max="5" step="0.1" value={params.scale} onChange={e=>setParams({...params, scale: +e.target.value})} className="w-full accent-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">Entorno Vecinal (Nº células)</h3>
          <div className="w-full overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full text-sm text-center min-w-[400px]">
              <thead>
                <tr className="text-slate-500">
                  <th className="font-medium pb-2 text-left">Intensidad</th>
                  <th className="font-medium pb-2">50 µm</th>
                  <th className="font-medium pb-2">75 µm</th>
                  <th className="font-medium pb-2">100 µm</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50 border-b border-white">
                  <td className="p-2 text-left font-semibold text-red-800">3+ (peso: 25)</td>
                  {[0,1,2].map(i => <td key={i} className="p-2">
                    <input type="number" min="0" max="30" value={grid.p3[i]} onChange={e=>updateGrid('p3', i, +e.target.value)} className="w-16 text-center border border-red-200 rounded p-1" />
                  </td>)}
                </tr>
                <tr className="bg-orange-50 border-b border-white">
                  <td className="p-2 text-left font-semibold text-orange-800">2+ (peso: 5)</td>
                  {[0,1,2].map(i => <td key={i} className="p-2">
                    <input type="number" min="0" max="30" value={grid.p2[i]} onChange={e=>updateGrid('p2', i, +e.target.value)} className="w-16 text-center border border-orange-200 rounded p-1" />
                  </td>)}
                </tr>
                <tr className="bg-yellow-50 border-b border-white">
                  <td className="p-2 text-left font-semibold text-yellow-800">1+ (peso: 1)</td>
                  {[0,1,2].map(i => <td key={i} className="p-2">
                    <input type="number" min="0" max="30" value={grid.p1[i]} onChange={e=>updateGrid('p1', i, +e.target.value)} className="w-16 text-center border border-yellow-200 rounded p-1" />
                  </td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center items-center">
          <div className="text-center w-full">
            <h3 className="font-bold text-slate-800 mb-2">Paso 3 — Probabilidad de muerte</h3>
            <div className={`text-5xl font-black mb-2 ${cat.color}`}>
              {pMuerte.toFixed(1)}%
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${cat.bg}`}>
              {cat.text}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
        <div>
          <h3 className="font-bold text-slate-800 mb-2">Paso 1 — Contribución lineal ponderada (S_total: {Stotal.toFixed(1)})</h3>
          <div className="space-y-2">
            <div className="flex h-6 bg-slate-100 rounded overflow-hidden">
              <div style={{width: `${Math.min(100, (S3/Stotal)*100 || 0)}%`}} className="bg-red-400" title={`3+: ${S3.toFixed(1)}`} />
              <div style={{width: `${Math.min(100, (S2/Stotal)*100 || 0)}%`}} className="bg-orange-400" title={`2+: ${S2.toFixed(1)}`} />
              <div style={{width: `${Math.min(100, (S1/Stotal)*100 || 0)}%`}} className="bg-yellow-400" title={`1+: ${S1.toFixed(1)}`} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-800 mb-2">Paso 2 — Compresión logarítmica (ISTB: {istb.toFixed(2)})</h3>
          <div className="relative h-6 bg-slate-100 rounded overflow-hidden flex w-full">
            <div className="flex-1 bg-green-500 opacity-80" title="Supervivencia (0-2)" style={{flexBasis: '13.33%'}} />
            <div className="flex-1 bg-yellow-500 opacity-80" title="Rescate Débil (2-5)" style={{flexBasis: '20%'}} />
            <div className="flex-1 bg-orange-500 opacity-80" title="Rescate Moderado (5-10)" style={{flexBasis: '33.33%'}} />
            <div className="flex-1 bg-red-500 opacity-80" title="Saturación Letal (10+)" style={{flexBasis: '33.33%'}} />
            
            {/* Marker */}
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 z-10" style={{ left: `${Math.min(100, (istb/15)*100)}%` }}>
               <div className="absolute -top-2 -left-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-slate-900" />
            </div>
          </div>
        </div>
      </div>

      <InfoBox>
        Esta calculadora simula lo que el modelo del CDSS hace para cada una de las cientos de miles de células del tumor. Los pesos de intensidad (25/5/1) reflejan la densidad no lineal de receptores HER2: una célula 3+ expresa ~2 millones de receptores y libera ~25 veces más toxina que una 1+ con ~100.000 receptores. La compresión logarítmica modela el efecto plateau farmacológico: a partir de cierta concentración, añadir más toxina no aumenta proporcionalmente la muerte celular.
      </InfoBox>
    </div>
  );
};

// --- Módulo 3: Sigmoide ---
const ModuloSigmoide = () => {
  const [ec50, setEc50] = useState(5);
  const [k, setK] = useState(0.5);
  const [istb, setIstb] = useState(5);

  const data = useMemo(() => {
    const arr = [];
    for (let x = 0; x <= 15; x += 0.5) {
      arr.push({ x, p: 100 / (1 + Math.exp(-k * (x - ec50))) });
    }
    return arr;
  }, [ec50, k]);

  const pMuerte = 100 / (1 + Math.exp(-k * (istb - ec50)));
  const getCat = (v: number) => {
    if (v < 2) return "SUPERVIVENCIA";
    if (v < 5) return "RESCATE DÉBIL";
    if (v < 10) return "RESCATE MODERADO";
    return "SATURACIÓN LETAL";
  };

  return (
    <div className="">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Activity className="text-blue-500" /> La Curva Sigmoide — Dosis-Respuesta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-slate-50 rounded-lg border border-slate-100 mb-8">
           <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              EC50 <span className="text-xs bg-slate-200 px-1 rounded">{ec50}</span>
            </label>
            <input type="range" min="2" max="10" step="0.5" value={ec50} onChange={e=>setEc50(+e.target.value)} className="w-full accent-blue-600" />
            <span className="text-xs text-slate-500">Punto de inflexión (50%)</span>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              k <span className="text-xs bg-slate-200 px-1 rounded">{k}</span>
            </label>
            <input type="range" min="0.1" max="1.5" step="0.1" value={k} onChange={e=>setK(+e.target.value)} className="w-full accent-blue-600" />
            <span className="text-xs text-slate-500">Pendiente de la transición</span>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              ISTB de prueba <span className="text-xs bg-slate-200 px-1 rounded">{istb}</span>
            </label>
            <input type="range" min="0" max="15" step="0.1" value={istb} onChange={e=>setIstb(+e.target.value)} className="w-full accent-blue-600" />
            <span className="text-xs text-slate-500">Valor a evaluar</span>
          </div>
        </div>

        <div className="w-full overflow-x-auto mb-8 pb-4">
          <div className="h-[400px] min-w-[700px] relative">
            <div className="absolute inset-0 flex" style={{marginLeft: '40px', marginRight: '20px', marginBottom: '30px', marginTop: '10px'}}>
             <div className="h-full bg-green-500 opacity-10" style={{flex: '2 1 0'}} />
             <div className="h-full bg-yellow-500 opacity-10" style={{flex: '3 1 0'}} />
             <div className="h-full bg-orange-500 opacity-10" style={{flex: '5 1 0'}} />
             <div className="h-full bg-red-500 opacity-10" style={{flex: '5 1 0'}} />
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="x" type="number" domain={[0, 15]} tick={{fill: '#64748b'}}>
                <Label value="ISTB (Exposición acumulada)" offset={-10} position="insideBottom" fill="#64748b" />
              </XAxis>
              <YAxis domain={[0, 100]} tick={{fill: '#64748b'}}>
                <Label value="Probabilidad de muerte celular (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#64748b" />
              </YAxis>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <RechartsTooltip formatter={(val: any) => [`${Number(val).toFixed(1)}%`, 'Probabilidad']} />
              <ReferenceLine y={50} stroke="#94a3b8" strokeDasharray="3 3">
                <Label value="EC50" position="insideTopLeft" fill="#64748b" />
              </ReferenceLine>
              
              <ReferenceLine x={istb} stroke="#3b82f6" strokeDasharray="3 3" />
              <ReferenceLine y={pMuerte} stroke="#3b82f6" strokeDasharray="3 3" />
              
              <Line type="monotone" dataKey="p" stroke="#2563eb" strokeWidth={3} dot={false} isAnimationActive={false} />
              
              {/* Highlight Point */}
              <Line data={[{x: istb, p: pMuerte}]} type="monotone" dataKey="p" stroke="transparent" dot={{r: 6, fill: "#2563eb", strokeWidth: 2, stroke: "#fff"}} isAnimationActive={false}/>
            </LineChart>
          </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-lg text-slate-800">
            Con ISTB = <strong className="font-mono text-xl">{istb.toFixed(1)}</strong>, la probabilidad de muerte es <strong className="text-2xl text-blue-600">{pMuerte.toFixed(1)}%</strong>
          </p>
          <div className="mt-2 text-sm font-bold tracking-widest text-slate-500 uppercase">
            → Categoría: <span className="text-slate-800 inline-flex items-center ml-2 bg-white px-3 py-1 rounded shadow-sm border border-slate-200">{getCat(istb)}</span>
          </div>
        </div>
      </div>
      <InfoBox>
        La función sigmoide (o curva de Hill) es el estándar en farmacología para modelar relaciones dosis-respuesta. Produce una curva en &apos;S&apos;: a dosis bajas casi no hay efecto, luego hay una transición rápida alrededor del EC50, y finalmente la respuesta se satura. El parámetro k controla la brusquedad de esa transición: un k alto significa que hay un umbral nítido entre vida y muerte; un k bajo significa una transición gradual con mayor variabilidad biológica. Ambos parámetros son hipotéticos y requieren calibración con datos clínicos reales.
      </InfoBox>
    </div>
  )
};

// --- Módulo 4: Cohorte ---
interface Patient {
  id: string;
  neg: number;
  pos1: number;
  pos2: number;
  pos3: number;
  hqe: number;
  cells: number;
  L20: { destr: number; bsps: number; cov: number; seg: number };
  L40: { destr: number; bsps: number; cov: number; seg: number };
  L80: { destr: number; bsps: number; cov: number; seg: number };
}

const patientsData: Patient[] = [
  { id: "12078", neg: 80.0, pos1: 17.2, pos2: 2.7, pos3: 0.0, hqe: 0.33, cells: 134851, L20: {destr: 18.0, bsps: 14.0, cov: 20.4, seg: 0.34}, L40: {destr: 35.6, bsps: 28.6, cov: 52.7, seg: 0.44}, L80: {destr: 48.4, bsps: 41.0, cov: 65.0, seg: 0.50} },
  { id: "21464", neg: 94.5, pos1: 5.4, pos2: 0.1, pos3: 0.0, hqe: 0.10, cells: 367734, L20: {destr: 13.0, bsps: 12.2, cov: 13.9, seg: 0.31}, L40: {destr: 26.0, bsps: 24.3, cov: 45.6, seg: 0.41}, L80: {destr: 37.7, bsps: 35.8, cov: 60.7, seg: 0.47} },
  { id: "44908", neg: 28.4, pos1: 63.3, pos2: 8.1, pos3: 0.1, hqe: 0.51, cells: 109340, L20: {destr: 52.8, bsps: 35.5, cov: 70.9, seg: 0.61}, L40: {destr: 81.5, bsps: 63.3, cov: 81.1, seg: 0.68}, L80: {destr: 89.3, bsps: 73.8, cov: 84.7, seg: 0.71} },
  { id: "46235", neg: 92.6, pos1: 7.3, pos2: 0.2, pos3: 0.0, hqe: 0.14, cells: 211937, L20: {destr: 11.7, bsps: 10.5, cov: 9.7, seg: 0.19}, L40: {destr: 20.7, bsps: 17.8, cov: 25.6, seg: 0.24}, L80: {destr: 28.0, bsps: 24.3, cov: 34.8, seg: 0.28} },
  { id: "48683", neg: 55.1, pos1: 44.0, pos2: 0.9, pos3: 0.0, hqe: 0.50, cells: 113576, L20: {destr: 35.6, bsps: 27.6, cov: 68.5, seg: 0.62}, L40: {destr: 68.4, bsps: 58.9, cov: 91.2, seg: 0.72}, L80: {destr: 82.1, bsps: 75.0, cov: 94.5, seg: 0.77} },
  { id: "51140", neg: 95.9, pos1: 4.0, pos2: 0.0, pos3: 0.0, hqe: 0.08, cells: 40095, L20: {destr: 10.8, bsps: 10.4, cov: 6.4, seg: 0.26}, L40: {destr: 20.0, bsps: 18.9, cov: 34.5, seg: 0.35}, L80: {destr: 29.6, bsps: 28.2, cov: 48.9, seg: 0.41} }
];

const ModuloCohorte = () => {
  const [lambda, setLambda] = useState(40);

  const getInterp = (p: Patient) => {
    let destr, bsps, cov, seg;
    if (lambda <= 40) {
      const f = (lambda - 20) / 20;
      destr = p.L20.destr + (p.L40.destr - p.L20.destr) * f;
      bsps = p.L20.bsps + (p.L40.bsps - p.L20.bsps) * f;
      cov = p.L20.cov + (p.L40.cov - p.L20.cov) * f;
      seg = p.L20.seg + (p.L40.seg - p.L20.seg) * f;
    } else {
      const f = (lambda - 40) / 40;
      destr = p.L40.destr + (p.L80.destr - p.L40.destr) * f;
      bsps = p.L40.bsps + (p.L80.bsps - p.L40.bsps) * f;
      cov = p.L40.cov + (p.L80.cov - p.L40.cov) * f;
      seg = p.L40.seg + (p.L80.seg - p.L40.seg) * f;
    }
    
    let veredicto = "❌ INSULATED";
    let color = "#ef4444";
    let bg = "bg-red-100 text-red-800";
    if (destr >= 75) { veredicto = "✅ CLUSTERED"; color = "#22c55e"; bg = "bg-green-100 text-green-800"; }
    else if (destr >= 40) { veredicto = "⚠️ HETEROGÉNEO"; color = "#eab308"; bg = "bg-yellow-100 text-yellow-800"; }

    return { name: `Pte. ${p.id}`, ...p, destr, bsps, cov, seg, veredicto, color, bg };
  };

  const chartData = patientsData.map(getInterp);

  const val50 = (Math.exp(-50 / lambda) * 100).toFixed(1);
  const val75 = (Math.exp(-75 / lambda) * 100).toFixed(1);
  const val100 = (Math.exp(-100 / lambda) * 100).toFixed(1);

  return (
    <div className="">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Users className="text-blue-500" /> Cohorte de 6 Pacientes — Análisis de Sensibilidad
        </h2>

        <div className="mb-8 p-6 bg-slate-50 rounded-lg border border-slate-100">
          <label className="block text-lg font-bold text-slate-800 mb-4 text-center">
            Longitud de penetración λ (µm) — Mueve para simular diferentes propiedades de difusión
          </label>
          <input type="range" min="20" max="80" step="1" value={lambda} onChange={e=>setLambda(+e.target.value)} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-4" />
          <div className="text-center text-sm font-medium text-slate-600 font-mono bg-white inline-block px-4 py-2 rounded-full shadow-sm border border-slate-200">
            λ = {lambda} µm | Pesos: w(50) = {val50}%, w(75) = {val75}%, w(100) = {val100}%
          </div>
        </div>

        <div className="w-full overflow-x-auto mb-8 pb-4">
          <div className="h-[350px] min-w-[700px] w-full">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={chartData} margin={{ top: 20, right: 30, left: 60, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e2e8f0" />
              <XAxis type="number" domain={[0, 100]} tick={{fill: '#64748b'}}>
                 <Label value="Tasa de Destrucción Total (%)" offset={-10} position="insideBottom" fill="#64748b" />
              </XAxis>
              <YAxis dataKey="name" type="category" tick={{fill: '#475569', fontWeight: 600}} width={80} />
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <RechartsTooltip formatter={(val: any) => [`${Number(val).toFixed(1)}%`, 'Destrucción']} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <ReferenceLine x={40} stroke="#ef4444" strokeDasharray="3 3">
                <Label value="INSULATED" position="insideTopLeft" fill="#ef4444" fontSize={11} />
              </ReferenceLine>
              <ReferenceLine x={75} stroke="#22c55e" strokeDasharray="3 3">
                <Label value="CLUSTERED" position="insideTopRight" fill="#22c55e" fontSize={11} />
              </ReferenceLine>
              <Bar dataKey="destr" isAnimationActive={false} radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
           <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
             <h4 className="font-bold text-red-800 text-sm mb-2">🔴 Robustamente INSULATED</h4>
             <p className="text-xs text-red-700">Pacientes 21464, 46235, 51140 fallan en λ=20, 40 y 80.</p>
           </div>
           <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
             <h4 className="font-bold text-green-800 text-sm mb-2">🟢 Robustamente respondedor</h4>
             <p className="text-xs text-green-700">Paciente 44908 supera el 40% en todos los escenarios.</p>
           </div>
           <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
             <h4 className="font-bold text-yellow-800 text-sm mb-2">🟡 Sensible a λ</h4>
             <p className="text-xs text-yellow-700">Pacientes 12078 y 48683 cruzan umbrales según difusibilidad.</p>
           </div>
        </div>

        <div className="w-full overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
          <table className="w-full text-left text-sm table-auto border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-3 border-b border-slate-200">Paciente</th>
                <th className="p-3 border-b border-slate-200">%Neg</th>
                <th className="p-3 border-b border-slate-200">%1+</th>
                <th className="p-3 border-b border-slate-200">HQE</th>
                <th className="p-3 border-b border-slate-200">Destr.</th>
                <th className="p-3 border-b border-slate-200">bSPS</th>
                <th className="p-3 border-b border-slate-200">Seg.</th>
                <th className="p-3 border-b border-slate-200 text-center">Veredicto</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map(p => (
                 <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-mono font-bold text-slate-700">{p.id}</td>
                  <td className="p-3 text-slate-500">{p.neg}%</td>
                  <td className="p-3 text-slate-500">{p.pos1}%</td>
                  <td className="p-3 text-slate-500">{p.hqe}</td>
                  <td className="p-3 font-bold text-slate-800">{p.destr.toFixed(1)}%</td>
                  <td className="p-3 text-slate-500">{p.bsps.toFixed(1)}%</td>
                  <td className="p-3 text-slate-500">{p.seg.toFixed(2)}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${p.bg}`}>{p.veredicto}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <InfoBox>
        Este panel muestra los resultados reales de 6 biopsias metastásicas analizadas con el CDSS Tissunómico. Al mover λ, se simula cómo cambiaría la predicción si la toxina DXd penetrara más (λ alto, payload hidrofílico) o menos (λ bajo, efecto sumidero severo). Los pacientes que mantienen su veredicto en todos los escenarios tienen una predicción robusta. Los que cambian son casos donde la decisión clínica depende críticamente de la difusibilidad real del fármaco — estos pacientes se beneficiarían más de una calibración prospectiva del modelo.
      </InfoBox>
    </div>
  );
};

// --- Módulo 5: Constructor ---
const ModuloConstructor = () => {
  const [neg, setNeg] = useState(60);
  const [p1, setP1] = useState(30);
  const [p2, setP2] = useState(8);
  const [p3, setP3] = useState(2);
  const [mode, setMode] = useState<'MEZCLADO'|'SEGREGADO'>('MEZCLADO');
  const [lambda, setLambda] = useState(40);

  // Normalize sliders
  const handleSlider = (type: string, val: number) => {
    let totalRest = 100 - val;
    if (totalRest < 0) totalRest = 0;
    
    if (type === 'neg') { setNeg(val); normalizeOthers(['p1','p2','p3'], [p1, p2, p3], totalRest); }
    if (type === 'p1') { setP1(val); normalizeOthers(['neg','p2','p3'], [neg, p2, p3], totalRest); }
    if (type === 'p2') { setP2(val); normalizeOthers(['neg','p1','p3'], [neg, p1, p3], totalRest); }
    if (type === 'p3') { setP3(val); normalizeOthers(['neg','p1','p2'], [neg, p1, p2], totalRest); }
  };

  const normalizeOthers = (keys: string[], vals: number[], target: number) => {
    const sum = vals.reduce((a,b)=>a+b, 0);
    const newVals = sum === 0 ? vals.map(()=>target/3) : vals.map(v => (v/sum)*target);
    keys.forEach((k, i) => {
      if (k === 'neg') setNeg(newVals[i]);
      if (k === 'p1') setP1(newVals[i]);
      if (k === 'p2') setP2(newVals[i]);
      if (k === 'p3') setP3(newVals[i]);
    });
  };

  const grid = useMemo(() => {
    const size = 400; // 20x20
    const counts = {
      neg: Math.round((neg / 100) * size),
      '1+': Math.round((p1 / 100) * size),
      '2+': Math.round((p2 / 100) * size),
      '3+': Math.round((p3 / 100) * size)
    };
    
    // adjust rounding errors
    let curr = counts.neg + counts['1+'] + counts['2+'] + counts['3+'];
    while(curr < size) { counts.neg++; curr++; }
    while(curr > size) { counts.neg--; curr--; }

    let arr: string[] = [];
    arr.push(...Array(counts.neg).fill('neg'));
    arr.push(...Array(counts['1+']).fill('1+'));
    arr.push(...Array(counts['2+']).fill('2+'));
    arr.push(...Array(counts['3+']).fill('3+'));

    if (mode === 'MEZCLADO') {
      // shuffle with pseudo random to keep stable if nothing changes
       for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor((Math.sin(i * 1337) * 0.5 + 0.5) * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    } else {
      // SEGREGATED: put all positives in bottom right
      // 20x20. bottom right means max x + y
      const coords = [];
      for(let y=0; y<20; y++){
        for(let x=0; x<20; x++) coords.push({x,y});
      }
      coords.sort((a,b) => ((b.x*1.5 + b.y) - (a.x*1.5 + a.y))); // Weight X and Y to push to bottom right corner
      
      const newArr = Array(400).fill('neg');
      const posCount = counts['1+'] + counts['2+'] + counts['3+'];
      const pool = [];
      pool.push(...Array(counts['1+']).fill('1+'));
      pool.push(...Array(counts['2+']).fill('2+'));
      pool.push(...Array(counts['3+']).fill('3+'));

      for(let i=0; i<posCount; i++) {
        const idx = coords[i].y * 20 + coords[i].x;
        newArr[idx] = pool[i];
      }
      arr = newArr;
    }

    // calculation
    let killed = 0;
    const finalGrid = arr.map((type, index) => {
      if (type !== 'neg') return { type, alive: false, isNeg: false };

      const cx = index % 20;
      const cy = Math.floor(index / 20);
      let istb = 0;

      for(let dy=-3; dy<=3; dy++){
        for(let dx=-3; dx<=3; dx++){
          if (dx===0 && dy===0) continue;
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx>=0 && nx<20 && ny>=0 && ny<20) {
             const distManhattan = Math.abs(dx) + Math.abs(dy);
             if (distManhattan <= 3) {
               const nIdx = ny * 20 + nx;
               const nTy = arr[nIdx];
               if (nTy !== 'neg') {
                 const pesoInt = nTy==='3+'?25:nTy==='2+'?5:1;
                 const distUm = distManhattan * 25; // assume 1 cell = 25um
                 istb += pesoInt * Math.exp(-distUm / lambda);
               }
             }
          }
        }
      }

      const isKilled = istb > 3; // umbral ad-hoc para la demo
      if (isKilled) killed++;

      return { type, alive: !isKilled, isNeg: true };
    });

    return { cells: finalGrid, killed, totalNeg: counts.neg };
  }, [neg, p1, p2, p3, mode, lambda]);

  const killedPct = grid.totalNeg > 0 ? (grid.killed / grid.totalNeg) * 100 : 100;
  
  let veredicto = "❌ INSULATED";
  if (killedPct >= 75) veredicto = "✅ CLUSTERED";
  else if (killedPct >= 40) veredicto = "⚠️ HETEROGÉNEO";

  const getCellColor = (type: string) => {
    if (type==='neg') return 'bg-slate-200';
    if (type==='1+') return 'bg-yellow-400';
    if (type==='2+') return 'bg-orange-400';
    if (type==='3+') return 'bg-red-500';
    return '';
  };

  return (
    <div className=" flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="font-bold text-slate-800 mb-4">Composición Tumoral</h3>
           <div className="space-y-4">
             <div>
               <label className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                 <span>Negativas</span> <span className="font-mono">{neg.toFixed(1)}%</span>
               </label>
               <input type="range" value={neg} onChange={e=>handleSlider('neg',+e.target.value)} className="w-full accent-slate-500" />
             </div>
             <div>
               <label className="flex justify-between text-xs font-bold text-yellow-600 mb-1">
                 <span>1+</span> <span className="font-mono">{p1.toFixed(1)}%</span>
               </label>
               <input type="range" value={p1} onChange={e=>handleSlider('p1',+e.target.value)} className="w-full accent-yellow-400" />
             </div>
             <div>
               <label className="flex justify-between text-xs font-bold text-orange-600 mb-1">
                 <span>2+</span> <span className="font-mono">{p2.toFixed(1)}%</span>
               </label>
               <input type="range" value={p2} onChange={e=>handleSlider('p2',+e.target.value)} className="w-full accent-orange-500" />
             </div>
             <div>
               <label className="flex justify-between text-xs font-bold text-red-600 mb-1">
                 <span>3+</span> <span className="font-mono">{p3.toFixed(1)}%</span>
               </label>
               <input type="range" value={p3} onChange={e=>handleSlider('p3',+e.target.value)} className="w-full accent-red-600" />
             </div>
           </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
          <label className="block text-sm font-semibold text-slate-700 mb-4">Topología Espacial</label>
          <div className="flex justify-center bg-slate-100 p-1 rounded-lg">
             <button 
                onClick={()=>setMode('MEZCLADO')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${mode==='MEZCLADO' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               MEZCLADO
             </button>
             <button 
                onClick={()=>setMode('SEGREGADO')}
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${mode==='SEGREGADO' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               SEGREGADO
             </button>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200">
          <label className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                 <span>Longitud de penetración λ</span> <span className="font-mono bg-white px-1 border border-slate-200 rounded">{lambda} µm</span>
          </label>
          <input type="range" min="20" max="100" value={lambda} onChange={e=>setLambda(+e.target.value)} className="w-full accent-blue-600" />
        </div>
      </div>

      <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
         <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 w-full">
          <GripHorizontal className="text-blue-500" /> Matriz Tumoral (20x20)
        </h2>
        
        <div 
          className="grid grid-cols-20 gap-[1px] bg-slate-100 p-[1px] border border-slate-300 rounded shadow-inner"
          style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', width: '100%', maxWidth: '450px', aspectRatio: '1/1' }}
        >
          {grid.cells.map((c, i) => (
             <div 
               key={i} 
               className={`w-full h-full rounded-sm ${getCellColor(c.type)} transition-colors duration-300
                 ${c.isNeg && !c.alive ? 'border-[2px] border-red-500/80 shadow-[inset_0_0_4px_rgba(239,68,68,0.5)]' : ''}
                 ${c.isNeg && c.alive ? 'border-[2px] border-green-500/80' : ''}
               `}
               title={c.isNeg ? (c.alive ? "Sobrevive" : "Muere por bystander") : `Célula fuente ${c.type}`}
             />
          ))}
        </div>

        <div className="w-full mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-[450px]">
           <div className="flex justify-between items-center mb-2">
             <span className="text-sm font-semibold text-slate-600">Células negativas destruidas:</span>
             <span className="font-mono font-bold text-slate-800">{grid.killed} de {grid.totalNeg} <span className="text-blue-600">({killedPct.toFixed(1)}%)</span></span>
           </div>
           <hr className="my-2 border-slate-200" />
           <div className="flex justify-between items-center">
             <span className="text-sm font-semibold text-slate-600">Veredicto fenotípico:</span>
             <span className="font-bold">{veredicto}</span>
           </div>
        </div>
        
        <div className="mt-4 w-full">
          <InfoBox>
            Este es el concepto más importante del CDSS Tissunómico: la misma proporción de células HER2+ puede dar resultados opuestos según la topografía espacial. En modo MEZCLADO, las células negativas están rodeadas de fuentes de toxina y son destruidas (fenotipo CLUSTERED). En modo SEGREGADO, las mismas células HER2+ están agrupadas lejos de las negativas, que sobreviven (fenotipo INSULATED). La IHC tradicional reportaría el mismo resultado para ambos tumores. El análisis espacial los distingue. Esta es la diferencia que puede cambiar la decisión terapéutica.
          </InfoBox>
        </div>
      </div>
    </div>
  )
};

export default function InteractiveApp() {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 pb-16 rounded-xl border border-slate-200 overflow-hidden shadow-sm min-h-[600px] flex items-center justify-center">
        <div className="text-slate-400 font-mono text-sm animate-pulse italic">
          Iniciando Matriz Tissunómica...
        </div>
      </div>
    );
  }

  const tabs = [
    { icon: "📡", label: "Fick", Component: ModuloFick },
    { icon: "🧮", label: "ISTB", Component: ModuloISTB },
    { icon: "📈", label: "Sigmoide", Component: ModuloSigmoide },
    { icon: "👥", label: "Cohorte", Component: ModuloCohorte },
    { icon: "🧬", label: "Constructor", Component: ModuloConstructor },
  ];

  const ActiveComponent = tabs[tab].Component;

  return (
    <div className="bg-slate-50 font-sans text-slate-900 pb-16 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            CDSS Tissunómico — <span className="text-blue-600">Simulador Interactivo del Efecto Bystander</span>
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1 text-justify">
            Modelo de difusión espacial para trastuzumab deruxtecan (T-DXd)
          </p>
        </div>
        
        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 pb-2" style={{ scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
            {tabs.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setTab(idx)}
                className={`py-3 px-4 md:px-6 whitespace-nowrap font-semibold text-sm transition-all border-b-2 
                  ${tab === idx 
                    ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
              >
                <span className="mr-2">{t.icon}</span> {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 mt-8 pb-8 text-center text-xs text-slate-400 font-medium border-t border-slate-200 pt-8">
        Modelo in silico con parámetros hipotéticos. Requiere validación clínica prospectiva. Datos de cohorte: 6 biopsias metastásicas de cáncer de mama.
      </footer>
    </div>
  );
}
