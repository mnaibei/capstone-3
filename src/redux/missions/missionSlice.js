import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get(url);
    const missionArr = Object.keys(response.data).map((key) => ({
      missionId: key,
      reserved: false,
      action: false,
      ...response.data[key],
    }));
    return missionArr;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = { ...state };
      newState.missions = newState.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return newState;
    },
    cancelMission: (state, action) => {
      const newState = { ...state };
      newState.missions = newState.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
        state.error = null;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
