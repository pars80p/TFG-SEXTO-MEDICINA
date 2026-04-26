import React from 'react';

export default function AlgorithmPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200 pb-2">
      
      {/* 1. Cabecera de Sección */}
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight border-b-2 border-slate-900 pb-4 text-balance">
          EL ALGORITMO: Cómo el CDSS Tissunómico Predice la Respuesta al T-DXd
        </h1>
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed text-pretty max-w-4xl text-justify">
          El núcleo del CDSS Tissunómico es un modelo matemático que simula la difusión física de la toxina DXd a través del tejido tumoral. A diferencia de la puntuación IHC convencional (0, 1+, 2+, 3+), que clasifica el tumor como un todo homogéneo, este algoritmo evalúa cada célula tumoral individualmente y calcula su probabilidad de ser destruida en función de su entorno espacial. El sistema se construye en cuatro capas matemáticas secuenciales, desde la extracción de datos en QuPath hasta el veredicto clínico final.
        </p>
      </section>

      {/* 2. Diseño en Pasos (Capa 1 a 4) */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="relative border-l-2 border-slate-200 ml-8 md:ml-10 space-y-16">
          
          {/* Paso 1 */}
          <div className="relative pl-10 md:pl-16">
            <div className="absolute left-0 -translate-x-1/2 -ml-[1px] top-1 shadow-md w-7 h-7 md:w-9 md:h-9 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs md:text-base ring-2 ring-white">
              1
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">CAPA 1: Extracción de Datos Espaciales (QuPath)</h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-justify">
              El punto de partida es una lámina de inmunohistoquímica HER2 digitalizada y analizada con QuPath, un software de patología digital de código abierto. Un clasificador entrenado asigna a cada célula tumoral detectada una de cuatro categorías según la intensidad de tinción de membrana, siguiendo los criterios ASCO/CAP: Negative (sin tinción o tinción incompleta/débil &le;10%), 1+ (tinción incompleta/débil &gt;10%), 2+ (tinción completa débil-moderada &gt;10%) y 3+ (tinción completa intensa &gt;10%).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[1,2]</sup>
            </p>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-4 border border-slate-200 rounded text-justify">
              Para cada célula, un script de Groovy calcula automáticamente el número de vecinas de cada categoría dentro de tres radios concéntricos: 50 &mu;m, 75 &mu;m y 100 &mu;m. Estos radios representan la distancia física que la toxina DXd debe recorrer para alcanzar a una célula vecina. El resultado es una matriz de 18 columnas por célula (clasificación, intensidad DAB, área nuclear, y 15 conteos de vecindad), que alimenta el motor matemático.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="relative pl-10 md:pl-16">
            <div className="absolute left-0 -translate-x-1/2 -ml-[1px] top-1 shadow-md w-7 h-7 md:w-9 md:h-9 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs md:text-base ring-2 ring-white">
              2
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">CAPA 2: El Índice de Saturación Topográfica del Bystander (ISTB)</h2>
            <p className="text-slate-800 leading-relaxed mb-8 text-justify">
              El ISTB es la métrica central del modelo. Cuantifica la exposición acumulada de cada célula a la toxina DXd liberada por sus vecinas HER2-positivas, integrando tres variables biológicas:
            </p>
            
            <div className="space-y-8">
              <div className="ml-4 border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">a) Pesos de intensidad no lineales (1 / 5 / 25)</h3>
                <p className="text-slate-800 leading-relaxed text-justify">
                  No todas las células HER2-positivas liberan la misma cantidad de toxina. La densidad de receptores HER2 en la superficie celular varía de forma no lineal entre las categorías IHC: las células 3+ expresan aproximadamente 2 millones de receptores, las 2+ alrededor de 500.000, y las 1+ unas 100.000.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[3]</sup> Estas cifras son aproximaciones ampliamente citadas en la literatura (revisado en Loibl & Gianni, Lancet 2017); datos experimentales directos de Sharma et al. (Drug Metab Dispos, 2020) midieron ~50.000-800.000 receptores/célula según la línea celular. Dado que la cantidad de ADC internalizado (y por tanto de DXd liberado) es proporcional a la densidad de receptores, el modelo asigna pesos de intensidad de 25 (para 3+), 5 (para 2+) y 1 (para 1+), reflejando esta relación no lineal.
                </p>
              </div>

              <div className="ml-4 border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">b) Decaimiento exponencial por distancia (Ley de Fick)</h3>
                <p className="text-slate-800 leading-relaxed mb-4 text-justify">
                  Una vez liberada, la toxina DXd debe difundir a través del espacio intersticial para alcanzar a las células vecinas. Esta difusión sigue un decaimiento exponencial descrito por la Ley de Fick:
                </p>
                <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-center overflow-x-auto text-blue-900 border border-slate-200 shadow-inner">
                  <span className="text-lg font-bold">w(r) = e^(-r/&lambda;)</span>
                </div>
                <p className="text-slate-800 leading-relaxed mb-4 text-justify">
                  donde r es la distancia desde la célula fuente y &lambda; es la longitud de penetración, un parámetro que depende de las propiedades fisicoquímicas del payload. El DXd es una molécula altamente lipofílica, lo que le confiere alta permeabilidad de membrana (esencial para el efecto bystander) pero también genera un &apos;efecto sumidero celular&apos;: las primeras células que encuentra lo absorben rápidamente, reduciendo la concentración disponible para las más lejanas.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[4-6]</sup>
                </p>
                <p className="text-slate-800 leading-relaxed mb-4 text-justify">
                  Estudios de penetración tisular con resolución celular han demostrado que los payloads lipofílicos de ADCs penetran unas 2-5 capas celulares antes de perder concentración letal, lo que corresponde a distancias de 30-80 &mu;m dependiendo del payload específico.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[5,6]</sup> El modelo utiliza un valor por defecto de &lambda; = 40 &mu;m, que genera los siguientes pesos de distancia:
                </p>
                <ul className="list-none pl-4 space-y-2 font-mono text-sm text-slate-700 bg-slate-50 p-4 rounded border border-slate-200 inline-block w-full sm:w-auto">
                  <li>w(50 &mu;m) = e^(-50/40) &approx; 0.286</li>
                  <li>w(75 &mu;m) = e^(-75/40) &approx; 0.153</li>
                  <li>w(100 &mu;m) = e^(-100/40) &approx; 0.082</li>
                </ul>
                <p className="text-slate-800 leading-relaxed mt-4 text-justify">
                  Este parámetro es ajustable en el panel de sensibilidad del Dashboard, permitiendo simular payloads con diferentes propiedades de difusión.
                </p>
              </div>

              <div className="ml-4 border-l-2 border-blue-200 pl-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">c) Compresión logarítmica</h3>
                <p className="text-slate-800 leading-relaxed mb-4 text-justify">
                  La contribución acumulada de todas las vecinas se comprime mediante una función logarítmica:
                </p>
                <div className="bg-slate-100 rounded p-4 mb-4 font-mono text-center overflow-x-auto text-blue-900 border border-slate-200 shadow-inner">
                  <span className="text-lg font-bold">ISTB = ln(1 + S_lineal) &times; k_escala</span>
                </div>
                <p className="text-slate-800 leading-relaxed mb-4 text-justify">
                  donde S_lineal es la suma ponderada de todas las contribuciones (intensidad &times; distancia &times; número de vecinas) y k_escala = 2.5 es un factor de escala ajustable. La compresión logarítmica modela el efecto plateau observado en farmacología: a partir de cierta concentración de toxina, añadir más fármaco no aumenta proporcionalmente la muerte celular. Este comportamiento es consistente con los modelos de farmacología de sistemas (QSP) que demuestran que la distribución del payload en tumores sólidos sigue patrones de saturación dependientes de la difusividad (Vasalou et al. 2015; Burton et al. 2019).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[7,9]</sup>
                </p>
                <p className="text-slate-800 leading-relaxed bg-slate-50 p-4 border border-slate-200 rounded text-sm text-justify">
                  El modelo de Burton et al. (2019) demostró que la exposición del payload a células distantes de los vasos es sensible a la difusividad libre del payload en el espacio extracelular, y que cuando la expresión del antígeno es heterogénea, la acumulación total de payload en células sin antígeno depende solo débilmente del porcentaje de células que expresan el antígeno (es importante notar que esto se refiere a la acumulación total, no necesariamente a la concentración letal, justificada en nuestro modelo por el umbral EC50).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[9]</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="relative pl-10 md:pl-16">
            <div className="absolute left-0 -translate-x-1/2 -ml-[1px] top-1 shadow-md w-7 h-7 md:w-9 md:h-9 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs md:text-base ring-2 ring-white">
              3
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">CAPA 3: La Función Sigmoide (Probabilidad de Muerte Celular)</h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-justify">
              El ISTB se transforma en una probabilidad de muerte celular mediante una función sigmoide (curva de Hill):
            </p>
            <div className="bg-slate-100 rounded p-6 mb-4 font-mono text-center overflow-x-auto text-blue-900 border border-slate-200 shadow-inner">
               <span className="text-lg font-bold">P_muerte = 1 / (1 + e^(-k * (ISTB - EC50)))</span>
            </div>
            <p className="text-slate-800 leading-relaxed mb-4 text-justify">donde:</p>
            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-800 leading-relaxed mb-4 text-justify">
              <li className="text-justify"><strong className="text-blue-900">EC50 = 5</strong> es el punto de inflexión: el valor de ISTB al cual la probabilidad de muerte es del 50%. Este valor se deriva matemáticamente del rango dinámico comprimido por la Ley de Fick (con &lambda;=40 &mu;m, 10 vecinas 3+ a 50 &mu;m generan un ISTB &approx; 10.7, lo que sitúa el punto medio funcional alrededor de 5).</li>
              <li className="text-justify"><strong className="text-blue-900">k = 0.5</strong> es la pendiente de la transición, que modela la variabilidad biológica en la sensibilidad celular al DXd.</li>
            </ul>
            <p className="text-slate-800 leading-relaxed bg-slate-50 p-4 border border-slate-200 rounded text-sm text-justify">
              La función sigmoide es el estándar en farmacología para modelar relaciones dosis-respuesta de agentes citotóxicos.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[7,8,11]</sup> Produce una curva en forma de &apos;S&apos; donde concentraciones bajas de toxina tienen poco efecto, concentraciones intermedias producen una transición rápida, y concentraciones altas saturan la respuesta. Ambos parámetros (EC50 y k) son hipotéticos y ajustables en el panel de sensibilidad. Su calibración definitiva requeriría correlación con datos clínicos reales de respuesta patológica (pCR o RCB).
            </p>
          </div>

          {/* Paso 4 */}
          <div className="relative pl-10 md:pl-16">
            <div className="absolute left-0 -translate-x-1/2 -ml-[1px] top-1 shadow-md w-7 h-7 md:w-9 md:h-9 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs md:text-base ring-2 ring-white">
              4
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase">CAPA 4: Estratificación y Veredicto Clínico</h2>
            <p className="text-slate-800 leading-relaxed mb-6 text-justify">
              Basándose en el ISTB comprimido, cada célula HER2-negativa se clasifica en una de cuatro categorías de destino:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-sm">
                <span className="inline-block bg-slate-800 text-white px-2 py-1 rounded text-xs font-bold uppercase mb-2">Saturación Letal (ISTB &ge; 10)</span>
                <p className="text-slate-800 text-sm">Exposición masiva a la toxina. Muerte celular prácticamente garantizada. Riesgo de enfermedad residual mínima (MRD): nulo.</p>
              </li>
              <li className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-sm">
                <span className="inline-block bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold uppercase mb-2">Rescate Moderado (ISTB 5-10)</span>
                <p className="text-slate-800 text-sm">Exposición significativa pero no saturante. Riesgo MRD: alto (selección darwiniana de clones resistentes).</p>
              </li>
              <li className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-sm">
                <span className="inline-block bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold uppercase mb-2">Rescate Débil (ISTB 2-5)</span>
                <p className="text-slate-800 text-sm">Exposición subletal. Riesgo MRD: moderado.</p>
              </li>
              <li className="bg-slate-50 border border-slate-200 p-4 rounded-md shadow-sm">
                <span className="inline-block bg-slate-300 text-slate-800 px-2 py-1 rounded text-xs font-bold uppercase mb-2 border border-slate-300">Supervivencia (ISTB &lt; 2)</span>
                <p className="text-slate-800 text-sm">Aislamiento espacial de las fuentes de toxina. Riesgo MRD: crítico.</p>
              </li>
            </ul>
            
            <p className="text-slate-800 leading-relaxed mb-4 text-justify">
              La distribución de las células negativas entre estas categorías determina el patrón topográfico del tumor:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-t-4 border-emerald-500 bg-white border border-slate-200 shadow-md p-6 rounded-b">
                <h3 className="text-emerald-700 font-bold uppercase tracking-wider mb-2 text-sm">Clustered</h3>
                <p className="text-slate-600 text-xs font-bold mb-2">&ge;50% en Saturación Letal</p>
                <p className="text-slate-800 text-sm">Las células negativas están rodeadas de fuentes HER2+. Alta probabilidad de respuesta al T-DXd.</p>
              </div>
              <div className="border-t-4 border-red-500 bg-white border border-slate-200 shadow-md p-6 rounded-b">
                <h3 className="text-red-700 font-bold uppercase tracking-wider mb-2 text-sm">Insulated</h3>
                <p className="text-slate-600 text-xs font-bold mb-2">&ge;50% en Supervivencia</p>
                <p className="text-slate-800 text-sm">Las células negativas están espacialmente segregadas. Baja probabilidad de respuesta.</p>
              </div>
              <div className="border-t-4 border-amber-500 bg-white border border-slate-200 shadow-md p-6 rounded-b">
                <h3 className="text-amber-700 font-bold uppercase tracking-wider mb-2 text-sm">Heterogéneo</h3>
                <p className="text-slate-600 text-xs font-bold mb-2">Patrón mixto</p>
                <p className="text-slate-800 text-sm">Patrón mixto que requiere evaluación adicional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bloque Complementario */}
      <section className="bg-slate-100 p-6 sm:p-10 my-6 shadow-inner mx-6 sm:mx-10 rounded">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-300 pb-2 text-balance">
          Métrica Complementaria: El Índice de Heterogeneidad (HER2-HQE)
        </h2>
        <p className="text-slate-800 leading-relaxed mb-4 text-justify text-[15px] sm:text-base">
          Además del análisis espacial, el sistema calcula el HER2-HQE (Heterogeneity Quadratic Entropy), una métrica estadística validada clínicamente:
        </p>
        <div className="bg-white rounded p-4 mb-6 font-mono text-center overflow-x-auto text-slate-800 border border-slate-200 shadow-sm">
           <span className="text-lg font-bold">HER2-HQE = 1 - &Sigma;(p_i)&sup2;</span>
        </div>
        <p className="text-slate-800 leading-relaxed mb-4 text-sm md:text-base text-justify">
          donde p_i es la proporción de células en cada categoría IHC (Negative, 1+, 2+, 3+). Un tumor perfectamente homogéneo (100% de una sola categoría) tiene HQE = 0, mientras que un tumor con distribución equitativa entre las cuatro categorías tiene HQE = 0.75.
        </p>
        <p className="text-slate-800 leading-relaxed mb-4 text-sm md:text-base text-justify">
          Hu et al. (2026) validaron esta métrica en 295 pacientes con cáncer de mama HER2-positivo tratados con terapia neoadyuvante anti-HER2, demostrando que los tumores con alta heterogeneidad (HER2-HQE elevado) tuvieron una tasa de pCR de solo 24.5%, frente al 62.5% en tumores homogéneos (P &lt; .001).[12] Múltiples estudios adicionales han confirmado que la heterogeneidad intratumoral de HER2 es un predictor independiente de resistencia a terapias anti-HER2.[13][14][15]
        </p>
        <p className="text-slate-800 leading-relaxed text-sm md:text-base bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r text-justify">
          El HER2-HQE actúa como una &apos;red de seguridad&apos; estadística que complementa la predicción topográfica del ISTB: un tumor puede tener un ISTB alto (buena mezcla espacial) pero un HQE también alto (muchas subpoblaciones diferentes), lo que indicaría un riesgo biológico adicional no capturado por la difusión pura.
        </p>
      </section>

      {/* 4. Caja de Limitaciones */}
      <section className="px-6 sm:px-10 mb-6">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r shadow-sm">
          <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Limitaciones Documentadas del Algoritmo
          </h3>
          <p className="text-amber-900 leading-relaxed mb-4 text-sm md:text-base">
            El modelo asume que la toxina DXd se libera exclusivamente desde células HER2-positivas que internalizan el ADC. Sin embargo, Tsao et al. (2025) demostraron que la eficacia del T-DXd en tumores HER2-low/negative puede ser independiente de la internalización del ADC, dependiendo en cambio de proteasas extracelulares como la catepsina L (CTSL) presentes en el estroma tumoral, que clivan el linker del T-DXd y liberan el DXd directamente en el microambiente.[16] Bajo este paradigma, el estroma podría actuar como una fuente difusa adicional de toxina no modelada por el algoritmo actual.
          </p>
          <p className="text-amber-900 leading-relaxed text-sm md:text-base">
            Asimismo, los parámetros del modelo (&lambda;, EC50, k, pesos de intensidad, factor de escala) son hipotéticos in silico y requieren validación prospectiva con datos clínicos reales. El panel de análisis de sensibilidad del Dashboard permite explorar cómo varían las predicciones al modificar estos parámetros, lo cual constituye una herramienta de transparencia metodológica esencial para la interpretación de los resultados.
          </p>
        </div>
      </section>

      {/* 5. Conclusión Final */}
      <section className="px-6 sm:px-10 mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2">
          ¿Por Qué Este Algoritmo Puede Funcionar Para Cualquier Muestra?
        </h2>
        <p className="text-slate-800 leading-relaxed mb-6 text-lg">
          El modelo es agnóstico al tipo tumoral y al fenotipo HER2. No asume que el tumor sea HER2-positivo, HER2-low o HER2-negative. Simplemente mide la topografía espacial de las células y calcula la difusión física de la toxina. Esto significa que:
        </p>
        <ul className="list-none space-y-4 mb-8">
          <li className="flex gap-4 items-start">
            <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-500"></span>
            <p className="text-slate-800">
              En un tumor <strong>HER2 3+ homogéneo</strong>, el ISTB será alto para todas las células &rarr; fenotipo <strong className="text-emerald-700">CLUSTERED</strong> &rarr; alta respuesta predicha. Esto es consistente con las tasas de respuesta del 61-79% observadas en DESTINY-Breast01 y DESTINY-Breast03.[17][18]
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            <p className="text-slate-800">
              En un tumor <strong>HER2-low heterogéneo</strong>, el resultado dependerá de la mezcla espacial: si las pocas células 1+/2+ están intercaladas con las negativas, el ISTB será moderado &rarr; fenotipo <strong className="text-amber-700">HETEROGÉNEO</strong>. Esto es consistente con la ORR del 52% en DESTINY-Breast04.[19]
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-red-500"></span>
            <p className="text-slate-800">
              En un tumor <strong>HER2-negative con segregación espacial</strong>, las células negativas estarán aisladas &rarr; fenotipo <strong className="text-red-700">INSULATED</strong> &rarr; baja respuesta predicha.
            </p>
          </li>
        </ul>
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-md shadow-sm">
          <p className="text-slate-700 italic text-sm leading-relaxed">
            El sistema de patología computacional cSPS (continuous Spatial Proximity Score), desarrollado independientemente para cáncer gástrico, validó este mismo principio: los pacientes clasificados como BM+ (buena proximidad espacial) tuvieron una mediana de PFS de 8.3 meses frente a 3.9 meses en los BM- (P&lt;0.0001), y esta diferencia fue predictiva específicamente de la respuesta al T-DXd (no al tratamiento estándar).[16]
          </p>
        </div>
      </section>

      {/* 6. Footer (Referencias) */}
      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <h4 className="text-slate-800 font-bold uppercase tracking-wider text-xs mb-6 border-b border-slate-200 pb-2">Referencias</h4>
        <ol className="academic-references text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          <li><span className="font-semibold text-slate-700">Wolff AC, et al.</span> <i className="italic">Human Epidermal Growth Factor Receptor 2 Testing in Breast Cancer: ASCO/CAP Guideline Update.</i> <span className="text-slate-500">J Clin Oncol. 2023.</span></li>
          <li><span className="font-semibold text-slate-700">Bankhead P, et al.</span> <i className="italic">QuPath: Open source software for digital pathology image analysis.</i> <span className="text-slate-500">Sci Rep. 2017.</span></li>
          <li><span className="font-semibold text-slate-700">Loibl S, Gianni L.</span> <i className="italic">HER2-positive Breast Cancer.</i> <span className="text-slate-500">Lancet. 2017;389(10087):2415-2429.</span></li>
          <li><span className="font-semibold text-slate-700">Ogitani Y, et al.</span> <i className="italic">Bystander killing effect of DS-8201a.</i> <span className="text-slate-500">Cancer Sci. 2016.</span></li>
          <li><span className="font-semibold text-slate-700">Khera E, et al.</span> <i className="italic">Quantifying ADC Bystander Payload Penetration With Cellular Resolution Using Pharmacodynamic Mapping.</i> <span className="text-slate-500">Neoplasia. 2021;23(2):210-221. DOI: 10.1016/j.neo.2020.12.001.</span></li>
          <li><span className="font-semibold text-slate-700">Khera E, et al.</span> <i className="italic">Cellular-Resolution Imaging of Bystander Payload Tissue Penetration From Antibody-Drug Conjugates.</i> <span className="text-slate-500">Mol Cancer Ther. 2022;21(2):310-321. DOI: 10.1158/1535-7163.MCT-21-0580.</span></li>
          <li><span className="font-semibold text-slate-700">Vasalou C, et al.</span> <i className="italic">A Mechanistic Tumor Penetration Model to Guide Antibody Drug Conjugate Design.</i> <span className="text-slate-500">PLoS One. 2015.</span></li>
          <li><span className="font-semibold text-slate-700">Goutelle S, et al.</span> <i className="italic">The Hill Equation: A Review of Its Capabilities in Pharmacological Modelling.</i> <span className="text-slate-500">Fundam Clin Pharmacol. 2008;22(6):633-648.</span></li>
          <li><span className="font-semibold text-slate-700">Burton JK, et al.</span> <i className="italic">A Systems Pharmacology Model for Drug Delivery to Solid Tumors by ADCs.</i> <span className="text-slate-500">AAPS Journal. 2019.</span></li>
          <li><span className="font-semibold text-slate-700">Gardner SN.</span> <i className="italic">A Mechanistic, Predictive Model of Dose-Response Curves for Cell Cycle Phase-Specific and -Nonspecific Drugs.</i> <span className="text-slate-500">Cancer Res. 2000;60(5):1417-1425.</span></li>
          <li><span className="font-semibold text-slate-700">Hu J, et al.</span> <i className="italic">Predictors of Response to Neoadjuvant Therapy in HER2-Positive Breast Cancer and HQE.</i> <span className="text-slate-500">Mod Pathol. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Wu C, et al.</span> <i className="italic">A novel HER2 heterogeneity index (HER2-HQE) predicts response.</i> <span className="text-slate-500">Breast Cancer Res. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">Filho OM, et al.</span> <i className="italic">Impact of HER2 Heterogeneity on Treatment Response.</i> <span className="text-slate-500">Cancer Discov. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">Goyette MA, et al.</span> <i className="italic">HER2 Heterogeneous Breast Cancer Models Reveal Novel Therapeutic Targets.</i> <span className="text-slate-500">Cancer Discov. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Tsao LC, et al.</span> <i className="italic">Effective Extracellular Payload Release and Immunomodulatory Interactions Govern T-DXd.</i> <span className="text-slate-500">Nat Commun. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Positive Breast Cancer (DESTINY-Breast01).</i> <span className="text-slate-500">N Engl J Med. 2020.</span></li>
          <li><span className="font-semibold text-slate-700">Cortés J, et al.</span> <i className="italic">Trastuzumab Deruxtecan versus Trastuzumab Emtansine for Breast Cancer (DESTINY-Breast03).</i> <span className="text-slate-500">N Engl J Med. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer (DESTINY-Breast04).</i> <span className="text-slate-500">N Engl J Med. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">Kapil A, et al.</span> <i className="italic">Computational pathology–based HER2 quantification to identify novel biomarkers in gastric cancer (cSPS).</i> <span className="text-slate-500">J Clin Oncol. 2023;41(suppl 4; abstr 449).</span></li>
        </ol>
      </section>
      
    </div>
  );
}
