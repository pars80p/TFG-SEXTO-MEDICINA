import React from 'react';
import Image from 'next/image';

export default function ValidationPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-14 w-full font-sans bg-white sm:rounded-md sm:shadow-sm sm:border sm:border-slate-200">
      
      {/* 1. Cabecera y Título */}
      <section className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight border-b-2 border-slate-900 pb-4 text-balance">
          VALIDACIÓN CLÍNICA: La Evidencia que Respalda el Modelo
        </h1>
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-4xl text-pretty text-justify">
          El CDSS Tissunómico no es un ejercicio teórico aislado. Cada componente del algoritmo — desde la eficacia del T-DXd en diferentes niveles de expresión HER2 hasta el impacto de la heterogeneidad espacial en la respuesta terapéutica — está respaldado por evidencia clínica de ensayos fase III y estudios translacionales recientes. Esta sección presenta la validación clínica organizada por los pilares fundamentales del modelo.
        </p>
      </section>

      {/* 2. Bloques de Pilares */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="space-y-16">
          
          {/* PILAR 1 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 1: El T-DXd Funciona Across Todo el Espectro de Expresión HER2
            </h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-[15px] sm:text-base text-justify">
              El modelo asume que el T-DXd puede destruir células tumorales independientemente de si expresan niveles altos, bajos o mínimos de HER2, siempre que exista proximidad espacial a células que sí lo expresen. Esta premisa está validad por el programa de ensayos clínicos DESTINY-Breast:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-3 text-slate-800 leading-relaxed mb-6 text-justify">
              <li className="text-justify">
                <strong>HER2-positivo (IHC 3+ o IHC 2+/ISH+):</strong> DESTINY-Breast01 (fase II, n=184)... ORR 62.0%, mediana de PFS 19.4 meses (análisis actualizado con seguimiento mediano de 26.5 meses; Saura et al., Ann Oncol 2024).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[1]</sup> | DESTINY-Breast03 (fase III, n=524)... mediana de PFS 28.8 meses vs 6.8 meses (segundo análisis interino; Hurvitz et al., Lancet 2023), confirmada en el análisis a largo plazo con seguimiento de 41 meses: PFS 29.0 vs 7.2 meses, OS 52.6 vs 42.7 meses (Cortés et al., Nat Med 2024), ORR 79% vs 35%.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[2]</sup>
              </li>
              <li className="text-justify">
                <strong>HER2-low (IHC 1+ o IHC 2+/ISH-):</strong> DESTINY-Breast04 (fase III, n=557)... PFS 9.9 vs 5.1 meses, OS 23.4 vs 16.8 meses.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[3,4]</sup>
              </li>
              <li className="text-justify">
                <strong>HER2-ultralow (IHC 0 con tinción de membrana):</strong> DESTINY-Breast06 (fase III, n=866)... PFS 13.2 vs 8.1 meses. ORR 61.8% vs 26.3% en la población completa HER2-ultralow (Bardia et al., NEJM 2024).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[5]</sup>
              </li>
            </ul>
            
            <div className="bg-slate-50 border border-slate-200 rounded overflow-hidden relative w-full mb-6 max-w-2xl mx-auto shadow-sm">
              <div className="overflow-x-auto w-full pb-1">
                <Image 
                  src="https://github.com/user-attachments/assets/afb5152c-7a19-4f6a-84d9-444fc27a7834"
                  alt="Figura 1 - Progression-free Survival DESTINY-Breast06"
                  width={851}
                  height={958}
                  className="min-w-[600px] md:min-w-full w-full h-auto"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </div>
              <div className="bg-slate-100 text-slate-500 text-[10px] font-mono p-2 text-center border-t border-slate-200">
                <span className="md:hidden block mb-1 text-slate-400 font-sans italic">&larr; Desliza la imagen para visualizarla completa &rarr;</span>
                Figura 1 - Progression-free Survival DESTINY-Breast06 (Bardia et al., 2024)
              </div>
            </div>

            <p className="text-slate-800 leading-relaxed">
              La FDA aprobó el T-DXd para tumores HER2-low (2022) y HER2-ultralow (2025)...<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[6,7]</sup>
            </p>
          </div>

          {/* PILAR 2 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 2: El Efecto Bystander Es el Mecanismo Clave en Tumores HER2-Heterogéneos
            </h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-[15px] sm:text-base text-justify">
              El modelo asume que la toxina DXd difunde desde las células HER2-positivas hacia las HER2-negativas vecinas.
            </p>
            <ul className="space-y-4 text-slate-800 leading-relaxed list-disc list-outside pl-5 text-justify">
              <li className="text-justify">
                <strong>Visualización directa:</strong> Suzuki et al. (2021) utilizaron imágenes de Phosphor-Integrated Dots (PID) en modelos de xenoinjerto HER2-heterogéneos, demostrando que mientras el anticuerpo trastuzumab se localiza exclusivamente en áreas HER2-positivas, la toxina DXd difunde hacia las áreas HER2-negativas adyacentes, confirmando visualmente el efecto bystander in vivo.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[8]</sup>
              </li>
              <li className="text-justify">
                <strong>Cuantificación de penetración:</strong> Khera et al. (2021, 2022) cuantificaron la penetración del payload bystander con resolución celular en esferoides 3D y tejido tumoral, demostrando que los payloads lipofílicos de ADCs penetran 2-5 capas celulares (30-80 &mu;m) antes de perder concentración letal, y que esta distancia puede modelarse matemáticamente mediante funciones de decaimiento exponencial.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[9,10]</sup>
              </li>
              <li className="text-justify">
                <strong>Mecanismo molecular:</strong> Tsao et al. (2025) demostraron que la eficacia del T-DXd en tumores HER2-low/negative puede ser independiente de la internalización del ADC, dependiendo en cambio de proteasas extracelulares como la catepsina L (CTSL) presentes en el estroma tumoral, que clivan el linker del T-DXd y liberan el DXd directamente en el microambiente. Este mecanismo no está modelado en el CDSS actual y constituye una limitación documentada.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[11]</sup>
              </li>
            </ul>
          </div>

          {/* PILAR 3 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 3: La Heterogeneidad Intratumoral de HER2 Predice Resistencia
            </h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-[15px] sm:text-base text-pretty text-justify">
              El modelo incorpora el índice HER2-HQE como métrica complementaria porque la heterogeneidad intratumoral predice resistencia:
            </p>
            <ul className="space-y-4 text-slate-800 leading-relaxed list-disc list-outside pl-5 text-justify">
              <li>
                <strong>Evidencia clínica:</strong> Metzger Filho et al. (2021) pCR 0% vs 55%.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[12]</sup> | Hu et al. (2026) pCR 24.5% vs 62.5%.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[13]</sup> | Li et al. (2024) análisis transcriptómico.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[14]</sup>
              </li>
              <li>
                <strong>Mecanismos:</strong> Goyette et al. (2026) demostraron cooperación subclonal HER2hi/HER2lo.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[15]</sup>
              </li>
            </ul>
          </div>

          {/* PILAR 4 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 4: La Distribución Espacial Predice la Respuesta al T-DXd
            </h2>
            <ul className="space-y-4 text-slate-800 leading-relaxed list-disc list-outside pl-5 text-justify">
              <li>
                <strong>El cSPS:</strong> El continuous Spatial Proximity Score (cSPS) es un biomarcador de patología computacional que integra la distancia espacial entre células HER2-positivas y HER2-negativas con la intensidad de expresión, generando un score continuo predictivo de respuesta. Estudio ASCO GI 2023 en DESTINY-Gastric01. Pacientes BM+ mPFS 8.3 vs 3.9 meses.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[16]</sup>
              </li>
              <li>
                <strong>Cáncer de mama:</strong> Ma et al. (2025) en ensayo FASCINATE-N. En HR-positivo, la agregación espacial de células HER2 3+ se asocia con menor respuesta. Notablemente, en tumores HR-negativos, el predictor principal de respuesta fue la infiltración inmune en lugar de la agregación HER2, lo que refuerza la complejidad del microambiente tumoral reconocida como limitación del modelo.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[17]</sup>
              </li>
            </ul>
          </div>

          {/* PILAR 5 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 5: La Discordancia HER2 Entre Biopsia Primaria y Metástasis
            </h2>
            <p className="text-slate-800 leading-relaxed mb-4 text-[15px] sm:text-base text-pretty text-justify">
              El modelo incluye un ajuste por riesgo preanalítico respaldado por el estudio HEROIC (2025, n=3.546):
            </p>
            <p className="text-slate-800 leading-relaxed text-[15px] sm:text-base text-pretty text-justify">
              En el estudio HEROIC (ASCO 2025, n=3.546), la discordancia HER2 entre primario y metástasis fue del 20.2% en la era HER2-ultralow. Entre los pacientes tratados con T-DXd (n=1.052), la ORR fue del 55.7% cuando ambas muestras expresaban HER2 (cohorte 1), del 53.1% cuando solo la metástasis expresaba HER2 (cohorte 3), pero solo del 13.0% cuando la metástasis era HER2-null (cohorte 2). Esto demuestra que el HER2 de la metástasis predice mejor la respuesta al T-DXd que el del tumor primario.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[18]</sup>
            </p>
          </div>

          {/* PILAR 6 */}
          <div className="mb-12 border-l-[3px] border-blue-600 pl-5 sm:pl-6">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 text-balance">
              PILAR 6: Modelos Farmacocinéticos Validan la Difusión Espacial
            </h2>
            <ul className="space-y-4 text-slate-800 leading-relaxed list-disc list-outside pl-5 text-justify">
              <li>
                <strong>Burton et al. (2019):</strong> Modelo QSP que demuestra que la exposición de células distantes depende fuertemente de la proximidad espacial.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[19]</sup>
              </li>
              <li>
                <strong>Vasalou et al. (2015):</strong> Modelo de penetración y transporte intersticial.<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[20]</sup>
              </li>
              <li>
                <strong>Wei et al. (2024):</strong> Cuantificación espaciotemporal de la actividad bystander y demostración de la mejora de la penetración en tumores sólidos (más allá de detallar la Binding Site Barrier).<sup className="text-blue-700 font-bold ml-0.5 tracking-tighter">[21]</sup>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Tabla Resumen */}
      <section className="px-5 sm:px-8 lg:px-12 mb-10 overflow-hidden w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-balance">Resumen de la Validación Clínica</h2>
        <div className="overflow-x-auto shadow-inner ring-1 ring-slate-200 sm:ring-0 sm:shadow-none sm:border sm:border-slate-200 rounded-md">
          <table className="w-full text-left table-auto border-collapse text-sm sm:text-base min-w-[600px]">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-300">
              <th className="py-3 px-4 font-semibold text-slate-900">Componente del Modelo</th>
              <th className="py-3 px-4 font-semibold text-slate-900">Evidencia de Validación</th>
              <th className="py-3 px-4 font-semibold text-slate-900">Referencias</th>
            </tr>
          </thead>
          <tbody className="text-slate-800">
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Eficacia T-DXd en HER2-positivo</td>
              <td className="py-3 px-4">DESTINY-Breast01/03: ORR 60.9-79%, PFS 19.4-29.0 meses</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[1,2]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Eficacia T-DXd en HER2-low</td>
              <td className="py-3 px-4">DESTINY-Breast04: PFS 9.9 vs 5.1 meses</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[3,4]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Eficacia T-DXd en HER2-ultralow</td>
              <td className="py-3 px-4">DESTINY-Breast06: ORR 57.3% (ITT); 61.8% en subgrupo ultralow</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[5]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Efecto bystander visualizado</td>
              <td className="py-3 px-4">Suzuki 2021: DXd difunde a áreas HER2-negativas</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[8]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Penetración payload 30-80 &mu;m</td>
              <td className="py-3 px-4">Khera 2021/2022: Mapeo farmacodinámico celular</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[9,10]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Heterogeneidad predice resistencia</td>
              <td className="py-3 px-4">Hu 2026: pCR 24.5% (HQE alto) vs 62.5% (bajo)</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[13]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Proximidad espacial predice respuesta</td>
              <td className="py-3 px-4">cSPS (ASCO GI 2023): mPFS 8.3 vs 3.9 meses</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[16]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Discordancia HER2 afecta respuesta</td>
              <td className="py-3 px-4">HEROIC 2025: ORR 55.7% vs 13.0%</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[18]</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-3 px-4">Modelos QSP validan difusión</td>
              <td className="py-3 px-4">Burton 2019, Vasalou 2015: Gradientes espaciales</td>
              <td className="py-3 px-4 font-mono text-xs text-slate-500 font-semibold">[19,20]</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* 4. Referencias Bibliográficas */}
      <section className="bg-slate-100 px-5 sm:px-8 lg:px-12 py-10 rounded-b-md">
        <h3 className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-wider mb-6 border-b border-slate-300 pb-3">
          Referencias Bibliográficas
        </h3>
        <ol className="academic-references text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
          <li>
            <div><span className="font-semibold text-slate-700">Saura C, Modi S, Krop I, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated Patients With HER2-positive Metastatic Breast Cancer: Updated Survival Results From a Phase II Trial (DESTINY-Breast01).</i> <span className="text-slate-500">Ann Oncol. 2024;35(3):302-307.</span></div>
            <div className="mt-1"><span className="text-blue-700 font-bold tracking-tighter mr-1">[1b]</span><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Positive Breast Cancer (análisis primario).</i> <span className="text-slate-500">N Engl J Med. 2020;382(7):610-621.</span></div>
          </li>
          <li><span className="font-semibold text-slate-700">Cortés J, et al.</span> <i className="italic">Trastuzumab Deruxtecan versus Trastuzumab Emtansine for Breast Cancer.</i> <span className="text-slate-500">NEJM. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer.</i> <span className="text-slate-500">NEJM. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">Modi S, et al.</span> <i className="italic">Trastuzumab Deruxtecan in HER2-low MBC: Long-Term Survival DESTINY-Breast04.</i> <span className="text-slate-500">Nature Med. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Bardia A, et al.</span> <i className="italic">Trastuzumab Deruxtecan after Endocrine Therapy in Metastatic Breast Cancer.</i> <span className="text-slate-500">NEJM. 2024.</span></li>
          <li><span className="font-semibold text-slate-700">Dilawari A, et al.</span> <i className="italic">FDA Approval Summary: T-DXd for HR+, HER2-Low or HER2-Ultralow Breast Cancer.</i> <span className="text-slate-500">JCO. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Narayan P, et al.</span> <i className="italic">FDA Approval Summary: Fam-Trastuzumab Deruxtecan-nxki for HER2-Low MBC.</i> <span className="text-slate-500">JCO. 2023.</span></li>
          <li><span className="font-semibold text-slate-700">Suzuki M, et al.</span> <i className="italic">Visualization of Intratumor PK of T-DXd in HER2 Heterogeneous Model Using PID.</i> <span className="text-slate-500">Clin Cancer Res. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">Khera E, et al.</span> <i className="italic">Quantifying ADC Bystander Payload Penetration With Cellular Resolution.</i> <span className="text-slate-500">Neoplasia. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">Khera E, et al.</span> <i className="italic">Cellular-Resolution Imaging of Bystander Payload Tissue Penetration.</i> <span className="text-slate-500">Mol Cancer Ther. 2022.</span></li>
          <li><span className="font-semibold text-slate-700">Tsao LC, et al.</span> <i className="italic">Effective Extracellular Payload Release and Immunomodulatory Interactions Govern T-DXd.</i> <span className="text-slate-500">Nature Comms. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Filho OM, et al.</span> <i className="italic">Impact of HER2 Heterogeneity on Treatment Response: Phase II Neoadjuvant T-DM1 + Pertuzumab.</i> <span className="text-slate-500">Cancer Discov. 2021.</span></li>
          <li><span className="font-semibold text-slate-700">Hu J, et al.</span> <i className="italic">Predictors of Response to Neoadjuvant Therapy in HER2-Positive Breast Cancer and HQE.</i> <span className="text-slate-500">Mod Pathol. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Li Z, et al.</span> <i className="italic">HER2 Heterogeneity and Treatment Response-Associated Profiles in HER2-positive Breast Cancer.</i> <span className="text-slate-500">JCI. 2024.</span></li>
          <li><span className="font-semibold text-slate-700">Goyette MA, et al.</span> <i className="italic">HER2 Heterogeneous Breast Cancer Models Reveal Novel Therapeutic Targets.</i> <span className="text-slate-500">Cancer Discov. 2026.</span></li>
          <li><span className="font-semibold text-slate-700">Kapil A, et al.</span> <i className="italic">Computational pathology–based HER2 quantification to identify novel biomarkers in gastric cancer.</i> <span className="text-slate-500">J Clin Oncol. 2023;41(suppl 4; abstr 449).</span></li>
          <li><span className="font-semibold text-slate-700">Ma D, et al.</span> <i className="italic">Spatial Determinants of Antibody-Drug Conjugate SHR-A1811 Efficacy in Neoadjuvant Treatment.</i> <span className="text-slate-500">Cancer Cell. 2025.</span></li>
          <li><span className="font-semibold text-slate-700">Zou Y, et al.</span> <i className="italic">Impact of HER2-ultralow heterogeneity and optimal threshold on T-DXd efficacy (HEROIC).</i> <span className="text-slate-500">J Clin Oncol 43, 2025, suppl 16; abstr 1117.</span></li>
          <li><span className="font-semibold text-slate-700">Burton JK, et al.</span> <i className="italic">A Systems Pharmacology Model for Drug Delivery to Solid Tumors by ADCs.</i> <span className="text-slate-500">AAPS Journal. 2019.</span></li>
          <li><span className="font-semibold text-slate-700">Vasalou C, et al.</span> <i className="italic">A Mechanistic Tumor Penetration Model to Guide Antibody Drug Conjugate Design.</i> <span className="text-slate-500">PLoS One. 2015.</span></li>
          <li><span className="font-semibold text-slate-700">Wei Q, et al.</span> <i className="italic">Spatiotemporal Quantification of HER2-targeting Antibody-Drug Conjugate Bystander Activity.</i> <span className="text-slate-500">Clin Cancer Res. 2024.</span></li>
        </ol>
      </section>

    </div>
  );
}
