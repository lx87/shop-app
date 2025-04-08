import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    //format:
    // ['test']: {
    //   item: {
    //     name: 'test',
    //     price: 200
    //   },
    //   quantity: 3
    // }
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity, ...itemData } = action.payload;
      const actualQuantity = Math.max(1, quantity || 1);
      
      if (state.items[id]) {
        state.items[id].quantity += actualQuantity;
      } else {
        state.items[id] = {
          item: itemData,
          quantity: actualQuantity,
        };
      }
      
      state.totalItems += actualQuantity;
      state.totalPrice += itemData.price * actualQuantity;
      
      console.log('Добавлен предмет:', { 
        id, 
        ...itemData, 
        quantity: actualQuantity 
      });
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