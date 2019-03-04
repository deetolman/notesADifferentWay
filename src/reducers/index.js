import { UPDATE_TITLE } from "../actions/notesAction";

const initialState = {
  title: 'My Title',
  subtitle: 'My Subtitle'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_TITLE:
      return { ...state, title: payload };
    default:
      return state;
  }
}