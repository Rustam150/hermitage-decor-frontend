import React, { createContext, useState, useEffect } from 'react';

export const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [comparison, setComparison] = useState(() => {
    const saved = localStorage.getItem('hermitage_comparison');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('hermitage_comparison', JSON.stringify(comparison));
  }, [comparison]);

  const addToComparison = (product) => {
    setComparison(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      if (prev.length >= 4) {
        alert('Можно сравнивать не более 4 товаров');
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromComparison = (productId) => {
    setComparison(prev => prev.filter(p => p.id !== productId));
  };

  const isInComparison = (productId) => {
    return comparison.some(p => p.id === productId);
  };

  const toggleComparison = (product) => {
    if (isInComparison(product.id)) {
      removeFromComparison(product.id);
    } else {
      addToComparison(product);
    }
  };

  return (
    <ComparisonContext.Provider value={{ comparison, addToComparison, removeFromComparison, isInComparison, toggleComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};