import { call, put, takeLatest } from 'redux-saga/effects';
import { userPageActions as actions } from '.';
import { UserService } from '../../../../services/user.service';

function* fetchUsers(action) {
  try {
    const { page, size } = action.payload;
    const { data } = yield call([UserService, UserService.getAllUsers], {
      page,
      size,
    });
    yield put(actions.fetchUsersSuccess({ users: data.results }));
  } catch (e) {
    console.log(e);
    yield put(actions.fetchUsersFail({ error: e }));
  }
}

export function* userPageSaga() {
  yield takeLatest(actions.fetchUsers.type, fetchUsers);
}
