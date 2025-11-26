# K.A.I.A Perplexity Demo - React Components

All components for the K.A.I.A Perplexity demo application.

## Component Overview

### 1. **Navigation.jsx**
Top navigation bar with K.A.I.A branding and role indicator.

**Props:**
- `role` (string, default: 'intern') - User role to display
- `onMenuClick` (function) - Menu button click handler
- `onSendClick` (function) - Send button click handler

**Features:**
- Glassmorphic dark theme
- K.A.I.A logo with gradient text
- Role indicator with animated blue dot
- Menu and send icons

**Usage:**
```jsx
import { Navigation } from './components';

<Navigation
  role="intern"
  onMenuClick={() => console.log('Menu clicked')}
  onSendClick={() => console.log('Send clicked')}
/>
```

---

### 2. **SearchBar.jsx**
Chat input component with submit functionality.

**Props:**
- `onSubmit` (function, required) - Called when user submits a question
- `placeholder` (string, default: 'spørg mig...') - Input placeholder text

**Features:**
- Glass card styling
- Enter key to submit (Shift+Enter for new line)
- Disabled state when input is empty
- Auto-clear after submit

**Usage:**
```jsx
import { SearchBar } from './components';

<SearchBar
  placeholder="spørg mig..."
  onSubmit={(question) => console.log('Question:', question)}
/>
```

---

### 3. **CategorySection.jsx**
Expandable category section with questions.

**Props:**
- `category` (object, required) - Category object with:
  - `id` (string) - Unique identifier
  - `name` (string) - Category name
  - `icon` (string) - Emoji icon
  - `questions` (array of strings) - List of questions
- `onQuestionClick` (function, required) - Called when question is clicked

**Features:**
- Animated expand/collapse (framer-motion)
- Rotating chevron icon
- Smooth staggered question animations
- Hover effects

**Usage:**
```jsx
import { CategorySection } from './components';
import { categories } from '../data/categories';

<CategorySection
  category={categories[0]}
  onQuestionClick={(question) => console.log('Question:', question)}
/>
```

---

### 4. **ChatMessage.jsx**
User/AI message bubble with rich content rendering.

**Props:**
- `message` (object, required) - Message object with:
  - `role` ('user' | 'ai') - Message sender
  - `content` (string) - Message text
  - `charts` (array, optional) - Chart data objects
  - `analysis` (object, optional) - Analysis panel data
  - `followUp` (array of strings, optional) - Follow-up questions
- `onFollowUpClick` (function) - Follow-up question click handler

**Features:**
- User messages: blue bubble, right-aligned
- AI messages: glass card with markdown rendering
- Renders ChartViewer components for charts
- Renders AnalysisPanel for analysis
- Renders FollowUpQuestions for follow-up
- Simple markdown support (bold, italic)

**Usage:**
```jsx
import { ChatMessage } from './components';

<ChatMessage
  message={{
    role: 'ai',
    content: 'Her er budgetanalysen...',
    charts: [chartData],
    analysis: analysisData,
    followUp: ['Hvordan..?', 'Hvad sker der..?']
  }}
  onFollowUpClick={(q) => console.log('Follow-up:', q)}
/>
```

---

### 5. **ChartViewer.jsx**
Chart rendering component using Recharts.

**Props:**
- `chartData` (object, required) - Chart configuration with:
  - `type` ('line' | 'bar' | 'pie' | 'area') - Chart type
  - `title` (string, optional) - Chart title
  - `data` (array) - Chart data
  - `config` (object) - Chart configuration

**Features:**
- Supports 4 chart types: line, bar, pie, area
- Responsive container (100% width, 300px height)
- Dark theme with custom colors
- Custom tooltip with glassmorphic styling
- Legend and grid

**Usage:**
```jsx
import { ChartViewer } from './components';
import { mockCharts } from '../data/mockCharts';

<ChartViewer chartData={mockCharts['budget-trend-2024']} />
```

---

### 6. **AnalysisPanel.jsx**
Three-column analysis display.

**Props:**
- `analysis` (object, optional) - Analysis data with:
  - `statusNow` (string | array) - Current status
  - `scenarios` (string | array) - Future scenarios
  - `actions` (string | array) - Action recommendations

**Features:**
- Three sections: Status nu (blue), Scenarier (yellow), Handlingsmuligheder (green)
- Responsive grid (stacks on mobile)
- Animated entrance with stagger
- Icon indicators

**Usage:**
```jsx
import { AnalysisPanel } from './components';

<AnalysisPanel
  analysis={{
    statusNow: ['Status punkt 1', 'Status punkt 2'],
    scenarios: ['Scenarie 1', 'Scenarie 2'],
    actions: ['Handling 1', 'Handling 2']
  }}
/>
```

---

### 7. **FollowUpQuestions.jsx**
Horizontal scrollable question chips.

**Props:**
- `questions` (array of strings, required) - Follow-up questions
- `onQuestionClick` (function, required) - Question click handler

**Features:**
- Horizontal scroll with custom scrollbar
- Chip hover effects
- Animated entrance with stagger
- Danish label: "Opfølgende spørgsmål:"

**Usage:**
```jsx
import { FollowUpQuestions } from './components';

<FollowUpQuestions
  questions={['Hvordan...?', 'Hvad sker der...?']}
  onQuestionClick={(q) => console.log('Question:', q)}
/>
```

---

### 8. **LoadingIndicator.jsx**
Typing/loading animation.

**Props:** None

**Features:**
- Three pulsing dots animation
- "K.A.I.A tænker..." text
- Glass card styling
- Smooth fade in/out with framer-motion

**Usage:**
```jsx
import { LoadingIndicator } from './components';

{isLoading && <LoadingIndicator />}
```

---

## Styling

All components use:
- **Tailwind CSS** utility classes
- **Custom CSS classes** from `index.css`:
  - `.glass-card` - Glassmorphic card
  - `.smooth-transition` - Smooth transitions
  - `.chat-bubble-user` - User message bubble
  - `.chat-bubble-ai` - AI message bubble
  - `.chip` - Question chip
  - `.analysis-panel` - Analysis container
  - `.chart-container` - Chart container

## Dependencies

- `react` - Core React library
- `prop-types` - Runtime type checking
- `framer-motion` - Animations
- `recharts` - Charts
- `tailwindcss` - Utility-first CSS

## Color Scheme

From `tailwind.config.js`:
- `kaia-dark`: #0A0A0A (background)
- `kaia-card`: rgba(255, 255, 255, 0.05) (glass cards)
- `kaia-border`: rgba(255, 255, 255, 0.1) (borders)
- `kaia-blue`: #3B82F6 (primary accent)
- `kaia-text`: #E5E7EB (text)

## Mobile Responsiveness

All components are mobile-first and responsive:
- Navigation: Compact layout
- SearchBar: Full width with proper padding
- CategorySection: Full width questions
- ChatMessage: Max width constraints
- ChartViewer: Responsive containers
- AnalysisPanel: Grid stacks on mobile (grid-cols-1 md:grid-cols-3)
- FollowUpQuestions: Horizontal scroll

## Import Example

```jsx
// Individual imports
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

// Batch import
import {
  Navigation,
  SearchBar,
  CategorySection,
  ChatMessage,
  ChartViewer,
  AnalysisPanel,
  FollowUpQuestions,
  LoadingIndicator
} from './components';
```

---

**Created:** November 26, 2025
**Project:** K.A.I.A Perplexity Demo
**Framework:** React 19 + Vite + Tailwind CSS
