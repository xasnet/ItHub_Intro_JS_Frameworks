import { useDispatch, useSelector, useStore } from 'react-redux';
import {
    asyncThunkCreator,
    buildCreateSlice,
    createAsyncThunk,
    createSelector,
    type ThunkAction,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { extraArgument, store } from '@/app/store';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>;
export type ExtraArgument = typeof extraArgument;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppState;
    dispatch: AppDispatch;
    extra: ExtraArgument;
}>();

export const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});
