/**
 * PDF Generator for Tutorial Builder
 *
 * This script iterates through all folders, extracts .md files,
 * and converts them into a single PDF document.
 *
 * Usage: node PDFGenerator.js
 *
 * Dependencies:
 *   npm install marked puppeteer
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

// Configuration
const CONFIG = {
  rootDir: __dirname,
  outputFile: 'FullStackEngineeringGuide.pdf',
  excludeDirs: ['node_modules', '.git', '.vscode'],
  excludeFiles: ['README.md'], // Add any files to exclude
  pageBreakBetweenFiles: true,
};

// CSS Styles for the PDF
const getStyles = () => `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code&display=swap');

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 100%;
      margin: 0;
      padding: 40px 50px;
    }

    h1 {
      font-size: 28pt;
      font-weight: 700;
      color: #0f172a;
      margin-top: 0;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #3b82f6;
      page-break-after: avoid;
    }

    h2 {
      font-size: 20pt;
      font-weight: 600;
      color: #1e293b;
      margin-top: 30px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e2e8f0;
      page-break-after: avoid;
    }

    h3 {
      font-size: 14pt;
      font-weight: 600;
      color: #334155;
      margin-top: 25px;
      margin-bottom: 10px;
      page-break-after: avoid;
    }

    h4 {
      font-size: 12pt;
      font-weight: 600;
      color: #475569;
      margin-top: 20px;
      margin-bottom: 8px;
      page-break-after: avoid;
    }

    p {
      margin: 10px 0;
      text-align: justify;
    }

    a {
      color: #3b82f6;
      text-decoration: none;
    }

    ul, ol {
      margin: 10px 0;
      padding-left: 25px;
    }

    li {
      margin: 5px 0;
    }

    code {
      font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
      font-size: 9pt;
      background-color: #f1f5f9;
      padding: 2px 6px;
      border-radius: 4px;
      color: #e11d48;
    }

    pre {
      background-color: #1e293b;
      color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 9pt;
      line-height: 1.5;
      margin: 15px 0;
      page-break-inside: avoid;
    }

    pre code {
      background-color: transparent;
      color: inherit;
      padding: 0;
      font-size: inherit;
    }

    blockquote {
      border-left: 4px solid #3b82f6;
      margin: 15px 0;
      padding: 10px 20px;
      background-color: #f8fafc;
      color: #475569;
      font-style: italic;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      font-size: 10pt;
      page-break-inside: avoid;
    }

    th {
      background-color: #1e293b;
      color: white;
      font-weight: 600;
      text-align: left;
      padding: 12px 15px;
    }

    td {
      border: 1px solid #e2e8f0;
      padding: 10px 15px;
      vertical-align: top;
    }

    tr:nth-child(even) {
      background-color: #f8fafc;
    }

    hr {
      border: none;
      border-top: 2px solid #e2e8f0;
      margin: 30px 0;
    }

    .page-break {
      page-break-before: always;
    }

    .file-header {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      margin: 30px 0 20px 0;
      font-size: 9pt;
      font-weight: 500;
    }

    .toc {
      background-color: #f8fafc;
      padding: 20px 30px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .toc h2 {
      margin-top: 0;
      border-bottom: none;
    }

    .toc ul {
      list-style: none;
      padding-left: 0;
    }

    .toc li {
      padding: 5px 0;
      border-bottom: 1px solid #e2e8f0;
    }

    .toc li:last-child {
      border-bottom: none;
    }

    /* Checkbox styling for task lists */
    li input[type="checkbox"] {
      margin-right: 8px;
    }

    /* Diagram/ASCII art styling */
    pre:has(code:not([class])) {
      background-color: #f8fafc;
      color: #1e293b;
      border: 1px solid #e2e8f0;
    }
  </style>
