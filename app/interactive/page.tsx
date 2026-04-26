'use client';

import React, { useState, useEffect } from 'react';

export default function DemoPage() {
  const [mounted, setMounted] = useState(false);
  const [lambda, setLambda] = useState(40); // Longitud de penetración (μm)
  const [ec50, setEc50] = useState(5.0); // Punto de inflexión
  const [kSlope, setKSlope] = useState(0.5); // Pendiente sigmoid

  useEffect(() => {
    setMounted(true);
  }, []);

  // Interactive Grid state to visualize diffusion
  const [gridSize] = useState(9); // 9x9 grid
  const [centerCell] = useState({ x: 4, y: 4 }); // The HER2+ source cell

  // Calculate grid data purely during render
  const cellData = React.useMemo(() => {
    if (!mounted) return [];
    const data = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        // Distance from center (1 unit = ~15 μm)
        const distUnits = Math.sqrt(Math.pow(x - centerCell.x, 2) + Math.pow(y - centerCell.y, 2));
        const distMicrons = distUnits * 15; 
        
        let istb = 0;
        let pDeath = 0;
        const isSource = x === centerCell.x && y === centerCell.y;

        if (isSource) {
          istb = 25; // MAX sat
          pDeath = 1;
        } else {
          // Fick's law
          const weight = Math.exp(-distMicrons / lambda);
          const sLineal = 25 * weight * 1; 
          istb = Math.log(1 + sLineal) * 2.5;
          pDeath = 1 / (1 + Math.exp(-kSlope * (istb - ec50)));
        }

        data.push({ x, y, dist: distMicrons, istb, pDeath, isSource });
      }
    }
    return data;
  }, [lambda, ec50, kSlope, gridSize, centerCell, mounted]);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200 min-h-screen items-center justify-center">
        <div className="text-slate-400 font-mono animate-pulse">Cargando simulador...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200 min-h-screen">
      
      {/* 1. Header */}
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight border-b-2 border-slate-900 pb-4 text-balance">
          DEMO INTERACTIVA: Simulador Espacial T-DXd
        </h1>
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-4xl text-pretty mb-2 text-justify">
          Experimenta cómo los parámetros biológicos y farmacológicos afectan el Índice de Saturación Topográfica del Bystander (ISTB). Ajusta las variables del modelo para observar en tiempo real la difusión teórica de la toxina (DXd) hacia las células vecinas HER2-negativas.
        </p>
      </section>

      {/* 2. Interactive Area */}
      <section className="px-5 sm:px-8 lg:px-12 pb-12 flex flex-col xl:flex-row gap-8">
        
        {/* Controls */}
        <div className="w-full xl:w-1/3 bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 border-b border-slate-200 pb-2">Panel de Sensibilidad</h3>
            <p className="text-xs text-slate-500 mb-6">Modifica las ecuaciones que gobiernan el modelo.</p>
            
            <div className="space-y-6">
              {/* Lambda slider */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label htmlFor="lambda-slider" className="text-sm font-semibold text-slate-800">
                    Penetración de Toxina (&lambda;)
                  </label>
                  <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{lambda} &mu;m</span>
                </div>
                <input 
                  id="lambda-slider"
                  type="range" 
                  min="10" max="80" step="5"
                  value={lambda}
                  onChange={(e) => setLambda(Number(e.target.value))}
                  className="w-full cursor-pointer accent-blue-600"
                />
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Ley de Fick: {`w(r) = e^(-r/λ)`}. Mayor λ significa que el DXd penetra más profundamente antes de ser absorbido.
                </p>
              </div>

              {/* EC50 slider */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label htmlFor="ec50-slider" className="text-sm font-semibold text-slate-800">
                    Sensibilidad Celular (EC50)
                  </label>
                  <span className="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{ec50.toFixed(1)}</span>
                </div>
                <input 
                  id="ec50-slider"
                  type="range" 
                  min="2" max="10" step="0.5"
                  value={ec50}
                  onChange={(e) => setEc50(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-500"
                />
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Punto de inflexión de la curva de Hill. Umbral de toxina necesario para alcanzar 50% de probabilidad de muerte.
                </p>
              </div>

              {/* K Slope slider */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label htmlFor="k-slider" className="text-sm font-semibold text-slate-800">
                    Transición Sigmoidea (k)
                  </label>
                  <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">{kSlope.toFixed(2)}</span>
                </div>
                <input 
                  id="k-slider"
                  type="range" 
                  min="0.1" max="1.5" step="0.1"
                  value={kSlope}
                  onChange={(e) => setKSlope(Number(e.target.value))}
                  className="w-full cursor-pointer accent-emerald-500"
                />
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Modela la heterogeneidad en resistencia biológica. Valores altos crean un efecto &quot;todo o nada&quot;.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto bg-blue-50 border border-blue-100 p-4 rounded text-sm text-blue-900 shadow-inner">
            <strong className="block mb-1">Información de Simulación:</strong>
            El motor asume una única célula HER2 3+ en el centro (fuente). Calcula el decaimiento exponencial <strong>w(r)</strong>, lo comprime a un logaritmo <strong>(ISTB)</strong> y lo procesa por la sigmoide para predecir Muerte Celular <strong>(P)</strong>.
          </div>
        </div>

        {/* Visualization */}
        <div className="w-full xl:w-2/3 flex flex-col gap-6">
          <div className="bg-slate-900 rounded-lg p-6 flex flex-col items-center justify-center border-4 border-slate-800 shadow-xl relative overflow-hidden">
            <h3 className="text-white font-bold opacity-80 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Probabilidad de Muerte Celular (Heatmap)
            </h3>
            
            <div 
              className="grid gap-1 sm:gap-2 p-2 bg-slate-800 rounded"
              style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
            >
              {cellData.map((cell, idx) => {
                // Color calculation: From blue-ish (safe) to deep red (death/saturating)
                const hue = 220 - (cell.pDeath * 220); // 220 is blue, 0 is red
                const saturation = 50 + (cell.pDeath * 50); // 50% to 100%
                const lightness = 20 + (cell.pDeath * 40); // 20% to 60%
                
                return (
                  <div 
                    key={idx}
                    title={`ISTB: ${cell.istb.toFixed(2)} | P_Muerte: ${(cell.pDeath*100).toFixed(1)}%`}
                    className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-sm flex flex-col items-center justify-center text-[8px] sm:text-[10px] md:text-xs font-mono font-bold transition-colors duration-300 relative group cursor-crosshair"
                    style={{ 
                      backgroundColor: cell.isSource ? '#fff' : `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                      color: cell.isSource ? '#000' : 'rgba(255,255,255,0.9)',
                      boxShadow: cell.isSource ? '0 0 15px rgba(255,255,255,0.8)' : 'none',
                    }}
                  >
                    {cell.isSource ? '3+' : `${(cell.pDeath * 100).toFixed(0)}%`}
                    
                    {/* Tooltip */}
                    <div className="absolute text-left bottom-full mb-2 bg-slate-900 border border-slate-700 p-2 rounded shadow-lg text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-max hidden md:block">
                      <div className="text-blue-300 mb-1">Distancia: {Math.round(cell.dist)} &mu;m</div>
                      <div>ISTB: {cell.istb.toFixed(2)}</div>
                      <div>Probabilidad: {(cell.pDeath * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-6 w-full max-w-sm flex justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[hsl(220,50%,20%)] rounded-sm"></div> 0% Supervivencia Alta</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-600 rounded-sm"></div> 100% Muerte Celular</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center shadow-sm">
              <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Rayo Fickiano (&lambda;)</span>
              <span className="text-xl md:text-2xl font-black text-slate-800">{lambda} <span className="text-sm font-normal text-slate-500">&mu;m</span></span>
            </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center shadow-sm">
              <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Punto Medio EC50</span>
              <span className="text-xl md:text-2xl font-black text-slate-800">{ec50.toFixed(1)} <span className="text-sm font-normal text-slate-500">ISTB</span></span>
            </div>
             <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center shadow-sm">
              <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Área Destruida (&gt;80%)</span>
              <span className="text-xl md:text-2xl font-black text-slate-800">
                {cellData.filter(c => c.pDeath > 0.8 && !c.isSource).length} <span className="text-sm font-normal text-slate-500">células</span>
              </span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
