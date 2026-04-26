const fs = require('fs');
const path = require('path');

const pages = [
  'app/page.tsx',
  'app/algorithm/page.tsx',
  'app/validation/page.tsx',
  'app/demo/page.tsx',
  'app/impact/page.tsx',
  'app/about/page.tsx'
];

for (const p of pages) {
  const filePath = path.join(process.cwd(), p);
  console.log("Checking", filePath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add "use client" if not present
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      content = '"use client";\n' + content;
    }
    
    // Add import for PageTransition
    if (!content.includes('PageTransition')) {
      const importMatches = [...content.matchAll(/^import .*;$/gm)];
      let lastImportIndex = content.indexOf('\n') + 1; // Default to after first line
      if (importMatches.length > 0) {
        const lastMatch = importMatches[importMatches.length - 1];
        lastImportIndex = lastMatch.index + lastMatch[0].length;
      }
      
      const relPath = p === 'app/page.tsx' ? './components/PageTransition' : '../components/PageTransition';
      content = content.slice(0, lastImportIndex) + `\nimport PageTransition from '${relPath}';\n` + content.slice(lastImportIndex);
      
      // We will just do a simple replacement for the return pattern
      content = content.replace(/return\s*\(\s*<((?:div|main|Fragment|>)[^>]*)>/, `return (\n    <PageTransition>\n      <$1>`);
      
      // Close the PageTransition just before the last `);\n}`
      content = content.replace(/(<\/[^>]+>)\s*\);\s*}\s*$/g, "$1\n    </PageTransition>\n  );\n}");
      
      fs.writeFileSync(filePath, content);
      console.log('Processed', p);
    }
  }
}
