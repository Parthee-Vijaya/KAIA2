// K.A.I.A Perplexity Demo - Categories Route
import express from 'express';
import { getCategories } from '../data/mockDatabase.js';

const router = express.Router();

// GET /api/categories
// Returns all categories with their questions
router.get('/', async (req, res) => {
  try {
    console.log('📋 Fetching all categories...');

    const categories = getCategories();

    res.json({
      success: true,
      data: categories,
      timestamp: new Date().toISOString()
    });

    console.log(`✅ Returned ${categories.length} categories`);
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/categories/:categoryId
// Returns a specific category by ID
router.get('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log(`📋 Fetching category: ${categoryId}`);

    const categories = getCategories();
    const category = categories.find(cat => cat.id === categoryId);

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found',
        categoryId,
        timestamp: new Date().toISOString()
      });
    }

    res.json({
      success: true,
      data: category,
      timestamp: new Date().toISOString()
    });

    console.log(`✅ Returned category: ${category.title}`);
  } catch (error) {
    console.error('❌ Error fetching category:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
