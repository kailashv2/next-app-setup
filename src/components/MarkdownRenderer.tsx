"use client";

import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderMarkdown = (text: string) => {
    // Split content into lines for processing
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let tableRows: string[] = [];
    let inTable = false;

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside mb-4 space-y-1">
            {currentList.map((item, idx) => (
              <li key={idx} className="text-gray-700">{processInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const [header, ...rows] = tableRows;
        const headerCells = header.split('|').map(cell => cell.trim()).filter(cell => cell);
        
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {headerCells.map((cell, idx) => (
                    <th key={idx} className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                      {processInlineMarkdown(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.filter(row => !row.includes('---')).map((row, rowIdx) => {
                  const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell);
                  return (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {cells.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                          {processInlineMarkdown(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const processInlineMarkdown = (text: string) => {
      // Process inline markdown
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
        .replace(/₹/g, '₹');
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={elements.length} className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm">{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          // Start code block
          flushList();
          flushTable();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Handle tables
      if (trimmedLine.includes('|') && trimmedLine.split('|').length > 2) {
        if (!inTable) {
          flushList();
          inTable = true;
        }
        tableRows.push(trimmedLine);
        return;
      } else if (inTable) {
        flushTable();
      }

      // Handle headers
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={elements.length} className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
            {trimmedLine.substring(2)}
          </h1>
        );
        return;
      }

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-semibold mb-4 mt-8 text-gray-800">
            {trimmedLine.substring(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl font-medium mb-3 mt-6 text-gray-700">
            {trimmedLine.substring(4)}
          </h3>
        );
        return;
      }

      if (trimmedLine.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={elements.length} className="text-lg font-medium mb-2 mt-4 text-gray-700">
            {trimmedLine.substring(5)}
          </h4>
        );
        return;
      }

      // Handle list items
      if (trimmedLine.startsWith('- ')) {
        currentList.push(trimmedLine.substring(2));
        return;
      }

      // Handle regular paragraphs
      if (trimmedLine) {
        flushList();
        elements.push(
          <p 
            key={elements.length} 
            className="mb-4 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processInlineMarkdown(trimmedLine) }}
          />
        );
      } else {
        flushList();
      }
    });

    // Flush any remaining content
    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="prose prose-gray max-w-none">
      {renderMarkdown(content)}
    </div>
  );
};
