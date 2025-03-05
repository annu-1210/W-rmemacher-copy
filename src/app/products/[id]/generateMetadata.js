export async function generateMetadata({ params }) {
  const productName = params.id.replace(/-/g, " ");
  
  return {
    title: `${productName} | Wärmemacher`,
    description: `Discover our ${productName} - Premium quality product with advanced features and specifications.`,
    openGraph: {
      title: `${productName} | Wärmemacher`,
      description: `Discover our ${productName} - Premium quality product with advanced features and specifications.`,
      type: 'product',
      images: ['/product-image.jpg'],
    },
  };
} 