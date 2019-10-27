import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { Container, Info, MeetupList, Meetup } from './styles';
import { loadOrganizingRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';

export default function Dashboard() {
  const dispatch = useDispatch();
  const organizing = useSelector(state => state.meetup.organizing);

  useEffect(() => {
    dispatch(loadOrganizingRequest());
  }, [dispatch]);

  return (
    <Container>
      <Info>
        <strong>Meus meetups</strong>
        <button type="button" onClick={() => history.push('/create')}>
          <MdAddCircleOutline /> Novo meetup
        </button>
      </Info>
      <MeetupList>
        {organizing.map(meetup => (
          <Meetup to={`/detail/${meetup.id}`} key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <time>{meetup.formattedDate}</time>
              <MdChevronRight size={20} color="#fff" />
            </div>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
