// K.A.I.A Perplexity Demo - Charts Route
import express from 'express';
import { getChartById } from '../data/mockDatabase.js';

const router = express.Router();

// GET /api/charts/:chartId
// Returns specific chart data by ID
router.get('/:chartId', async (req, res) => {
  try {
    const { chartId } = req.params;
    console.log(`📊 Fetching chart: ${chartId}`);

    const chart = getChartById(chartId);

    if (!chart) {
      return res.status(404).json({
        success: false,
        error: 'Chart not found',
        chartId,
        timestamp: new Date().toISOString()
      });
    }

    res.json({
      success: true,
      data: chart,
      timestamp: new Date().toISOString()
    });

    console.log(`✅ Chart returned: ${chart.title} (${chart.type})`);

  } catch (error) {
    console.error('❌ Error fetching chart:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch chart',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
