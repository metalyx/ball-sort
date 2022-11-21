import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ballSlice from './ball/ballSlice';


export const store = configureStore({
    reducer: {
        ball: ballSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
