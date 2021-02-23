import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.userPage || initialState;

export const selectUserPage = createSelector([selectSlice], state => state);

export const selectUsers = createSelector([selectSlice], state => state.users);
