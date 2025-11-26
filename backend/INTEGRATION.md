# Backend Integration Guide

Quick guide for connecting the frontend to this backend API.

## Quick Start

### 1. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```

Server runs on: `http://localhost:5000`

### 2. Update Frontend API Configuration

In your frontend, update the API base URL:

```javascript
// frontend/src/config/api.js (or similar)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
  getCategories: () => fetch(`${API_BASE_URL}/categories`).then(r => r.json()),

  getAnswer: (questionId) => fetch(`${API_BASE_URL}/answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId })
  }).then(r => r.json()),

  getChart: (chartId) => fetch(`${API_BASE_URL}/charts/${chartId}`).then(r => r.json())
};
```

## Frontend Integration Examples

### Fetching Categories

```javascript
// Replace your local import with API call
// Before:
// import { categories } from '../data/categories';

// After:
const [categories, setCategories] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/api/categories')
    .then(res => res.json())
    .then(data => setCategories(data.data))
    .catch(err => console.error('Error fetching categories:', err));
}, []);
```

### Getting an Answer

```javascript
const handleQuestionSelect = async (questionId) => {
  setLoading(true);

  try {
    const response = await fetch('http://localhost:5000/api/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId })
    });

    const result = await response.json();

    if (result.success) {
      setAnswer(result.data.answer);
      setCharts(result.data.charts);
      setAnalysis(result.data.analysis);
      setFollowUp(result.data.followUp);
    }
  } catch (error) {
    console.error('Error fetching answer:', error);
  } finally {
    setLoading(false);
  }
};
```

### Fetching Chart Data

```javascript
const fetchChartData = async (chartId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/charts/${chartId}`);
    const result = await response.json();

    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error('Error fetching chart:', error);
  }
};
```

## Testing the Integration

### 1. Test with cURL

```bash
# Test categories endpoint
curl http://localhost:5000/api/categories

# Test answer endpoint
curl -X POST http://localhost:5000/api/answer \
  -H "Content-Type: application/json" \
  -d '{"questionId": "q1"}'

# Test chart endpoint
curl http://localhost:5000/api/charts/budget-trend-2024
```

### 2. Test with Frontend

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev`
3. Navigate to the application
4. Select a question and verify data loads

## Environment Variables

### Backend (.env)
```
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## CORS Configuration

The backend has CORS enabled for all origins in development. For production:

```javascript
// backend/server.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
```

## Error Handling

All API responses follow this structure:

```javascript
// Success
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-11-26T10:30:00.000Z"
}

// Error
{
  "success": false,
  "error": "Error message",
  "message": "Detailed description",
  "timestamp": "2024-11-26T10:30:00.000Z"
}
```

Frontend error handling example:

```javascript
try {
  const response = await fetch(url, options);
  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || 'Unknown error');
  }

  return result.data;
} catch (error) {
  console.error('API Error:', error);
  // Show user-friendly error message
  setError('Could not load data. Please try again.');
}
```

## Development Workflow

### Option 1: Both Running Separately
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

### Option 2: Using Concurrently (from root)
```bash
# Root package.json can have:
"scripts": {
  "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
  "dev:backend": "cd backend && npm run dev",
  "dev:frontend": "cd frontend && npm run dev"
}
```

## API Response Times

- `/api/categories` - Instant (< 10ms)
- `/api/answer` - 500ms (simulated AI delay)
- `/api/charts/:chartId` - Instant (< 10ms)

## Next Steps

1. Replace frontend data imports with API calls
2. Add loading states during API calls
3. Implement error handling and retry logic
4. Add request caching if needed
5. Configure production URLs

## Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**CORS errors:**
- Verify backend CORS is enabled
- Check frontend is using correct API URL
- Ensure both servers are running

**Data not loading:**
- Check browser console for errors
- Verify backend server is running
- Test endpoints with cURL
- Check network tab in DevTools
