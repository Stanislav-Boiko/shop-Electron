import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронний thunk для завантаження продуктів
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("/products.json");
    return await response.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // масив id продуктів
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(id => id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // масив id продуктів
  },
  reducers: {
    setFavorites: (state, action) => {
      state.items = action.payload;
    },
    addToFavorites: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(id => id !== action.payload);
    },
    clearFavorites: (state) => {
      state.items = [];
    }
  }
});

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    title: "",
    text: "",
    footerProps: {},
    children: null,
  },
  reducers: {
    openModal: (state, action) => {
      return { ...state, ...action.payload, isOpen: true };
    },
    closeModal: (state) => {
      return { ...state, isOpen: false };
    },
  },
});



export const { setCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { setFavorites, addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export const { openModal, closeModal } = modalSlice.actions;

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});