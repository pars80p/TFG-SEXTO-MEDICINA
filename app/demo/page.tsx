import React from 'react';
import Simulator from '../components/Simulator';

export default function DemoSystemPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200 min-h-screen">
      
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <div className="mt-8 mb-8">
          <Simulator />
        </div>
      </section>

      {/* RESULTADOS Y DISCUSIÓN */}
      <section className="px-5 sm:px-8 lg:px-12 pb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 mb-2 tracking-tight text-balance">
          RESULTADOS Y DISCUSIÓN: Validación del Modelo en Cohorte Metastásica
        </h1>
        <hr className="my-8 border-slate-200" />

        {/* 4. Resultados */}
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mt-10 mb-6 pb-2 border-b-2 border-slate-200">
          4. Resultados
        </h2>

        {/* 4.1 Caracterización */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
          4.1. Caracterización de la Cohorte
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify">
          Se analizaron 6 muestras de biopsia metastásica de cáncer de mama procesadas mediante patología digital con QuPath. El sistema clasificó un total de 977.537 células tumorales. La distribución fenotípica reveló un espectro amplio de expresión HER2, desde tumores prácticamente HER2-null (95,9% negativas, muestra 51140) hasta tumores con predominio HER2-low (63,3% de células 1+, muestra 44908).
        </p>

        <div className="overflow-x-auto w-full mb-6">
          <table className="w-full text-left table-auto text-sm min-w-[700px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-y-2 border-slate-300">
                <th className="py-3 px-4 font-semibold">ID Muestra</th>
                <th className="py-3 px-4 font-semibold">Células Totales</th>
                <th className="py-3 px-4 font-semibold">%Neg</th>
                <th className="py-3 px-4 font-semibold">%1+</th>
                <th className="py-3 px-4 font-semibold">%2+</th>
                <th className="py-3 px-4 font-semibold">%3+</th>
                <th className="py-3 px-4 font-semibold">HER2-HQE</th>
                <th className="py-3 px-4 font-semibold">Densidad (cél/mm²)</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">12078</td>
                <td className="py-3 px-4 tabular-nums">134.851</td>
                <td className="py-3 px-4 tabular-nums">80,0%</td>
                <td className="py-3 px-4 tabular-nums">17,2%</td>
                <td className="py-3 px-4 tabular-nums">2,7%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,33</td>
                <td className="py-3 px-4 tabular-nums">2.507</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">21464</td>
                <td className="py-3 px-4 tabular-nums">367.734</td>
                <td className="py-3 px-4 tabular-nums">94,5%</td>
                <td className="py-3 px-4 tabular-nums">5,4%</td>
                <td className="py-3 px-4 tabular-nums">0,1%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,10</td>
                <td className="py-3 px-4 tabular-nums">5.452</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">44908</td>
                <td className="py-3 px-4 tabular-nums">109.340</td>
                <td className="py-3 px-4 tabular-nums">28,4%</td>
                <td className="py-3 px-4 tabular-nums">63,3%</td>
                <td className="py-3 px-4 tabular-nums">8,1%</td>
                <td className="py-3 px-4 tabular-nums">0,1%</td>
                <td className="py-3 px-4 tabular-nums">0,51</td>
                <td className="py-3 px-4 tabular-nums">2.397</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">46235</td>
                <td className="py-3 px-4 tabular-nums">211.937</td>
                <td className="py-3 px-4 tabular-nums">92,6%</td>
                <td className="py-3 px-4 tabular-nums">7,3%</td>
                <td className="py-3 px-4 tabular-nums">0,2%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,14</td>
                <td className="py-3 px-4 tabular-nums">3.417</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">48683</td>
                <td className="py-3 px-4 tabular-nums">113.576</td>
                <td className="py-3 px-4 tabular-nums">55,1%</td>
                <td className="py-3 px-4 tabular-nums">44,0%</td>
                <td className="py-3 px-4 tabular-nums">0,9%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,50</td>
                <td className="py-3 px-4 tabular-nums">3.298</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">51140</td>
                <td className="py-3 px-4 tabular-nums">40.095</td>
                <td className="py-3 px-4 tabular-nums">95,9%</td>
                <td className="py-3 px-4 tabular-nums">4,0%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,0%</td>
                <td className="py-3 px-4 tabular-nums">0,08</td>
                <td className="py-3 px-4 tabular-nums">3.695</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 italic mb-8">
          El Índice de Heterogeneidad (HER2-HQE) osciló entre 0,08 (homogéneo negativo) y 0,51 (alta heterogeneidad).
        </p>

        {/* 4.2 Predicción */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
          4.2. Predicción de Eficacia Espacial (&lambda; = 40 &micro;m)
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify">
          Con los parámetros de referencia (&lambda; = 40 &micro;m, EC50 = 5, k = 0,5, factor de escala = 2,5), el modelo generó predicciones de destrucción tumoral que oscilaron entre el 20,0% y el 81,5%.
        </p>

        <div className="overflow-x-auto w-full mb-6">
          <table className="w-full text-left table-auto text-sm min-w-[700px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-y-2 border-slate-300">
                <th className="py-3 px-4 font-semibold">ID Muestra</th>
                <th className="py-3 px-4 font-semibold">bSPS (Neg)</th>
                <th className="py-3 px-4 font-semibold">Destrucción Total</th>
                <th className="py-3 px-4 font-semibold">Cobertura (ISTB&gt;2)</th>
                <th className="py-3 px-4 font-semibold">Ratio Segregación</th>
                <th className="py-3 px-4 font-semibold">Veredicto</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">12078</td>
                <td className="py-3 px-4 tabular-nums">28,6%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">35,6%</td>
                <td className="py-3 px-4 tabular-nums">52,7%</td>
                <td className="py-3 px-4 tabular-nums">0,44</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800">⚠️ HETEROGÉNEO</span></td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">21464</td>
                <td className="py-3 px-4 tabular-nums">24,3%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">26,0%</td>
                <td className="py-3 px-4 tabular-nums">45,6%</td>
                <td className="py-3 px-4 tabular-nums">0,41</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800">❌ INSULATED</span></td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">44908</td>
                <td className="py-3 px-4 tabular-nums">63,3%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">81,5%</td>
                <td className="py-3 px-4 tabular-nums">81,1%</td>
                <td className="py-3 px-4 tabular-nums">0,68</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800">✅ CLUSTERED</span></td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">46235</td>
                <td className="py-3 px-4 tabular-nums">17,8%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">20,7%</td>
                <td className="py-3 px-4 tabular-nums">25,6%</td>
                <td className="py-3 px-4 tabular-nums">0,24</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800">❌ INSULATED</span></td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">48683</td>
                <td className="py-3 px-4 tabular-nums">58,9%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">68,4%</td>
                <td className="py-3 px-4 tabular-nums">91,2%</td>
                <td className="py-3 px-4 tabular-nums">0,72</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-amber-100 text-amber-800">⚠️ HETEROGÉNEO</span></td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">51140</td>
                <td className="py-3 px-4 tabular-nums">18,9%</td>
                <td className="py-3 px-4 tabular-nums font-semibold">20,0%</td>
                <td className="py-3 px-4 tabular-nums">34,5%</td>
                <td className="py-3 px-4 tabular-nums">0,35</td>
                <td className="py-3 px-4"><span className="inline-flex px-2 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800">❌ INSULATED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 italic mb-4">
          El sistema clasificó 3 muestras como INSULATED, indicando una topografía desfavorable para el efecto bystander.
        </p>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-8 text-pretty text-justify">
          Destaca el caso de la muestra 48683, que a pesar de carecer de células 3+ (0%), alcanza un 68,4% de destrucción tumoral. Esto demuestra computacionalmente que el efecto bystander primario desde células con baja expresión (1+) puede ser suficiente cuando la mezcla espacial es altamente favorable (Ratio de Segregación de 0,72).
        </p>

        {/* 4.3 Sensibilidad Paramétrica */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
          4.3. Análisis de Sensibilidad Paramétrica
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify">
          Para evaluar la robustez de las predicciones, se repitió el análisis variando la constante de difusión &lambda; entre 20 &micro;m y 80 &micro;m.
        </p>

        <div className="overflow-x-auto w-full mb-6">
          <table className="w-full text-left table-auto text-sm min-w-[900px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-y-2 border-slate-300">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">&lambda;=20 Destr.</th>
                <th className="py-3 px-4 font-semibold">&lambda;=20 Veredicto</th>
                <th className="py-3 px-4 font-semibold">&lambda;=40 Destr.</th>
                <th className="py-3 px-4 font-semibold">&lambda;=40 Veredicto</th>
                <th className="py-3 px-4 font-semibold">&lambda;=80 Destr.</th>
                <th className="py-3 px-4 font-semibold">&lambda;=80 Veredicto</th>
                <th className="py-3 px-4 font-semibold">Rango (&Delta;)</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">12078</td>
                <td className="py-3 px-4 tabular-nums">18,0%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">35,6%</td>
                <td className="py-3 px-4">⚠️ HETEROGÉNEO</td>
                <td className="py-3 px-4 tabular-nums">48,4%</td>
                <td className="py-3 px-4">⚠️ HETEROGÉNEO</td>
                <td className="py-3 px-4 font-semibold">30,4 pp</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">21464</td>
                <td className="py-3 px-4 tabular-nums">13,0%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">26,0%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">37,7%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 font-semibold">24,7 pp</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">44908</td>
                <td className="py-3 px-4 tabular-nums">52,8%</td>
                <td className="py-3 px-4">⚠️ HETEROGÉNEO</td>
                <td className="py-3 px-4 tabular-nums">81,5%</td>
                <td className="py-3 px-4">✅ CLUSTERED</td>
                <td className="py-3 px-4 tabular-nums">89,3%</td>
                <td className="py-3 px-4">✅ CLUSTERED</td>
                <td className="py-3 px-4 font-semibold">36,5 pp</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">46235</td>
                <td className="py-3 px-4 tabular-nums">11,7%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">20,7%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">28,0%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 font-semibold">16,3 pp</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">48683</td>
                <td className="py-3 px-4 tabular-nums">35,6%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">68,4%</td>
                <td className="py-3 px-4">⚠️ HETEROGÉNEO</td>
                <td className="py-3 px-4 tabular-nums">82,1%</td>
                <td className="py-3 px-4">✅ CLUSTERED</td>
                <td className="py-3 px-4 font-semibold">46,5 pp</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-mono">51140</td>
                <td className="py-3 px-4 tabular-nums">10,8%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">20,0%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 tabular-nums">29,6%</td>
                <td className="py-3 px-4">❌ INSULATED</td>
                <td className="py-3 px-4 font-semibold">18,8 pp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-500"></span>
            <div>
              <strong className="text-slate-900">Robustamente INSULATED (3/6 muestras):</strong> Las muestras 21464, 46235 y 51140 mantuvieron el fenotipo adverso en todas las condiciones de &lambda;. Esto indica un fracaso estructural para el efecto bystander.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500"></span>
            <div>
              <strong className="text-slate-900">Robustamente respondedor (1/6 muestras):</strong> La muestra 44908 se mantuvo en tasas &ge;52.8%, demostrando ser una candidata excelente independientemente de la variabilidad biológica.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-500"></span>
            <div>
              <strong className="text-slate-900">Sensible a &lambda; (2/6 muestras):</strong> Las muestras 12078 y 48683 demostraron ser altamente dependientes de la difusibilidad de la toxina, cruzando fronteras fenotípicas.
            </div>
          </li>
        </ul>

        {/* 4.4 Coherencia */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 mt-8">
          4.4. Comparación Exploratoria con ORR de Ensayos Clínicos (Limitaciones Inherentes)
        </h3>
        <div className="overflow-x-auto w-full mb-2">
          <table className="w-full text-left table-auto text-sm min-w-[800px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-y-2 border-slate-300">
                <th className="py-3 px-4 font-semibold">Grupo Modelo</th>
                <th className="py-3 px-4 font-semibold">Destrucción</th>
                <th className="py-3 px-4 font-semibold">ORR Literatura</th>
                <th className="py-3 px-4 font-semibold">Referencia</th>
                <th className="py-3 px-4 font-semibold">Limitación de la comparación</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-medium text-rose-800">INSULATED</td>
                <td className="py-3 px-4 font-mono">20-26%</td>
                <td className="py-3 px-4">61.8% (HER2-ultralow)</td>
                <td className="py-3 px-4 text-slate-500">DESTINY-Breast06 [2]</td>
                <td className="py-3 px-4 text-xs">Discordancia severa. El modelo infraestima la eficacia porque no captura la liberación extracelular por CTSL estromal (Tsao 2025) ni mecanismos independientes de HER2. La ORR de 61.8% en HER2-ultralow (DESTINY-Breast06) sugiere que existen vías de eficacia no modeladas.</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-medium text-amber-800">HETEROGÉNEO</td>
                <td className="py-3 px-4 font-mono">36-68%</td>
                <td className="py-3 px-4">52-57% (HER2-low)</td>
                <td className="py-3 px-4 text-slate-500">DESTINY-Breast04/06 [1,2]</td>
                <td className="py-3 px-4 text-xs">Buena correlación general (poblaciones heterogéneas)</td>
              </tr>
              <tr className="border-b border-slate-200 even:bg-slate-50">
                <td className="py-3 px-4 font-medium text-emerald-800">CLUSTERED</td>
                <td className="py-3 px-4 font-mono">81.5%</td>
                <td className="py-3 px-4">52-57% (HER2-low)</td>
                <td className="py-3 px-4 text-slate-500">DESTINY-Breast04 [1]</td>
                <td className="py-3 px-4 text-xs">Sobreestimación de ~25 pp. El modelo computa eficacia puramente espacial sin integrar resistencia al payload (eflujo, TOPO1), farmacocinética sistémica ni heterogeneidad temporal. La discrepancia cuantifica el &apos;gap&apos; entre eficacia espacial teórica y respuesta clínica real.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mb-6 italic">
          Nota: Estas comparaciones son exploratorias e indirectas. El modelo computa eficacia espacial ex-vivo a nivel celular, mientras que la ORR clínica integra farmacocinética sistémica, resistencia biológica, criterios RECIST y heterogeneidad inter-paciente. Las poblaciones de los ensayos clínicos difieren en línea de tratamiento, estado HR y criterios de selección.
        </p>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-4 text-pretty text-justify">
          Las predicciones INSULATED (20-26%) son significativamente inferiores a la ORR observada del T-DXd en HER2-ultralow (61.8%, DESTINY-Breast06), lo cual podría reflejar que el modelo no captura la liberación extracelular por CTSL (Tsao 2025).
        </p>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-4 text-pretty text-justify">
          La predicción CLUSTERED de 81.5% excede la ORR observada en HER2-low (52-57%), lo cual es esperable dado que el modelo computa eficacia puramente espacial sin integrar resistencia biológica. La sobreestimación sugiere que factores no modelados (resistencia al payload, farmacocinética sistémica) limitan la respuesta in vivo.
        </p>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-8 text-pretty text-justify">
          La ORR clínica mide respuesta tumoral macroscópica según criterios RECIST en pacientes que reciben múltiples ciclos de T-DXd con farmacocinética sistémica completa. El modelo, en cambio, computa la probabilidad de muerte celular individual en un corte histológico 2D estático, sin considerar la distribución vascular del fármaco, la penetración desde los vasos, ni la dinámica temporal de la respuesta. Por tanto, la concordancia numérica entre ambas métricas, cuando existe, es sugestiva pero no constituye una validación formal.
        </p>

        {/* 5. Discusión */}
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mt-12 mb-6 pb-2 border-b-2 border-slate-200">
          5. Discusión
        </h2>

        <h3 className="text-lg font-bold text-slate-800 mb-3 mt-6">
          5.1. Validez del Modelo Espacial
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify">
          La capacidad del modelo para discernir entre perfiles de eficacia en función de variables puramente morfológicas y topográficas subraya la validez de la arquitectura espacial como determinante primario de la acción del T-DXd. Las células no son entidades solitarias frente al fármaco, sino nodos dentro de una matriz de difusión (Khera et al., 2021/2022).
        </p>

        <h3 className="text-lg font-bold text-slate-800 mb-3 mt-6">
          5.2. Coherencia con los Ensayos Clínicos
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify">
          El Ratio de Segregación celular ofrece una dimensión predictiva complementaria a la cuantificación IHC convencional, lo cual podría explicar las variaciones de ORR inter-paciente observadas en DESTINY-Breast04 y 06.
        </p>

        <h3 className="text-lg font-bold text-slate-800 mb-3 mt-6">
          5.3. El Análisis de Sensibilidad como Herramienta de Robustez
        </h3>
        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-8 text-pretty text-justify">
          La sensibilidad a variaciones de &lambda; demuestra que no estamos forzando un modelo estático (overfitting). Aquellas muestras que cambian fenotípicamente frente a fluctuaciones en la difusibilidad biológica (como la expresión local de Catepsina L) podrían beneficiarse en el futuro de tratamientos concomitantes que incrementen la permeabilidad de la matriz estromal tumoral (Wood et al., 2025).
        </p>

        <p className="text-[15px] sm:text-base text-slate-800 leading-relaxed mb-6 text-pretty text-justify border-t border-slate-200 mt-8 pt-8">
          Para un análisis exhaustivo de las limitaciones metodológicas del modelo — incluyendo el sesgo geométrico 2D, la liberación extracelular por catepsina L, las alteraciones genómicas de resistencia y las limitaciones técnicas de QuPath — así como las líneas de trabajo futuro propuestas, consultar la sección Sobre el Proyecto → Limitaciones y Trabajos Futuros.
        </p>

      </section>

      {/* Footer de Referencias */}
      <section className="px-5 sm:px-8 lg:px-12 py-8 bg-slate-100 border-t border-slate-200 mt-auto rounded-b-md">
        <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-widest">Referencias Académicas Relacionadas</h4>
        <ol className="academic-references text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          <li>Modi S, et al. DESTINY-Breast04. NEJM. 2022;387(1):9-20.</li>
          <li>Bardia A, et al. DESTINY-Breast06. NEJM. 2024;391(22):2110-2122.</li>
          <li>Cortés J, et al. DESTINY-Breast03 long-term. Nat Med. 2024;30(8):2208-2215.</li>
          <li>Tsao LC, et al. Extracellular payload release. Nat Commun. 2025;16(1):3167.</li>
          <li>Hu J, et al. HER2-HQE. Mod Pathol. 2026;39(3):100935.</li>
          <li>Goyette MA, et al. HER2 heterogeneous models. Cancer Discov. 2026.</li>
          <li>Khera E, et al. ADC bystander penetration. Neoplasia. 2021;23(2):210-221.</li>
          <li>Khera E, et al. Cellular-resolution imaging. Mol Cancer Ther. 2022;21(2):310-321.</li>
          <li>Burton JK, et al. Systems pharmacology model. AAPS J. 2019;22(1):12.</li>
          <li>Wood NE, et al. Mechanistic Modeling Suggests Stroma-Targeting ADCs. PLoS Comput Biol. 2025.</li>
          <li>Yapp C, et al. Optical sectioning... Nature Methods. 2025.</li>
          <li>Chen F, et al. CLARITY reveals intratumoral heterogeneity. Scientific Reports. 2019.</li>
          <li>Wei W, et al. Binding Site Barrier for ADCs. Clin Cancer Res. 2024.</li>
          <li>Nassar A, et al. PTEN and T-DXd resistance. JNCI. 2026.</li>
          <li>Sledge C, et al. ABCC1 independently predicts OS. NPJ Breast Cancer. 2025.</li>
          <li>Murase T, et al. ABCG2 and ABCB1 efflux. Cancer Sci. 2026.</li>
          <li>Chen X, et al. HER2 loss and epitope mutations after T-DXd. Cancer Discovery. 2025.</li>
          <li>Yamaguchi H, et al. CCNE1 amplification. JCO Precision Oncology. 2024.</li>
          <li>Kapil A, et al. Quantitative Continuous Scoring (QCS) for HER2. Nature Medicine. 2024.</li>
          <li>Yau C, et al. Residual Cancer Burden continuous score. Lancet Oncology. 2022.</li>
        </ol>
      </section>

    </div>

  );
}
