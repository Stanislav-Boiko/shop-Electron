import { cartSlice } from 'store';

describe('cart reducer', () => {
  it('addToCart додає товар', () => {
    const initialState = { items: [] };
    const nextState = cartSlice.reducer(initialState, cartSlice.actions.addToCart('123'));
    expect(nextState.items).toContain('123');
  });

  it('removeFromCart видаляє товар', () => {
    const initialState = { items: ['123'] };
    const nextState = cartSlice.reducer(initialState, cartSlice.actions.removeFromCart('123'));
    expect(nextState.items).not.toContain('123');
  });

  it('clearCart очищає корзину', () => {
    const initialState = { items: ['123', '456'] };
    const nextState = cartSlice.reducer(initialState, cartSlice.actions.clearCart());
    expect(nextState.items).toEqual([]);
  });

  it('setCart встановлює масив', () => {
    const initialState = { items: [] };
    const nextState = cartSlice.reducer(initialState, cartSlice.actions.setCart(['1', '2']));
    expect(nextState.items).toEqual(['1', '2']);
  });
});