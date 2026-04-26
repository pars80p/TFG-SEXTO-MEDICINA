import React from 'react';

export default function NccnTableQ() {
  return (
    <div className="bg-white border-2 border-slate-900 overflow-hidden shadow-sm text-[10px] sm:text-xs">
      {/* Header Area */}
      <div className="flex justify-between items-start border-b-2 border-slate-900 p-3 sm:p-4 bg-white">
        <div className="flex gap-4 items-center">
          <div className="bg-[#0077b6] text-white p-2 w-16 h-16 flex flex-col justify-center items-center text-center font-bold leading-tight shrink-0">
            <span>NCCN</span>
          </div>
          <div>
            <div className="text-slate-600 text-[10px] sm:text-[11px] uppercase tracking-wide">National<br/>Comprehensive<br/>Cancer<br/>Network®</div>
          </div>
          <div className="ml-4 border-l-2 border-slate-900 pl-4">
            <h2 className="font-bold text-base sm:text-xl text-black">NCCN Guidelines Version 2.2026</h2>
            <h3 className="font-bold text-sm sm:text-lg text-black">Invasive Breast Cancer</h3>
          </div>
        </div>
        <div className="text-right flex flex-col items-end gap-0.5 mt-1 text-[#0077b6] underline decoration-1 underline-offset-2">
          <a href="#" className="hover:text-blue-800">NCCN Guidelines Index</a>
          <a href="#" className="hover:text-blue-800">Table of Contents</a>
          <a href="#" className="hover:text-blue-800">Discussion</a>
        </div>
      </div>

      {/* Subtitles Area */}
      <div className="text-center py-3 bg-white border-b-2 border-slate-900">
        <h4 className="font-bold text-black text-sm uppercase">CYTOTOXIC REGIMENS FOR RECURRENT UNRESECTABLE (LOCAL OR REGIONAL) OR STAGE IV (M1) DISEASE<sup>a</sup></h4>
      </div>
      <div className="text-center py-2 bg-[#e2e8f0] border-b-2 border-slate-900">
        <h5 className="font-bold text-black">HR-Positive and HER2-Negative with Visceral Crisis<sup>†</sup> or Endocrine Refractory</h5>
      </div>
      <div className="py-1 px-2 border-b-2 border-slate-900 bg-white">
        <span className="text-black italic">See <a href="#" className="text-[#0077b6] underline">BINV-Q 1 of 15</a> for Considerations for Systemic Therapy.</span>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] md:min-w-full border-collapse border-b-2 border-slate-900 text-black">
          <thead className="bg-[#e2e8f0]">
            <tr>
              <th className="border-r border-slate-900 p-2 text-left font-bold w-[15%]">Setting</th>
              <th className="border-r border-slate-900 p-2 text-left font-bold w-[40%]">Subtype/Biomarker</th>
              <th className="p-2 text-left font-bold w-[45%]">Regimen</th>
            </tr>
          </thead>
          <tbody className="bg-white align-top">
            {/* First Line */}
            <tr className="border-t border-slate-900">
              <td className="border-r border-slate-900 p-2 font-bold" rowSpan={2}>First Line</td>
              <td className="border-r border-b border-slate-900 p-2">No germline <span className="italic">BRCA1/2</span> PV<sup>b</sup> and/or HER2 (ERBB2) IHC 0+, 1+, or 2+/ISH negative<sup>d</sup></td>
              <td className="border-b border-slate-900 p-2">Systemic chemotherapy<sup>e</sup> (category 1, preferred) (<a href="#" className="text-[#0077b6] underline">BINV-Q 5 of 15</a>),<br/>or Fam-trastuzumab deruxtecan-nxki<sup>e,f</sup> (other recommended)</td>
            </tr>
            <tr>
              <td className="border-r border-slate-900 p-2">Germline <span className="italic">BRCA1/2</span> PV<sup>b</sup></td>
              <td className="p-2">PARPi (Olaparib or Talazoparib)<sup>c</sup> (category 1, preferred)</td>
            </tr>
            
            {/* Second Line */}
            <tr className="border-t border-slate-900">
              <td className="border-r border-slate-900 p-2 font-bold" rowSpan={4}>Second Line</td>
              <td className="border-r border-b border-slate-900 p-2">HER2 (ERBB2) IHC 1+ or 2+/ISH negative<sup>d</sup></td>
              <td className="border-b border-slate-900 p-2">Fam-trastuzumab deruxtecan-nxki<sup>f</sup> (category 1, preferred)</td>
            </tr>
            <tr>
              <td className="border-r border-b border-slate-900 p-2">HER2 (ERBB2) IHC 0+<sup>d</sup></td>
              <td className="border-b border-slate-900 p-2">Fam-trastuzumab deruxtecan-nxki<sup>f</sup> (other recommended)</td>
            </tr>
            <tr>
              <td className="border-r border-slate-900 p-2" rowSpan={2}>Not a candidate for Fam-trastuzumab deruxtecan-nxki</td>
              <td className="border-b border-slate-900 p-2">Sacituzumab govitecan-hziy<sup>g</sup> (category 1, preferred)</td>
            </tr>
            <tr>
              <td className="p-0 border-b border-slate-900">
                <div className="border-b border-slate-900 p-2">Systemic chemotherapy (<a href="#" className="text-[#0077b6] underline">BINV-Q 5 of 15</a>)</div>
                <div className="border-b border-slate-900 p-2">Targeted therapy (<a href="#" className="text-[#0077b6] underline">BINV-Q 6 of 15</a> and <a href="#" className="text-[#0077b6] underline">BINV-Q 7 of 15</a>)</div>
                <div className="p-2">For HER2 (ERBB2) IHC 0, 1+, or 2+/ISH negative:<sup>d</sup><br/>Datopotamab deruxtecan-dlnk<sup>h</sup> (other recommended)</div>
              </td>
            </tr>

            {/* Third Line and Beyond */}
            <tr className="border-t border-slate-900">
              <td className="border-r border-slate-900 p-2 font-bold" rowSpan={2}>Third Line and<br/>Beyond</td>
              <td className="border-r border-b border-slate-900 p-2">Any</td>
              <td className="border-b border-slate-900 p-2">Systemic chemotherapy (<a href="#" className="text-[#0077b6] underline">BINV-Q 5 of 15</a>)</td>
            </tr>
            <tr>
              <td className="border-r border-slate-900 p-2">Biomarker positive (ie, MSI-H, <span className="italic">NTRK1/2/3</span> and <span className="italic">RET</span> gene fusions, TMB-H)</td>
              <td className="p-2">Targeted agents and emerging biomarker options (<a href="#" className="text-[#0077b6] underline">BINV-Q 6 of 15</a>, <a href="#" className="text-[#0077b6] underline">BINV-Q 7 of 15</a>, and <a href="#" className="text-[#0077b6] underline">BINV-Q 8 of 15</a>)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footnotes Area */}
      <div className="p-3 bg-white text-[9px] sm:text-[10px] space-y-1 text-black leading-tight border-b-2 border-slate-900">
        <p><sup>†</sup> According to the 5th ESO-ESMO international consensus guidelines (Cardoso F, et al. Ann Oncol 2020;31:1623-1649) for advanced breast cancer, visceral crisis is defined as: &quot;severe organ dysfunction, as assessed by signs and symptoms, laboratory studies and rapid progression of disease. Visceral crisis is not the mere presence of visceral metastases but implies important organ compromise leading to a clinical indication for the most rapidly efficacious therapy.&quot;</p>
        <p><sup>a</sup> For treatment of brain metastases, see <a href="#" className="text-[#0077b6] underline">NCCN Guidelines for Central Nervous System Cancers</a>.</p>
        <p><sup>b</sup> Assess for germline <span className="italic">BRCA1/2</span> PVs in all patients with recurrent or metastatic breast cancer to identify candidates for PARP inhibitor (PARPi) therapy.</p>
        <p><sup>c</sup> PARPi can be considered for a later line for those with germline <span className="italic">BRCA1/2</span> PV; however, available evidence suggests it is more effective if used earlier.</p>
        <p><sup>d</sup> See <a href="#" className="text-[#0077b6] underline">Principles of HER2 Testing (BINV-A)</a>. The distinction between HER2 (ERBB2) test results of IHC 0/absent membrane staining, IHC 0+/with membrane staining (faint, partial membrane staining in ≤10%), IHC 1+, or 2+/ISH negative is currently clinically relevant for therapy selection.</p>
        <p><sup>e</sup> Chemotherapy (eg, oral chemotherapy) is generally preferred in the first-line setting. Selection of chemotherapy versus fam-trastuzumab-nxki for first-line therapy should be individualized based on clinical features and patient preference.</p>
        <p><sup>f</sup> Fam-trastuzumab deruxtecan-nxki may be used in those previously treated with at least one line of endocrine-based therapy in the metastatic setting. Fam-trastuzumab deruxtecan-nxki is associated with interstitial lung disease (ILD)/pneumonitis. Regular monitoring for this serious side effect is recommended. For patients with a history of ILD/pneumonitis, there are no data on managing safety or toxicity of this drug in a trial.</p>
        <p><sup>g</sup> Sacituzumab govitecan-hziy may be used after prior treatment including endocrine therapy, a CDK4/6 inhibitor, and at least two lines of chemotherapy, one of which was a taxane, and at least one of which was in the metastatic setting. It may be considered for later line if not used as second-line therapy.</p>
        <p><sup>h</sup> Datopotamab deruxtecan-dlnk is indicated as second- or subsequent-line therapy for those who have received a prior endocrine-based therapy and chemotherapy for unresectable or metastatic disease. Datopotamab deruxtecan-dlnk did not meet the OS endpoint in the TROPION-Breast01 trial. Whereas the previously approved ADCs, fam-trastuzumab deruxtecan-nxki and sacituzumab govitecan-hziy have shown a benefit in OS in randomized phase III trials. The benefit of using datopotamab deruxtecan-dlnk in patients with prior ADC treatment are not known as the TROPION-Breast01 trial did not include patients with prior ADC treatment.</p>
      </div>

      {/* Footer Details */}
      <div className="flex justify-between items-end p-3 pt-2 bg-white">
        <div className="border border-black p-1 px-2 font-bold text-black text-[10px] self-start inline-block">
          Note: All recommendations are category 2A unless otherwise indicated.
        </div>
        <div className="text-right font-bold text-black text-xs sm:text-sm leading-tight">
          BINV-Q<br/>2 OF 15
        </div>
      </div>
      
      {/* Copyright */}
      <div className="p-3 pt-1 bg-white text-[8px] text-slate-500 border-t border-slate-200">
        Version 2.2026, 02/27/26 © 2026 National Comprehensive Cancer Network® (NCCN®), All rights reserved. NCCN Guidelines® and this illustration may not be reproduced in any form without the express written permission of NCCN.
      </div>
    </div>
  );
}
