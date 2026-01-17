import CategoryHeader from './CategoryHeader';
import ProductCard from './ProductCard';

export default function CategorySection({
  id,
  icon,
  title,
  products,
  category,
  expandedCategories,
  categoryKey,
  onToggleCategory,
  onAddToCart,
  layout = 'vertical',
  gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  initialVisibleCount = 3,
  gap = 'gap-8',
  centered = false
}) {
  const isExpanded = expandedCategories[categoryKey];
  const visibleProducts = isExpanded ? products : products.slice(0, initialVisibleCount);
  const remainingCount = products.length - initialVisibleCount;

  return (
    <div className={`menu-category-anchor ${id === 'hot-dogs' ? 'pt-8' : 'mt-20'}`} id={id}>
      <CategoryHeader icon={icon} title={title} />
      <div className={`grid ${gridCols} ${gap} ${centered ? 'justify-items-center max-w-4xl mx-auto' : ''}`}>
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            category={category}
            onAddToCart={onAddToCart}
            layout={layout}
          />
        ))}
      </div>
      {!isExpanded && products.length > initialVisibleCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => onToggleCategory(categoryKey)}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <span className="material-icons">expand_more</span>
            Ver todos los {title} ({remainingCount} más)
          </button>
        </div>
      )}
    </div>
  );
}

