import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * MarkdownRenderer - Full-featured markdown renderer with syntax highlighting
 * Supports: headers, lists, code blocks, blockquotes, tables, links, etc.
 */
const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headers
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900 first:mt-0" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-gray-900" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mb-3 mt-5 text-gray-900" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-semibold mb-2 mt-4 text-gray-900" {...props} />
          ),
          h5: ({ node, ...props }) => (
            <h5 className="text-base font-semibold mb-2 mt-3 text-gray-900" {...props} />
          ),
          h6: ({ node, ...props }) => (
            <h6 className="text-sm font-semibold mb-2 mt-3 text-gray-700" {...props} />
          ),

          // Paragraphs
          p: ({ node, ...props }) => (
            <p className="mb-4 leading-relaxed text-gray-700" {...props} />
          ),

          // Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4 text-gray-700" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 ml-4 text-gray-700" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed pl-2" {...props} />
          ),

          // Code blocks
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');

            return !inline && match ? (
              <div className="my-4 rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-lg"
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-kaia-blue"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-kaia-blue pl-4 italic my-4 text-gray-600 bg-gray-50 py-2 rounded-r"
              {...props}
            />
          ),

          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-kaia-blue hover:text-blue-600 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),

          // Tables
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-200 rounded-lg" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-50" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-2 text-left font-semibold text-gray-900 border border-gray-200" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-4 py-2 text-gray-700 border border-gray-200" {...props} />
          ),

          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr className="border-gray-200 my-6" {...props} />
          ),

          // Strong and emphasis
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-gray-900" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownRenderer;

