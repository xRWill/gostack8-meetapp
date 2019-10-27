import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdEdit } from 'react-icons/md';

import { confirmAlert } from 'react-confirm-alert';
import {
  Container,
  Info,
  Edit,
  Cancel,
  Meetup,
  Description,
  Appointment,
} from './styles';

import { meetupCancelRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';

export default function Detail({ match }) {
  const dispatch = useDispatch();
  const meetup = useSelector(state =>
    state.meetup.organizing.filter(m => m.id === Number(match.params.meetupId))
  )[0];
  console.tron.log(meetup);
  return (
    <Container>
      {!meetup ? (
        history.push('/')
      ) : (
        <>
          <Info>
            <strong>{meetup.title}</strong>
            <div>
              {!meetup.past && (
                <>
                  <Edit
                    onClick={() => {
                      history.push(`/edit/${meetup.id}`);
                    }}
                  >
                    <MdEdit /> Editar
                  </Edit>
                  <Cancel
                    onClick={() =>
                      confirmAlert({
                        title: meetup.title,
                        message: `Cancelar este meetup ?`,
                        buttons: [
                          {
                            label: 'Sim',
                            onClick: () =>
                              dispatch(meetupCancelRequest(meetup.id)),
                          },
                          {
                            label: 'Não',
                          },
                        ],
                      })
                    }
                  >
                    <MdRemoveCircleOutline /> Cancelar
                  </Cancel>
                </>
              )}
            </div>
          </Info>
          <Meetup>
            <img src={meetup.File && meetup.File.url} alt="imagem meetup" />
            <Description>
              <div>{meetup.description}</div>
              <Appointment>
                <time>{meetup.formattedDate}</time>
                <span>{meetup.location}</span>
              </Appointment>
            </Description>
          </Meetup>
        </>
      )}
    </Container>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
