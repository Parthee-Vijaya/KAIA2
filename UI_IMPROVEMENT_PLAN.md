# 🎨 K.A.I.A UI Forbedringsplan - Perplexity Style

**Mål:** Gøre UI'en mere lækker og optimere hvordan svar vises, så det ligner Perplexity's polerede design.

---

## 📋 Oversigt over Forbedringer

### **Fase 1: Markdown & Typography** ⭐ Høj prioritet
### **Fase 2: Chat Layout & Spacing** ⭐ Høj prioritet  
### **Fase 3: Kilder & Citations** ⭐ Medium prioritet
### **Fase 4: Grafer Integration** ⭐ Medium prioritet
### **Fase 5: Animationer & Micro-interactions** ⭐ Lav prioritet
### **Fase 6: Responsive & Mobile** ⭐ Medium prioritet

---

## 🔥 FASE 1: Markdown & Typography Forbedringer

### 1.1 Forbedret Markdown Parser
**Problem:** Nuværende markdown rendering er meget simpel (kun bold/italic)

**Løsning:**
- ✅ Installer `react-markdown` eller `marked` + `DOMPurify` for sikkerhed
- ✅ Support for:
  - Headers (H1-H6) med korrekt typography hierarchy
  - Links med hover effects
  - Lists (ul/ol) med bedre spacing
  - Code blocks med syntax highlighting (`react-syntax-highlighter`)
  - Blockquotes med elegant styling
  - Tables med glassmorphic design
  - Horizontal rules (dividers)

**Implementation:**
```jsx
// Ny komponent: MarkdownRenderer.jsx
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 mt-6" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3 mt-5" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-2 mt-4" {...props} />,
        p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />,
        li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
        code: ({node, inline, className, children, ...props}) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              className="rounded-lg my-4"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-kaia-card px-2 py-1 rounded text-sm" {...props}>
              {children}
            </code>
          );
        },
        blockquote: ({node, ...props}) => (
          <blockquote className="border-l-4 border-kaia-blue pl-4 italic my-4 text-gray-300" {...props} />
        ),
        a: ({node, ...props}) => (
          <a className="text-kaia-blue hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
        ),
        table: ({node, ...props}) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse" {...props} />
          </div>
        ),
        hr: ({node, ...props}) => <hr className="border-kaia-border my-6" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
```

### 1.2 Typography System
**Forbedringer:**
- ✅ Bedre line-height (1.7-1.8 for læsbarhed)
- ✅ Optimal font-size hierarchy
- ✅ Letter-spacing for headers
- ✅ Bedre paragraph spacing (mb-4 eller mb-6)

**CSS Updates:**
```css
.prose {
  @apply text-kaia-text;
  line-height: 1.75;
}

.prose h1 { @apply text-3xl font-bold mb-6 mt-8; }
.prose h2 { @apply text-2xl font-semibold mb-4 mt-6; }
.prose h3 { @apply text-xl font-semibold mb-3 mt-5; }
.prose p { @apply mb-4 leading-relaxed; }
.prose ul, .prose ol { @apply mb-4 space-y-2 ml-6; }
.prose li { @apply leading-relaxed; }
.prose strong { @apply font-semibold text-white; }
.prose em { @apply italic; }
.prose code { @apply bg-kaia-card px-2 py-1 rounded text-sm font-mono; }
.prose blockquote { @apply border-l-4 border-kaia-blue pl-4 italic my-4 text-gray-300; }
.prose a { @apply text-kaia-blue hover:underline; }
```

---

## 💬 FASE 2: Chat Layout & Spacing

### 2.1 Perplexity-style Chat Layout
**Problem:** Chat bubbles er ikke optimalt placeret og mangler Perplexity's polish

**Forbedringer:**
- ✅ Bedre max-width for chat container (max-w-4xl → max-w-5xl)
- ✅ Bedre spacing mellem messages (space-y-8)
- ✅ User messages: Right-aligned, kompakt design
- ✅ AI messages: Left-aligned, bredere med bedre padding
- ✅ Timestamp visning (optional, subtil)
- ✅ Copy button på AI messages (Perplexity feature)

