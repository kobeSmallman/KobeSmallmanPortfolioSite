'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
  description?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ title, language, code, description }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const formatCode = (code: string) => {
    return code.split('\n').map((line, index) => (
      <div key={index} className="flex">
        <span className="text-slate-500 text-sm mr-4 select-none w-8 text-right">
          {index + 1}
        </span>
        <span className="text-slate-300">{line}</span>
      </div>
    ));
  };

  return (
    <motion.div 
      className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div>
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-sm text-slate-400">{language}</p>
          </div>
        </div>
        
        <motion.button
          onClick={copyToClipboard}
          className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </motion.button>
      </div>

      {/* Code Content */}
      <div className="p-4">
        {description && (
          <p className="text-slate-400 text-sm mb-4 italic">{description}</p>
        )}
        <div className="overflow-x-auto">
          <pre className="text-sm font-mono leading-relaxed">
            {formatCode(code)}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
