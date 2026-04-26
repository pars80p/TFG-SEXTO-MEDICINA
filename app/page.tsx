export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-xl sm:shadow-lg sm:border sm:border-slate-200">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight border-b-2 border-slate-900 pb-3 sm:pb-4 leading-tight">
          El Problema Clínico que Este Proyecto Resuelve
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed max-w-5xl text-justify">
          El cáncer de mama HER2-positivo representa aproximadamente el 15-20% de todos los cánceres de mama, y durante décadas, la expresión del receptor HER2 ha sido el biomarcador clave para seleccionar pacientes que se beneficiarán de terapias dirigidas como trastuzumab (Herceptin®).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[1]</sup> Sin embargo, la llegada de una nueva generación de fármacos — los conjugados anticuerpo-fármaco (ADCs) como trastuzumab deruxtecan (T-DXd, Enhertu®) — ha revolucionado el paradigma terapéutico al demostrar eficacia incluso en tumores con expresión baja o heterogénea de HER2.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[2,3]</sup>
        </p>
      </section>

      {/* Two Columns Concept */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Column */}
        <div className="flex flex-col justify-start bg-slate-50 p-5 sm:p-8 border border-slate-200 rounded">
          <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4 pb-2 border-b border-blue-900/20">
            El Efecto Bystander: La Clave del T-DXd
          </h2>
          <p className="text-slate-800 leading-relaxed text-sm sm:text-base text-justify">
            A diferencia de las terapias anti-HER2 tradicionales, el T-DXd no solo destruye las células que expresan HER2. Gracias a su diseño único — un anticuerpo unido a una potente toxina (DXd) mediante un enlazador escindible — el fármaco puede liberar su carga citotóxica dentro de las células HER2-positivas, y esta toxina, al ser permeable a las membranas celulares, difunde hacia las células vecinas HER2-negativas y las destruye también.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[4-6]</sup> Este fenómeno se denomina efecto bystander y es el mecanismo que explica por qué el T-DXd funciona en tumores HER2-low (IHC 1+ o IHC 2+/ISH-) e incluso en algunos tumores HER2-ultralow (IHC 0 con tinción de membrana), indicación para la cual la FDA aprobó el T-DXd en 2025 (Dilawari A, et al. J Clin Oncol. 2025).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[3,7]</sup>
          </p>
        </div>

        {/* Right Column / Alert Box */}
        <div className="bg-red-50 border border-red-100 p-5 sm:p-8 rounded shadow-sm flex flex-col justify-start">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 pb-2 border-b border-slate-300">
            El Problema: La IHC Tradicional No Predice la Respuesta
          </h2>
          <p className="text-slate-800 leading-relaxed mb-6 text-sm md:text-base text-justify">
            El sistema de puntuación IHC actual (0, 1+, 2+, 3+) fue diseñado para identificar tumores con sobreexpresión de HER2 que responderían a trastuzumab.[8] Sin embargo, este sistema es semicuantitativo y ciego al espacio: no considera cómo están distribuidas las células HER2-positivas dentro del tumor ni si las células HER2-negativas están lo suficientemente cerca para recibir la toxina liberada por el efecto bystander.[9][10]
          </p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-slate-800 text-sm md:text-base text-justify">
          <li className="text-justify">La heterogeneidad intratumoral de HER2 (presencia de subpoblaciones con diferentes niveles de expresión) es un predictor independiente de resistencia a terapias anti-HER2.[11][12][13]</li>
          <li className="text-justify">Pacientes con tumores HER2-heterogéneos tratados con T-DM1 (un ADC de generación anterior) tuvieron una tasa de respuesta patológica completa (pCR) del 0%, frente al 55% en tumores homogéneos.[13]</li>
          <li className="text-justify">Un índice de heterogeneidad alto (HER2-HQE) se asocia con una pCR de solo 24.5%, comparado con 62.5% en tumores homogéneos.[12]</li>
        </ul>
        </div>
      </section>

      {/* Solution SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 mt-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-6">
          La Solución: Un CDSS Basado en Análisis Espacial
        </h2>
        <p className="text-center text-slate-800 max-w-3xl mx-auto mb-10 text-lg">
          Este proyecto desarrolla un CDSS Tissunómico que va más allá de la puntuación IHC tradicional. Utilizando herramientas de patología digital de código abierto (QuPath) y un modelo matemático basado en la Ley de Fick de difusión, el sistema:
        </p>
        
        {/* Grid 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="border border-slate-200 p-5 sm:p-8 bg-slate-50 relative rounded flex flex-col items-center text-center shadow-sm">
            <span className="text-5xl font-mono font-bold text-blue-900 mb-4 opacity-20">1</span>
            <p className="text-slate-800 font-medium z-10 text-sm sm:text-base">Cuantifica la distribución espacial de las células tumorales según su intensidad de expresión HER2 (Negative, 1+, 2+, 3+).</p>
          </div>
          <div className="border border-slate-200 p-5 sm:p-8 bg-slate-50 relative rounded flex flex-col items-center text-center shadow-sm">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-blue-900 mb-3 sm:mb-4 opacity-20">2</span>
            <p className="text-slate-800 font-medium z-10 text-sm sm:text-base">Calcula la exposición de cada célula HER2-negativa a la toxina liberada por sus vecinas HER2-positivas, considerando la distancia física entre ellas.</p>
          </div>
          <div className="border border-slate-200 p-5 sm:p-8 bg-slate-50 relative rounded flex flex-col items-center text-center shadow-sm">
            <span className="text-4xl sm:text-5xl font-mono font-bold text-blue-900 mb-3 sm:mb-4 opacity-20">3</span>
            <p className="text-slate-800 font-medium z-10 text-sm sm:text-base">Estratifica a los pacientes en tres fenotipos accionables:</p>
          </div>
        </div>

        {/* Phenotype Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="border-t-4 border-emerald-500 bg-white border border-slate-200 shadow-md p-4 sm:p-6 rounded-b">
            <h3 className="text-emerald-700 font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm bg-emerald-50 inline-block px-2 py-1 rounded">Clustered (Agrupado)</h3>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed">Las células HER2-negativas están rodeadas de células HER2-positivas &rarr; alta probabilidad de respuesta al T-DXd.</p>
          </div>
          <div className="border-t-4 border-red-500 bg-white border border-slate-200 shadow-md p-4 sm:p-6 rounded-b">
            <h3 className="text-red-700 font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm bg-red-50 inline-block px-2 py-1 rounded">Insulated (Aislado)</h3>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed">Las células HER2-negativas están espacialmente segregadas de las fuentes de toxina &rarr; baja probabilidad de respuesta.</p>
          </div>
          <div className="border-t-4 border-amber-500 bg-white border border-slate-200 shadow-md p-4 sm:p-6 rounded-b">
            <h3 className="text-amber-700 font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm bg-amber-50 inline-block px-2 py-1 rounded">Heterogéneo</h3>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed">Patrón mixto que requiere evaluación adicional para determinar beneficio clínico.</p>
          </div>
        </div>
      </section>

      {/* Scientific Backing */}
      <section className="bg-slate-900 text-white p-5 sm:p-8 lg:p-12 sm:mx-6 lg:mx-8 sm:rounded-xl shadow-md mt-6 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6 border-b border-white/20 pb-3 sm:pb-4 leading-tight">¿Por Qué Este Enfoque Tiene Respaldo Científico?</h2>
        <p className="text-slate-300 text-sm sm:text-lg mb-8 sm:mb-10 text-balance text-justify">
          El concepto de que la proximidad espacial entre células HER2-positivas y HER2-negativas determina la eficacia del efecto bystander ha sido validado experimentalmente:
        </p>
        
        <ul className="space-y-8 mb-16 border-l-2 border-blue-800 ml-4 pl-6 relative">
          <li className="relative">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-slate-300 leading-relaxed text-sm opacity-90 text-justify">
              <strong className="text-white font-medium">Suzuki et al. (2021)</strong> visualizaron directamente la distribución intratumoral del T-DXd en modelos de xenoinjerto HER2-heterogéneos, demostrando que el anticuerpo (trastuzumab) se localiza exclusivamente en áreas HER2-positivas, pero la toxina (DXd) difunde hacia las áreas HER2-negativas adyacentes.[6]
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-slate-300 leading-relaxed text-sm opacity-90 text-justify">
              <strong className="text-white font-medium">Khera et al. (2021, 2022)</strong> cuantificaron la penetración del payload bystander con resolución celular, confirmando que la distancia de difusión efectiva depende de las propiedades fisicoquímicas del payload (lipofilicidad) y puede modelarse matemáticamente.[14][15]
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-slate-300 leading-relaxed text-sm opacity-90 text-justify">
              Un estudio de patología computacional en cáncer gástrico desarrolló el continuous Spatial Proximity Score (cSPS), que considera la ubicación espacial de las células tumorales además del nivel de expresión HER2, y demostró ser predictivo de la respuesta al T-DXd (mPFS 8.3 meses en BM+ vs 3.9 meses en BM-).[16]
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <p className="text-slate-300 leading-relaxed text-sm opacity-90 text-justify">
              <strong className="text-white font-medium">Ma et al. (2025)</strong> identificaron que en tumores HER2-positivos HR-negativos, la infiltración de células inmunes predice mejor respuesta, mientras que en tumores HR-positivos, la agregación espacial de células HER2 3+ (en lugar de distribución uniforme) se asocia con menor respuesta.[17] Notablemente, este estudio analizó un ADC diferente al T-DXd (SHR-A1811), lo que sugiere que los determinantes espaciales de eficacia son un principio generalizable a la clase de ADCs anti-HER2, no específico de un fármaco concreto.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/20 pb-4">El Objetivo de Este Blog</h2>
        <p className="text-slate-300 mb-8 opacity-90">
          Este blog documenta el desarrollo completo del CDSS Tissunómico, desde los fundamentos biológicos hasta la implementación técnica. Está diseñado para ser:
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-lg shadow-sm flex items-start gap-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
            <div>
               <span className="font-bold text-white text-sm block mb-1">Reproducible</span>
               <span className="text-slate-400 text-xs">Cualquier laboratorio con acceso a QuPath y Excel puede implementar el sistema.</span>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-lg shadow-sm flex items-start gap-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
            <div>
               <span className="font-bold text-white text-sm block mb-1">Transparente</span>
               <span className="text-slate-400 text-xs">Todos los parámetros matemáticos están documentados y justificados.</span>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-lg shadow-sm flex items-start gap-3 flex-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
            <div>
               <span className="font-bold text-white text-sm block mb-1">Adaptable</span>
               <span className="text-slate-400 text-xs">El modelo puede ajustarse a diferentes tipos tumorales y ADCs mediante el panel de análisis de sensibilidad.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer References */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <h4 className="text-slate-800 font-bold uppercase tracking-wider text-xs mb-6">Referencias</h4>
        <ol className="academic-references text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
          <li><span className="font-semibold text-slate-800">Slamon DJ, et al.</span> <i className="italic">Use of chemotherapy plus a monoclonal antibody against HER2 for metastatic breast cancer that overexpresses HER2.</i> <span className="text-slate-500">N Engl J Med. 2001.</span></li>
          <li><span className="font-semibold text-slate-800">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer.</i> <span className="text-slate-500">N Engl J Med. 2022.</span></li>
          <li><span className="font-semibold text-slate-800">Bardia A, et al.</span> <i className="italic">Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer.</i> <span className="text-slate-500">N Engl J Med. 2024;391(22):2110-2122.</span></li>
          <li><span className="font-semibold text-slate-800">Ogitani Y, et al.</span> <i className="italic">Bystander killing effect of DS-8201a... in tumors with human epidermal growth factor receptor 2 heterogeneity.</i> <span className="text-slate-500">Cancer Sci. 2016.</span></li>
          <li><span className="font-semibold text-slate-800">Nakada T, et al.</span> <i className="italic">The Latest Research and Development into the Antibody-Drug Conjugate... for HER2 Cancer Therapy.</i> <span className="text-slate-500">Chem Pharm Bull. 2019.</span></li>
          <li><span className="font-semibold text-slate-800">Suzuki M, et al.</span> <i className="italic">Visualization of Intratumor Pharmacokinetics of [Fam-] Trastuzumab Deruxtecan (DS-8201a) in HER2 Heterogeneous Model Using Phosphor-Integrated Dots Imaging Analysis.</i> <span className="text-slate-500">Clin Cancer Res. 2021;27(14):3970-3979.</span></li>
          <li><span className="font-semibold text-slate-800">Tarantino P, et al.</span> <i className="italic">HER2-Low Breast Cancer: Pathological and Clinical Landscape.</i> <span className="text-slate-500">J Clin Oncol. 2020.</span></li>
          <li><span className="font-semibold text-slate-800">Wolff AC, et al.</span> <i className="italic">Human Epidermal Growth Factor Receptor 2 Testing in Breast Cancer: ASCO/CAP Guideline Update.</i> <span className="text-slate-500">J Clin Oncol. 2023.</span></li>
          <li><span className="font-semibold text-slate-800">Fernandez AI, et al.</span> <i className="italic">Examination of Low HER2 Protein Expression in Breast Cancer Clinicopathological Features and Concordance.</i> <span className="text-slate-500">JAMA Oncol. 2022.</span></li>
          <li><span className="font-semibold text-slate-800">Moutafi M, et al.</span> <i className="italic">Quantitative measurement of HER2 expression to subclassify ER-positive breast cancer.</i> <span className="text-slate-500">Lab Invest. 2022.</span></li>
          <li><span className="font-semibold text-slate-800">Rye IH, et al.</span> <i className="italic">Intratumor heterogeneity defines treatment-resistant HER2+ breast tumors.</i> <span className="text-slate-500">Mol Oncol. 2018.</span></li>
          <li><span className="font-semibold text-slate-800">Wu C, et al.</span> <i className="italic">A novel HER2 heterogeneity index (HER2-HQE) predicts response to neoadjuvant therapy in HER2-positive breast cancer.</i> <span className="text-slate-500">Breast Cancer Res. 2021.</span></li>
          <li><span className="font-semibold text-slate-800">Filho OM, Viale G, Stein S, et al.</span> <i className="italic">Impact of HER2 Heterogeneity on Treatment Response of Early-Stage HER2-Positive Breast Cancer: Phase II Neoadjuvant Clinical Trial of T-DM1 Combined With Pertuzumab.</i> <span className="text-slate-500">Cancer Discov. 2021;11(10):2474-2487.</span></li>
          <li><span className="font-semibold text-slate-800">Khera E, et al.</span> <i className="italic">Quantifying ADC Bystander Payload Penetration With Cellular Resolution Using Pharmacodynamic Mapping.</i> <span className="text-slate-500">Neoplasia. 2021;23(2):210-221.</span></li>
          <li><span className="font-semibold text-slate-800">Khera E, et al.</span> <i className="italic">Cellular-Resolution Imaging of Bystander Payload Tissue Penetration From Antibody-Drug Conjugates.</i> <span className="text-slate-500">Molecular Cancer Therapeutics. 2022;21(2):310-321.</span></li>
          <li><span className="font-semibold text-slate-800">Kapil A, et al.</span> <i className="italic">Computational pathology-based HER2 quantification to identify novel biomarkers in gastric cancer.</i> <span className="text-slate-500">J Clin Oncol. 2023;41(suppl 4; abstr 449).</span></li>
          <li><span className="font-semibold text-slate-800">Ma D, et al.</span> <i className="italic">Spatial Determinants of Antibody-Drug Conjugate SHR-A1811 Efficacy in Neoadjuvant Treatment for HER2-positive Breast Cancer.</i> <span className="text-slate-500">Cancer Cell. 2025;43(6):1061-1075.</span></li>
        </ol>
      </section>
    </div>
  );
}
