import React from 'react';

export default function NccnTable() {
  return (
    <div className="bg-white border-2 border-slate-900 overflow-hidden shadow-sm text-[11px] sm:text-xs">
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
      <div className="text-center py-4 bg-white">
        <h4 className="font-bold text-black text-sm uppercase">Principles of Biomarker Testing</h4>
        <h5 className="font-bold text-black uppercase">HER2 Testing by Validated Immunohistochemistry (IHC) Assay</h5>
        <p className="font-bold text-black mt-1">For HER2 (ERBB2) testing validated by dual-probe ISH assay, see <a href="#" className="text-[#0077b6] underline">BINV-A 3 of 4</a>.</p>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] md:min-w-full border-collapse border-y-2 border-slate-900 text-black">
          <thead className="bg-[#e2e8f0]">
            <tr>
              <th className="border border-slate-900 p-2 text-left font-bold w-[12%]">Result Category</th>
              <th className="border border-slate-900 p-2 text-left font-bold w-[20%]">Score/Pattern</th>
              <th className="border border-slate-900 p-2 text-left font-bold w-[35%]">Criteria</th>
              <th className="border border-slate-900 p-2 text-left font-bold w-[33%]">Clinical Relevance</th>
            </tr>
          </thead>
          <tbody className="bg-white align-top">
            {/* Row 1: Negative (0) */}
            <tr>
              <td className="border border-slate-900 p-2">Negative<sup>b</sup></td>
              <td className="border border-slate-900 p-2">0/absent membrane staining</td>
              <td className="border border-slate-900 p-2">No staining observed</td>
              <td className="border border-slate-900 p-2">
                <div>HER2 protein not detected in sample</div>
                <div>Not included in DESTINY-Breast04 (DB-04) and DESTINY-Breast06 (DB-06) trials</div>
                <div>Considered &quot;HER2 Null&quot;</div>
              </td>
            </tr>
            {/* Row 2: Negative (0+) */}
            <tr>
              <td className="border border-slate-900 p-2">Negative</td>
              <td className="border border-slate-900 p-2">0+/with membrane staining</td>
              <td className="border border-slate-900 p-2">Membrane staining that is incomplete and is faint/barely perceptible and within ≤10% of tumor cells</td>
              <td className="border border-slate-900 p-2">
                <div>Treat as HER2-negative disease</div>
                <div>Considered &quot;HER2 Ultralow&quot; in DB-06</div>
              </td>
            </tr>
            {/* Row 3: Negative (1+) */}
            <tr>
              <td className="border border-slate-900 p-2">Negative</td>
              <td className="border border-slate-900 p-2">1+</td>
              <td className="border border-slate-900 p-2">Incomplete membrane staining that is faint/barely perceptible and within &gt;10% of tumor cells</td>
              <td className="border border-slate-900 p-2">
                <div>Treat as HER2-negative disease</div>
                <div>Considered &quot;HER2 Low&quot; in DB-04/-06</div>
              </td>
            </tr>
            {/* Row 4: Equivocal (2+) */}
            <tr>
              <td className="border border-slate-900 p-2">Equivocal</td>
              <td className="border border-slate-900 p-2">2+</td>
              <td className="border border-slate-900 p-2">
                <div>Weak to moderate complete membrane staining in &gt;10% of tumor cells<sup>c</sup></div>
                <div className="my-1">or</div>
                <div>Complete membrane staining that is intense but within ≤10% of tumor cells<sup>c,d</sup></div>
              </td>
              <td className="border border-slate-900 p-2">
                <div>Reflex to in situ hybridization (ISH) testing to determine if HER2 (ERBB2) gene amplification present (see <a href="#" className="text-[#0077b6] underline">BINV-A 3 of 4</a>)</div>
                <div>If ISH+ : HER2 (ERBB2) positive</div>
                <div>If ISH- : HER2 (ERBB2) negative (considered &quot;HER2 Low&quot; in DB-04/-06)</div>
              </td>
            </tr>
            {/* Row 5: Positive (3+) */}
            <tr>
              <td className="border border-slate-900 p-2">Positive</td>
              <td className="border border-slate-900 p-2">3+</td>
              <td className="border border-slate-900 p-2">Complete membrane staining that is intense and &gt;10% of tumor cells<sup>d</sup></td>
              <td className="border border-slate-900 p-2">
                <div>HER2 protein overexpression present</div>
                <div>Treat as HER2-positive disease</div>
                <div>Eligible for various HER2-targeted treatments</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footnotes Area */}
      <div className="p-3 bg-white text-[10px] sm:text-[11px] space-y-1 text-black">
        <p><sup>b</sup> The distinction between HER2 (ERBB2) IHC 0/absent membrane staining, IHC 0+/with membrane staining (faint, partial membrane staining in ≤10%), IHC 1+, or 2+/ISH negative results (on primary or metastatic samples) is currently clinically relevant since patients with metastatic disease may be eligible for treatment targeting non-amplified levels of HER2 expression.</p>
        <p><sup>c</sup> Additional less common staining patterns such as moderate to intense but incomplete membrane staining (basolateral staining often seen in micropapillary cancers) are also categorized as having a score of 2+. Equivocal 2+ results should reflex to testing to determine final HER2 status (same specimen using ISH) or order a new test (new specimen if available, using IHC or ISH).</p>
        <p><sup>d</sup> Readily appreciated using a low-power objective and observed within a homogeneous and contiguous population of invasive tumor cells.</p>
      </div>

      {/* Footer Details */}
      <div className="flex justify-between items-end p-3 pt-0 bg-white">
        <div className="border border-black p-1 px-2 font-bold text-black text-[10px] self-start inline-block">
          Note: All recommendations are category 2A unless otherwise indicated.
        </div>
        <div className="text-right font-bold text-black text-xs sm:text-sm">
          BINV-A<br/>2 OF 4
        </div>
      </div>
      
      {/* Copyright */}
      <div className="p-3 pt-1 bg-white text-[8px] text-slate-500 border-t border-slate-200">
        Version 2.2026, 02/27/26 © 2026 National Comprehensive Cancer Network® (NCCN®), All rights reserved. NCCN Guidelines® and this illustration may not be reproduced in any form without the express written permission of NCCN.
      </div>
    </div>
  );
}
