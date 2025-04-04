import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // Формат: { [itemId]: { item, quantity } }
    totalItems: 0, // Общее количество товаров в корзине
    totalPrice: 0, // Общая стоимость корзины
  },
  reducers: {
    addItem: (state, action) => {
      const { id, ...itemData } = action.payload;
      
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {
          item: itemData,
          quantity: 1,
        };
      }
      console.log('добавлен предмет', state.items);
      
      state.totalItems += 1;
      state.totalPrice += itemData.price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items[itemId];
      
      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.item.price * existingItem.quantity;
        
        delete state.items[itemId];
      }
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items[itemId];
      
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += existingItem.item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items[itemId];
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice -= existingItem.item.price;
        } else {
          state.totalItems -= 1;
          state.totalPrice -= existingItem.item.price;
          delete state.items[itemId];
        }
      }
    },

    clearCart: (state) => {
      state.items = {};
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { 
  addItem, 
  removeItem, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;