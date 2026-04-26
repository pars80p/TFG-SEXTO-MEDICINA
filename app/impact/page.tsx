import React from 'react';
import NccnTable from '../components/NccnTable';
import NccnTableQ from '../components/NccnTableQ';

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200">
      
      {/* 1. Cabecera y Título Principal */}
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight border-b-2 border-slate-900 pb-4 text-balance">
          IMPACTO CLÍNICO: Cómo el CDSS Tissunómico Puede Transformar la Práctica Oncológica
        </h1>
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed text-pretty max-w-4xl text-justify">
          El CDSS Tissunómico no es un ejercicio académico aislado. Aborda una necesidad clínica real y urgente: la selección óptima de pacientes para trastuzumab deruxtecan (T-DXd) en un contexto donde las herramientas diagnósticas actuales son insuficientes para predecir la respuesta individual. Esta sección analiza el impacto clínico potencial del sistema en tres dimensiones: el problema diagnóstico actual, la solución que ofrece el modelo, y las implicaciones para la práctica clínica.
        </p>
      </section>

      {/* 2. El Problema */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="bg-red-50 p-5 sm:p-8 rounded-lg shadow-sm border border-red-100">
          <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 pb-2 border-b border-red-200 text-balance">
            EL PROBLEMA: Las Limitaciones de la IHC Convencional
          </h2>
          <p className="text-slate-800 leading-relaxed mb-6 text-[15px] sm:text-base text-pretty text-justify">
            El sistema de puntuación IHC actual (0, 1+, 2+, 3+) fue diseñado hace más de dos décadas para identificar tumores con sobreexpresión de HER2 que responderían a trastuzumab.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[1]</sup> Sin embargo, este sistema presenta limitaciones críticas:
          </p>
          
          <ul className="space-y-6 text-slate-800 leading-relaxed">
            <li>
              <h3 className="font-bold text-slate-900 mb-1">a. Variabilidad interobservador:</h3>
              <p className="text-justify text-slate-800 leading-relaxed">
                La distinción visual entre IHC 0 y 1+ es extremadamente inconsistente. Un estudio de Tseng et al. (2025) reportó que solo el 14% de pares de patólogos alcanzaron acuerdo sustancial (Kappa &ge;0.61) para distinguir HER2-0 vs HER2-low, y una sesión de entrenamiento no mejoró los resultados.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[2]</sup> Baez-Navarro et al. (2023) encontraron solo 4.7% de acuerdo completo entre 16 patólogos en 105 casos HER2-negativos.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[17]</sup> Además, un estudio global (Schildhaus et al., 2025) con 129 patólogos encontró una PPA del 84.8% para identificar HER2-low pero una NPA de solo 69.2% para identificar IHC 0.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[18]</sup> Morrar et al. (2025) demostraron que el 55% de casos clasificados inicialmente como IHC 0 se reclasificaron como HER2-ultralow tras revisión experta.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[19]</sup>
              </p>
            </li>
            <li>
              <h3 className="font-bold text-slate-900 mb-1">b. Inestabilidad temporal (discordancia primaria-metástasis):</h3>
              <p className="text-justify text-slate-800 leading-relaxed">
                La expresión de HER2 es dinámica. Las guías ASCO/CAP 2023 reportan que existe &quot;cerca del 40% de casos cambiando entre IHC 0 e IHC 1+ o 2+/ISH no amplificado cuando se comparan muestras primarias y metastásicas pareadas&quot; (Wolff et al., 2023).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[1]</sup>
              </p>
            </li>
            <li>
              <h3 className="font-bold text-slate-900 mb-1">c. Ceguera espacial:</h3>
              <p className="text-justify text-slate-800 leading-relaxed">
                El sistema clasifica el tumor como un todo homogéneo. Un tumor con 50% de células 3+ y 50% negativas recibe la misma nota (y por lo tanto, la misma indicación terapéutica) estén esas células uniformemente mezcladas o completamente segregadas en el tejido.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[4]</sup>
              </p>
            </li>
          </ul>

          <div className="mt-8 mb-2 w-full max-w-4xl mx-auto">
            <NccnTable />
            <div className="mt-2 text-slate-500 text-[10px] sm:text-xs font-mono p-2 text-center">
              [Recreación Interactiva: Guías NCCN BINV-A-2 HER2 Testing]
            </div>
          </div>
        </div>
      </section>

      {/* 3. La Solución y Tabla Comparativa */}
      <section className="px-6 sm:px-10">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4 pb-2 border-b border-emerald-200">
          LA SOLUCIÓN: Análisis Espacial Cuantitativo
        </h2>
        <p className="text-slate-800 leading-relaxed mb-6 text-justify">
          El CDSS Tissunómico aborda estas limitaciones evaluando cada célula individualmente y su entorno.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse text-sm sm:text-base border border-slate-200 shadow-sm rounded-md overflow-hidden">
            <thead>
              <tr className="bg-emerald-50 border-b border-slate-300">
                <th className="py-4 px-5 font-bold text-slate-900">Característica</th>
                <th className="py-4 px-5 font-bold text-slate-900">IHC Convencional</th>
                <th className="py-4 px-5 font-bold text-emerald-800">CDSS Tissunómico</th>
              </tr>
            </thead>
            <tbody className="text-slate-800 bg-white">
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Nivel de análisis</td>
                <td className="py-4 px-5">Tumor completo</td>
                <td className="py-4 px-5 text-emerald-700">Célula individual</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Consideración espacial</td>
                <td className="py-4 px-5">Ninguna</td>
                <td className="py-4 px-5 text-emerald-700">Distancias a 50, 75, 100 &mu;m</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Cuantificación</td>
                <td className="py-4 px-5">Semicuantitativa (0-3+)</td>
                <td className="py-4 px-5 text-emerald-700">Continua (ISTB 0-&infin;)</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Predicción bystander</td>
                <td className="py-4 px-5">Implícita</td>
                <td className="py-4 px-5 text-emerald-700">Explícita (Ley de Fick)</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Heterogeneidad</td>
                <td className="py-4 px-5">No evaluada</td>
                <td className="py-4 px-5 text-emerald-700">Cuantificada (HER2-HQE)</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Reproducibilidad</td>
                <td className="py-4 px-5 leading-relaxed">Baja en la distinción 0 vs 1+ (14% acuerdo sustancial, 4.7% completo). Con patólogos especialistas en mama y protocolos estandarizados puede alcanzar Kappa 0.82-0.87 (Xiao et al., Human Pathology, 2025). La evaluación en imagen digital es más sensible que el vidrio para tinción baja (25-48% de IHC 0 se reclasifican como ultralow).</td>
                <td className="py-4 px-5 text-emerald-700">Algorítmica (100% matemática en imagen digital)</td>
              </tr>
              <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-5 font-semibold">Costo adicional</td>
                <td className="py-4 px-5">Ninguno</td>
                <td className="py-4 px-5 text-emerald-700">Software gratuito (QuPath)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r shadow-sm mt-8">
          <p className="text-slate-800 leading-relaxed font-semibold mb-4">Validación Científica del Modelo:</p>
          <ul className="list-disc list-outside pl-5 space-y-4 text-slate-800 text-sm">
            <li>
              <strong>Dato cSPS (Kapil 2023, ASCO GI):</strong> El parámetro de &quot;cercanía al tumor HER2+&quot; fue un factor predictivo sobre mPFS (8.3 vs 3.9 meses). De forma crucial, en el brazo de quimioterapia estándar (SOC) de DESTINY-Gastric01, la relación fue INVERSA (HR=2.17, mPFS 2.8 para BM+ vs 4.9 para BM-), lo que sugiere fuertemente que el cSPS es predictivo de respuesta a T-DXd específicamente, no meramente pronóstico. Este es un argumento muy poderoso para la validez del análisis espacial.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[6]</sup>
            </li>
            <li>
              <strong>Ma et al. (Cancer Cell, 2025):</strong> Demostró consistentemente la relevancia de la cercanía a células HER2 3+ para explicar el mecanismo bystander in vivo.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[7]</sup>
            </li>
            <li>
              <strong>Dato QCS (Kapil 2024):</strong> Los datos de una mejor supervivencia libre de progresión (PFS 14.8 vs 8.6 meses) provienen de un estudio fase 1 exploratorio (NCT02564900, N=151 pacientes con cáncer de mama HER2-positivo y HER2-negativo tratados con T-DXd). La estratificación por el score cuantitativo continuo (QCS) mostró mayor prevalencia de selección (76.4% vs 56.9%) y mejor valor log-rank p (0.026 vs 0.26) comparado con el scoring manual ASCO/CAP.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[8]</sup>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Grid de 5 Impactos Clínicos */}
      <section className="px-5 sm:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 pb-2 border-b border-slate-200 text-balance">
          Resultados y Aplicación Práctica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">IMPACTO 1</span>
              Aprobaciones Regulatorias y Acceso
            </h3>
            <p className="text-slate-800 text-sm leading-relaxed">
              La FDA aprobó recientemente T-DXd para cáncer de mama HR+, HER2-low o HER2-ultralow tras progresión a terapia endocrina, basándose en DESTINY-Breast06 (Dilawari et al., 2025). Simultáneamente, se aprobó el ensayo diagnóstico complementario VENTANA HER2 (4B5) para identificar HER2-ultralow junto con la indicación de T-DXd.<sup className="text-blue-700 font-bold px-0.5 tracking-tighter">[12]</sup> El CDSS Tissunómico podría estratificar a estos pacientes, identificando topografías favorables en casos borderline.
            </p>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">IMPACTO 2</span>
               Predicción de Resistencia y Combinaciones
            </h3>
            <ul className="text-slate-800 text-sm leading-relaxed space-y-2 text-justify">
              <li className="text-justify"><strong className="text-red-700">INSULATED:</strong> Nassar et al. (JNCI 2026) encontraron que un microambiente tumoral (TME) inflamado predice peores resultados con T-DXd (TTNT 5.5 vs 9.6 meses). Por tanto, los tumores INSULATED con TME inflamado podrían necesitar estrategias que aborden la resistencia inmune, no simplemente añadir inmunoterapia directamente.</li>
              <li className="text-justify"><strong className="text-amber-600">HETEROGÉNEO:</strong> Podría indicar inhibidores quinasa HER2 o inhibición de USP9X (Goyette 2026).</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow md:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">IMPACTO 3</span>
              Optimización de la Secuencia Terapéutica (Guías NCCN)
            </h3>
            <p className="text-slate-800 text-sm leading-relaxed mb-4 text-justify">
              En las guías NCCN v2.2026, el T-DXd es &quot;other recommended&quot; en primera línea para HR+/HER2-negative con IHC 0+, 1+, o 2+/ISH- tras hormonoterapia (BINV-Q-2), y asciende a &quot;category 1, preferred&quot; en segunda línea para fenotipo HER2-low (IHC 1+ o 2+/ISH-). Identificar topografías CLUSTERED permitiría anticipar el beneficio para posicionarlo tempranamente, reservando a pacientes con fenotipos INSULATED para líneas posteriores.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden relative w-full max-w-4xl mx-auto shadow-sm mt-4">
              <NccnTableQ />
              <div className="mt-2 text-slate-500 text-[10px] sm:text-xs font-mono p-2 text-center">
                [Recreación Interactiva: Guías NCCN BINV-Q-2]
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">IMPACTO 4</span>
               Integración con Inteligencia Artificial
            </h3>
            <p className="text-slate-800 text-sm leading-relaxed">
              Estudios recientes sugieren que la IA puede mejorar en gran medida la concordancia interobservador. Jiang et al. (Laboratory Investigation, 2025) demostraron que la normalización de imágenes basada en IA mejoró la consistencia interobservador, particularmente para casos HER2-low, y los criterios null/ultralow-low/positive mostraron mejor fiabilidad que los criterios manuales ASCO/CAP 2023. El Kappa para HER2-ultralow fue excesivamente bajo (&lt;0.20) en todos los protocolos sin IA.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[3]</sup> Además, la digitalización facilita la transición hacia scores continuos y cuantitativos de HER2<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[20]</sup>, eliminando errores persistentes de lectura visual y fatiga.
            </p>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
               <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3">IMPACTO 5</span>
               Accesibilidad y Reproducibilidad
            </h3>
            <p className="text-slate-800 text-sm leading-relaxed">
              QuPath (gratis), determinístico, auditable, escalable a sistemas LIS.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Limitaciones y Ética */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="bg-slate-50 p-5 sm:p-8 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300 text-balance">
            LIMITACIONES Y CONSIDERACIONES ÉTICAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <div>
              <h3 className="font-bold text-slate-800 mb-3 tracking-wide text-sm uppercase">Limitaciones Técnicas</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-2">
                <li>Parámetros hipotéticos in silico que requieren calibración experta.</li>
                <li>Falta modelado de catepsina L estromal <sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[19]</sup>.</li>
                <li>El modelo no captura la resistencia al fármaco (payload) mediada por transportadores de eflujo celular (ABCC1/ABCG2), algo demostrado por Sledge et al. (NPJ Breast Cancer, 2025) en un cohorte de 2.799 pacientes.</li>
                <li>Tampoco modela la evolución temporal y la pérdida de expresión HER2 post-T-DXd (observada en el 49% de los casos recurrentes por Chen et al., Cancer Discovery, 2025).</li>
                <li>Análisis restringido a visión 2D, perdiendo la heterogeneidad volumétrica completa.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3 tracking-wide text-sm uppercase">Consideraciones Clínicas</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-2">
                <li>No reemplaza las guías oncológicas actuales.</li>
                <li>Requiere validación prospectiva antes de su uso diagnóstico autónomo.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3 tracking-wide text-sm uppercase">Consideraciones Éticas</h3>
              <ul className="list-disc pl-4 text-sm text-slate-700 space-y-2">
                <li>Potencial para expandir el acceso al tratamiento.</li>
                <li>Riesgo de falsas esperanzas; imperativa equidad y transparencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Visión de Futuro */}
      <section className="px-6 sm:px-10 mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b border-slate-200">
          VISIÓN DE FUTURO: Hacia la Oncología de Precisión Espacial
        </h2>
        <p className="text-slate-800 leading-relaxed mb-6 text-justify">
          El CDSS Tissunómico representa un paso fundamental hacia la oncología espacial real y rigurosa.
        </p>
        <ol className="list-decimal list-outside pl-5 space-y-4 text-slate-800 text-sm leading-relaxed">
          <li className="pl-2"><strong>Validación prospectiva</strong> de las métricas espaciales frente a resultados clínicos reales (PFS, RCB).</li>
          <li className="pl-2"><strong>Integración multimodal con genómica:</strong> Los predictores espaciales deben complementarse con perfiles genómicos. Por ejemplo, HER2DX es un score genómico de 4 firmas (inmune, proliferación, luminal, ERBB2) validado para predecir respuesta (pCR) y supervivencia en HER2+. Tarantino et al. (2026) demostraron que los scores cuantitativos como HER2DX ERBB2 mRNA lograron predecir el tiempo hasta el siguiente tratamiento (TTNT) con T-DXd de forma progresiva por cuartiles en 191 pacientes.</li>
          <li className="pl-2"><strong>Formación y Protocolos Estandarizados:</strong> Un grupo clínico australiano (Farshid et al., Modern Pathology, 2025) desarrolló recientemente convenciones de scoring focalizadas en HER2-low que alcanzaron un notable Kappa de 0.81 en un set de validación de 64 biopsias, demostrando que estandarizar protocolos es altamente beneficioso. Sin embargo, dado que este nivel de entrenamiento especializado no es universal, los sistemas computacionales (CDSS) se vuelven indispensables.</li>
          <li className="pl-2"><strong>Extensión a otras dianas modulares gADC</strong> (por ejemplo, ADC contra TROP2 o CEACAM5).</li>
        </ol>
      </section>

      {/* 7. Referencias Bibliográficas */}
      <section className="bg-slate-100 px-5 sm:px-8 lg:px-12 py-10 rounded-b-md">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 border-b border-slate-300 pb-3">
          Referencias Bibliográficas
        </h3>
        <ol className="academic-references text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          <li><span className="font-semibold text-slate-700">Wolff AC, et al.</span> <i className="italic">Human Epidermal Growth Factor Receptor 2 Testing in Breast Cancer...</i> <span className="text-slate-500">J Clin Oncol. 2023.</span></li>
          <li><span className="font-semibold text-slate-700">Tseng et al.</span> <i className="italic">Interobserver agreement in distinguishing HER2-0 from HER2-low...</i> <span className="text-slate-500">Am J Clin Pathol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Mulder L, et al.</span> <i className="italic">Artificial Intelligence–Assisted Pathologist Assessment of HER2 in Breast Cancer.</i> <span className="text-slate-500">J Clin Oncol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Hamilton E, et al.</span> <i className="italic">Trastuzumab deruxtecan (T-DXd) for HER2-low advanced breast cancer: Exploring spatial heterogeneity.</i> <span className="text-slate-500">ASCO. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">NCCN.</span> <i className="italic">Breast Cancer (Version 2.2026).</i></li>
          <li><span className="font-semibold text-slate-700">Kapil A, et al.</span> <i className="italic">Computational pathology–based HER2 quantification to identify novel biomarkers in gastric cancer.</i> <span className="text-slate-500">J Clin Oncol. 2023.</span></li>
          <li><span className="font-semibold text-slate-700">Ma D, et al.</span> <i className="italic">Spatial Determinants of Antibody-Drug Conjugate SHR-A1811 Efficacy...</i> <span className="text-slate-500">Cancer Cell. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Kapil A, et al.</span> <i className="italic">Quantitative continuous scoring (QCS) of HER2 expression predicts T-DXd efficacy in solid tumors.</i> <span className="text-slate-500">Nat Med. 2024.</span></li>
          <li><span className="font-semibold text-slate-700">Bardia A, et al.</span> <i className="italic">Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer.</i> <span className="text-slate-500">N Engl J Med. 2024.</span></li>
          <li><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer.</i> <span className="text-slate-500">N Engl J Med. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">FDA.</span> <i className="italic">Approved Drug Products with Therapeutic Equivalence Evaluations (Orange Book).</i></li>
          <li><span className="font-semibold text-slate-700">Dilawari A, et al.</span> <i className="italic">FDA Approval Summary: T-DXd for HR+, HER2-Low or HER2-Ultralow Breast Cancer.</i> <span className="text-slate-500">J Clin Oncol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Zou Y, et al.</span> <i className="italic">Impact of HER2-ultralow heterogeneity and optimal threshold on T-DXd efficacy (HEROIC).</i> <span className="text-slate-500">J Clin Oncol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Nassar A, et al.</span> <i className="italic">Spatial profiling of the tumor microenvironment predicts response to T-DXd in HER2-low breast cancer.</i> <span className="text-slate-500">JNCI. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Farhat S, et al.</span> <i className="italic">Tumor immune microenvironment characteristics of acquired resistance to T-DXd in breast cancer.</i> <span className="text-slate-500">Cancer Cell. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Goyette MA, et al.</span> <i className="italic">HER2 Heterogeneous Breast Cancer Models Reveal Novel Therapeutic Targets.</i> <span className="text-slate-500">Cancer Discov. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Baez-Navarro X, et al.</span> <i className="italic">HER2-low breast cancer: reproducibility of immunohistochemistry...</i> <span className="text-slate-500">Mod Pathol. 2023.</span></li>
          <li><span className="font-semibold text-slate-700">Schildhaus HU, et al.</span> <i className="italic">Global ring study of HER2-low detection...</i> <span className="text-slate-500">Mod Pathol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Morrar et al.</span> <i className="italic">Reclassification of HER2 IHC 0 to HER2-ultralow...</i> <span className="text-slate-500">Mod Pathol. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Tarantino P, Kim SE, Hughes ME, et al.</span> <i className="italic">The continuous spectrum of HER2 expression: Implications for novel targeted therapies.</i> <span className="text-slate-500">NPJ Precis Oncol. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Tsao LC, et al.</span> <i className="italic">Effective Extracellular Payload Release and Immunomodulatory Interactions Govern T-DXd.</i> <span className="text-slate-500">Nat Commun. 2025.</span></li>
        </ol>
      </section>

    </div>
  );
}
