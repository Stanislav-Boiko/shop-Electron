import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { fetchProducts, openModal } from "../store";
import ProductList from "../components/Product/ProductList";

function FavoritPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const favoriteIds = useSelector(state => state.favorites.items);
  const cartIds = useSelector(state => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const favoriteProducts = products.filter(product => favoriteIds.includes(product.sku));
  const isInCart = (product) => cartIds.includes(product.sku);
  const isFavorite = () => true;

  const handleAddToCart = (product) => {
    if (isInCart(product)) return;
    dispatch(openModal({
      title: "Add product to cart?",
      product: product,
      actionType: "addToCart",
      actionPayload: product.sku,
    }));
  };

  const handleRemoveFromFavorites = (product) => {
    dispatch(openModal({
      title: "Remove product from favorites?",
      product: product,
      actionType: "removeFromFavorites",
      actionPayload: product.sku,
    }));
  };

  const isEmpty = favoriteProducts.length === 0;

  return (
    <div className="container">
      <h1>Favorites</h1>
      {isEmpty ? (
        <>
          <Button classNames="violet-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
          <h1>Your favorites list is empty.</h1>
        </>
      ) : (
        <>
          <Button classNames="white-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
          <ProductList
            products={favoriteProducts}
            isInCart={isInCart}
            isFavorite={isFavorite}
            onAddToCart={handleAddToCart}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            showAddToCart={true}
            showRemoveFromFavorites={true}
          />
          <Button classNames="white-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}

export default FavoritPage;