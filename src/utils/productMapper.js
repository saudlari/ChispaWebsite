export function mapProductToCart(product, category) {
  const categoryPrefixes = {
    'Hot Dogs': 'hd',
    'Burgers': 'bg',
    'Sandwiches': 'sw',
    'Chorrillanas': 'ch',
    'Sides': 'sd',
    'Bebidas': 'dr',
    'Desayunos': 'bf',
    'Menú Kids': 'km',
    'Combos': 'cm',
  };

  const prefix = categoryPrefixes[category] || '';
  const id = `${prefix}${product.id}`;

  return {
    id,
    category,
    name: product.name,
    price: product.price,
    image: product.image,
  };
}

export function findProductById(productId, category) {
  const { hotDogs, burgers, sides, drinks, combos } = require('../data/products');
  
  const allProducts = [
    ...hotDogs.map(p => ({ ...p, category: 'Hot Dogs' })),
    ...burgers.map(p => ({ ...p, category: 'Burgers' })),
    ...sides.map(p => ({ ...p, category: 'Sides' })),
    ...drinks.map(p => ({ ...p, category: 'Bebidas' })),
    ...combos.map(p => ({ ...p, category: 'Combos' })),
  ];

  if (productId.startsWith('hd') || productId.startsWith('bg') || 
      productId.startsWith('sd') || productId.startsWith('dr') || 
      productId.startsWith('cm')) {
    const prefix = productId.substring(0, 2);
    const numId = parseInt(productId.substring(2));
    const categoryMap = {
      'hd': 'Hot Dogs',
      'bg': 'Burgers',
      'sd': 'Sides',
      'dr': 'Bebidas',
      'cm': 'Combos',
    };
    const product = allProducts.find(p => p.category === categoryMap[prefix] && p.id === numId);
    return product ? mapProductToCart(product, categoryMap[prefix]) : null;
  }

  const numId = parseInt(productId);
  const product = allProducts.find(p => p.category === category && p.id === numId);
  return product ? mapProductToCart(product, category) : null;
}

