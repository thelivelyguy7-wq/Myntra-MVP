import { useState } from 'react';
import './App.css';
import { mockProducts } from './data/mockProducts';
import Header from './components/Header';
import WishlistSingleItemView from './components/WishlistSingleItemView';
import AutoCompareView from './components/AutoCompareView';
import FinalEvidenceView from './components/FinalEvidenceView';
import { trackEvent } from './utils/analytics';

function App() {
  const [currentFlowStep, setCurrentFlowStep] = useState('SINGLE_ITEM');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleHelpMeDecide = () => {
    trackEvent('help_me_decide_clicked');
    setCurrentFlowStep('COMPARE');
  };

  const handleProductSelect = (product) => {
    trackEvent('product_selected', { productId: product.id });
    setSelectedProduct(product);
    setCurrentFlowStep('EVIDENCE');
  };

  const handleMoveToBag = (product) => {
    trackEvent('add_to_cart_clicked', { productId: product.id });
    trackEvent('purchase_completed', { productId: product.id });
    alert(`${product.name} added to bag and purchase completed!`);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        {currentFlowStep === 'SINGLE_ITEM' && (
          <WishlistSingleItemView 
            product={mockProducts[0]} 
            onHelpMeDecide={handleHelpMeDecide} 
          />
        )}
        
        {currentFlowStep === 'COMPARE' && (
          <AutoCompareView 
            items={mockProducts.slice(0, 5)} 
            onProductSelect={handleProductSelect} 
            onBack={() => setCurrentFlowStep('SINGLE_ITEM')}
          />
        )}

        {currentFlowStep === 'EVIDENCE' && selectedProduct && (
          <FinalEvidenceView 
            product={selectedProduct} 
            onMoveToBag={handleMoveToBag}
            onBack={() => setCurrentFlowStep('COMPARE')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
