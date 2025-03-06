'use client';

import { useState } from 'react';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { label: 'Total Projects', value: '500+' },
    { label: 'Happy Clients', value: '300+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' },
  ];

  const tabs = [
    { id: 0, label: 'Home', content: 'Home Content' },
    { id: 1, label: 'About', content: 'About Content' },
    { id: 2, label: 'Services', content: 'Services Content' },
    { id: 3, label: 'Stats', content: 'stats' },
  ];

  const StatsContent = () => (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm sm:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex flex-wrap space-x-4 sm:space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-3 sm:py-4 px-2 sm:px-4 border-b-2 font-medium text-sm
                ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content === 'stats' ? <StatsContent /> : tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs; 