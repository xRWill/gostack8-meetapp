import produce from 'immer';

const INITIAL_STATE = { organizing: [] };

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_ORGANIZING_SUCCESS':
        draft.organizing = action.payload;
        break;
      case '@meetup/CREATE_SUCCESS':
        draft.organizing.push(action.payload.data);
        break;
      case '@meetup/CANCEL_SUCCESS': {
        const meetupIndex = draft.organizing.findIndex(
          m => m.id === action.payload.id
        );

        if (meetupIndex >= 0) {
          draft.organizing.splice(meetupIndex, 1);
        }
        break;
      }
      case '@meetup/UPDATE_SUCCESS': {
        const meetupIndex = draft.organizing.findIndex(
          m => m.id === action.payload.data.id
        );

        if (meetupIndex >= 0) {
          draft.organizing[meetupIndex] = action.payload.data;
        }

        break;
      }
      default:
    }
  });
}
