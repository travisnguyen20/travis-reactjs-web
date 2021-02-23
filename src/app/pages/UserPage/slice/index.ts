import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userPageSaga } from './saga';
import { UserPageState } from './types';
import { User } from 'types/User';
import { Paginate } from 'types/Paginate';

export const initialState: UserPageState = {
  users: [],
};

const slice = createSlice({
  name: 'userPage',
  initialState,
  reducers: {
    fetchUsers(state, action: PayloadAction<Paginate>) {},
    fetchUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
      state.users = action.payload.users;
    },
    fetchUsersFail(state) {},
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
