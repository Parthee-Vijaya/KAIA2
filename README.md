# K.A.I.A - Kalundborg AI Assistent Demo

En Perplexity-inspireret webapplikation til kommunale data med AI-lignende svar, grafer og analyser.

![K.A.I.A Demo](https://img.shields.io/badge/Status-Demo-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)

## 🎯 Features

### ✨ Core Funktionalitet
- **4 Kategorier** med 40 spørgsmål:
  - 💰 Budget og økonomi
  - 👥 Sociale tilbud, psykiatri og målgrupper
  - 📚 Reformer, lovgivning og politiske aftaler
  - 📊 Mønsteranalyse, budgetopfølgning og prognoser

- **AI-lignende Responses**:
  - Detaljerede markdown-formaterede svar
  - Interaktive grafer (Recharts)
  - 3-delt analyse framework:
    - 🔵 **Status nu** - Nuværende situation
    - 🟡 **Scenarier** - Mulige fremtider
    - 🟢 **Handlingsmuligheder** - Konkrete anbefalinger

- **Opfølgende Spørgsmål**: 3-5 kontekst-aware opfølgninger per svar

### 🎨 Design
- **Perplexity-inspireret UI** med dark mode
- **Glassmorphism** effekter
- **Smooth animations** (Framer Motion)
- **Responsive** design (mobile-first)

## 🚀 Quick Start

### Installation

```bash
# Clone eller naviger til projektet
cd /Users/pavi/Desktop/kaia-perplexity

# Installer alle dependencies (root + workspaces)
npm install

# Alternativt: Installer hver workspace separat
cd frontend && npm install
cd ../backend && npm install
```

### Kør Application

**Option 1: Kør begge servere samtidigt (anbefalet)**
```bash
# Fra root directory
npm run dev
```

**Option 2: Kør separat**
```bash
# Terminal 1 - Backend (port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (port 5173)
cd frontend
npm run dev
```

### Åbn i Browser
```
http://localhost:5173
```

## 📂 Projekt Struktur

```
kaia-perplexity/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   ├── components/       # React komponenter
│   │   │   ├── Navigation.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── CategorySection.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── ChartViewer.jsx
│   │   │   ├── AnalysisPanel.jsx
│   │   │   ├── FollowUpQuestions.jsx
│   │   │   └── LoadingIndicator.jsx
│   │   ├── data/             # Mock data
│   │   │   ├── categories.js      (4 kategorier, 40 spørgsmål)
│   │   │   ├── mockAnswers.js     (28+ detaljerede svar)
│   │   │   ├── mockCharts.js      (19 graf datasets)
│   │   │   ├── mockAnalysis.js    (8+ analyser)
│   │   │   └── mockFollowUp.js    (200+ opfølgende spørgsmål)
│   │   ├── App.jsx           # Hovedapplikation
│   │   ├── main.jsx
│   │   └── index.css         # Tailwind + custom CSS
│   ├── tailwind.config.js    # Custom colors & animations
│   └── vite.config.js        # Vite konfiguration
│
├── backend/                  # Node.js + Express API
│   ├── routes/
│   │   ├── categories.js     # GET /api/categories
│   │   ├── answer.js         # POST /api/answer
│   │   └── charts.js         # GET /api/charts/:id
│   ├── data/
│   │   └── mockDatabase.js   # Centralized mock data
│   └── server.js             # Express server
│
├── package.json              # Root workspace
└── README.md
```

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool (ultra-fast HMR)
- **Tailwind CSS 3.4** - Utility-first styling
- **Recharts 2.12** - Chart visualisering
- **Framer Motion 11** - Smooth animations
- **Zustand 4.5** - State management (optional, ikke brugt endnu)
- **Axios 1.7** - HTTP client (optional)

### Backend
- **Node.js 18+** - Runtime
- **Express 4** - Web framework
- **CORS** - Cross-origin support

## 📊 Mock Data

### Kategorier (4 stk)
Hver kategori indeholder 10 spørgsmål = **40 spørgsmål total**

### Svar (28+)
Detaljerede markdown-formaterede svar med:
- 200-400 ord
- Headers, bullet points, bold text
- Realistiske DKK beløb
- 2+ graf referencer
- 3 kilder per svar

### Grafer (19 stk)
- **7 Line charts** - Budget trends, prognoser
- **5 Bar charts** - Overskridelser, investeringer
- **3 Pie charts** - Fordelinger
- **4 Area charts** - Demografiske ændringer

### Analyser (8+)
Hver analyse indeholder:
- **Status nu** - 3 bullet points
- **Scenarier** - 3 scenarios (best/likely/worst)
- **Handlingsmuligheder** - 5 actionable items

### Opfølgende Spørgsmål (200+)
3-5 kontekst-aware opfølgninger per hovedspørgsmål

## 🎨 Design System

### Color Palette
```css
--kaia-dark: #0A0A0A        /* Background */
--kaia-card: rgba(255,255,255,0.05)  /* Glass cards */
--kaia-border: rgba(255,255,255,0.1) /* Borders */
--kaia-blue: #3B82F6        /* Accent color */
--kaia-text: #E5E7EB        /* Text color */
```

### Custom CSS Classes
- `.glass-card` - Glassmorphic effect
- `.smooth-transition` - 300ms transitions
- `.btn-primary` / `.btn-secondary` - Buttons
- `.chat-bubble-user` / `.chat-bubble-ai` - Message bubbles
- `.chip` - Follow-up question chips
- `.analysis-panel` - Analysis sections

### Animations
- Fade in/out
- Slide up
- Expand/collapse (Framer Motion)
- Typing indicator
- Pulse effect

## 📝 Usage Examples

### Klik på et Spørgsmål
1. Vælg en kategori (Budget og økonomi)
2. Klik på et spørgsmål
3. Se AI-svar med grafer og analyse
4. Klik på opfølgende spørgsmål for mere info

### Brug Search Bar
1. Skriv et spørgsmål i "spørg mig..." feltet
2. Tryk Enter
3. Se generisk svar med kategori links

### Tilbage til Kategorier
Klik på "← Tilbage til kategorier" knappen i bunden

## 🔧 Development

### Tilføj Nye Spørgsmål
1. Åbn `frontend/src/data/categories.js`
2. Tilføj spørgsmål til relevant kategori
3. Tilføj svar i `mockAnswers.js`
4. Tilføj analyse i `mockAnalysis.js`
5. Tilføj opfølgende spørgsmål i `mockFollowUp.js`

### Tilføj Nye Grafer
1. Åbn `frontend/src/data/mockCharts.js`
2. Tilføj ny chart configuration:
```javascript
'new-chart-id': {
  type: 'line',
  title: 'Chart Titel',
  data: [{ name: 'Jan', value: 100 }, ...],
  xKey: 'name',
  dataKey: 'value',
  color: '#3B82F6',
}
```
3. Reference chart ID i `mockAnswers.js`

### Lav Ny Komponent
1. Opret fil i `frontend/src/components/`
2. Brug Tailwind + custom CSS classes
3. Export component i `components/index.js`
4. Import i `App.jsx`

## 🚢 Deployment

### Build for Production
```bash
# Frontend
cd frontend
npm run build

# Output: frontend/dist/

# Backend
# Node.js apps køres direkte, ingen build nødvendig
```

### Environment Variables (optional)
```bash
# frontend/.env
VITE_API_URL=http://localhost:5000

# backend/.env
PORT=5000
NODE_ENV=production
```

## 🐛 Troubleshooting

### Port Allerede i Brug
```bash
# Find proces på port 5173
lsof -ti:5173 | xargs kill

# Find proces på port 5000
lsof -ti:5000 | xargs kill
```

### NPM Workspace Konflikter
```bash
# Clean install
npm run clean
npm install
```

### Grafer Vises Ikke
Tjek at Recharts er installeret:
```bash
cd frontend
npm ls recharts
```

## 📚 API Documentation

### GET /api/categories
Hent alle kategorier med spørgsmål

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "budget",
      "name": "Budget og økonomi",
      "icon": "💰",
      "questions": [...]
    }
  ]
}
```

### POST /api/answer
Hent svar på spørgsmål

**Request:**
```json
{
  "questionId": "q1"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "question": {...},
    "answer": "...",
    "charts": [...],
    "sources": [...],
    "analysis": {...},
    "followUp": [...]
  }
}
```

## 👨‍💻 Credits

**Udviklet af:** Claude Code
**Framework:** React + Vite
**Styling:** Tailwind CSS
**Charts:** Recharts
**Animations:** Framer Motion

## 📄 License

Dette er et demo projekt til Kalundborg Kommune.

---

**Enjoy coding! 🚀**
