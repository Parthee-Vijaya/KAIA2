import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/categories';

/**
 * QuestionsDropdown - Dropdown med alle spørgsmål fra alle kategorier
 */
const QuestionsDropdown = ({ onQuestionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Saml alle spørgsmål fra alle kategorier
  const allQuestions = categories.flatMap(category => 
    category.questions.map(q => ({ ...q, categoryTitle: category.title, categoryId: category.id }))
  );

  // Filtrer spørgsmål baseret på kategori (søgning er valgfri)
  const filteredQuestions = allQuestions.filter(question => {
    const matchesCategory = selectedCategory === 'all' || question.categoryId === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      question.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Luk dropdown når man klikker udenfor
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleQuestionClick = (questionId, questionText) => {
    onQuestionClick(questionId, questionText);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-700 font-medium">
            {isOpen ? 'Vælg et spørgsmål...' : `Se alle spørgsmål (${allQuestions.length} tilgængelige)`}
          </span>
        </div>
        <motion.svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[100] w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-[70vh] overflow-hidden"
            style={{ maxHeight: '600px' }}
          >
            {/* Filter and Search */}
            <div className="p-4 border-b border-gray-200 bg-gray-50 sticky top-0 z-20">
              {/* Category Filter */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2 font-medium">Filtrer efter kategori:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-[#0056A7] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Alle ({allQuestions.length})
                  </button>
                  {categories.map((category) => {
                    const categoryCount = allQuestions.filter(q => q.categoryId === category.id).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-[#0056A7] text-white shadow-sm'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category.title} ({categoryCount})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Search Input - Mindre prominent */}
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Søg (valgfrit)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056A7] focus:border-transparent"
                />
              </div>
            </div>

            {/* Questions List - Viser alle spørgsmål */}
            <div className="overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(70vh - 140px)', minHeight: '200px' }}>
              {filteredQuestions.length > 0 ? (
                <div className="p-2">
                  {/* Group questions by category for better organization */}
                  {selectedCategory === 'all' ? (
                    // Group by category when showing all
                    categories.map((category) => {
                      const categoryQuestions = filteredQuestions.filter(q => q.categoryId === category.id);
                      if (categoryQuestions.length === 0) return null;
                      
                      return (
                        <div key={category.id} className="mb-4">
                          <div className="px-3 py-2 bg-gray-100 rounded-lg mb-2 sticky top-0 z-5">
                            <h4 className="text-sm font-semibold text-gray-700">{category.title}</h4>
                            <p className="text-xs text-gray-500">{categoryQuestions.length} spørgsmål</p>
                          </div>
                          <div className="space-y-1">
                            {categoryQuestions.map((question, index) => (
                              <motion.button
                                key={question.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.01 }}
                                onClick={() => handleQuestionClick(question.id, question.text)}
                                className="w-full text-left px-4 py-2.5 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200 group"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0056A7] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-900 group-hover:text-[#0056A7] transition-colors leading-relaxed">
                                      {question.text}
                                    </p>
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    // Show all questions in a list when category is selected
                    <div className="space-y-1">
                      {filteredQuestions.map((question, index) => (
                        <motion.button
                          key={question.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.01 }}
                          onClick={() => handleQuestionClick(question.id, question.text)}
                          className="w-full text-left px-4 py-2.5 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0056A7] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-900 group-hover:text-[#0056A7] transition-colors leading-relaxed">
                                {question.text}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Ingen spørgsmål fundet</p>
                  <p className="text-gray-400 text-xs mt-1">Prøv at ændre søgning eller kategori</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

QuestionsDropdown.propTypes = {
  onQuestionClick: PropTypes.func.isRequired,
};

export default QuestionsDropdown;

