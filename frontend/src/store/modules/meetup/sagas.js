import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import api from '~/services/api';
import {
  loadOrganizingFailure,
  loadOrganizingSuccess,
  meetupCancelSuccess,
  meetupUpdateSuccess,
} from './actions';
import history from '~/services/history';

function* loadOrganizing() {
  try {
    const response = yield call(api.get, 'organizing');

    const data = response.data.map(meetup => ({
      ...meetup,
      formattedDate: format(
        parseISO(meetup.date),
        "dd 'de' MMMM', às ' H:mm'h",
        {
          locale: ptBR,
        }
      ),
    }));

    yield put(loadOrganizingSuccess(data));
  } catch (err) {
    toast.error('Falha no carregamento dos meetups.');
    yield put(loadOrganizingFailure());
  }
}

function* meetupCancel({ payload: id }) {
  try {
    const response = yield call(api.delete, `meetups/${id}`);
    console.tron.log('id cancelamento', response);

    yield put(meetupCancelSuccess(id));
    history.push('/');
  } catch (err) {
    toast.error('Falha ao cancelar meetup.');
    // yield put(meetupCancelFailure());
  }
}

function* meetupCreate({ payload }) {
  try {
    console.tron.log(payload.data);
    const response = yield call(api.post, `meetups`, payload.data);
    console.tron.log(response);
    const data = {
      ...response.data,
      formattedDate: format(
        parseISO(response.data.date),
        "dd 'de' MMMM', às ' H:mm'h",
        {
          locale: ptBR,
        }
      ),
    };

    yield put(meetupUpdateSuccess(data));
    toast.success('Meetup criado.');
    history.push(`/detail/${payload.id}`);
  } catch (err) {
    toast.error('Falha ao criar meetup.');
    // yield put(meetupCancelFailure());
  }
}

function* meetupUpdate({ payload }) {
  try {
    console.tron.log(payload);
    const response = yield call(api.put, `meetups/${payload.id}`, payload.data);

    const data = {
      ...response.data,
      formattedDate: format(
        parseISO(response.data.date),
        "dd 'de' MMMM', às ' H:mm'h",
        {
          locale: ptBR,
        }
      ),
    };

    console.tron.log(data);
    yield put(meetupUpdateSuccess(data));
    toast.success('Meetup atualizado.');
    history.push(`/detail/${payload.id}`);
  } catch (err) {
    toast.error('Falha ao atualizar meetup.');
    // yield put(meetupCancelFailure());
  }
}

export default all([
  takeLatest('@meetup/LOAD_ORGANIZING_REQUEST', loadOrganizing),
  takeLatest('@meetup/CANCEL_REQUEST', meetupCancel),
  takeLatest('@meetup/CREATE_REQUEST', meetupCreate),
  takeLatest('@meetup/UPDATE_REQUEST', meetupUpdate),
]);
