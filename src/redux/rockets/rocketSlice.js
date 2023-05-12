import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocket: [],
  status: false,
  error: null,
};

export const getRockets = createAsyncThunk('rockets, getRockets', async () => {
  try {
    const response = await axios.get(url);
    const rocketData = response.data;
    return rocketData.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rocket.map((rocket) => {
        if (rocket.id === action.payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
      return { ...state, rockets };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({
        ...state,
        status: true,
      }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        rocket: action.payload,
      }));
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