**ChatMessage.jsx Updates:**
```jsx
// User message styling
<div className="flex justify-end mb-6">
  <div className="max-w-2xl">
    <div className="bg-kaia-blue text-white px-5 py-3 rounded-2xl rounded-tr-sm">
      {message.content}
    </div>
    <div className="text-xs text-gray-500 mt-1 text-right">
      {formatTime(message.timestamp)}
    </div>
  </div>
</div>

// AI message styling
<div className="flex justify-start mb-6">
  <div className="max-w-5xl w-full">
    <div className="glass-card px-6 py-5 rounded-2xl rounded-tl-sm">
      {/* Copy button */}
      <div className="flex justify-end mb-2">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyIcon />
        </button>
      </div>
      
      {/* Content */}
      <MarkdownRenderer content={message.content} />
      
      {/* Sources */}
      {message.sources && <SourcesList sources={message.sources} />}
    </div>
  </div>
</div>
```

### 2.2 Bedre Content Spacing
- ✅ Grafer: Margin top/bottom (my-6)
- ✅ Analysis panel: Margin top (mt-6)
- ✅ Follow-up questions: Margin top (mt-6)
- ✅ Sources: Margin top (mt-4)

### 2.3 Chat Container Improvements
- ✅ Sticky search bar når man scroller
- ✅ Smooth scroll til nyt svar
- ✅ Auto-scroll til bottom når nyt svar kommer

---

## 📚 FASE 3: Kilder & Citations

### 3.1 Perplexity-style Source Display
**Problem:** Kilder vises ikke elegant

**Løsning:**
- ✅ Inline citations i teksten: `[1]`, `[2]`, `[3]`
- ✅ Source list i bunden af AI message
- ✅ Clickable sources med hover effects
- ✅ Source icons (link icon, document icon)

**Ny komponent: SourcesList.jsx**
```jsx
const SourcesList = ({ sources }) => {
  if (!sources || sources.length === 0) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-kaia-border">
      <h5 className="text-sm font-semibold text-gray-400 mb-3">Kilder:</h5>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-kaia-card hover:bg-white/10 rounded-lg text-sm smooth-transition"
          >
            <LinkIcon className="w-4 h-4" />
            <span>{source.title || `Kilde ${index + 1}`}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
```

### 3.2 Citation Integration i Markdown
- ✅ Parse `[1]`, `[2]` i markdown og link til sources
- ✅ Hover tooltip med source preview

---

## 📊 FASE 4: Grafer Integration

### 4.1 Bedre Graf Styling
**Forbedringer:**
- ✅ Bedre spacing omkring grafer (my-6)
- ✅ Graf title styling (font-semibold, mb-4)
- ✅ Download button på grafer (optional)
- ✅ Fullscreen view (optional)
- ✅ Bedre tooltip design
- ✅ Graf container med glassmorphic border

**ChartViewer.jsx Updates:**
```jsx
<div className="chart-container my-6">
  {title && (
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-semibold text-kaia-text">{title}</h4>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-white/10 rounded-lg">
          <DownloadIcon />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-lg">
          <ExpandIcon />
        </button>
      </div>
    </div>
  )}
  <div className="glass-card p-4 rounded-xl">
    {renderChart()}
  </div>
</div>
```

### 4.2 Graf Animation
- ✅ Fade-in animation når graf vises
- ✅ Smooth data transitions

---

## ✨ FASE 5: Animationer & Micro-interactions

### 5.1 Typing Animation
**Problem:** Loading state er simpel

**Løsning:**
- ✅ Perplexity-style typing indicator (3 dots)
- ✅ Smooth fade-in når svar kommer
- ✅ Progressive reveal (optional - kan være for meget)

