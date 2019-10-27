import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = {
      name,
      email,

      ...(rest.oldPassword ? rest : {}),
    };

    console.tron.log({
      name,
      email,

      ...(rest.oldPassword ? rest : {}),
    });
    const response = yield call(api.put, 'users', profile);
    console.tron.log(response);
    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    toast.error('Erro ao atualizar perfil!');
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
