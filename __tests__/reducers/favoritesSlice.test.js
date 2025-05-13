import { favoritesSlice } from 'store';

describe('favorites reducer', () => {
  it('addToFavorites додає товар', () => {
    const initialState = { items: [] };
    const nextState = favoritesSlice.reducer(initialState, favoritesSlice.actions.addToFavorites('123'));
    expect(nextState.items).toContain('123');
  });

  it('removeFromFavorites видаляє товар', () => {
    const initialState = { items: ['123'] };
    const nextState = favoritesSlice.reducer(initialState, favoritesSlice.actions.removeFromFavorites('123'));
    expect(nextState.items).not.toContain('123');
  });

  it('clearFavorites очищає список', () => {
    const initialState = { items: ['123', '456'] };
    const nextState = favoritesSlice.reducer(initialState, favoritesSlice.actions.clearFavorites());
    expect(nextState.items).toEqual([]);
  });

  it('setFavorites встановлює масив', () => {
    const initialState = { items: [] };
    const nextState = favoritesSlice.reducer(initialState, favoritesSlice.actions.setFavorites(['1', '2']));
    expect(nextState.items).toEqual(['1', '2']);
  });
});