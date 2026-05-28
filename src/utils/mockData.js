export const categories = [
  {
    id: 1,
    name: 'Мебель',
    icon: '🛋️',
    path: '/catalog/furniture',
    subcategories: [
      {
        name: 'По производству',
        items: ['Китай', 'Турция', 'Италия']
      },
      {
        name: 'По фабрикам',
        items: ['Фабрика 1', 'Фабрика 2', 'Фабрика 3']
      },
      {
        name: 'По комнатам',
        items: ['Спальня', 'Столовая', 'Кухня', 'Прихожая', 'Кабинет', 'Детская', 'Мягкая мебель', 'Гостиная']
      }
    ]
  },
  {
    id: 2,
    name: 'Посуда',
    icon: '🍽️',
    path: '/catalog/dishes',
    subcategories: [
      {
        name: 'По брендам',
        items: ['Бренд A', 'Бренд B', 'Бренд C']
      },
      {
        name: 'Типы',
        items: ['Вазы', 'Столовое', 'Приборы']
      }
    ]
  },
  {
    id: 3,
    name: 'Ароматы для дома',
    icon: '🌸',
    path: '/catalog/aromas',
    subcategories: [
      {
        name: 'По брендам',
        items: ['Аромат 1', 'Аромат 2', 'Аромат 3']
      }
    ]
  },
  {
    id: 4,
    name: 'Текстиль',
    icon: '🧵',
    path: '/catalog/textile',
    subcategories: [
      {
        name: 'По брендам',
        items: ['Текстиль A', 'Текстиль B']
      },
      {
        name: 'Типы',
        items: ['Постельные комплекты', 'Покрывала', 'Пледы']
      }
    ]
  }
];

export const products = [
  {
    id: 1,
    name: 'Диван классический',
    price: 45000,
    oldPrice: 58000,
    image: 'https://via.placeholder.com/300x300?text=Диван+1',
    category: 'Мебель',
    rating: 4.5,
    reviews: 23,
    isNew: true,
    description: 'Красивый классический диван с деревянными ножками. Удобная посадка.',
    specs: { material: 'Ткань', color: 'Бежевый', size: '200x80x85см' }
  },
  {
    id: 2,
    name: 'Кровать двуспальная',
    price: 32000,
    oldPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Кровать',
    category: 'Мебель',
    rating: 4.8,
    reviews: 45,
    isNew: false,
    description: 'Удобная двуспальная кровать с ортопедическим матрасом.',
    specs: { material: 'Дерево', color: 'Венге', size: '160x200см' }
  },
  {
    id: 3,
    name: 'Шкаф встроенный',
    price: 28000,
    oldPrice: 35000,
    image: 'https://via.placeholder.com/300x300?text=Шкаф',
    category: 'Мебель',
    rating: 4.3,
    reviews: 12,
    isNew: false,
    description: 'Встроенный шкаф с раздвижными дверями.',
    specs: { material: 'ДСП', color: 'Белый', size: '240x220x60см' }
  },
  {
    id: 4,
    name: 'Набор посуды 12 предметов',
    price: 2500,
    oldPrice: 3200,
    image: 'https://via.placeholder.com/300x300?text=Посуда',
    category: 'Посуда',
    rating: 4.6,
    reviews: 67,
    isNew: true,
    description: 'Керамический набор посуды из 12 предметов для всей семьи.',
    specs: { material: 'Керамика', color: 'Белый', pieces: 12 }
  },
  {
    id: 5,
    name: 'Ваза стеклянная',
    price: 1200,
    oldPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Ваза',
    category: 'Посуда',
    rating: 4.2,
    reviews: 18,
    isNew: false,
    description: 'Красивая прозрачная стеклянная ваза для цветов.',
    specs: { material: 'Стекло', color: 'Прозрачный', height: '30см' }
  },
  {
    id: 6,
    name: 'Диффузор ароматический',
    price: 890,
    oldPrice: 1200,
    image: 'https://via.placeholder.com/300x300?text=Аромат',
    category: 'Ароматы',
    rating: 4.7,
    reviews: 34,
    isNew: true,
    description: 'Электрический диффузор с эфирными маслами.',
    specs: { volume: '100мл', power: 'USB' }
  },
  {
    id: 7,
    name: 'Постельное белье хлопок',
    price: 3500,
    oldPrice: 4500,
    image: 'https://via.placeholder.com/300x300?text=Текстиль',
    category: 'Текстиль',
    rating: 4.9,
    reviews: 89,
    isNew: false,
    description: 'Комплект постельного белья из 100% хлопка.',
    specs: { material: 'Хлопок', pieces: 4, color: 'Белый' }
  },
  {
    id: 8,
    name: 'Плед шерстяной',
    price: 2200,
    oldPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Плед',
    category: 'Текстиль',
    rating: 4.4,
    reviews: 21,
    isNew: true,
    description: 'Мягкий шерстяной плед для уюта.',
    specs: { material: 'Шерсть', size: '150x200см', color: 'Серый' }
  },
  {
    id: 9,
    name: 'Тумбочка прикроватная',
    price: 5500,
    oldPrice: 7000,
    image: 'https://via.placeholder.com/300x300?text=Тумба',
    category: 'Мебель',
    rating: 4.5,
    reviews: 15,
    isNew: false,
    description: 'Компактная прикроватная тумбочка с ящиком.',
    specs: { material: 'Дерево', color: 'Светлый орех', drawers: 1 }
  },
  {
    id: 10,
    name: 'Зеркало напольное',
    price: 8900,
    oldPrice: 11000,
    image: 'https://via.placeholder.com/300x300?text=Зеркало',
    category: 'Мебель',
    rating: 4.6,
    reviews: 28,
    isNew: true,
    description: 'Большое напольное зеркало в деревянной раме.',
    specs: { size: '80x180см', frame: 'Дерево' }
  },
  {
    id: 11,
    name: 'Витрина стеклянная',
    price: 15000,
    oldPrice: 18000,
    image: 'https://via.placeholder.com/300x300?text=Витрина',
    category: 'Мебель',
    rating: 4.7,
    reviews: 41,
    isNew: false,
    description: 'Стеклянная витрина для коллекций и декора.',
    specs: { material: 'Стекло и дерево', shelves: 3, size: '90x200x40см' }
  },
  {
    id: 12,
    name: 'Стол обеденный',
    price: 22000,
    oldPrice: 28000,
    image: 'https://via.placeholder.com/300x300?text=Стол',
    category: 'Мебель',
    rating: 4.8,
    reviews: 56,
    isNew: true,
    description: 'Раскладной обеденный стол из дерева на 6-8 персон.',
    specs: { material: 'Дерево', color: 'Темный орех', seats: 8 }
  }
];