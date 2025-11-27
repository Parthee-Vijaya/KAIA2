import { useState, useEffect, useRef } from 'react';
import {
  Navigation,
  SearchBar,
  ChatMessage,
  LoadingIndicator,
  KeyMetricsCards,
  TrendCharts,
  QuestionsDropdown,
} from './components';
import { dashboardTrends } from './data/dashboardMetrics';
import { getAnswerByQuestionId } from './data/mockAnswers';
import { getChartById } from './data/mockCharts';
import { getAnalysisByQuestionId } from './data/mockAnalysis';
import { getFollowUpByQuestionId } from './data/mockFollowUp';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Search (show when no messages) */}
      {messages.length === 0 && (
        <div className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 border-b border-gray-200 overflow-visible">
          {/* Decorative elements - Kalundborg farver */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: '#D40000' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: '#0056A7' }}></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-16">
            {/* Hero Content */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-gray-100">
                <svg className="w-4 h-4" style={{ color: '#D40000' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">For direktion, ledelse og chefer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hvad skal du vide?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Få hurtig adgang til økonomiske data, analyser og strategiske indsigt for beslutningsstøtte
              </p>
            </div>

            {/* Search Bar - Hero Style */}
            <div className="max-w-4xl mx-auto">
              <SearchBar onSubmit={handleSearch} placeholder="Skriv dit spørgsmål her..." hero={true} />
            </div>

            {/* Questions Dropdown */}
            <div className="max-w-4xl mx-auto mt-4 relative z-50">
              <QuestionsDropdown onQuestionClick={handleQuestionClick} />
            </div>
          </div>
        </div>
      )}

      {/* Sticky Search Bar (show when in chat mode) */}
      {messages.length > 0 && (
        <div className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <SearchBar onSubmit={handleSearch} placeholder="spørg mig..." />
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {/* Dashboard (show when no messages) */}
        {messages.length === 0 && (
          <div className="space-y-10 animate-fade-in -mt-4 relative z-0">
            {/* Key Metrics Cards - Roterer automatisk hvert 20. sekund */}
            <div className="relative z-0">
              <KeyMetricsCards />
            </div>

            {/* Trends & Analyser - Fuldt bredde */}
            <div className="mt-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Trends & Analyser</h2>
                <p className="text-gray-600">Vigtige økonomiske indikatorer og udviklinger</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TrendCharts trends={{
                  populationDevelopment: dashboardTrends.populationDevelopment,
                  budgetTrend: dashboardTrends.budgetTrend,
                  departmentSpending: dashboardTrends.departmentSpending,
                }} />
                <TrendCharts trends={{
                  debtDevelopment: dashboardTrends.debtDevelopment,
                  revenueVsExpense: dashboardTrends.revenueVsExpense,
                  unemploymentTrend: dashboardTrends.unemploymentTrend,
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
        <p>K.A.I.A - Kalundborg AI Assistent</p>
        <p className="mt-2">Internt værktøj for direktion, ledelse og chefer</p>
      </footer>
    </div>
  );
}

export default App;
