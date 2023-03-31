import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  city: 'shadnagar',
  date: 'today',
  time: '78',

  type: 'saloon',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    newSearch: (state, action) => {
      const city = action.payload.destination;
      const date = action.payload.value;
      const time = action.payload.time;
      const type = action.payload.type;

      return {...state, date, city, time, type};
    },
    // removeFromBasket: (state, action) => {
    //   const index = state.items.findIndex(
    //     item => item.id === action.payload.id,
    //   );
    //   let newBasket = [...state.items];
    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   } else {
    //     return;
    //   }
    //   state.items = newBasket;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {newSearch} = searchSlice.actions;

export default searchSlice.reducer;
