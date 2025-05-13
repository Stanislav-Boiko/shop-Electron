import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { fetchProducts, removeFromCart, addToFavorites, openModal, clearCart } from "../store";
import CheckoutForm from "../components/Cart/CheckoutForm";
import ProductList from "../components/Product/ProductList";

function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const cartIds = useSelector(state => state.cart.items);
  const favoriteIds = useSelector(state => state.favorites.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const cartProducts = products.filter(product => cartIds.includes(product.sku));
  const isInCart = () => true;
  const isFavorite = (product) => favoriteIds.includes(product.sku);

  const handleRemoveFromCart = (product) => {
    dispatch(openModal({
      title: "Remove product from cart?",
      product: product,
      actionType: "removeFromCart",
      actionPayload: product.sku,
    }));
  };

  const handleAddToFavorites = (product) => {
    if (isFavorite(product)) return;
    dispatch(addToFavorites(product.sku));
  };

  const isEmpty = cartProducts.length === 0;

  const handleCheckout = (values, { resetForm }) => {
    console.log("Checkout info:", values);
    console.log("Products:", cartProducts);
    dispatch(clearCart());
    resetForm();
    alert("Order placed successfully!");
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      {isEmpty ? (
        <>
          <Button classNames="violet-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
          <h1>Your cart is empty.</h1>
        </>
      ) : (
        <>
          <Button classNames="white-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
          <ProductList
            products={cartProducts}
            isInCart={isInCart}
            isFavorite={isFavorite}
            onAddToFavorites={handleAddToFavorites}
            onRemoveFromCart={handleRemoveFromCart}
            showAddToCart={false}
            showRemoveFromCart={true}
          />
          <Button classNames="white-btn">
            <Link to="/shop" className="link__to-shop">
              Go to Shop
            </Link>
          </Button>
          <CheckoutForm onSubmit={handleCheckout} />
        </>
      )}
    </div>
  );
}

export default CartPage;