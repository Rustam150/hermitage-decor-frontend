export const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(price);
};

export const getDiscountPercentage = (oldPrice, newPrice) => {
  if (!oldPrice) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

export const truncateText = (text, length = 50) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'new':
      return sorted.filter(p => p.isNew);
    default:
      return sorted;
  }
};

export const filterProducts = (products, filters) => {
  return products.filter(product => {
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.priceMin && product.price < filters.priceMin) {
      return false;
    }
    if (filters.priceMax && product.price > filters.priceMax) {
      return false;
    }
    if (filters.rating && product.rating < filters.rating) {
      return false;
    }
    return true;
  });
};