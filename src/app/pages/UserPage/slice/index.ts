import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userPageSaga } from './saga';
import { UserPageState } from './types';
import { User } from '../../../../types/User';
import { Paginate } from '../../../../types/Paginate';

export const initialState: UserPageState = {
  users: [],
  error: null,
};

const slice = createSlice({
  name: 'userPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    fetchUsers(state, action: PayloadAction<Paginate>) {},
    fetchUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
      state.users = action.payload.users;
    },
    fetchUsersFail(state, action: PayloadAction<{ error: Error }>) {
      state.error = action.payload.error;
    },
  },
});

export const { actions: userPageActions } = slice;

export const useUserPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