`;

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  // Sort files to ensure consistent ordering
  files.sort((a, b) => {
    // Put introduction.md first
    if (a === 'introduction.md') return -1;
    if (b === 'introduction.md') return 1;
    // Then sort by name (numbers first due to folder naming)
    return a.localeCompare(b, undefined, { numeric: true });
  });

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip excluded directories
      if (CONFIG.excludeDirs.includes(file)) continue;

      // Recursively search subdirectories
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      // Skip excluded files
      if (CONFIG.excludeFiles.includes(file)) continue;

      fileList.push(filePath);
    }
  }

  return fileList;
}

/**
 * Read and process a markdown file
 */
function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(CONFIG.rootDir, filePath);

  return {
    path: relativePath,
    content: content,
  };
}

/**
 * Generate table of contents from files
 */
function generateTableOfContents(files) {
  let toc = '<div class="toc">\n<h2>Table of Contents</h2>\n<ul>\n';

  let currentSection = '';

  for (const file of files) {
    const pathParts = file.path.split(path.sep);
    const section = pathParts[0];

    // Add section header if changed
    if (section !== currentSection && pathParts.length > 1) {
      if (currentSection !== '') {
        toc += '</ul></li>\n';
      }
      currentSection = section;
      toc += `<li><strong>${section.replace(/-/g, ' ')}</strong><ul>\n`;
    }

    // Extract title from first H1 in content
    const titleMatch = file.content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(file.path, '.md');

    toc += `<li>${title}</li>\n`;
  }

  if (currentSection !== '') {
    toc += '</ul></li>\n';
  }

  toc += '</ul>\n</div>\n';

  return toc;
}

/**
 * Generate cover page HTML
 */
function generateCoverPage() {
  return `
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: white;
      margin: -40px -50px;
      padding: 50px;
    ">
      <h1 style="
        font-size: 42pt;
        border: none;
        color: white;
        margin-bottom: 20px;
      ">Full Stack Engineering</h1>
      <h2 style="
        font-size: 24pt;
        border: none;
        color: #94a3b8;
        font-weight: 400;
        margin-top: 0;
      ">Complete Learning Guide</h2>
      <div style="
        margin-top: 40px;
        padding: 20px 40px;
        background: rgba(59, 130, 246, 0.2);
        border-radius: 12px;
        border: 1px solid rgba(59, 130, 246, 0.3);
      ">
        <p style="color: #cbd5e1; margin: 0;">
          Development • Design • Product Management
        </p>
      </div>
      <p style="
        position: absolute;
        bottom: 50px;
        color: #64748b;
        font-size: 10pt;
      ">Generated on ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</p>
    </div>
    <div class="page-break"></div>
  `;
}

/**
 * Convert markdown files to HTML
 */
function convertToHTML(files) {
  // Configure marked options
  marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
  });

  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Full Stack Engineering Guide</title>
      ${getStyles()}
    </head>
    <body>
  `;

  // Add cover page
  html += generateCoverPage();

  // Add table of contents
  html += generateTableOfContents(files);
  html += '<div class="page-break"></div>\n';

  // Process each file
  let currentMainSection = '';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const pathParts = file.path.split(path.sep);
    const mainSection = pathParts[0];

    // Add page break before new main sections (1-Foundations, 2-Frontend, etc.)
    if (mainSection !== currentMainSection && CONFIG.pageBreakBetweenFiles) {
      if (currentMainSection !== '') {
        html += '<div class="page-break"></div>\n';
      }
      currentMainSection = mainSection;
    } else if (i > 0 && CONFIG.pageBreakBetweenFiles) {
      // Add page break between files within same section
      html += '<div class="page-break"></div>\n';
    }

    // Add file path header for non-root files
    if (pathParts.length > 1) {
      html += `<div class="file-header">📁 ${file.path}</div>\n`;
    }

    // Convert markdown to HTML
    const contentHtml = marked.parse(file.content);
    html += contentHtml + '\n';
  }

  html += `
    </body>
    </html>
  `;

  return html;
}

/**
 * Generate PDF from HTML using Puppeteer
 */
async function generatePDF(html, outputPath) {
  console.log('🚀 Launching browser...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log('📄 Rendering HTML...');
  await page.setContent(html, {
    waitUntil: 'networkidle0',
  });

  console.log('📑 Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm',
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 9px; color: #94a3b8; width: 100%; text-align: center; padding: 5px 0;">
        Full Stack Engineering Guide
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 9px; color: #94a3b8; width: 100%; text-align: center; padding: 5px 0;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>
    `,
  });

  await browser.close();

  return outputPath;
}

/**
 * Main execution
 */
async function main() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║       PDF Generator for Tutorial Builder    ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');

  try {
    // Step 1: Find all markdown files
    console.log('🔍 Scanning for markdown files...');
    const markdownFiles = findMarkdownFiles(CONFIG.rootDir);
    console.log(`   Found ${markdownFiles.length} markdown files\n`);

    if (markdownFiles.length === 0) {
      console.log('⚠️  No markdown files found. Exiting.');
      return;
    }

    // Step 2: Process files
    console.log('📖 Processing files...');
    const processedFiles = markdownFiles.map(filePath => {
      const file = processMarkdownFile(filePath);
      console.log(`   ✓ ${file.path}`);
      return file;
    });
    console.log('');

    // Step 3: Convert to HTML
    console.log('🔄 Converting to HTML...');
    const html = convertToHTML(processedFiles);

    // Optionally save HTML for debugging
    const htmlOutputPath = path.join(CONFIG.rootDir, 'output.html');
    fs.writeFileSync(htmlOutputPath, html);
    console.log(`   ✓ HTML saved to ${htmlOutputPath}\n`);

    // Step 4: Generate PDF
    const pdfOutputPath = path.join(CONFIG.rootDir, CONFIG.outputFile);
    await generatePDF(html, pdfOutputPath);

    // Get file size
    const stats = fs.statSync(pdfOutputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log('');
    console.log('╔════════════════════════════════════════════╗');
    console.log('║              ✅ PDF Generated!              ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log(`   📁 Output: ${pdfOutputPath}`);
    console.log(`   📊 Size: ${fileSizeInMB} MB`);
    console.log(`   📄 Files processed: ${processedFiles.length}`);
    console.log('');

  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
main();
