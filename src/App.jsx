import { useState } from 'react';
import './App.css';
import { mockProducts } from './data/mockProducts';
import Header from './components/Header';
import WishlistSingleItemView from './components/WishlistSingleItemView';
import AutoCompareView from './components/AutoCompareView';
import FinalEvidenceView from './components/FinalEvidenceView';
import CheckoutView from './components/CheckoutView';
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
    setCurrentFlowStep('CHECKOUT');
  };

  const handlePlaceOrder = (product) => {
    trackEvent('purchase_completed', { productId: product.id });
    alert(`Order placed for ${product.name}!`);
    setCurrentFlowStep('SINGLE_ITEM');
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

        {currentFlowStep === 'CHECKOUT' && selectedProduct && (
          <CheckoutView 
            product={selectedProduct} 
            onPlaceOrder={handlePlaceOrder}
            onBack={() => setCurrentFlowStep('EVIDENCE')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
