// K.A.I.A Perplexity Demo - Backend API Server
import express from 'express';
import cors from 'cors';
import categoriesRouter from './routes/categories.js';
import answerRouter from './routes/answer.js';
import chartsRouter from './routes/charts.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/answer', answerRouter);
app.use('/api/charts', chartsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'K.A.I.A Backend API'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`,
    availableEndpoints: [
      'GET /api/health',
      'GET /api/categories',
      'POST /api/answer',
      'GET /api/charts/:chartId'
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log('\n==============================================');
  console.log('🚀 K.A.I.A Backend API Server');
  console.log('==============================================');
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`🌐 Base URL: http://localhost:${PORT}`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET  /api/health          - Health check`);
  console.log(`   GET  /api/categories      - Get all categories with questions`);
  console.log(`   POST /api/answer          - Get AI answer for question`);
  console.log(`   GET  /api/charts/:chartId - Get specific chart data`);
  console.log('==============================================\n');
});
