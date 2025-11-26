// K.A.I.A Perplexity Demo - Answer Route
import express from 'express';
import {
  getQuestionById,
  getAnswerByQuestionId,
  getAnalysisByQuestionId,
  getFollowUpByQuestionId
} from '../data/mockDatabase.js';

const router = express.Router();

// POST /api/answer
// Simulates AI processing and returns comprehensive answer
router.post('/', async (req, res) => {
  try {
    const { questionId } = req.body;

    // Validation
    if (!questionId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: questionId',
        timestamp: new Date().toISOString()
      });
    }

    console.log(`🤖 Processing question: ${questionId}`);

    // Check if question exists
    const question = getQuestionById(questionId);
    if (!question) {
      return res.status(404).json({
        success: false,
        error: 'Question not found',
        questionId,
        timestamp: new Date().toISOString()
      });
    }

    console.log(`   Question: "${question.text}"`);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Fetch all related data
    const answer = getAnswerByQuestionId(questionId);
    const analysis = getAnalysisByQuestionId(questionId);
    const followUp = getFollowUpByQuestionId(questionId);

    if (!answer) {
      return res.status(404).json({
        success: false,
        error: 'Answer not available for this question',
        questionId,
        timestamp: new Date().toISOString()
      });
    }

    // Build response
    const response = {
      success: true,
      data: {
        question: {
          id: question.id,
          text: question.text,
          category: question.category
        },
        answer: answer.answer,
        charts: answer.charts || [],
        sources: answer.sources || [],
        analysis: analysis || null,
        followUp: followUp?.followUpQuestions || []
      },
      processingTime: '500ms',
      timestamp: new Date().toISOString()
    };

    res.json(response);

    console.log(`✅ Answer returned for ${questionId}`);
    console.log(`   Charts: ${answer.charts?.length || 0}`);
    console.log(`   Sources: ${answer.sources?.length || 0}`);
    console.log(`   Follow-ups: ${followUp?.followUpQuestions?.length || 0}`);

  } catch (error) {
    console.error('❌ Error processing answer:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process answer',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
