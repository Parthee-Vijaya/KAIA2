# K.A.I.A Backend API

Backend API server for the K.A.I.A Perplexity demo application.

## Features

- RESTful API with Express.js
- Mock database with 40 questions across 4 categories
- Comprehensive answer data with charts, analysis, and follow-up questions
- ES6 modules (import/export)
- CORS enabled for frontend integration
- Request logging
- Error handling

## Project Structure

```
backend/
├── server.js              # Main Express server
├── data/
│   └── mockDatabase.js    # Centralized mock data
├── routes/
│   ├── categories.js      # GET /api/categories
│   ├── answer.js          # POST /api/answer
│   └── charts.js          # GET /api/charts/:chartId
├── test-api.js            # API test script
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Installation

```bash
cd backend
npm install
```

## Usage

### Development (with hot reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 5000 (or PORT environment variable).

## API Endpoints

### Health Check
```
GET /api/health
```

Returns server status and timestamp.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-11-26T10:30:00.000Z",
  "service": "K.A.I.A Backend API"
}
```

---

### Get All Categories
```
GET /api/categories
```

Returns all categories with their questions.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "budget-economy",
      "title": "Budget og økonomi",
      "icon": "💰",
      "description": "Spørgsmål om kommunens budget, økonomi og finansiering",
      "questions": [
        {
          "id": "q1",
          "text": "Hvad er de største budgetudfordringer...",
          "category": "budget-economy"
        }
      ]
    }
  ],
  "timestamp": "2024-11-26T10:30:00.000Z"
}
```

---

### Get Answer for Question
```
POST /api/answer
Content-Type: application/json

{
  "questionId": "q1"
}
```

Simulates AI processing (500ms delay) and returns comprehensive answer.

**Response:**
```json
{
  "success": true,
  "data": {
    "question": {
      "id": "q1",
      "text": "Hvad er de største budgetudfordringer...",
      "category": "budget-economy"
    },
    "answer": "# Største budgetudfordringer...\n\n...",
    "charts": ["budget-trend-2024", "demographic-pressure"],
    "sources": [
      "Budget 2024, Kalundborg Kommune",
      "Budgetopfølgning Q2 2024"
    ],
    "analysis": {
      "questionId": "q1",
      "statusNow": [...],
      "scenarios": [...],
      "actions": [...]
    },
    "followUp": [
      "Hvilke konkrete effektiviseringstiltag...",
      "..."
    ]
  },
  "processingTime": "500ms",
  "timestamp": "2024-11-26T10:30:00.000Z"
}
```

---

### Get Chart Data
```
GET /api/charts/:chartId
```

Returns specific chart data by ID.

**Example:**
```
GET /api/charts/budget-trend-2024
```

**Response:**
```json
{
  "success": true,
  "data": {
    "type": "line",
    "title": "Budgetudvikling 2020-2024 (DKK Millioner)",
    "data": [
      { "year": "2020", "budget": 2650, "actual": 2680 },
      { "year": "2021", "budget": 2720, "actual": 2765 }
    ],
    "config": {
      "xKey": "year",
      "lines": [
        { "dataKey": "budget", "stroke": "#8884d8", "name": "Budget" },
        { "dataKey": "actual", "stroke": "#82ca9d", "name": "Faktisk" }
      ]
    }
  },
  "timestamp": "2024-11-26T10:30:00.000Z"
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "message": "Detailed error description",
  "timestamp": "2024-11-26T10:30:00.000Z"
}
```

Common HTTP status codes:
- `400` - Bad Request (missing parameters)
- `404` - Not Found (question/chart not found)
- `500` - Internal Server Error

## Testing

Run the included test script to verify the mock database:

```bash
node test-api.js
```

This tests:
- Category retrieval
- Question lookup
- Answer generation
- Chart data
- Analysis data
- Follow-up questions

## Data Structure

The mock database includes:
- **4 categories** of questions
- **40 total questions** (10 per category)
- **Comprehensive answers** with markdown formatting
- **Chart data** compatible with Recharts
- **Analysis** with scenarios and action items
- **Follow-up questions** for deeper exploration

## CORS Configuration

CORS is enabled for all origins in development. For production, configure specific allowed origins in `server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

## Environment Variables

- `PORT` - Server port (default: 5000)

## Dependencies

- `express` - Web framework
- `cors` - CORS middleware

## License

Part of the K.A.I.A Perplexity demo project.
