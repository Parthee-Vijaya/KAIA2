// Quick API test script
import {
  getCategories,
  getQuestionById,
  getAnswerByQuestionId,
  getChartById,
  getAnalysisByQuestionId,
  getFollowUpByQuestionId
} from './data/mockDatabase.js';

console.log('\n🧪 Testing K.A.I.A Backend Mock Database\n');

// Test 1: Get all categories
console.log('Test 1: Get all categories');
const categories = getCategories();
console.log(`✅ Found ${categories.length} categories`);
console.log(`   Categories: ${categories.map(c => c.title).join(', ')}\n`);

// Test 2: Get a specific question
console.log('Test 2: Get question by ID');
const question = getQuestionById('q1');
if (question) {
  console.log(`✅ Found question: "${question.text}"`);
  console.log(`   Category: ${question.category}\n`);
} else {
  console.log('❌ Question not found\n');
}

// Test 3: Get answer for question
console.log('Test 3: Get answer for question');
const answer = getAnswerByQuestionId('q1');
if (answer) {
  console.log(`✅ Found answer for ${answer.questionId}`);
  console.log(`   Answer length: ${answer.answer.length} characters`);
  console.log(`   Charts: ${answer.charts?.length || 0}`);
  console.log(`   Sources: ${answer.sources?.length || 0}\n`);
} else {
  console.log('❌ Answer not found\n');
}

// Test 4: Get chart
console.log('Test 4: Get chart data');
const chart = getChartById('budget-trend-2024');
if (chart) {
  console.log(`✅ Found chart: "${chart.title}"`);
  console.log(`   Type: ${chart.type}`);
  console.log(`   Data points: ${chart.data.length}\n`);
} else {
  console.log('❌ Chart not found\n');
}

// Test 5: Get analysis
console.log('Test 5: Get analysis');
const analysis = getAnalysisByQuestionId('q1');
if (analysis) {
  console.log(`✅ Found analysis for ${analysis.questionId}`);
  console.log(`   Status points: ${analysis.statusNow.length}`);
  console.log(`   Scenarios: ${analysis.scenarios.length}`);
  console.log(`   Actions: ${analysis.actions.length}\n`);
} else {
  console.log('❌ Analysis not found\n');
}

// Test 6: Get follow-up questions
console.log('Test 6: Get follow-up questions');
const followUp = getFollowUpByQuestionId('q1');
if (followUp) {
  console.log(`✅ Found follow-up for ${followUp.questionId}`);
  console.log(`   Follow-up questions: ${followUp.followUpQuestions.length}\n`);
} else {
  console.log('❌ Follow-up not found\n');
}

console.log('✅ All tests completed successfully!\n');
