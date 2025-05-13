import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, addToFavorites, openModal } from "../store";
import ProductList from "../components/Product/ProductList";
import { useViewMode } from '../context/ViewModeContext';
import ButtonContainer from '../components/Button/ButtonContainer';

function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const cartIds = useSelector(state => state.cart.items);
  const favoriteIds = useSelector(state => state.favorites.items);
  const { viewMode, setViewMode } = useViewMode();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isInCart = (product) => cartIds.includes(product.sku);
  const isFavorite = (product) => favoriteIds.includes(product.sku);

  const handleAddToCart = (product) => {
    if (isInCart(product)) return;
    dispatch(openModal({
      title: "Add product to cart?",
      product: product,
      actionType: "addToCart",
      actionPayload: product.sku,
    }));
  };

  const handleAddToFavorites = (product) => {
    if (isFavorite(product)) return;
    dispatch(addToFavorites(product.sku));
  };

  return (
    <div className="container">
      <h1>Shop</h1>
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonContainer
          firstText="Cards"
          firstClassNames={viewMode === 'cards' ? 'violet-btn' : 'white-btn'}
          firstClick={() => setViewMode('cards')}
          secondaryText="Table"
          secondaryClassNames={viewMode === 'table' ? 'violet-btn' : 'white-btn'}
          secondaryClick={() => setViewMode('table')}
        />
      </div>
      <ProductList
        products={products}
        isInCart={isInCart}
        isFavorite={isFavorite}
        onAddToCart={handleAddToCart}
        onAddToFavorites={handleAddToFavorites}
        showAddToCart={true}
        viewMode={viewMode}
      />
    </div>
  );
}

export default ShopPage;