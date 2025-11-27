import { useState, useEffect, useRef } from 'react';
import {
  Navigation,
  SearchBar,
  CategorySection,
  ChatMessage,
  LoadingIndicator,
  KeyMetricsCards,
  TrendCharts,
} from './components';
import { categories } from './data/categories';
import { dashboardMetrics, dashboardTrends } from './data/dashboardMetrics';
import { getAnswerByQuestionId } from './data/mockAnswers';
import { getChartById } from './data/mockCharts';
import { getAnalysisByQuestionId } from './data/mockAnalysis';
import { getFollowUpByQuestionId } from './data/mockFollowUp';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('budget-economy');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when new message arrives
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0 || isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  // Handle question click (from category or follow-up)
  const handleQuestionClick = async (questionIdOrText, questionText) => {
    // Determine if this is a main question (has ID) or follow-up (just text)
    const isMainQuestion = typeof questionIdOrText === 'string' && questionIdOrText.startsWith('q');
    const displayText = questionText || questionIdOrText;

    // Add user message
    const userMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: displayText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Show loading
    setIsLoading(true);

    // Simulate API delay (500ms)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get answer data (only for main questions)
    const answerData = isMainQuestion ? getAnswerByQuestionId(questionIdOrText) : null;
    const analysisData = isMainQuestion ? getAnalysisByQuestionId(questionIdOrText) : null;
    const followUpData = isMainQuestion ? getFollowUpByQuestionId(questionIdOrText)?.followUpQuestions || [] : [];

    // Get chart data if charts exist
    const chartData = answerData?.charts
      ? answerData.charts.map((chartId) => getChartById(chartId)).filter(Boolean)
      : [];

    // Create AI message
    const aiMessage = {
      id: `msg-${Date.now() + 1}`,
      role: 'ai',
      content: answerData?.answer ||
        `Dette er et opfølgende spørgsmål. I en fuld implementation ville dette spørgsmål blive behandlet af AI-systemet og give et detaljeret svar.\n\nFor at se et komplet eksempel, vælg venligst et af hovedspørgsmålene fra kategorierne.`,
      charts: chartData,
      sources: answerData?.sources || [],
      analysis: analysisData,
      followUp: followUpData,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  // Handle search bar submit
  const handleSearch = (query) => {
    if (!query.trim()) return;

    // For demo, we'll just show a generic response
    const userMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date(),
    };

    const aiMessage = {
      id: `msg-${Date.now() + 1}`,
      role: 'ai',
      content: `Jeg kan hjælpe dig med spørgsmål om:\n\n- 💰 Budget og økonomi\n- 👥 Sociale tilbud, psykiatri og målgrupper\n- 📚 Reformer, lovgivning og politiske aftaler\n- 📊 Mønsteranalyse, budgetopfølgning og prognoser\n\nVælg venligst en kategori eller klik på et specifikt spørgsmål for at få detaljeret information.`,
      followUp: [],
      timestamp: new Date(),
    };

    setMessages([userMessage, aiMessage]);
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Sticky Search Bar */}
      <div className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <SearchBar onSubmit={handleSearch} placeholder="spørg mig..." />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {/* Dashboard (show when no messages) */}
        {messages.length === 0 && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Metrics Cards */}
            <KeyMetricsCards metrics={dashboardMetrics} />

            {/* Dashboard Layout: Categories left, Trends right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Categories */}
              <div className="lg:col-span-2 space-y-4">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Kategorier</h2>
                  <p className="text-gray-600">Vælg en kategori for at stille spørgsmål</p>
                </div>
                {categories.map((category) => (
                  <CategorySection
                    key={category.id}
                    category={category}
                    isExpanded={expandedCategory === category.id}
                    onToggle={() => toggleCategory(category.id)}
                    onQuestionClick={handleQuestionClick}
                  />
                ))}
              </div>

              {/* Right: Trend Charts */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Trends & Analyser</h2>
                  <p className="text-gray-600">Vigtige økonomiske indikatorer</p>
                </div>
                <TrendCharts trends={{
                  populationDevelopment: dashboardTrends.populationDevelopment,
                  budgetTrend: dashboardTrends.budgetTrend,
                }} />
              </div>
            </div>
          </div>
        )}

        {/* Chat Messages Container */}
        {messages.length > 0 && (
          <div
            ref={chatContainerRef}
            className="space-y-8 animate-fade-in pb-8"
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onFollowUpClick={handleQuestionClick}
              />
            ))}

            {/* Loading Indicator */}
            {isLoading && <LoadingIndicator />}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Back to Categories Button (when in chat mode) */}
        {messages.length > 0 && !isLoading && (
          <div className="flex justify-center pt-8 pb-8">
            <button
              onClick={() => setMessages([])}
              className="btn-secondary flex items-center gap-2 hover:shadow-md hover:-translate-y-0.5"
            >
              <span>←</span>
              <span>Tilbage til kategorier</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-400 text-sm border-t border-gray-200 mt-8">
        <p>K.A.I.A - Kalundborg AI Assistent Demo</p>
        <p className="mt-2">Udviklet med React, Tailwind CSS og Recharts</p>
      </footer>
    </div>
  );
}

export default App;
