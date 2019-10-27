export function loadOrganizingRequest() {
  return {
    type: '@meetup/LOAD_ORGANIZING_REQUEST',
  };
}

export function loadOrganizingSuccess(data) {
  return {
    type: '@meetup/LOAD_ORGANIZING_SUCCESS',
    payload: data,
  };
}

export function loadOrganizingFailure() {
  return {
    type: '@meetup/LOAD_ORGANIZING_FAILURE',
  };
}

export function meetupCancelRequest(id) {
  return {
    type: '@meetup/CANCEL_REQUEST',
    payload: id,
  };
}

export function meetupCancelSuccess(id) {
  return {
    type: '@meetup/CANCEL_SUCCESS',
    payload: id,
  };
}

export function meetupCreateRequest(data) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { data },
  };
}

export function meetupUpdateRequest(id, data) {
  return {
    type: '@meetup/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function meetupUpdateSuccess(data) {
  return {
    type: '@meetup/UPDATE_SUCCESS',
    payload: { data },
  };
}
