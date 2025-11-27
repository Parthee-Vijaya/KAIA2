# ✅ UI Forbedrings Checkliste

## 🎯 Hvad skal forbedres (før vs. efter)

### **FASE 1: Markdown & Typography** 

#### ❌ Nuværende Problemer:
- [ ] Simpel markdown (kun bold/italic)
- [ ] Ingen header styling
- [ ] Ingen code blocks
- [ ] Ingen blockquotes
- [ ] Ingen tables
- [ ] Dårlig line-height og spacing

#### ✅ Efter Forbedring:
- [ ] Fuld markdown support (headers, lists, code, etc.)
- [ ] Korrekt typography hierarchy
- [ ] Syntax highlighting i code blocks
- [ ] Elegant blockquote styling
- [ ] Pæne tables
- [ ] Optimal læsbarhed (line-height 1.75)

---

### **FASE 2: Chat Layout**

#### ❌ Nuværende Problemer:
- [ ] Chat bubbles ikke optimalt placeret
- [ ] Mangler copy button
- [ ] Ingen timestamps
- [ ] Dårlig spacing mellem messages
- [ ] Max-width for smal

#### ✅ Efter Forbedring:
- [ ] Perplexity-style chat layout
- [ ] Copy button på AI messages
- [ ] Subtile timestamps
- [ ] Bedre spacing (space-y-8)
- [ ] Optimal max-width (max-w-5xl)

---

### **FASE 3: Kilder & Citations**

#### ❌ Nuværende Problemer:
- [ ] Kilder vises ikke elegant
- [ ] Ingen inline citations
- [ ] Ingen clickable sources
- [ ] Mangler source icons

#### ✅ Efter Forbedring:
- [ ] Inline citations [1], [2], [3]
- [ ] Elegant source list i bunden
- [ ] Clickable sources med hover
- [ ] Source icons (link/document)

---

### **FASE 4: Grafer**

#### ❌ Nuværende Problemer:
- [ ] Dårlig spacing omkring grafer
- [ ] Ingen download/expand buttons
- [ ] Simpel tooltip design
- [ ] Mangler graf container styling

#### ✅ Efter Forbedring:
- [ ] Bedre spacing (my-6)
- [ ] Download og expand buttons
- [ ] Forbedret tooltip design
- [ ] Glassmorphic graf container

---

### **FASE 5: Animationer**

#### ❌ Nuværende Problemer:
- [ ] Simpel loading indicator
- [ ] Mangler hover effects
- [ ] Ingen micro-interactions

#### ✅ Efter Forbedring:
- [ ] Perplexity-style typing dots
- [ ] Copy button fade-in på hover
- [ ] Smooth transitions
- [ ] Micro-interactions

---

### **FASE 6: Mobile**

#### ❌ Nuværende Problemer:
- [ ] Ikke optimalt på mobile
- [ ] Dårlig touch targets
- [ ] Grafer kan være for brede

#### ✅ Efter Forbedring:
- [ ] Optimal mobile layout
- [ ] Bedre touch targets (44x44px)
- [ ] Scrollable grafer på mobile

---

## 📊 Sammenligning: Før vs. Efter

### **Markdown Rendering**
```
FØR:  **Bold text** og *italic* → Simpel HTML
EFTER: Fuld markdown med headers, code blocks, tables, etc.
```

### **Chat Layout**
```
FØR:  Basic chat bubbles, ingen copy button
EFTER: Perplexity-style med copy, timestamps, bedre spacing
```

### **Kilder**
```
FØR:  Ingen kilder vises (eller simpel liste)
EFTER: Inline citations + elegant source list med icons
```

### **Grafer**
```
FØR:  Basic graf med simpel tooltip
EFTER: Graf med download/expand, bedre styling
```

### **Loading State**
```
FØR:  Simpel loading text
EFTER: Perplexity-style 3 dots animation
```

---

## 🚀 Quick Wins (Kan implementeres hurtigt)

1. ✅ **Typography CSS** - 15 min
2. ✅ **Bedre spacing** - 10 min  
3. ✅ **Copy button** - 20 min
4. ✅ **Source list styling** - 30 min
5. ✅ **Graf spacing** - 10 min

**Total: ~1.5 time for quick wins**

---

## 📝 Noter

- Start med Fase 1 (Markdown) - det giver størst visuel forbedring
- Test med eksisterende mock data
- Sørg for at bevare dark mode styling
- Performance: Test med store tekster

