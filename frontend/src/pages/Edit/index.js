import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { MdEdit } from 'react-icons/md';
import { Container } from './styles';
import {
  meetupUpdateRequest,
  meetupCreateRequest,
} from '~/store/modules/meetup/actions';
import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

export default function Edit({ match }) {
  const meetupId = Number(match.params.meetupId);
  const dispatch = useDispatch();

  const meetup = useSelector(state =>
    state.meetup.organizing.filter(m => m.id === meetupId)
  )[0];

  function handleSubmit(data) {
    if (meetupId) dispatch(meetupUpdateRequest(meetup.id, data));
    else dispatch(meetupCreateRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />

        <DatePicker
          name="date"
          minDate={new Date()}
          locale={ptBR}
          showTimeSelect
          timeFormat="p"
          timeIntervals={60}
          dateFormat="d 'de' MMMM 'de' yyyy 'às' HH:mm"
          placeholderText="Data do meetup"
        />

        <Input name="location" placeholder="Localização" />
        <button type="submit">
          <MdEdit /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
