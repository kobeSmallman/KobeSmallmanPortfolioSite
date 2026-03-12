'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
  description?: string;
}

/** Lightweight regex-based syntax highlighter — no external library. */
function highlightLine(line: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  // Regex for tokens we care about (order matters: comments first, then strings, then the rest)
  const tokenRe =
    /(\/\/.*$|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:function|const|let|var|return|if|else|for|while|class|import|export|async|await|from|new|this|throw|try|catch|typeof|interface|type|extends|implements|public|private|protected|static|readonly|void|null|undefined|true|false|def|self|print|with|as|raise|except|finally|in|not|and|or|is|elif|lambda|yield|namespace|using|struct|virtual|override|template|include|ifdef|ifndef|endif|define|pragma)\b)|(\b\d+\.?\d*\b)|(\b[A-Z][A-Za-z0-9_]*\b)/g;

  let match: RegExpExecArray | null;
  let lastIndex = 0;

  while ((match = tokenRe.exec(remaining)) !== null) {
    // Push plain text before this match
    if (match.index > lastIndex) {
      nodes.push(<span key={key++} className="text-slate-300">{remaining.slice(lastIndex, match.index)}</span>);
    }

    if (match[1]) {
      // Comment
      nodes.push(<span key={key++} style={{ color: '#546e7a', fontStyle: 'italic' }}>{match[0]}</span>);
    } else if (match[2]) {
      // String
      nodes.push(<span key={key++} style={{ color: '#c3e88d' }}>{match[0]}</span>);
    } else if (match[3]) {
      // Keyword
      nodes.push(<span key={key++} style={{ color: '#c792ea' }}>{match[0]}</span>);
    } else if (match[4]) {
      // Number
      nodes.push(<span key={key++} style={{ color: '#f78c6c' }}>{match[0]}</span>);
    } else if (match[5]) {
      // Type (PascalCase word)
      nodes.push(<span key={key++} style={{ color: '#ffcb6b' }}>{match[0]}</span>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Push any remaining plain text
  if (lastIndex < remaining.length) {
    nodes.push(<span key={key++} className="text-slate-300">{remaining.slice(lastIndex)}</span>);
  }

  // If nothing matched, return the whole line as plain text
  if (nodes.length === 0) {
    return [<span key={0} className="text-slate-300">{line}</span>];
  }

  return nodes;
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

  const highlighted = useMemo(() => {
    return code.split('\n').map((line, index) => (
      <div key={index} className="flex">
        <span className="text-slate-500 text-sm mr-4 select-none w-8 text-right shrink-0">
          {index + 1}
        </span>
        <span className="text-sm">{highlightLine(line)}</span>
      </div>
    ));
  }, [code]);

  return (
    <motion.div
      className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-white font-medium">{title}</h3>
            <span className="px-2 py-0.5 text-xs rounded bg-slate-600 text-slate-300 uppercase tracking-wider font-mono">
              {language}
            </span>
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
            {highlighted}
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
