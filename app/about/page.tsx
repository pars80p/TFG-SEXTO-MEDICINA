import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className="editorial-card overflow-hidden">
        <div className="flex border-b-2 border-[#1A1A1A] pb-4 mb-8 justify-between items-end">
           <h2 className="editorial-headline mb-0 border-none pb-0">Investigador & Autor</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch">
          <div className="shrink-0 w-48 h-64 sm:w-56 sm:h-72 mx-auto md:mx-0 relative border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0_#1A1A1A] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
            <Image 
              src="https://media.discordapp.net/attachments/1324443647927914575/1497606356297842818/111111111.jpg?ex=69ee221b&is=69ecd09b&hm=f91f5cfae8d42332b70eeb97e5a9601aa81f1d1976f132e3d659bf8541e44745&=&format=webp&width=715&height=958"
              alt="Mahdi Tajary"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
              className="object-cover object-top"
              referrerPolicy="no-referrer"
              unoptimized
            />
          </div>
          
          <div className="flex-1 space-y-6 w-full">
            <div>
              <h3 className="font-serif italic text-4xl font-bold text-[#1A1A1A]">Mahdi Tajary</h3>
              <p className="font-mono text-sm tracking-widest uppercase text-[#D44D26] mt-3 mb-4">
                Estudiante de 6º de Medicina
              </p>
              <p className="text-[#1A1A1A] leading-relaxed text-[15px] sm:text-base text-justify">
                Desarrollador y arquitecto técnico del <strong>CDSS Tissunómico V44.2</strong>. Su línea de investigación está orientada a la integración de la patología computacional, la bioinformática traslacional y la oncología de precisión, con un enfoque específico en la superación de resistencias espaciales en el cáncer de mama HER2-Low y HER2-heterogéneo.
              </p>
              <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10">
                <h4 className="font-serif italic text-xl font-bold text-[#1A1A1A] mb-2">Agradecimientos Especiales</h4>
                <p className="text-[#1A1A1A] leading-relaxed text-[15px] sm:text-base text-justify">
                  Deseo expresar mi más sincero y profundo agradecimiento al Dr. Santiago Ramón y Cajal por su inestimable labor como revisor experto de este trabajo. Su rigor científico, su perspicacia clínica y el valioso tiempo que ha dedicado a la evaluación de este modelo han sido fundamentales para refinar la arquitectura del proyecto.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y-2 border-[#1A1A1A] py-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative shrink-0 mix-blend-multiply">
                  <Image 
                    src="https://media.discordapp.net/attachments/1324443647927914575/1496837330215108648/image.png?ex=69eb55e5&is=69ea0465&hm=63d7f33901045f48239cf28d2b093c825f8e053ff8a4d7203c55982072568e82&=&format=webp&quality=lossless" 
                    alt="Universitat Autònoma de Barcelona" 
                    fill
                    sizes="64px"
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#8A847C]">
                  Universitat<br/>Autònoma<br/>de Barcelona
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 sm:w-48 h-16 relative shrink-0 mix-blend-multiply">
                  <Image 
                    src="https://media.discordapp.net/attachments/1324443647927914575/1496837406341726338/image.png?ex=69eb55f7&is=69ea0477&hm=207a2c449ff790be524ac4f32f9decf8abbd9bd7a9ca4e351d4cba3d397ce5a2&=&format=webp&quality=lossless" 
                    alt="Hospital" 
                    fill
                    sizes="192px"
                    className="object-contain object-left"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest pt-2">
              <a href="mailto:mahdi.tajary@autonoma.cat" className="text-[#1A1A1A] hover:text-[#D44D26] border-b-2 border-[#1A1A1A] hover:border-[#D44D26] pb-1 transition-colors">
                mahdi.tajary@autonoma.cat
              </a>
              <span className="text-[#8A847C] hidden sm:block">/</span>
              <a href="https://www.linkedin.com/in/mahdi-tajary-32381a365/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A] hover:text-[#D44D26] border-b-2 border-[#1A1A1A] hover:border-[#D44D26] pb-1 transition-colors">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="editorial-card overflow-hidden mt-6 mb-8 sm:mb-2">
        <h2 className="editorial-headline text-xl sm:text-2xl mb-8 text-balance border-b pb-4">Limitaciones y Trabajos Futuros</h2>
        
        <div className="space-y-12">
          <section>
            <h3 className="font-serif italic text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <span className="bg-[#1A1A1A] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm not-italic">A</span>
              Limitaciones del modelo actual
            </h3>
            <ul className="space-y-6 text-[#1A1A1A] font-medium">
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Sesgo geométrico 2D</strong> 
                  <span className="text-[#333]">Yapp et al. (Nature Methods, 2025;22(10):2180-2193) demostraron que pocas células están intactas en secciones convencionales de 4-5 µm, reduciendo la precisión del fenotipado celular y el análisis de interacciones célula-célula. Esto es directamente relevante porque el CDSS computa distancias entre centroides celulares en un plano 2D de ~4 µm de espesor, lo que subestima la densidad volumétrica real de vecinas y puede sobreestimar o subestimar el ISTB dependiendo de la orientación del corte. Chen et al. (Scientific Reports, 2019;9(1):5624) mostraron con CLARITY que los datasets 3D revelan variación intratumoral en Ki67 no evidente en secciones 2D. Además, Mo et al. (Nature, 2024;634:1178-1186) reconstruyeron estructuras tumorales 3D demostrando una heterogeneidad no capturable en 2D.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Liberación extracelular por CTSL</strong> 
                  <span className="text-[#333]">El modelo asume que el DXd se libera exclusivamente por internalización del ADC en células HER2+. Tsao et al. (Nature Communications, 2025;16(1):3167) demostraron que proteasas extracelulares como catepsina L (CTSL) en el estroma clivan el linker del T-DXd, liberando DXd independientemente de la internalización. Esto significa que el estroma podría actuar como fuente difusa adicional de toxina no modelada, y que el modelo podría infraestimar la eficacia en tumores con estroma rico en CTSL.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Vascularización y Binding Site Barrier</strong> 
                  <span className="text-[#333]">El modelo asume difusión uniforme desde células HER2+, sin considerar la Binding Site Barrier (BSB) perivascular. Wei et al. (Clinical Cancer Research, 2024;30(5):984-997) demostraron que los ADCs se acumulan preferentemente alrededor de los vasos y que el efecto bystander solo parcialmente supera esta barrera. Tampoco considera la heterogeneidad de perfusión tumoral, la presión intersticial elevada, ni que el modelo solo simula la difusión del payload libre (DXd), no del ADC completo.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Alteraciones genómicas de resistencia</strong> 
                  <span className="text-[#333]">El modelo ignora factores genómicos adquiridos. <em>Mutaciones PTEN:</em> HR=2.2 para TTNT inferior (q=0.068, marginalmente significativo tras corrección por múltiples comparaciones) (Nassar et al., JNCI, 2026;118(4):669-679; n=524 pacientes), predictivo específicamente de T-DXd. <em>Sobreexpresión ABCC1:</em> Predictor independiente de peor OS (Sledge et al., NPJ Breast Cancer, 2025; n=2.799 pacientes); mediado además por mutaciones NFE2L2/KEAP1. <em>Transportadores ABCG2 y ABCB1:</em> Murase et al. (Cancer Science, 2026;117(4):996-1009) demostraron que su inhibición restaura sensibilidad al T-DXd. Paradójicamente, las amplificaciones de ERBB2 predicen MEJORES resultados con T-DXd (Nassar et al., 2026).</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Proxy citoplasmático de expresión HER2</strong> 
                  <span className="text-[#333]">QuPath mide la intensidad DAB en el citoplasma como proxy de la expresión HER2 de membrana, lo cual introduce ruido por spillover cromogénico. Scores continuos cuantitativos (QCS) (Kapil et al., Scientific Reports, 2024;14(1):12129) ofrecen mayor resolución que la clasificación categórica, pero requieren deep learning no implementado en el CDSS actual.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#D44D26] shrink-0 text-2xl font-bold leading-none mt-1">•</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#D44D26] font-bold block mb-1 text-lg">Resistencia subclonal y dinámica evolutiva</strong> 
                  <span className="text-[#333]">Chen et al. (Cancer Discovery, 2025) encontraron que el 49% de casos post-T-DXd muestran disminución mayor de HER2 (con pérdida completa en el 52% de ellos). Mutaciones en el dominio de unión de trastuzumab (V597M, P593R) también promueven resistencia.</span>
                </div>
              </li>
            </ul>
          </section>

          <hr className="border-t border-[#E5E5E5] w-full" />

          <section>
            <h3 className="font-serif italic text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
              <span className="bg-[#1A1A1A] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm not-italic">B</span>
              Trabajo futuro
            </h3>
            <ul className="space-y-6 text-[#1A1A1A] font-medium">
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Validación prospectiva con RCB</strong> 
                  <span className="text-[#333]">El Residual Cancer Burden (RCB) integra dimensión del tumor residual, proporción de carcinoma invasivo, ganglios metastásicos y diámetro del depósito ganglionar mayor. Un análisis de 5.161 pacientes (Yau et al., Lancet Oncology, 2022;23(1):149-160) demostró un HR de 1.86 por unidad de incremento para recaída a distancia. Es ideal para calibrar el CDSS por ser continuo (como el ISTB), reproducible y validado. La calibración consistiría en correlacionar el índice espacial con el RCB post-neoadyuvancia. NeoSTEEP recomienda implementarlo en estos ensayos (Tarantino et al., JAMA Oncology, 2024;10(11):1578-1584).</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Integración de IHC multiplex</strong> 
                  <span className="text-[#333]">Para incluir la captación de proteasas estromales (CTSL) y modelar su contribución en la liberación del mediador bystander extracelular.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Calibración paramétrica clínica</strong> 
                  <span className="text-[#333]">Ajuste fino computacional de constantes (λ, EC50, k, factor de escala) utilizando datos radiológicos reales o la respuesta patológica local.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Integración genómica</strong> 
                  <span className="text-[#333]">Extensión multimodelo mediante análisis NGS (Next Generation Sequencing) para PTEN, ERBB2, NFE2L2, y KEAP1 en perfiles predictivos combinados.</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Análisis longitudinal post-progresión</strong> 
                  <span className="text-[#333]">Monitoreo de la dinámica in vivo y la pérdida evolutiva de diana HER2 (afectando a casi la mitad de los casos recurrentes).</span>
                </div>
              </li>
              <li className="flex flex-row items-start gap-3 sm:gap-4">
                <span className="text-[#059669] shrink-0 text-2xl font-bold leading-none mt-1">→</span>
                <div className="text-justify leading-relaxed flex-1">
                  <strong className="text-[#059669] font-bold block mb-1 text-lg">Extensión gADC</strong> 
                  <span className="text-[#333]">Adaptación del kernel de difusión gaussiana a otros ADCs con diferentes payloads, linkers y propiedades físico-químicas de difusión.</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
