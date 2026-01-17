import { hotDogs } from './hotDogs';
import { burgers } from './burgers';
import { sandwiches } from './sandwiches';
import { chorrillanas } from './chorrillanas';
import { sides } from './sides';
import { drinks } from './drinks';
import { breakfasts } from './breakfasts';
import { kidsMenu } from './kidsMenu';

export const getAllProductsForOrder = () => {
  return [
    ...hotDogs.map(item => ({
      id: `hd${item.id}`,
      category: 'Completos',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    
    ...burgers.map(item => ({
      id: `bg${item.id}`,
      category: 'Burgers',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    ...sandwiches.map(item => ({
      id: `sw${item.id}`,
      category: 'Sandwiches',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    ...chorrillanas.map(item => ({
      id: `ch${item.id}`,
      category: 'Chorrillanas',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    ...sides.map(item => ({
      id: `sd${item.id}`,
      category: 'Sides',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    ...drinks.map(item => ({
      id: `dr${item.id}`,
      category: 'Bebidas',
      name: item.name,
      price: item.price,
    })),
    ...breakfasts.map(item => ({
      id: `bf${item.id}`,
      category: 'Desayunos',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
    ...kidsMenu.map(item => ({
      id: `km${item.id}`,
      category: 'Menú Kids',
      name: item.name,
      price: item.price,
      image: item.image,
    })),
  ];
};