**LoadingIndicator.jsx Updates:**
```jsx
const LoadingIndicator = () => {
  return (
    <div className="flex justify-start mb-6">
      <div className="glass-card px-6 py-4 rounded-2xl rounded-tl-sm">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-kaia-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-kaia-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-kaia-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};
```

### 5.2 Hover Effects
- ✅ Copy button fade-in på hover
- ✅ Source links hover effects
- ✅ Follow-up questions hover scale
- ✅ Chart buttons hover effects

### 5.3 Smooth Transitions
- ✅ Message fade-in (allerede implementeret, men kan forbedres)
- ✅ Chart fade-in
- ✅ Analysis panel stagger animation

---

## 📱 FASE 6: Responsive & Mobile

### 6.1 Mobile Optimizations
- ✅ Bedre padding på mobile (px-4 → px-3)
- ✅ Chat bubbles: max-width 100% på mobile
- ✅ Grafer: Bedre mobile layout (scrollable)
- ✅ Analysis panel: Stack på mobile (grid-cols-1)
- ✅ Search bar: Full width på mobile

### 6.2 Touch Interactions
- ✅ Swipe gestures (optional)
- ✅ Better touch targets (min 44x44px)

---

## 🎨 Design System Forbedringer

### 7.1 Color Palette Updates
```css
/* Tilføj flere nuancer */
--kaia-blue-light: #60A5FA;
--kaia-blue-dark: #2563EB;
--kaia-gray-100: rgba(255, 255, 255, 0.1);
--kaia-gray-200: rgba(255, 255, 255, 0.2);
--kaia-success: #10B981;
--kaia-warning: #F59E0B;
--kaia-error: #EF4444;
```

### 7.2 Shadow System
```css
/* Tilføj subtle shadows */
.shadow-kaia-sm { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); }
.shadow-kaia-md { box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4); }
.shadow-kaia-lg { box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5); }
```

### 7.3 Border Radius Consistency
- ✅ Chat bubbles: rounded-2xl
- ✅ Cards: rounded-xl
- ✅ Buttons: rounded-lg
- ✅ Chips: rounded-full

---

## 📦 Nye Dependencies

```json
{
  "react-markdown": "^9.0.0",
  "remark-gfm": "^4.0.0", // GitHub Flavored Markdown
  "react-syntax-highlighter": "^15.5.0",
  "@types/react-syntax-highlighter": "^15.5.0",
  "rehype-raw": "^7.0.0" // For HTML in markdown
}
```

---

## 🚀 Implementation Rækkefølge

### **Sprint 1 (Høj prioritet):**
1. ✅ Installer markdown dependencies
2. ✅ Opret MarkdownRenderer komponent
3. ✅ Opdater ChatMessage til at bruge MarkdownRenderer
4. ✅ Forbedret typography CSS
5. ✅ Bedre chat layout & spacing

### **Sprint 2 (Medium prioritet):**
6. ✅ Opret SourcesList komponent
7. ✅ Integrer kilder i ChatMessage
8. ✅ Forbedret graf styling
9. ✅ Copy button funktionalitet

### **Sprint 3 (Lav prioritet):**
10. ✅ Animation forbedringer
11. ✅ Mobile optimizations
12. ✅ Micro-interactions

---

## 🎯 Success Metrics

- ✅ Markdown renderes korrekt med alle features
- ✅ Chat layout ligner Perplexity's polish
- ✅ Kilder vises elegant og er clickable
- ✅ Grafer er pænt integreret
- ✅ Smooth animations uden performance issues
- ✅ Mobile experience er optimal

---

## 📝 Noter

- **Performance:** Vær opmærksom på markdown parsing performance ved store tekster
- **Accessibility:** Sørg for ARIA labels og keyboard navigation
- **Testing:** Test med forskellige markdown inputs
- **Progressive Enhancement:** Start med basis funktionalitet, tilføj features gradvist

---

**Næste Step:** Start med Sprint 1 - Markdown & Typography forbedringer! 🚀

